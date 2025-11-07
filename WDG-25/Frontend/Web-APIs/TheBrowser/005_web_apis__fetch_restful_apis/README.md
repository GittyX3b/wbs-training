RESTful APIs
============

RESTful API is an interface that two computer systems use to exchange information securely over the internet.

Our apps have to communicate with both internal and third party applications. This can range from communicating to the browser, for which we have Web APIs like DOM or Storage, or with applications over the network.

RESTful APIs support this information exchange because they follow secure, reliable, and efficient software communication standards.

These web services can be architected in many different ways, but a very common approach is modelling as RESTful APIs.

REST stands for **Representational State Transfer** meaning that the data you are getting is nothing but a representation of the actual resource. You didn't get the Pokemon in the database, just a representation of it.

It's important to understand that REST is not a set of technologies but rather, a set of principles to architect your app after:

*   **Uniform Interface**: A standard way to interact with the server, usually through HTTP methods like GET, POST, PUT, DELETE.
*   **Stateless**: Each request from a client to a server must contain all the information needed to understand and process the request. The server does not store client context between requests.
*   **Client-Server**: The client (usually our app) and the server (where the API runs) are separate entities. The client handles the user interface and user experience, while the server manages the data and business logic.
*   **Cacheable**: Responses from the server can be cached by the client or intermediate proxies to improve performance.
*   **Layered System**: The API can be composed of multiple layers, with each layer providing different functionality without exposing the underlying complexity.

### Take aways!

Don't worry about this too much (for now) just understand that these applications will be requesting data from and sending data to are nothing but APIs that can be interacted with over the network, whether is a simple request to figure out the weather in your city or a prompt to an LLM, it's pretty much all the same!