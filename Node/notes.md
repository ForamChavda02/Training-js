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