module.exports = {
  apps : [{
    name: 'Laundry_web_app',
    script: 'npx',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'serve build -s',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    development : {
      user : 'root',
      host : '145.131.3.166',
      ref  : 'origin/master',
      repo : '/home/git/laundry.git',
      path : '/root/laundry/',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env development'
    }
  }
};
