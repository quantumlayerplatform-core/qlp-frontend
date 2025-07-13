/**
 * Utility script to export QuantumLayer architecture diagrams in various formats
 * 
 * Usage: 
 * 1. Run this script after building the site
 * 2. Open the site in a browser and navigate to /export-diagrams
 * 3. The diagrams will be exported to the public/exports directory
 */

const fs = require('fs');
const path = require('path');

// Create exports directory if it doesn't exist
const EXPORTS_DIR = path.join(process.cwd(), 'public', 'exports');
if (!fs.existsSync(EXPORTS_DIR)) {
  fs.mkdirSync(EXPORTS_DIR, { recursive: true });
}

/**
 * Export architecture diagram in various formats
 * This function is intended to be called from the browser using 
 * the canvas elements rendered on the page
 */
export const exportArchitectureDiagrams = () => {
  // This function should be called from the browser
  if (typeof window === 'undefined') return;
  
  try {
    // Find the canvas elements
    const architectureCanvas = document.getElementById('architecture-canvas');
    const valueFlowCanvas = document.getElementById('value-flow-canvas');
    
    if (!architectureCanvas || !valueFlowCanvas) {
      console.error('Canvas elements not found');
      return;
    }
    
    // Export PNG
    exportCanvasAsPNG(architectureCanvas, 'quantum-architecture');
    exportCanvasAsPNG(valueFlowCanvas, 'quantum-value-flow');
    
    // Export SVG (approximate conversion from canvas)
    // Note: For a perfect SVG, you'd want to recreate the drawing commands directly as SVG
    exportCanvasAsSVG(architectureCanvas, 'quantum-architecture');
    exportCanvasAsSVG(valueFlowCanvas, 'quantum-value-flow');
    
    // Create light mode variants
    exportLightModeVariant(architectureCanvas, 'quantum-architecture-light');
    exportLightModeVariant(valueFlowCanvas, 'quantum-value-flow-light');
    
    console.log('Diagrams exported successfully!');
  } catch (error) {
    console.error('Error exporting diagrams:', error);
  }
};

/**
 * Export canvas as PNG
 */
const exportCanvasAsPNG = (canvas, filename) => {
  try {
    // Create a download link
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    
    // Convert canvas to blob
    canvas.toBlob(blob => {
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    }, 'image/png');
    
    console.log(`Exported ${filename}.png`);
  } catch (error) {
    console.error(`Error exporting ${filename}.png:`, error);
  }
};

/**
 * Export canvas as SVG
 * Note: This is an approximation since canvas doesn't directly export to SVG
 */
const exportCanvasAsSVG = (canvas, filename) => {
  try {
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // Create SVG with embedded image
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', canvas.width);
    svg.setAttribute('height', canvas.height);
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
    // Create a background rect
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', canvas.width);
    rect.setAttribute('height', canvas.height);
    rect.setAttribute('fill', '#0c0920');
    svg.appendChild(rect);
    
    // Convert canvas to data URL and embed as image
    const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    img.setAttribute('width', canvas.width);
    img.setAttribute('height', canvas.height);
    img.setAttribute('href', canvas.toDataURL('image/png'));
    svg.appendChild(img);
    
    // Create serialized SVG
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    
    // Create download link
    const link = document.createElement('a');
    link.download = `${filename}.svg`;
    link.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);
    link.click();
    
    console.log(`Exported ${filename}.svg`);
  } catch (error) {
    console.error(`Error exporting ${filename}.svg:`, error);
  }
};

/**
 * Export light mode variant of the diagram
 */
const exportLightModeVariant = (canvas, filename) => {
  try {
    // Create a new canvas for light mode variant
    const lightCanvas = document.createElement('canvas');
    lightCanvas.width = canvas.width;
    lightCanvas.height = canvas.height;
    const ctx = lightCanvas.getContext('2d');
    
    // Draw the original canvas
    ctx.drawImage(canvas, 0, 0);
    
    // Invert colors
    const imgData = ctx.getImageData(0, 0, lightCanvas.width, lightCanvas.height);
    const data = imgData.data;
    
    // Color mapping for light mode
    for (let i = 0; i < data.length; i += 4) {
      // Dark background to light
      if (data[i] < 30 && data[i+1] < 30 && data[i+2] < 60) {
        data[i] = 245; // R
        data[i+1] = 247; // G
        data[i+2] = 250; // B
      }
      
      // Purple to deeper purple
      else if (data[i] > 100 && data[i+1] < 50 && data[i+2] > 200) {
        data[i] = 70; // R
        data[i+1] = 10; // G
        data[i+2] = 170; // B
      }
      
      // Cyan to darker cyan
      else if (data[i] < 50 && data[i+1] > 200 && data[i+2] > 150) {
        data[i] = 0; // R
        data[i+1] = 150; // G
        data[i+2] = 136; // B
      }
      
      // White text to dark text
      else if (data[i] > 240 && data[i+1] > 240 && data[i+2] > 240) {
        data[i] = 30; // R
        data[i+1] = 30; // G
        data[i+2] = 30; // B
      }
    }
    
    ctx.putImageData(imgData, 0, 0);
    
    // Export as PNG
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    lightCanvas.toBlob(blob => {
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    }, 'image/png');
    
    console.log(`Exported ${filename}.png`);
  } catch (error) {
    console.error(`Error exporting ${filename}.png:`, error);
  }
};

// Export function for use in browser
if (typeof window !== 'undefined') {
  window.exportArchitectureDiagrams = exportArchitectureDiagrams;
}