Creating and nesting components
===============================

#### Objective:

In this exercise, you will learn how to create and nest components in React to build a simple UI. We'll be creating a basic web page with a Header, Navigation, Hero, Services, and Footer component.

#### Instructions:

*   **Create the Components**:
    
    *   You will create five components: `Header`, `Navigation`, `Hero`, `Services`, and `Footer`. For now you can declare the functions and return `null` from each one.
    *   Currently, this platform doesn't support multi-javascript files, so if you are working here, create all the components in the same file, if you are working locally, each component will be placed in the `src/components` folder and will be a separate file.
*   **Create the `Navigation` component**:
    
    *   Return a `nav` element that contains an `ul`with some links.
*   **Create the `Header` component**:
    
    *   Return a `header` with an `h1` element 
    *   Nest the **`Navigation`** component as a child of the **`Header`** 
*   **Create the `Hero` component**:
    
    *   Return a `section` element with some content of your choosing
*   **Create the `Services` component**:
    
    *   Return a `section` element with some content of your choosing
*   **Create the `Footer` component**:
    
    *   Return a `footer` element with some content of your choosing
*   **Compose the components**:
    
    *   Use the components to compose your UI inside the **`App`** component