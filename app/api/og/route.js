import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#1E1E2E',
          backgroundImage: 'linear-gradient(135deg, #1E1E2E, #2D2D42)',
          padding: '40px 80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Arial',
        }}
      >
        {/* Abstract Background Pattern */}
        <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.1 }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#7013FA',
              backgroundImage: 'linear-gradient(135deg, #7013FA, #AD69FF)',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 30,
              color: 'white',
              fontSize: 60,
              fontWeight: 'bold',
            }}
          >
            QL
          </div>
          <div>
            <h1
              style={{
                fontSize: 48,
                color: 'white',
                margin: 0,
                fontWeight: 'bold',
              }}
            >
              QuantumLayer
            </h1>
            <h2
              style={{
                fontSize: 24,
                background: 'linear-gradient(90deg, #00E2C3, #05D5C8)',
                backgroundClip: 'text',
                color: 'transparent',
                margin: '8px 0 0 0',
                fontWeight: 'bold',
              }}
            >
              Platform
            </h2>
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 24,
            color: 'white',
            opacity: 0.9,
            margin: '10px 0 30px 0',
          }}
        >
          Orchestrate Intelligence. With Natural Language.
        </p>

        {/* Features */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 20,
            marginTop: 20,
          }}
        >
          {[
            'Dynamic Agent Generation',
            'Neural Memory Persistence',
            'Task Orchestration',
            'Validation Framework',
          ].map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: '#7013FA',
                  marginRight: 10,
                }}
              />
              <span style={{ fontSize: 18 }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
