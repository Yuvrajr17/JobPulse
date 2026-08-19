# Decisions

## Why I chose the home-page track

I chose Part 2 because I wanted to focus on the product experience rather than split the available time between a scraper and a frontend. The goal was to make the first screen immediately explain what JobPulse does and give the user a clear next step.

I used React with Vite and Tailwind CSS because I was already comfortable with that setup and could iterate on the UI quickly. The page is component-based so the main sections can be changed independently without turning the landing page into one large file.

## Design decisions

The main idea was to keep the interface simple and focused instead of trying to make it look like a typical AI product landing page. I used a light blue/white visual system with darker text and limited accent colors. The hero explains the value proposition first, followed by a dashboard preview so the product is shown rather than only described.

I also kept the interactions fairly restrained. Hover states, navigation, the mobile menu, and dark mode provide feedback without adding animations everywhere.

The dashboard preview is intentionally a mock product view. It communicates the type of workspace JobPulse is meant to provide without presenting fabricated customer numbers, testimonials, or claims.

## Responsive decision

I treated mobile as a separate layout rather than simply shrinking the desktop version. The hero stacks vertically, the dashboard preview has a simplified mobile layout, feature cards change from four columns to smaller grids, and the How It Works section becomes a vertical flow.

I tested the layout around the required mobile and desktop sizes and checked for horizontal overflow.

## Trade-off

The biggest trade-off was scope. With limited time, I focused on the landing-page experience, responsive behavior, and visual consistency instead of building a complete job-search product with authentication, a backend, or live job data.

With a full week, I would add real job data, connect the actions to actual product flows, improve accessibility and keyboard states, and test the page across more devices and browsers.

## AI usage

I used AI tools during development mainly for iteration, debugging, and reviewing responsive layout issues. I did not treat generated code as finished code.

I tested the changes myself in the browser, adjusted spacing and breakpoints based on the actual rendered page, checked mobile layouts, and removed or changed parts that did not fit the intended design. The final structure and visual decisions were reviewed manually before submission.