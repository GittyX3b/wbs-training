Dynamic Segments
================

When building applications that display content based on an identifier—such as user profiles, blog posts, or product pages—you’ll need routes that adapt dynamically based on the URL. React Router handles this elegantly through **dynamic segments**.

A dynamic segment is a portion of the route path prefixed with a colon (`:`), like `:slug`. It acts as a placeholder for values passed through the URL, allowing you to create flexible and reusable route configurations.

In this example, we build a simple app with a list of users and a detail page for each user, identified by a unique `slug` in the URL.

**1\. Dynamic Route Path**  
A route like `/users/:slug` defines a dynamic segment. The value in place of `:slug` becomes accessible inside the matched component.

**2\. Accessing Parameters with `useParams()`**  
React Router provides a `useParams` hook to extract route parameters. Inside the component rendered for a dynamic route, you can use this hook to read the value of `:slug`.

**3\. Navigating with `Link`**  
We use `Link` components to navigate to different users' detail pages. These links include the dynamic segment directly in the `to` prop (e.g., `/users/some-slug`).

**4\. Layout with Nested Routes**  
The app uses a shared layout with a top-level navigation bar, and renders both the user list and the user details through nested routes.

This keeps the UI consistent while allowing content to change based on the dynamic route.

Using slugs makes URLs more readable and meaningful (e.g., `/users/grace-hopper` instead of `/users/3`). This is helpful for SEO, accessibility, and general user experience.