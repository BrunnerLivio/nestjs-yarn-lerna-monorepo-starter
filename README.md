# NestJS mono-repo starter

## Reproduce bug

yarn >= 1.12
node >= 10

```shell

# Clone
git clone https://github.com/BrunnerLivio/nestjs-monorepo-starter.git
cd nestjs-monorepo-starter
git checkout nohoist-bug

# Clean setup
rm -rf node_modules
yarn
yarn run clean

# Build
yarn run build
# Start
yarn run start

```

Log

```

$ node packages/cli/lib/main.js
[Nest] 22347   - 12/21/2018, 11:17:57 PM   [NestFactory] Starting Nest application...
[Nest] 22347   - 12/21/2018, 11:17:57 PM   [InstanceLoader] ApplicationModule dependencies initialized +7ms
(node:22347) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'create' of null
    at SocketServerProvider.createSocketServer (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/socket-server-provider.js:28:34)
    at SocketServerProvider.scanForSocketServer (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/socket-server-provider.js:23:20)
    at WebSocketsController.subscribeObservableServer (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/web-sockets-controller.js:31:60)
    at WebSocketsController.hookGatewayIntoServer (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/web-sockets-controller.js:23:14)
    at SocketModule.hookGatewayIntoServer (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/socket-module.js:39:35)
    at components.forEach.wrapper (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/socket-module.js:28:44)
    at Map.forEach (<anonymous>)
    at SocketModule.hookGatewaysIntoServers (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/socket-module.js:28:20)
    at modules.forEach (/home/brunnerlivio/workspace/nestjs-monorepo-bug/node_modules/@nestjs/websockets/socket-module.js:25:62)
    at Map.forEach (<anonymous>)
(node:22347) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
(node:22347) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Done in 0.37s.

```

## Fix bug

```shell

git checkout nohoist-fix

# Clean setup
rm -rf node_modules
yarn
yarn run clean

# Build
yarn run build
# Start
yarn run start

```