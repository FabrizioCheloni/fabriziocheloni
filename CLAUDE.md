# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website for Fabrizio Cheloni, an audio programmer and entrepreneur. The site is hosted on GitHub Pages with a custom domain (www.fabriziocheloni.com) and showcases professional services, contact information, and background.

## Architecture

### File Structure
- `index.html` - Main landing page with personal introduction and background
- `skills.html` - Services page detailing C/C++ and audio plugin development expertise
- `contact.html` - Contact information with links to email, LinkedIn, GitHub, GitLab, and personal wiki
- `css/styles.css` - Main stylesheet with responsive design for mobile and desktop
- `images/myphoto.jpg` - Profile photo used across all pages
- `CNAME` - GitHub Pages custom domain configuration

### Design Patterns
- **Consistent Navigation**: All pages share the same header with navigation to Services, Contacts, and external Audiokids link
- **Responsive Design**: CSS includes media queries for screens up to 1600px, 1300px, and 768px breakpoints
- **Typography**: Uses Google Fonts "Afacad Flux" with consistent styling across pages
- **Color Scheme**: Dark header (#1b1f1f), light background (#f4f4f4), with orange/cyan accent colors for links

### Technical Details
- Pure HTML/CSS static site with no build process
- External dependencies: Google Fonts only
- Images served locally from `/images/` directory
- CSS uses flexbox for header layout and responsive padding adjustments

## Deployment

This site is deployed via GitHub Pages using the `CNAME` file for custom domain mapping to www.fabriziocheloni.com. No build commands are needed - changes to HTML/CSS files are deployed automatically when pushed to the main branch.

## Common Tasks

Since this is a static site with no build process, typical development involves:
- Direct editing of HTML files for content changes
- Modifying `css/styles.css` for styling updates  
- Adding/updating images in the `images/` directory
- Testing changes by opening HTML files directly in browser

## Content Structure

The site follows a professional portfolio pattern:
- **Index page**: Personal story, background, and entrepreneurial journey with Audiokids
- **Skills page**: Technical specializations in audio programming and C/C++
- **Contact page**: Multiple contact methods and professional profiles

All pages include the same profile photo and maintain consistent branding with the Audiokids company link prominently featured in navigation.