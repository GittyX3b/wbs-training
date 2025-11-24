useEffect
=========

`useEffect` is a React Hook that lets your component **synchronize with the outside world** — APIs, browser features, or any system outside React's pure rendering logic.

It runs **after the component renders**, and it’s reactive: you can control when it runs by specifying dependencies.

This is what makes it different from event handlers — it’s **not user-triggered**, but **render-triggered**.

*   `useEffect(() => { ... }, [counter1])` means:  
    → Run this effect **after the first render**, and **every time `counter1` changes**.
    
*   No dependencies? The effect runs **after every render**.
    
*   Empty dependencies (`[]`)? It runs **once on mount**.
    
*   Optional return value? That’s the **cleanup function**, for tearing down subscriptions, timeouts, or listeners when the component unmounts or the effect re-runs.