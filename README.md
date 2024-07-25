
# Star Wars Application

This application is an example of a web app that uses Next.js, TypeScript, and React to display data from the Star Wars API (`swapi.dev`). The application has three main pages: **Login**, **Home**, and **Wishlist**.

## Key Features

-   **Login Page**: A page for login with dummy authentication.
-   **Home Page**: Displays data from the Star Wars API using reusable components.
-   **Wishlist Page**: Stores and displays wishlist items using the Context API.

## Technologies Used

-   [Next.js](https://nextjs.org/) - React framework for web application development.
-   [TypeScript](https://www.typescriptlang.org/) - A JavaScript superset that adds static types.
-   [ESLint](https://eslint.org/) - A linting tool to ensure code quality.
-   [CSS Modules](https://github.com/css-modules/css-modules) - Scoped styling technique for components.
-   [Context API](https://reactjs.org/docs/context.html) - For global state management.

## Installation Instructions

1. **Clone the Repository**

   ```bash
   git clone <URL_REPOSITORI>
   cd <NAME_PROJECT>
2. **Install Dependencies**

   ```bash
	npm install
3. **Run the Application**

   ```bash
	npm run dev
## Dummy Data

For dummy login, use the following information:

-   **Username**: `admin`
-   **Password**: `123`

## Implemented Features

1.  **Fetch Data from External API**
    
    -   Using `swapi.dev` to fetch Star Wars data.
    -   Implementation in `lib/api.ts`.
2.  **Conditional Rendering**
    
    -   Displays loading or error components if data fetching encounters issues.
3.  **Reusable Component**
    
    -   The `CharacterCard.tsx` component is used to display Star Wars character information consistently across pages.
4.  **Reactivity with State, Props, and Context**
    
    -   State: Managed using React hooks within components.
    -   Props: For passing data to child components.
    -   Context: `WishlistContext.tsx` is used for managing the wishlist and sharing data across the application.
5.  **Routing and Auth Login**
    
    -   Routing is implemented using Next.js.
    -   Login page with dummy authentication to access Home and Wishlist pages.
6.  **Use of ESLint**
    
    -   ESLint is used to maintain code quality. Linting rules can be configured in the `.eslintrc.json` file.
7.  **Use of CSS Modules**
    
    -   Styling is done using `module.css` for scoped styles. Examples: `page.module.css`, `login.module.css`, `wishlist.module.css`.
8.  **Next.js and TypeScript**
    
    -   The application is built using Next.js with TypeScript to enhance code safety and quality.