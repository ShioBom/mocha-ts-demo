process.env.NODE_ENV = "development";

process.on("unhandledRejection", (err) => {
  throw err;
});

const configFactory = require('../config/webpack.dev.config');

const compiler = createCompiler({
    appName,
    config,
    devSocket,
    urls,
    useYarn,
    useTypeScript,
    tscCompileOnError,
    webpack,
  });