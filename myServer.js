var express         = require('express'),
    morgan          = require('morgan')('dev'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    sockets         = require('socket.io'),
    colors          = require('colors'),
    multiparty      = require('connect-multiparty'),
    fs              = require('fs'),
    cors            = require('cors'),
    clientSessions  = require('client-sessions'),
    authShit        = require('./controllers/auth'),
    PORT            = process.env.PORT || 4000,
    app             = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bc');

var sessionsMiddleware = clientSessions({
    cookieName: 'auth-cookie',
    secret: 'BCAPP',
    requestKey: 'session',
    duration: (86400*1000)*7,
    cookie: {
      ephemeral: false,
      httpOnly: true,
      secure: false
    }
})

app.use(
  express.static('public'),
  bodyParser.json()
);


app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

app.get('/auth', (req,res)=>{
    res.sendFile('auth.html', {root:'./public/html/'});
  });

app.post('/register', authShit.registerUser);

app.listen(PORT, (err) =>{
  if (err){
    console.log('Server error:', err);
  } else {
    console.log(`Server up and running on port: ${PORT}`);
  }
});