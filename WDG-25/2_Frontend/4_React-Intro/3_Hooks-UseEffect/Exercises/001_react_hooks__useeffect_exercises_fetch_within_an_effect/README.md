Fetch within an Effect
======================

### Objective

Learn how to use the `useEffect` hook in React to handle side effects such as fetching data from an API.

### Instructions

1.  Create a React component that fetches character data from the Star Wars API:  
    👉 `https://swapi.tech/api/people`
    
2.  On initial load, fetch the **first page of results** using `useEffect`.
    
3.  Store the result in **state**, including the `next` and `previous` URLs that come from the API response.
    
4.  Add **Next** and **Previous** buttons:
    
    *   When clicked, they should fetch data from the appropriate `next` or `previous` URL.
        
    *   Disable the button if there’s no URL available (start or end of pagination).
        
5.  Display the character list in the UI (at minimum, their names).
    
6.  Style it with Tailwind CSS (or basic CSS) to make the output readable.
    
7.  (Optional) Add a loading indicator or error handling.