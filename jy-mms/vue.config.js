module.exports = {
    // 设置路径
    publicPath : "./",
    //配置服务器
    devServer : {
        port : 8888, //设置端口号
        https : false,  //不开启https协议
        host : "localhost", //设置主机名
        open : true //自动打开浏览器
    },
    //关闭eslint
    lintOnSave : false,
    //打包时不生成.map文件
    productionSourceMap : false
}