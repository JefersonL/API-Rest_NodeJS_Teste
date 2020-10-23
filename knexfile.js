/* eslint-disable no-undef */
module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '12345',
            database: 'ServerTeste'
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
}; 