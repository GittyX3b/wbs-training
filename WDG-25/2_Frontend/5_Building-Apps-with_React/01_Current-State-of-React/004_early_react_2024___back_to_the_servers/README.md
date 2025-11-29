2024 | Back to the servers
==========================

From the get go it was possible to use React for rendering web pages on the server, but typically it was used to create Single-Page-Applications (SPAs) on the client. With the introduction of [server components](https://react.dev/reference/rsc/server-components) in React 19, server-side rendering was simplified a lot. Although you still need a framework like Next.js or [something else](https://dev.to/aheissenberger/beyond-nextjs-exploring-alternative-react-server-component-frameworks-4909). Now you can fetch data on the server, create a view and send, or even stream that to the client. In turn, whenever the client needs to change persistent data, they can call an action that runs on the server, making the back and forth between backend and frontend simpler as well.

For working on the client side only, there are a couple of noteworthy changes, that simplify fetching data and submitting forms.