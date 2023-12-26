import express from 'express'
import ViteExpress from 'vite-express'
import passport from 'passport';

const app = express();
const serverPort = 3001;

app.get('/test', (_, res) => {
  console.log('sick')
  res.send({data: "Hello from Express!"});
});

app.get('/login/google', passport.authenticate('google'));

ViteExpress.listen(app, serverPort, () => {
  console.log(`Server listening on port ${serverPort}`); 
});