Sending Data
============

When wanting to create a resource, that is, sending over a request that will ultimately affect the state in the server, when want to use the `POST` request method.

[`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)

The `POST` method submits an entity to the specified resource, often causing a change in state or side effects on the server.

Ultimately, the data we send over could be stored in a database or simply kept in memory for the duration of our interaction, regardless, using the fetch API for a `POST` method is a bit different.

We are building upon an example [found here for the DOM API](../../../static/web-apis-dom/7) .   
  
JSON Placeholder is a fake API that responds accordingly to all the methods we want.

What about editing and deleting? Well we could use the `PUT` and `DELETE` request methods respectively. But first, we need to talk about the kind of APIs we will most likely be interacting with the fetch API: RESTful APIs