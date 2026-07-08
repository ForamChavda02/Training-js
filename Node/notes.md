-Node.js is a free, open source tool that lets you run javascript outside the web browser.
-with Node.js you can build fast and scalable applications like web servers, APIs, tools and more.

What is npm?
-npm is the package manager for Node.js
-It helps you install and manage third-party packages (libraries) to add more features to your apps.

What can Node.js Do?
-Web Servers: Create fast, scalable network applications
-File Operations: Read, write, and manage files on the server.
-Database Interaction: Work with databases like MongoDB, MySQL, and more
-APIs: Build RESTful services and GraphQL APIs
-Real-time: Handle WebSockets for live applications
-CLI Tools: Create command-line applications

-The Node.js REPL (Read-Eval-Print Loop) is an interactive shell for executing JavaScript code.

Node.js V8 Engine:
-The V8 engine is Google's open-source javascript engine, used by Chrome and Node.js.
-It complies javascript to native machine code for fast execution.
-Origin: Developed by Google for Chrome in 2008
-Integration: Node.js uses V8 to provide JavaScript runtime on the server
-Features: Just-In-Time compilation, efficient garbage collection, ES6+ support
-Node.js uses a single-threaded, event-driven architecture that is designed to handle many connections at once, efficiently and without blocking the main thread.

Node.js is particularly well-suited for:
  -I/O-bound applications - File operations, database queries, network requests
  -Real-time applications - Chat apps, live notifications, collaboration tools
  -APIs - RESTful services, GraphQL APIs
  -Microservices - Small, independent services

Node.js Event Loop:
-the event-loop is what makes Node.js non-blocking and efficient.
-It handles asynchronous operations by delegating tasks to the system and processing their results through callbacks, allowing Node.js to manage thousands of concurrent connections with a single thread.

Node.js Async / Await:
-Async / Await is a modern way to handle asynchronous operations in Node.js, building on top of Promises to create even more readable code.
-Async / Await makes asynchronous code look and more feel like synchronous code.It does not block the main thread, but is easy to follow and understand.

Syntax and Usage:
-The syntax consists of two keywords:
-async: Used to declare an asynchronous function that returns a promise.
-await: Used to pause execution until a Promise is resolved, can only be used inside async functions.

Best Practices:
-Remember that async functions always return Promises.
-Use Promise.all for concurrent operations.
-When operations can run in parallel, use Promise.all to improve performance.
-Alwasy handle erros: use try/catch blocks or chain a.catch() to the async function call.
-Avoid mixing async / await with callbacks: convert callback-based functions to Promise using util.promisify or custom wrappers.
-Create clean async functions: keep async functions focused on a single responsibility.

Node.js Error Handling:
-Errors are inevitable in any program, but how you handle them makes all the difference. In Node.js, proper error handling is crucial because:
  -It prevents applications from crashing unexpectedly.
  -It provides meaningful feedback to users.
  -It makes debugging easier with proper error context.
  -It helps maintain applications stability in production.
  -It ensures resources are properly cleaned up.

Node.js Modules:
-Modules are the building blocks of Node.js applications, allowing you to organize code into logical, resuable, components.
-To use any built-in module, use the require() function.

Creating and Exporting Modules:
-In Node.js, any file with a .js extension is a module. You can export functionality from a module in serveral ways.

Package:
-A package in Node.js contains all the files you need for a module.
-Modules are javascript libraries you can include in your project.

Node.js package.json:
-pacakage.json is special file that describes your Node.js project.
-It contains information about your app, such as its name, version, dependencies, scripts, and more
-This file is essential for managing and sharing Node.js project, especially when using npm(Node Package Manager).

NPM Scripts:
-NPM Scripts are commands you define in your package.json file to automate tasks like:
  -Running your app
  -Testing
  -Building
  -Cleaning up files.
-They make it easy to manage common tasks with simple commands.

Running NPM Scripts:
-To run a script use: npm run dev
-For the special start script, you can just use: npm start
-And for test: npm test

Dependency Management:
-Dependency management is the process of tracking, installing, updating, and removing the external packages your application depends on.
-It helps ensure your application remains stable, secure and maintainable over time.
-npm(node package manager) is the default package manager for Node.js, but alternatives like yarn and pnpm are also popular.
-Use dependencies for packages needed in production, and devDependencies for packages only needed during development or testing.

Package Lock Files:
-Lock files ensure consistent installations across different environments by recording the exact version of each package and its dependencies.
-Always commit your lock files to version control to ensure consistent installation across your team and deployment environments.

Handling different HTTP Methods:
-RESTfulAPIs commonly use different HTTP methods(GET, POST, PUT, DELETE, etc.) to perform different operations on resources.

HTTPS:
-The main difference in usage is that HTTPS requires SSL/TLS cerificates, while HTTP does not.

-req.url comes from the URL that the client(browser)sends in its HTTP request, and Node.js automatically stores that path in req.url.
-The req.headers object, which contains information automatically sent by the browser along with every HTTP request to the server.
-Every HTTP request means every time a client(like your browser)asks the server for something(such as a webpage, image, or icon).

Types of Certificates:
-Self-Signed Certificates: For development and testing(not trusted by browsers)
-Domain Validates(DV): Basic validation, just verifies domain ownership.
-Extended Validation(EV): Highest level of validation, shows company name in browser
-Organization Validation(): Validates Organization details.
-wildcard Certificates: Secures all subdomains of a domain.
-Multi-Domain(SAN) Certificates: Secures multiple domains with one certificate.

Production Deployment:
-In production, it's recommended to use a reverse proxy like Nginx or Apache in front of your Node.js application.

-req = information sent from the client to the server.
-res = information sent from the server back to the client.

-Be extremely careful with file deletion, especially when using recursive options or wildcards.Always validate and sanitize file paths to prevent directory traversal attacks.

Path Module:
-The Path module is a built-in Node.js module that provides tools for handling and transforming file paths across different operating system.
-Since Windows uses backslashes(\) and POSIX systems(Linux, macOS)use forward slashes(/), the path module helps write cross-platform code that works correctly on any system.

Path Module Methods:
-path.basename(): returns the last portion of a path, similar to Unix basename command.
-in Node.js, __dirname and __filename are special variables available in CommonJS modules that provide the directory name and file name of the current module.

path.extname():
-Returns the extension of a path, from the last occurrence of the . character to the end of the string.

path.join():
-Joins all given path segments together using the platform-specific seprator as a delimiter, then normalizes the resulting path.
-path.join() is preferred over string concatenation with + as it handles different path seprators across operating systems.

path.resolve():
-Resolves a sequence of paths or path segments into an absolute path, processing from right to left until an absolute path is constructed.

path.parse():
-Returns an object whose properties represent significant elements of the path.

path.format():
-Returns a path string from an object, which is the opposite of path.parse().

path.normalize():
-Normalizes the given path, resolving .. and . segments and removing redundant separators.

path.relative():
-Returns the relative path from the first path to the second path, or an empty string if the paths are the same.

path.isAbsolute():
-Determines if the given path is an absolute path. An absolute path will always reslove to the same location, regardless of working directory.

Node.js OS Module:
-The OS module in Node.js provides a powerful set of utilities for interacting with the underlying operating system.
-It offers a cross-platform way to access system-related information and perform common operating system tasks. 

URL Module:
-The URL Module provides utilities for URL resolution and parsing.
-It can be used to split up a web address into readable parts, construct URLS, and handle different URL components.

URL parsing and Formatting:
-When you parse a URL, you get a URL object with the following properties:
 -href: The full URL that was parsed.
 -protocol: The protocol scheme(e.g., 'http')
 -host: The full host portion(e.g.,'example.com:8080')
 -hostname: The hostname portion(e.g.,'example.com')
 -port: The port number if specified.
 -pathname: The path section of the URL
 -Search: The query string including the leading?
 -query: Either the query string without the ?, or a parsed query object
 -hash: The fragment identifier including the #.

Node.js Streams:
-In Node.js, streams are collections of data, which might not be available in full at once and dont have to fit in memory.
-think of them as conveyor belts that moves data from one place to another, allowing you to work with each piece as it arrives rather than waiting for the whole dataset.

Reading Modes:
-Flowing Mode: Data is read from the source and provided to your application as quickly as possible using events
-Paused Mode: You must explicitly call stream.read() to get chunks of data from the stream.
-Pipe(): The pipe() method connects a readable stream to a wriable stream, automatically managing the flow of data and handling backpressure. its the     easiest way to consume streams.
-the pipe() method returns the destination stream, which enables chaining.

Duplex Streams:
-Duplex streams are both readable and writable, like a two-way pipe.
-A TCP socket is a good example of a duplex stream

Transform Streams:
-Transform stream are duplex streams that can modify data as it passes through.
-They're ideal for processing data in pipelines.

Buffer Module:
-The Buffer module in Node.js is used to handle binary data.
-Buffers are similar to arrays of integers but are fixed-length and correspond to raw memory allocation outside the v8 javascript engine.
-Node.js provides the buffer class as a global object, so you dont need to require or import it explicitly.

Node.js Crypto Module:
-the crypto module is a built-in Node.js module that provides cryptographic functionality including:
  -Hash functions(SHA-256, SHA-512, etc.)
  -HMAC(Hash-based Message Authentication Code)
  -Symmetric encryption (AES, DES, etc.)
  -Asymmetric encryption (RSA, ECDSA, etc.)
  -Digital signatures and verification
  -Secure random number generation

-createHash(): creates a hash object with the specified algorithm
-update(): updates the hash content with the given data
-digest(): calculates the digest and outputs it in the specified format.

Hash-based Message Authentication Code:
-HMAC is a specific type of message authentication code(MAC) involving a cryptographic hash function and a secret cryptographic key:
-It provides both data integrity and authentication.

When to use HMAC:
-API request verification.
-Secure cookies and sessions
-Data integrity checks
-Webhook verification

Timer Module:
-The Timers module provides functions that help schedule code execution at specific times or intervals.
-Unlike browser Javascript, Node.js timing functions are provided as part of the Timer module, though they are available globally without requiring an explicit import.

DNS Module:
-The DNS(Domain Name System) module provides functionality for name resolution in Node.js
-it offers two main APIs:
  -1. Callback-based API: Traditional Node.js style with callback functions
  -2.Promise-based API: Moder Async / await support via dns.promises.

Basic DNS lookups:
-dns.lookup(): Uses the operating system's facilities to resolve hotsnames
-dns.resolve(): Performs DNS queries directly to name servers.
-dns.reverse(): Performs reverse DNS lookups(IP to hostname).

Node.js Assert Module:
-The Assert module provides a simple yet powerful set of assertion tests for validating invariants in your code.

Node.js Util Module:
-The Util Module is a core Node.js module that provides a collection of utility functions for common tasks.

Node.js Readline Module:
-The readline module is a core Node.js module that provides an interface for reading data from a Readable stream(like process.stdin)one line at a time.
-It is perfect for any application that needs to interact with users through the command line or process text input in a line-oriented way.

Node.js TypeScript:
-TypeScript is a superset of Javascript that adds optional static typing.
-It helps you catch errors early and write safer, more maintable code.

Node.js Frameworks:
-Node.js frameworks provide structure, organization, and common utilities for building web application APIs, and more.

Express.js:
-Express is the most popular and widely used Node.js framework, known for its simplicity and flexibility.
-Ideal for: Building web applications and web APIs of any size.

Basic routing in Express:
-app.get(): Handle GET requests
-app.post(): handle POST requests
-app.put(): Handle PUT requests
-app.delete(): Handle DELETE requests
-app.all(): Handle all HTTP methods

Middlewear in Express:
-Middlewear functions are the backbone of Express applications.
-They have access to:
  -The request object(req)
  -the response object(res)
  -the next middleware function in the stack(next)
-Middleware can:
  -Exectue any code
  -Modify request and response objects
  -End the request-response cycle
  -Call the next middleware in the stack

Built-in Middleware:
-express.json()- Parse JSON request bodies
-express.urlencoded()- Parse URL-encoded request bodies
-express.static()- Serve static files
-express.Router()- Create modular route handlers.

Error Handling in Express:
-Error handling in Express is done through special middlewear functions that have four argumets:
-(err, req, res, next).
-