Layout Routes
=============

As applications grow, one of the first challenges developers encounter is how to structure pages that share common UI elements—like a navbar, sidebar, or footer—without duplicating code across multiple components.

**Layout routes** are the answer. In React Router, a layout route is a parent route that wraps related child routes with shared structure. It uses the `<Outlet />` component to render whichever child route matches the current path. This allows you to keep layout logic centralized and page content cleanly separated.

### What Are Layout Routes?

A **layout route** is defined by assigning a layout component (like a `MainLayout` or `AdminLayout`) to a parent `<Route>`, and nesting related child routes inside it. Each layout typically includes structural UI (navigation, sidebars, headings) and uses `<Outlet />` as a placeholder for rendering the active child route.

This is especially helpful in applications with distinct sections—for example, a public-facing marketing site and a separate admin panel—where each section has a different layout but shares internal navigation and structure.

In this example, two layout routes are used:

*   `MainLayout` handles public pages like **Home** and **About**.
    
*   `AdminLayout` is reserved for admin-only pages like **Dashboard** and **Settings**.
    

Each layout wraps its respective routes and provides consistent structure and navigation, with no repeated code across individual pages.

**Back Button in AdminLayout**: Uses the `useNavigate()` hook to let users go back to the previous page with a single click. This is possible because the Browser History is a stack!  
  
Layout routes are one of the most powerful architectural tools in React Router. When paired with nested routes and `<Outlet />`, they let you build cohesive sections of your app with shared structure and minimal duplication. Whether you're managing an admin panel, a dashboard, or simply want to keep your navigation consistent across pages, layout routes keep your app organized and maintainable.