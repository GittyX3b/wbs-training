Index Routes
============

In a layout route, you often want to display a default page when users visit the parent path without specifying a subpath. This is exactly what **index routes** are designed for in React Router.

An index route acts as the default child route. It is rendered when the user navigates to the parent route's path **exactly**, and it works within the context of a layout component using the `<Outlet />`.

In this example, we set up a basic dashboard section with a shared layout. The route `/dashboard` displays the **DashboardHome** component by default, thanks to the index route. The route `/dashboard/settings` displays a **DashboardSettings** component.

This pattern is especially useful when building sections like dashboards, account areas, or portals, where the layout remains constant but the content inside changes based on navigation.