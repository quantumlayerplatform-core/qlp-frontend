# QuantumLayer Platform Landing Page

A modern, responsive landing page for the QuantumLayer Platform built with Next.js.

## Features

- Modern design with animated elements
- Responsive layout for all device sizes
- Integration with Formspree for the waitlist form
- SEO optimized
- Fast loading with Next.js Image optimization
- Font optimization with Next.js font system

## Tech Stack

- **Next.js 14**: For server-side rendering and static site generation
- **React 18**: For component-based UI
- **CSS**: Custom CSS with animations and responsive design
- **Font Awesome**: For icons
- **Google Fonts**: For typography (Inter and Sora)
- **Formspree**: For form submission handling

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd qlp-next-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `.next` folder.

To start the production server:

```bash
npm run start
# or
yarn start
```

## Deployment

This Next.js landing page can be easily deployed to Vercel:

1. Push to GitHub
2. Import project to Vercel
3. Vercel will automatically detect Next.js and set up the appropriate build configuration

## Customization

- Colors: Modify the CSS variables in `app/globals.css`
- Content: Update the text in the component files
- Images: Replace SVG files in the `public/img` directory
- Form: Update the Formspree endpoint in `components/ContactForm.jsx`

## Folder Structure

```
qlp-next-landing/
├── app/
│   ├── layout.js     # Main layout component
│   ├── page.js       # Main page component
│   └── globals.css   # Global styles and CSS variables
├── components/       # React components
├── public/img/       # Static images
├── styles/           # CSS files
└── next.config.js    # Next.js configuration
```

## License

[License information]
