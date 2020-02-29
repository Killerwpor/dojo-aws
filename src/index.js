const awSE=require("aws-serverless-express");
const app=require("./app");

const server=awSE.createServer(app);

exports.handler=(event, context) => {
    awSE.proxy(server, event, context);
}