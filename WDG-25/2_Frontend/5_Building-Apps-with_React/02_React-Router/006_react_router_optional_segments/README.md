Optional Segments
=================

React Router supports optional segments in route paths using the `?` syntax. This allows you to define routes that can match **with or without a specific segment**, making your routing setup more flexible and concise.

This is useful in a variety of scenarios — such as toggling between default and custom views, user roles, or language prefixes. One common use case is internationalization (i18n), where the route may or may not begin with a language code (e.g., `/categories` vs `/en/categories`).

### What Optional Segments Do

With a route like:

`<Route path=":lang?/categories" element={<Categories />} />`

You are telling React Router to match both:

*   `/categories` (no language specified)
    
*   `/en/categories` (language specified)
    

Both paths will render the same component, and inside that component, you can use `useParams()` to check if the optional `lang` parameter is present.

Optional segments are useful when:

*   You want a cleaner route setup without duplication.
    
*   A part of the URL can be omitted without breaking the logic.
    
*   The same view or component handles both variants of the route.