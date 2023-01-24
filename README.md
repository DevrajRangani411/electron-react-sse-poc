# SSE Poc

Purpose of this repository is to understand the usage of Capturing Server Side Events using Electron-React.

## Usage

1. Please make sure that you have backend project up and running

   ```bash
   https://github.com/bhupeshisanurd/sse-poc
   ```

2. Once project is clone install packages

   ```bash
   yarn install
   ```

3. Once the installation is done, start the application

   ```bash
   yarn run electron:serve
   ```

4. Once the server is up and app is running, then send a request to `/trigger` endpoint
   ```bash
   curl -X POST -d "Write message" localhost:8080/trigger
   ```

## Resources

- [EventSource - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)
