module.exports = {
    HOST: 'us-cdbr-east-05.cleardb.net',
    USER: 'b7a10c38526c04',
    PASSWORD: '5f8cf741',
    DB: 'heroku_0b5bfcc46491252',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
