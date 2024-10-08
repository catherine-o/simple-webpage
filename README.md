# Webpage Redesign

[Demo hosted on Vercel](https://simple-webpage-lac.vercel.app/)

### Technologies Used
- React
- Vite
- Tailwind
- Tailwind Merge

### React

This is currently my preferred framework and where I have most of my front-end experience.
I enjoy the abundance of documentation and support, the quantity of libraries and tools that are available, and also the ease of using custom hooks.

### Vite

I chose to use Vite because it is simple to configure and start a project, and it is very fast!
Vite makes both the developer and user experience better in terms of performance, with quicker build speeds and loading times.


### Tailwind

Tailwind is a great CSS framework for mobile-first and responsive design. It is also easy to integrate with Vite. Tailwind provides many pre-defined classes that make it a breeze to start coding and implementing designs for various screen sizes. I appreciate being able to add classes to the theme and use them instead of repeating hard-coded values.

### Tailwind Merge

This package provides a utility function that helps make the lengthy lines of Tailwind classes more organized and readable.

## Architecture

I decided to create separate directories in my file structure for assets, components, and pages.

- **Assets**: images, logos, icons
- **Components**: smaller components, reusuable components
- **Pages**: larger components, page views rendered by MainNav (routes)
  - each page has its own directory
  - plus a sections subdirectory to keep the code clean/readable and prevent page components from growing too long
