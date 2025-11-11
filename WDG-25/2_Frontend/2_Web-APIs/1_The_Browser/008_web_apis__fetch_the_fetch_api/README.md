The Fetch API
=============

The Fetch API, as the name suggests, it's used to fetch...  
  
But what exactly are we fetching? Well, the answer is **resources**.

These resources are available to use via HTTP requests! Yes, those same requests within the request/response cycle that powers the web!

The [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method is used then to send a request, and gives us access to the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects to have access to meanigful data like, headers in requests or the data that is returned from the HTTP endpoint (by all means, this is an URL)

It takes a mandatory argument, the path to the resource and it returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise): a very special object that represents the eventual completion of an asynchronous operation.  
  
Basically:

*   We send the request
*   It will take a bit since network operations are NOT immediate
*   As soon as the promise is fulfilled, we to something.
*   If there's an error, we catch it!