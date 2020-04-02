# Getting Started with Node
- Node is a runtime environment for executing JS code.
- Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest
JS engine in the world.
- We use Node to build fast and scalable networking applications. It’s a perfect
choice for building RESTful services.
- Node applications are single-threaded. That means a single thread is used to
serve all clients.
- Node applications are asynchronous or non-blocking by default. That means
when the application involves I/O operations (eg accessing the file system or the
network), the thread doesn’t wait (or block) for the result of the operation. It is
released to serve other clients.
- This architecture makes Node ideal for building I/O-intensive applications.
- You should avoid using Node for CPU-intensive applications, such as a video
encoding service. Because while executing these operations, other clients have
to wait for the single thread to finish its job and be ready to serve them.
- In Node, we don’t have browser environment objects such as window or the
document object. Instead, we have other objects that are not available in
browsers, such as objects for working with the file system, network, operating
system, etc.

------------------------------------------------------

# Node Core

- We don’t have the window object in Node.
- The global object in Node is “global”.
- Unlike browser applications, variables we define are not added to the “global”
object.
- Every file in a Node application is a module. Node automatically wraps the code
in each file with an IIFE (Immediately-invoked Function Expression) to create
scope. So, variables and functions defined in one file are only scoped to that file
and not visible to other files unless explicitly exported.
- To export a variable or function from a module, you need to add them to
module.exports:
module.exports.sayHello = sayHello;
- To load a module, use the require function. This function returns the
module.exports object exported from the target module:
const logger = require(‘./logger’);
- Node has a few built-in modules that enable us to work with the file system, path
objects, network, operating system, etc.
- EventEmitter is one of the core classes in Node that allows us to raise (emit) and
handle events. Several built-in classes in Node derive from EventEmitter.
- To create a class with the ability to raise events, we should extend EventEmitter:
class Logger extends EventEmitter {
}
-----------------
# NPM

- Every Node application has a package.json file that includes metadata about the
application. This includes the name of the application, its version, dependencies,
etc.
- We use NPM to download and install 3rd-party packages from NPM registry:
- All the installed packages and their dependencies are stored under
node_modules folders. This folder should be excluded from the source control.
- Node packages follow semantic versioning: major.minor.patch
- Useful NPM commands are:
    - Install a package
    ```npm i <packageName> ```
    - Install a specific version of a package
    ```npm i <packageName>@<version>```
    - Install a package as a development dependency
    ```npm i <packageName> —save-dev```
     - Uninstall a package
    ```npm un <packageName>```
     - List installed packages
    ```npm list —depth=0```
     - View outdated packages
    ```npm outdated```
     - Update packages
    ```npm update```
     - To install/uninstall packages globally,
    ```use -g flag.```
