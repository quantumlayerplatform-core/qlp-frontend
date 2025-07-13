// This is a script to help download the fonts.
// You can run this with: node app/update.js

const fs = require('fs');
const path = require('path');
const https = require('https');

const SORA_FONT_URLS = [
  { 
    url: 'https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdSn2-KIwNhCA.woff2',
    filename: 'Sora-Regular.woff2',
    weight: 400
  },
  { 
    url: 'https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdSnz-KIwNhCA.woff2',
    filename: 'Sora-Medium.woff2',
    weight: 500
  },
  { 
    url: 'https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdSnx-KIwNhCA.woff2',
    filename: 'Sora-SemiBold.woff2',
    weight: 600
  },
  { 
    url: 'https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdSn0SKIwNhCA.woff2',
    filename: 'Sora-Bold.woff2',
    weight: 700
  },
  { 
    url: 'https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdSn3mKIwNhCA.woff2',
    filename: 'Sora-ExtraBold.woff2',
    weight: 800
  }
];

const fontsDir = path.join(process.cwd(), 'public', 'fonts');

// Ensure the fonts directory exists
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Download function
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(destPath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all fonts
async function downloadFonts() {
  console.log('Starting font downloads...');
  
  for (const font of SORA_FONT_URLS) {
    const destPath = path.join(fontsDir, font.filename);
    await downloadFile(font.url, destPath);
  }
  
  console.log('All fonts downloaded successfully!');
}

downloadFonts().catch(err => {
  console.error('Error in download process:', err);
  process.exit(1);
});
