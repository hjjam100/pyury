module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'pyury'),
        username: env('DATABASE_USERNAME', 'hong'),
        password: env('DATABASE_PASSWORD', 'hong1128.'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
