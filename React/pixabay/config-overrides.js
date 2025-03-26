module.exports = function override(config, env) {
  config.watchOptions = {
    poll: true,
  };
  return config;
};
