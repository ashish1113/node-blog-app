let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    //uri: 'mongodb://test:test@127.0.0.1:27010/blogAppDB'
   uri: 'mongodb://127.0.0.1:27017/blogAppDB'
}
appConfig.apiVersion = '/api/v1';


module.exports ={
    port: appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    environment:appConfig.env,
    db : appConfig.db,
    apiVersion : appConfig.apiVersion
}//end of module export