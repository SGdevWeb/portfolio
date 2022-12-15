module.exports = {
  apps : [{
    name: 'portfolio',
    script: './server/server.js',
    instances: 'max',
    watch: true,
    env: {
      NODE_ENV: 'dev'
    },
    env_production: {
      NODE_ENV: 'prod'
    }
  }],
};
