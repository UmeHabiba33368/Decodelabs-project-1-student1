# Student Management Dashboard

This is my beginner-level responsive frontend project for the Responsive Frontend Interface project.

I built this project using HTML, CSS, and basic JavaScript. The main goal was to practice how a responsive web interface is structured, styled, and made interactive.

## What I Used

- HTML5
- CSS3
- Basic JavaScript
- CSS Grid
- Flexbox
- Media Queries
- `clamp()` for responsive font sizes
- Semantic HTML5 elements
- Basic accessibility practices

No frontend framework is used in this project.

## About the Project

The project is a simple Student Management Dashboard where a student can see different subjects and their current learning progress.

The dashboard includes:

- Welcome section
- Navigation menu
- Course cards
- Progress bars
- View Course buttons
- Continue Course button
- Progress section
- Responsive layout
- Footer

## Subjects

The dashboard currently shows these subjects:

| Subject | Progress |
|---|---:|
| Mathematics | 70% |
| Computer Science | 60% |
| Data Structures | 35% |

## How JavaScript Works

I used JavaScript to add some basic interactions to the dashboard.

### Continue Course

When the `Continue Course` button is clicked, the Mathematics progress increases by 10%.

The progress bar and percentage are updated on the page as well.

The welcome message also changes to:

`Keep learning!`

The progress stops when it reaches 100%.

### View Course

Each subject has a `View Course` button.

When a button is clicked, the selected subject is shown in the Progress section.

For example:

`Computer Science course selected.`

## Responsive Design

The project is built using a mobile-first approach.

On different screen sizes, the layout changes automatically.

### Mobile

- Courses are shown in one column
- Navigation is vertical
- Content uses the available screen width

### Tablet

At `768px` and above:

- Courses are shown in two columns
- Main content gets more spacing

### Desktop

At `1024px` and above:

- Navigation becomes a sidebar
- Courses are shown in three columns
- Main content is placed beside the sidebar
- Header and footer use the full width

## HTML5

I used semantic HTML elements to structure the page:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

This also helped me keep the structure of the page clear.

## CSS3

CSS is used for the overall design and responsive layout.

I used:

- CSS Grid for the main page and course layout
- Flexbox for navigation
- Media queries for responsive design
- `clamp()` for fluid typography
- Progress bars
- Button hover and focus states

## JavaScript

JavaScript is used for the interactive parts of the project.

It handles:

- Button click events
- Updating Mathematics progress
- Updating progress bars
- Showing the selected course
- Updating messages on the page
- Basic state management

## Design

I followed the color palette given in the project brief:

- Mocha Mousse: `#A0806E`
- Ethereal Blue: `#A0D4E0`
- Moonlit Grey: `#F2F0EA`

I did not use Google Fonts in this project. The project uses a simple system font:

font-family: Arial, sans-serif;"# DecodeLabs-Internship" 
