
### What is Authorization and Authentication?

**Authentication:** Authentication is the process of verifying the identity of a user, system, or application. It ensures that the entity trying to access a resource is indeed who they claim to be. Authentication is commonly achieved using various credentials such as usernames and passwords, tokens, biometric information, or other forms of authentication factors.

**Authorization:** Authorization is the process of determining what actions or resources an authenticated user, system, or application is allowed to access. Once authentication is successfully completed, authorization checks whether the authenticated entity has the necessary permissions to perform specific actions or access particular resources within a system.

### What are Methods Available in Node.js?

Node.js provides a variety of methods through its built-in modules. Here are some commonly used methods available in Node.js:

- `fs.readFile()`: Reads the content of a file asynchronously.
- `http.createServer()`: Creates an HTTP server instance.
- `http.request()`: Initiates an HTTP client request.
- `http.get()`: Initiates an HTTP GET request.
- `http.post()`, `http.put()`, `http.patch()`, `http.delete()`: Initiates various HTTP request methods.
- `path.join()`: Joins path segments together.
- `events.EventEmitter()`: Creates an event emitter instance.
- `util.promisify()`: Converts callback-based functions to promise-based functions.

### How Can We Authorize a GET Method Call?

To authorize a GET method call, you typically follow these steps:

1. **Authentication:** Authenticate the user making the request to ensure their identity.
2. **Authorization Logic:** Check the user's role, permissions, or other relevant attributes to determine if they are allowed to access the specific resource associated with the GET request.
3. **Middleware/Logic:** Implement middleware or logic that intercepts the GET request before it's processed. Within this middleware, you apply the authorization logic. If the authorization check fails, you may respond with an error or deny access.

### What are Three Types of Authentication Layers?

There are three primary layers of authentication within a system:

1. **User Authentication:** This layer involves verifying the identity of users trying to access a system. Common methods include using usernames, passwords, biometrics, or tokens to ensure that the user is who they claim to be.

2. **Application/API Authentication:** In addition to user authentication, applications or APIs may require authentication to verify that only authorized applications can access their services. This can involve using API keys, client IDs and secrets, or other application-specific credentials.

3. **Resource Authentication/Authorization:** Once the user and application are authenticated, resource-level authentication and authorization come into play. This layer ensures that the authenticated entity has the necessary permissions to access specific resources or perform certain actions within the system.
