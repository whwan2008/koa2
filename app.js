const Koa=require('koa');
const controller=require('./controller');
const bodyParser=require('koa-bodyparser');
const app =new Koa();


app.use(async(ctx,next)=>{
console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});





app.use(bodyParser());
app.use(controller());
app.listen(3000);
console.log('app started at port 3000...')


