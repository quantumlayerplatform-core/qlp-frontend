"use client";
import React from 'react';

const ArchDiagram = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto" style={{ 
      height: '500px', 
      backgroundColor: '#0c0920',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(112, 19, 250, 0.15)'
    }}>
      {/* User Layer */}
      <div className="absolute" style={{ 
        top: '8%', 
        left: '15%', 
        right: '15%', 
        height: '12%',
        backgroundColor: '#13103a',
        borderRadius: '10px',
        border: '1px solid rgba(112, 19, 250, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="font-bold text-white text-lg mb-1">User Interaction Layer</div>
        <div className="flex justify-center space-x-6">
          <div className="text-white text-xs bg-dark-elevated px-3 py-1 rounded">Client App</div>
          <div className="text-white text-xs bg-dark-elevated px-3 py-1 rounded">Webhooks</div>
          <div className="text-white text-xs bg-dark-elevated px-3 py-1 rounded">SDK Integration</div>
        </div>
      </div>

      {/* API Gateway */}
      <div className="absolute" style={{ 
        top: '24%', 
        left: '15%', 
        right: '15%', 
        height: '8%',
        backgroundColor: '#13103a',
        borderRadius: '10px',
        border: '1px solid rgba(112, 19, 250, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="font-bold text-white">API Gateway</div>
      </div>

      {/* Core Services */}
      <div className="absolute" style={{ 
        top: '36%', 
        left: '5%', 
        right: '5%', 
        height: '28%',
        backgroundColor: '#13103a',
        borderRadius: '10px',
        border: '1px solid rgba(112, 19, 250, 0.3)',
        padding: '1rem'
      }}>
        <div className="font-bold text-white text-lg text-center mb-4">Core Services</div>
        <div className="flex justify-between px-4">
          {['Intent Classifier', 'Agent Registry', 'Task Orchestrator', 'Neural Memory', 'Validation'].map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-center text-xs text-white p-1"
                   style={{ 
                     background: 'linear-gradient(135deg, #7013fa, #bd00ff)',
                     boxShadow: '0 0 15px rgba(112, 19, 250, 0.5)'
                   }}>
                {service}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Infrastructure */}
      <div className="absolute" style={{ 
        top: '68%', 
        left: '15%', 
        right: '15%', 
        height: '8%',
        backgroundColor: '#13103a',
        borderRadius: '10px',
        border: '1px solid rgba(112, 19, 250, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="font-bold text-white">Event Infrastructure & Reasoning System</div>
      </div>

      {/* Multi-Agent Orchestration */}
      <div className="absolute" style={{ 
        top: '80%', 
        left: '25%', 
        right: '25%', 
        height: '8%',
        backgroundColor: '#13103a',
        borderRadius: '10px',
        border: '1px solid rgba(112, 19, 250, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="font-bold text-white">Multi-Agent Orchestration</div>
      </div>

      {/* Horizontal connecting lines between core services */}
      <div className="absolute" style={{ top: '50%', left: '20%', width: '60%', height: '1px', backgroundColor: 'rgba(0, 226, 195, 0.5)' }}></div>
      
      {/* Vertical connecting lines between layers */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-px h-[4%] bg-[#00e2c3]"></div>
      <div className="absolute top-[32%] left-1/2 transform -translate-x-1/2 w-px h-[4%] bg-[#00e2c3]"></div>
      <div className="absolute top-[64%] left-1/2 transform -translate-x-1/2 w-px h-[4%] bg-[#00e2c3]"></div>
      <div className="absolute top-[76%] left-1/2 transform -translate-x-1/2 w-px h-[4%] bg-[#00e2c3]"></div>
    </div>
  );
};

export default ArchDiagram;