2013 | First Steps
==================

React was publicly released [in 2013](https://web.archive.org/web/20130719092113/http://facebook.github.io:80/react/) as [one of Facebook's first open source projects](https://github.com/facebook/react/commit/75897c2dcd1dd3a6ca46284dd37e13d22b4b16b4#diff-eca12c0a30e25b4b46522ebf89465a03ba72a03f540796c979137931d8f92055R3).

It was meant to be 'a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.' ([source](https://legacy.reactjs.org/blog/2013/06/05/why-react.html#:~:text=a%20library%20for%20building%20composable%20user%20interfaces.%20It%20encourages%20the%20creation%20of%20reusable%20UI%20components%20which%20present%20data%20that%20changes%20over%20time.))

It had already been used internally at Facebook since 2011 for Facebook's News Feed and Instagram.

In this example here, derived from [this old JS Fiddle,](https://jsfiddle.net/2h6th4ju/) you see some 'pre-modern' React syntax. Even before JavaScript classes were a thing. (Or 'let' and 'const'.)

Some parts should look familiar, if you've seen some React already.

There is a 'container', or 'root' element accessed, and new DOM nodes, created by React, are inserted into it.

You might also notice the HTML-like markup language. That's JSX, which was created at Facebook at the same time. React can be used without JSX and JSX without React. They ['are independent technologies, but JSX was primarily built with React in mind'](https://web.archive.org/web/20130722135006/http://facebook.github.io/react/docs/jsx-in-depth.html#:~:text=React%20and%20JSX%20are%20independent%20technologies%2C%20but%20JSX%20was%20primarily%20built%20with%20React%20in%20mind.). You can read more about [Origins of JSX and Why It Exists](https://dodov.dev/blog/origins-of-jsx-and-why-it-exists) here.

Purely presentational parts could be written as functional components, simply returning JSX or elements created by React, doing simple computation at most.

If you needed components that do more work, that _react_ on changes in data, you needed to create class components. On these we have so called lifecycle methods, that run, whenever certain things happen on this component, e.g. when it is created for the first time, or deleted from the DOM, or when its 'inputs' - the so called \`props\` changed, or on user interaction.