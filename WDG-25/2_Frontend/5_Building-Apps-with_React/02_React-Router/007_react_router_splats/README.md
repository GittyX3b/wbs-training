Splats
======

In React Router, a **splat** is a wildcard route segment defined using `*`. When used at the end of a route path (e.g. `path="*"` or `path="docs/*"`), it will match **any characters following the slash**, including additional slashes. This is especially useful for:

*   Handling 404 "Not Found" pages
    
*   Creating routes that can match deeply nested paths