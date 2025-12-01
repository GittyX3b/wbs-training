Basic Implementation
====================

This example demonstrates how to build a simple single-page application (SPA) using **React Router in Declarative Mode**. Declarative routing is one of the three primary ways to use React Router (alongside Data Mode and Framework Mode), and it's by far the most accessible and beginner-friendly. It allows you to define your application's navigation structure using components, making routing clear and maintainable.

In this example, we set up three pages—**Home**, **About**, and **Contact**—wrapped in a shared layout that includes a navigation bar.

**1\. Importing the Essentials**  
The application uses key features from `react-router`, including:

*   `BrowserRouter`: Sets up client-side routing.
    
*   `Routes` and `Route`: Define the route structure.
    
*   `Link`: Enables navigation without full page reloads.
    
*   `Outlet`: A placeholder for rendering matched nested routes.
    

These building blocks form the foundation of declarative routing in React.

**2\. Setting a Base Path**  
The `basename` is set to `/wbs-live-examples-target`. This is only needed because our preview app runs within a GitHub Pages environment, which serves the app under a subdirectory. In most production or development scenarios, you can omit this configuration.

**3\. Navigation with the Navbar Component**  
The `Navbar` component displays a horizontal navigation bar with links to the three main pages. It uses `Link` components, which allow navigation between routes without reloading the page—crucial for maintaining SPA behavior.

**4\. Layout with MainLayout**  
`MainLayout` wraps the content for all main routes. It includes the `Navbar` and an `Outlet`, which dynamically renders the component that matches the current nested route. This approach keeps layout structure consistent across all pages.

**5\. Defining Pages as Route Components**  
The `Home`, `About`, and `Contact` components represent individual pages. Each one returns a simple piece of content, and they are mapped to their respective routes under the `/` path.

**6\. Declarative Routing Configuration**  
Routing is defined as follows:

*   The root path (`"/"`) is handled by `MainLayout`, establishing a layout route.
    
*   Nested within it are three child routes:
    
    *   The **index route** renders `Home` when the path is exactly `/`.
        
    *   The `about` and `contact` routes render their corresponding components.