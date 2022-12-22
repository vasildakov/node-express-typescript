import app from './app'

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${host}:${port}`);
});
