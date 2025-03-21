import { Context, APIGatewayProxyEvent } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import { app } from '../src/app';

const server = awsServerlessExpress.createServer(app);

export const addressHandler = (event: APIGatewayProxyEvent, context: Context) => {
    return awsServerlessExpress.proxy(server, event, context);
};
