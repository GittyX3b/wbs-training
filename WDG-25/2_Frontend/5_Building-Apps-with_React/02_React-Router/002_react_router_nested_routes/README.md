Nested Routes
=============

In modern web applications, it's common to organize sections of your app into shared layouts—for example, a user dashboard with multiple sub-pages like an overview, settings, or analytics view. React Router provides a powerful feature called **nested routes**, which allows child components to be rendered inside a parent layout, maintaining structure and reducing code duplication.

This example demonstrates how to implement nested routes using React Router's declarative API. This approach is straightforward to integrate and makes your routing configuration easy to read and scale.

We’ve defined two main parts of the app:

*   A top-level navigation bar shared across the site
    
*   A dashboard section with its own internal layout and navigation
    

When users navigate to `/dashboard`, they land on the **DashboardOverview** component by default. This is made possible by an **index route**, which renders when no more specific nested path is matched. When users navigate to `/dashboard/settings`, they remain within the dashboard layout, but now see the **DashboardSettings** component instead.

Here’s how the routing structure works:

*   `/` renders the Home page
    
*   `/dashboard` renders the Dashboard layout and the Overview page (as the index route)
    
*   `/dashboard/settings` renders the Dashboard layout and the Settings page
    

The key concept is the use of `<Outlet />` inside the `DashboardLayout`. This is where React Router will render whichever nested route matches the current path. By using nested routes together with layout components, you can build organized, modular sections of your application that are easy to manage and extend.