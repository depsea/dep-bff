import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import * as koa from 'koa';
import * as koaBody from 'koa-bodyparser';
import * as koaLogger from 'koa-logger';
import * as koaRouter from 'koa-router';
import { Schema } from './app';
import { APP_NAME, APP_PORT } from './config';
import { Logger } from './utils';

const app = new koa();

app.use(koaBody());
app.use(koaLogger());

const _router = new koaRouter();

_router.get('/graphql', graphqlKoa({ schema: Schema }));
_router.post('/graphql', koaBody(), graphqlKoa({ schema: Schema }));
_router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(_router.routes());
app.use(_router.allowedMethods());

app.listen(APP_PORT, () => Logger.log(`${APP_NAME} running at ${APP_PORT} ports.`));
