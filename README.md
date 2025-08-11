# SCRPTBLE Website

This is the official website for SCRPTBLE, built with Next.js and Tailwind CSS.

## Development

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions.

### Manual Deployment

To manually deploy the website:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `out` directory, which can be deployed to any static hosting service.

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript

## Project Structure

- `/app` - Next.js app directory containing pages and components
- `/public` - Static assets like images
- `/components` - Reusable React components
- `/styles` - Global styles and Tailwind configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 