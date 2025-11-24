Array of dependencies
=====================

The dependency array in `useEffect` is what tells React **when** your effect should re-run.

*   No array: runs after **every render**
    
*   Empty array `[]`: runs **only once** on first mount
    
*   Array with variables `[a, b]`: runs on mount and when **any of those variables change**
    

This makes your component efficient and predictable by limiting when side effects fire.