export const config = {
  development: {
    client: 'oracledb',
    connection: {
      user: 'ROGER_HIDEKI',
      password: '3141592',
      connectString: 'localhost:1521/xe',
    },
  },

  staging: {},

  production: {},
}
