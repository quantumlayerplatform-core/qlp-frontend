"use client";
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Component descriptions with proper structure
const componentData = {
  "userInterface": {
    title: "User Interface Layer",
    description: "The entry points for interacting with the QuantumLayer platform.",
    components: [
      {
        id: "webapp",
        name: "Web App",
        description: "Browser-based interface for interacting with the platform."
      },
      {
        id: "api-interface",
        name: "API",
        description: "Programmatic interface for developers to integrate with the platform."
      },
      {
        id: "cli",
        name: "CLI",
        description: "Command-line tool for workflow management and automation."
      },
      {
        id: "sdk",
        name: "SDK",
        description: "Software Development Kit for custom integrations and extensions."
      }
    ]
  },
  "apiGateway": {
    id: "api",
    title: "Secure API Gateway",
    description: "Manages authentication, rate limiting, and secure access to the platform's capabilities."
  },
  "coreServices": {
    title: "Core Services",
    description: "The central components powering QuantumLayer's orchestration capabilities.",
    components: [
      {
        id: "nlp",
        name: "Natural Language Processor",
        description: "Analyzes and interprets user input to determine intent and extract key parameters for workflow generation.",
        isPrimary: true
      },
      {
        id: "registry",
        name: "Agent Registry",
        description: "Maintains a directory of available specialized agents with their capabilities, requirements, and performance metrics."
      },
      {
        id: "orchestrator",
        name: "Task Orchestrator",
        description: "Coordinates the execution of complex workflows by managing agent communication, sequencing, and resource allocation.",
        isPrimary: true
      },
      {
        id: "memory",
        name: "Neural Memory",
        description: "Persistent storage system that enables context retention across tasks and provides a knowledge base for agents."
      },
      {
        id: "validation",
        name: "Validation Framework",
        description: "Ensures output quality through automated testing, hallucination detection, and result verification processes."
      }
    ]
  },
  "messageBus": {
    id: "eventbus",
    title: "Event-Driven Message Bus",
    description: "Asynchronous messaging system enabling decoupled communication between components."
  },
  "agentInfrastructure": {
    title: "Agent Infrastructure",
    description: "The foundation for deploying and running AI agents securely and efficiently.",
    components: [
      {
        id: "container",
        name: "Container Orchestration",
        description: "Manages the deployment, scaling, and operation of agent containers in a distributed environment."
      },
      {
        id: "runtime",
        name: "Execution Runtime",
        description: "Provides the computational environment for agent execution with necessary libraries and dependencies."
      },
      {
        id: "vector",
        name: "Vector Database",
        description: "Specialized storage for embedding vectors enabling semantic search and similarity matching capabilities."
      },
      {
        id: "models",
        name: "Model Registry",
        description: "Central repository for managing AI model versions, metadata, and deployment configurations."
      }
    ]
  }
};

// Connections between layers
const connections = [
  { from: "userInterface", to: "apiGateway", id: "conn-1" },
  { from: "apiGateway", to: "coreServices", id: "conn-2" },
  { from: "coreServices", to: "messageBus", id: "conn-3" },
  { from: "messageBus", to: "agentInfrastructure", id: "conn-4" }
];

// Helper to determine if we're on a touch device
const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);
  
  useEffect(() => {
    const detectTouch = () => {
      setIsTouch(true);
      window.removeEventListener('touchstart', detectTouch);
    };
    
    window.addEventListener('touchstart', detectTouch);
    
    return () => {
      window.removeEventListener('touchstart', detectTouch);
    };
  }, []);
  
  return isTouch;
};

// Main Architecture Diagram component
const EnhancedArchDiagram = () => {
  const containerRef = useRef(null);
  const [activeComponent, setActiveComponent] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [containerRect, setContainerRect] = useState(null);
  const isTouch = useIsTouchDevice();
  
  // Track if we're in keyboard navigation mode
  const [keyboardMode, setKeyboardMode] = useState(false);
  
  // For screen readers to announce the active component
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    setIsMounted(true);
    
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
      
      // Update container dimensions on resize
      const handleResize = () => {
        setContainerRect(containerRef.current.getBoundingClientRect());
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // 3D tilt effect (only on non-touch devices)
  useEffect(() => {
    if (!isTouch && containerRef.current) {
      const container = containerRef.current;
      
      const handleMouseMove = (e) => {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        // Calculate rotation based on mouse position (limited rotation range)
        const rotateX = ((y - height / 2) / height) * -3; // -3 to 3 degrees (reduced for subtlety)
        const rotateY = ((x - width / 2) / width) * 3;
        
        container.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      const handleMouseLeave = () => {
        container.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      };
      
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isTouch]);

  // Add keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Detect if user is using keyboard navigation
      if (e.key === 'Tab') {
        setKeyboardMode(true);
      }
      
      // ESC key closes active tooltip
      if (e.key === 'Escape' && activeComponent) {
        setActiveComponent(null);
        setAnnouncement('Component details closed');
      }
    };
    
    // If mouse is used, turn off keyboard mode
    const handleMouseMove = () => {
      if (keyboardMode) {
        setKeyboardMode(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeComponent, keyboardMode]);

  // Update screen reader announcement when active component changes
  useEffect(() => {
    if (activeComponent) {
      // Find the component data by ID
      const findComponentInfo = () => {
        for (const section of Object.values(componentData)) {
          if (section.id === activeComponent) {
            return { title: section.title, description: section.description };
          }
          if (section.components) {
            const component = section.components.find(c => c.id === activeComponent);
            if (component) {
              return { title: component.name, description: component.description };
            }
          }
        }
        return null;
      };
      
      const info = findComponentInfo();
      if (info) {
        setAnnouncement(`Component details: ${info.title}. ${info.description}`);
      }
    }
  }, [activeComponent]);

  const handleComponentFocus = (componentId) => {
    setActiveComponent(componentId);
    // Don't auto-close on focus for keyboard users
    if (keyboardMode) {
      // Keep the component active until explicitly closed
    }
  };

  const handleComponentInteraction = (componentId, event) => {
    // For touch devices, toggle the active state
    if (isTouch) {
      setActiveComponent(prev => prev === componentId ? null : componentId);
      event.stopPropagation(); // Prevent container click
    } else {
      // For non-touch, set active on hover
      setActiveComponent(componentId);
    }
  };
  
  const handleContainerClick = () => {
    // On touch devices, clicking outside should close the active component
    if (isTouch) {
      setActiveComponent(null);
    }
  };

  // Render functions for diagram sections
  const renderComponentGroup = (section, sectionId, position) => {
    const { title, components } = section;
    
    const gridCols = sectionId === 'coreServices' ? 'grid-cols-5' : 'grid-cols-4';
    
    return (
      <div 
        className={`absolute z-10 bg-[#13103a] rounded-lg border border-purple-700/30 transition-all duration-300 ${keyboardMode ? 'keyboard-focus-container' : ''}`}
        style={position}
        aria-label={title}
        role="group"
      >
        <div className="text-white font-semibold text-center mb-2 py-2">
          {title}
        </div>
        
        <div className={`grid ${gridCols} gap-3 px-4 pb-4`}>
          {components.map((component, index) => (
            <DiagramComponent
              key={component.id}
              component={component}
              isActive={activeComponent === component.id}
              onInteraction={(e) => handleComponentInteraction(component.id, e)}
              onFocus={() => handleComponentFocus(component.id)}
              onBlur={() => setActiveComponent(null)}
              keyboardMode={keyboardMode}
              isTouchDevice={isTouch}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderSingleComponent = (component, position) => {
    return (
      <div 
        className={`absolute z-10 h-12 bg-[#13103a] rounded-lg border border-purple-700/30 flex justify-center items-center cursor-pointer 
        ${activeComponent === component.id ? 'bg-purple-900/40 border-purple-500/40' : 'hover:bg-purple-900/30 hover:border-purple-500/30'} 
        transition-all duration-300 ${keyboardMode ? 'keyboard-focus-container' : ''}`}
        style={position}
        onClick={(e) => handleComponentInteraction(component.id, e)}
        onMouseEnter={!isTouch ? () => setActiveComponent(component.id) : undefined}
        onMouseLeave={!isTouch ? () => setActiveComponent(null) : undefined}
        onFocus={() => handleComponentFocus(component.id)}
        onBlur={() => setActiveComponent(null)}
        tabIndex={0}
        role="button"
        aria-pressed={activeComponent === component.id}
        aria-label={component.title}
      >
        <div className="text-white font-semibold px-4">{component.title}</div>
      </div>
    );
  };

  const renderConnections = () => {
    return connections.map(connection => (
      <Connection 
        key={connection.id}
        connection={connection}
        isActive={false}
      />
    ));
  };

  // Calculate which component data to show in tooltip
  const getActiveComponentData = () => {
    if (!activeComponent) return null;
    
    for (const sectionKey in componentData) {
      const section = componentData[sectionKey];
      
      // Check if this is a single component section
      if (section.id === activeComponent) {
        return {
          title: section.title,
          description: section.description
        };
      }
      
      // Check in components array
      if (section.components) {
        const component = section.components.find(c => c.id === activeComponent);
        if (component) {
          return {
            title: component.name,
            description: component.description
          };
        }
      }
    }
    
    return null;
  };

  // Position sections
  const userInterfacePosition = { top: '8%', left: '15%', width: '70%' };
  const apiGatewayPosition = { top: '25%', left: '15%', width: '70%' };
  const coreServicesPosition = { top: '38%', left: '5%', width: '90%', minHeight: '150px' };
  const messageBusPosition = { top: '72%', left: '15%', width: '70%' };
  const agentInfrastructurePosition = { top: '84%', left: '5%', width: '90%', minHeight: '80px' };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
      style={{
        transition: 'transform 0.3s ease',
        boxShadow: '0 25px 50px -12px rgba(112, 19, 250, 0.25)',
        border: '1px solid rgba(112, 19, 250, 0.1)',
        backgroundColor: '#0c0920',
        minHeight: '720px',
      }}
      onClick={handleContainerClick}
      role="region"
      aria-label="QuantumLayer Platform Architecture Diagram"
    >
      {/* User Interface Layer */}
      {renderComponentGroup(componentData.userInterface, 'userInterface', userInterfacePosition)}

      {/* API Gateway */}
      {renderSingleComponent(componentData.apiGateway, apiGatewayPosition)}

      {/* Core Services */}
      {renderComponentGroup(componentData.coreServices, 'coreServices', coreServicesPosition)}

      {/* Message Bus */}
      {renderSingleComponent(componentData.messageBus, messageBusPosition)}

      {/* Agent Infrastructure */}
      {renderComponentGroup(componentData.agentInfrastructure, 'agentInfrastructure', agentInfrastructurePosition)}

      {/* Connecting lines between layers */}
      {renderConnections()}
      
      {/* Tooltip */}
      {isMounted && activeComponent && containerRect && (
        <Tooltip 
          data={getActiveComponentData()} 
          componentId={activeComponent}
          containerRect={containerRect}
        />
      )}
      
      {/* Accessibility announcement (visually hidden, for screen readers) */}
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>
      
      {/* Interactive guide marker - different for touch vs non-touch */}
      <div className="absolute bottom-4 right-4 text-xs text-glass-light flex items-center bg-[#13103a]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-glass-white/30">
        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
        <span>{isTouch ? 'Tap components to explore' : 'Hover over components to explore'}</span>
      </div>
      
      {/* Keyboard accessibility guide (only shown when in keyboard mode) */}
      {keyboardMode && (
        <div className="absolute top-4 right-4 text-xs text-glass-light bg-[#13103a]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-glass-white/30">
          Press Enter to view details, Escape to close
        </div>
      )}
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 filter blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-400 opacity-20 filter blur-[100px]"></div>
    </div>
  );
};

// Individual component within a group
const DiagramComponent = ({ component, isActive, onInteraction, onFocus, onBlur, keyboardMode, isTouchDevice }) => {
  const { id, name, description, isPrimary } = component;
  
  return (
    <div 
      className={`
        flex flex-col items-center cursor-pointer 
        ${keyboardMode ? 'keyboard-focus' : ''}
      `}
      onClick={onInteraction}
      onMouseEnter={!isTouchDevice ? onInteraction : undefined}
      onMouseLeave={!isTouchDevice ? onBlur : undefined}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-label={name}
    >
      <div className={`
        w-full py-2 px-2 rounded-lg flex items-center justify-center text-center text-xs text-white min-h-[60px]
        ${isPrimary 
          ? 'bg-gradient-to-br from-purple-600 to-purple-800 shadow-md shadow-purple-500/20' 
          : 'bg-gradient-to-br from-purple-800/90 to-purple-900/90 shadow-sm'}
        ${isActive 
          ? 'from-purple-500 to-purple-700 shadow-lg shadow-purple-500/30 border border-purple-400/30 scale-105' 
          : 'hover:from-purple-700 hover:to-purple-900 hover:shadow-md hover:shadow-purple-500/20 hover:scale-[1.02]'} 
        transition-all duration-300
      `}>
        {name}
      </div>
    </div>
  );
};

// Connections between sections
const Connection = ({ connection, isActive }) => {
  // Map section IDs to vertical positions (percentages)
  const positionMap = {
    userInterface: 18,
    apiGateway: 31,
    coreServices: 58,  // Adjusted to give more space for Core Services
    messageBus: 75,    // Adjusted accordingly
    agentInfrastructure: 84
  };
  
  // Get positions
  const fromPos = positionMap[connection.from];
  const toPos = positionMap[connection.to];
  
  if (!fromPos || !toPos) return null;
  
  return (
    <div 
      className={`
        absolute left-1/2 transform -translate-x-1/2 w-px 
        bg-gradient-to-b from-cyan-400/40 to-cyan-400/70
        ${isActive ? 'opacity-100' : 'connection-line'} z-5
      `} 
      style={{ 
        top: `${fromPos}%`, 
        height: `${toPos - fromPos}%`
      }}
      aria-hidden="true"
    >
      {/* Connection markers */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400"></div>
    </div>
  );
};

// Tooltip component - uses a portal for better positioning
const Tooltip = ({ data, componentId, containerRect }) => {
if (!data) return null;

// Calculate position based on which component is active
// This requires knowledge of where each component is positioned
const getPosition = () => {
// Default position (centered near top)
let position = {
top: containerRect.top + 100,
left: containerRect.left + containerRect.width / 2
};

// Adjust based on which component is active (estimates)
// In a real implementation, we'd get precise positions from refs
switch(componentId) {
// User Interface Layer
case 'webapp':
case 'api-interface':
case 'cli':
case 'sdk':
position.top = containerRect.top + 80;
break;

// API Gateway  
case 'api':
position.top = containerRect.top + 170;
break;

// Core Services
case 'nlp':
case 'registry':
case 'orchestrator':
case 'memory':
case 'validation':
position.top = containerRect.top + 300;
break;

// Message Bus
case 'eventbus':
position.top = containerRect.top + 460;
break;

// Agent Infrastructure
case 'container':
case 'runtime':
case 'vector':
case 'models':
position.top = containerRect.top + 550;
break;
}

return position;
};

const position = getPosition();

// Create portal to render at body level (avoiding containment issues)
return createPortal(
<div 
className="fixed z-[9999] bg-[#1e1854] p-3 rounded-lg shadow-xl max-w-xs backdrop-blur-md border border-purple-500/30 animate-fade-in"
style={{ 
left: `${position.left}px`, 
top: `${position.top}px`,
transform: 'translate(-50%, -130%)',
}}
role="tooltip"
aria-labelledby={`tooltip-title-${componentId}`}
>
<div className="arrow-down absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full"></div>
<h4 
id={`tooltip-title-${componentId}`}
className="font-medium text-white mb-1"
>
{data.title}
</h4>
<p className="text-xs text-glass-light">{data.description}</p>
</div>,
document.body
);
};

export default EnhancedArchDiagram;