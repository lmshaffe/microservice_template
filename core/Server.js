const path = require('path');
const { Logger, Config, ExpressServer, RouteLoader, Notifier } = require('microservice_core');

const appRoutes = require.resolve('../config/core/app_routes.json');
const viewPath = path.join(__dirname, '../views');

class Server {

  async start(options = {}) {
    try {
      Config.load({ appRoutes, viewPath });
      Notifier.inject(SlackApi.create());
      await Notifier.notify('Starting application.');
      ExpressServer.start(options);
      this.app = ExpressServer.app;
      this.router = ExpressServer.router;
      RouteLoader.load(this);
      await Notifier.notify('Application started.');
    } catch(err) {
      Logger.error(err);
      throw err;
    }
  }
}

class ServerManager {
  static getInstance() {
    if (!ServerManager.instance) ServerManager.instance = new Server();
    return ServerManager.instance;
  }
}

module.exports = ServerManager;
