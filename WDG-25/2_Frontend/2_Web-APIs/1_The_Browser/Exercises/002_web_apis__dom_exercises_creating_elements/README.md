Creating elements
=================

#### Objective

In this exercise, you will use JavaScript to create a complete web page from scratch.

You'll dynamically generate all the HTML content and apply CSS styles using JavaScript's `element.style` property.

### Instructions

1.  **Create the HTML Structure**:
    
    *   Create a `header` element with a `nav` inside it.
    *   Inside the `nav`, create an `a` element with the class `logo` and the text "Coffee Shop".
    *   Create a `ul` element with the class `nav-list`. Inside the `ul`, create four `li` elements with the class `nav-item`, each containing an `a` element with text "Home", "Menu", "About", and "Contact".
2.  **Create the Hero Section**:
    
    *   Create a `section` element with the class `hero`.
    *   Inside the `hero`, create a `div` with the class `hero-content`.
    *   Inside the `div`, create an `h1` element with the text "Welcome to Our Coffee Shop".
    *   Add a `p` element with the text "Enjoy the best coffee in town."
    *   Add an `a` element with the class `btn` and the text "Explore Our Menu".
3.  **Create the Footer**:
    
    *   Create a `footer` element with the class `footer`.
    *   Inside the `footer`, create a `p` element with the text "© 2024 Coffee Shop. All rights reserved.".
4.  **Apply CSS Styles Using JavaScript**:
    
    *   Use JavaScript to apply the following CSS styles to the elements using `element.style`:
        *   `.header`: background-color: #fff, box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), padding: 1rem 0.
        *   `.nav`: display: flex, justify-content: space-between, align-items: center, max-width: 1200px, margin: 0 auto, padding: 0 1rem.
        *   `.logo`: font-size: 1.5rem, font-weight: bold, color: #333, text-decoration: none.
        *   `.nav-list`: display: flex, list-style: none.
        *   `.nav-item`: margin-left: 1.5rem.
        *   `.nav-item a`: text-decoration: none, color: #333, font-weight: bold.
        *   `.hero`: height: 560px, background: url("[https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1](https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1)") no-repeat center center/cover, color: #fff.
        *   `.hero-content`: max-width: 600px, height: 100%, display: flex, flex-direction: column, justify-content: space-around, align-items: center, text-align: center.
        *   `.hero-content h1`: font-size: 2.5rem, margin-bottom: 1rem.
        *   `.hero-content p`: font-size: 1.2rem, margin-bottom: 2rem.
        *   `.btn`: background-color: #333, color: #fff, padding: 0.75rem 1.5rem, text-decoration: none, border-radius: 5px, transition: background-color 0.3s ease.
        *   `.btn:hover`: background-color: #555. (tip: you can set a `mouseover` and a `mouseout` event for this)
        *   `.footer`: background-color: #333, color: #fff, text-align: center, padding: 1rem 0, margin-top: auto.

Now, is this practical? Certainly no! But you gotta learn and get comfortable with the DOM API ❤️