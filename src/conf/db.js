const env = process.env.NODE_ENV  //环境变量

// 数据库配置
let MYSQL_CONF

if(env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'wojiaobobi123',
        port: '3306',
        database: 'myblog'
    }
}

if(env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'wojiaobobi123',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}