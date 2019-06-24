module.exports = {
  apps : [{
    name: 'laundry',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '145.131.3.166',
      ref  : 'origin/master',
      repo : 'mosl3m@145.131.3.166:/home/mosl3m/laundry.git',
      path : '/var/www/laundry',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
