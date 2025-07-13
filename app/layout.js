import './globals.css'
import '../styles/combined-styles.css'
import '../styles/sections.css'
import '../styles/expanded-animations.css'
import '../styles/architecture-diagram.css'
import '../styles/z-index.css'
import { Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

// Display font - Using Sora for headings
const quantumDisplay = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-quantum-display',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['600', '700', '800'],
  display: 'swap'
})

// Body text font - Using Sora for both display and text for cohesion
const quantumText = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-quantum-text',
  display: 'swap',
})

export const metadata = {
  title: 'QuantumLayer | AI Workflow Orchestration Platform',
  description: 'Transform natural language into intelligent workflows with QuantumLayer - the next-generation AI agent orchestration platform with robust hallucination mitigation.',
  keywords: 'AI orchestration, AI agents, natural language, workflow automation, multi-agent systems, QuantumLayer, AI platform',
  openGraph: {
    title: 'QuantumLayer | Orchestrate AI Workflows with Natural Language',
    description: 'QuantumLayer dynamically generates, coordinates, and validates task-specific AI workflows with unmatched accuracy and reliability.',
    url: 'https://quantumlayerplatform.com',
    siteName: 'QuantumLayer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://quantumlayerplatform.com'),
  verification: {
    google: 'YOUR-GOOGLE-VERIFICATION-CODE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantumLayer | AI Workflow Orchestration Platform',
    description: 'Transform natural language requests into intelligent, validated workflows with our AI agent orchestration platform.',
    images: ['/api/og'],
    creator: '@quantumlayerAI',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quantumDisplay.variable} ${quantumText.variable} ${sora.variable}`}>
      <body className={sora.className}>
        <div className="page-container">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
