/*
Heroku Commands Notes:
after git is setup....
- heroku login
- logs in with website
- heroku create
-git push heroku master (failed a few times, if this happens I reset in heroku web deploy tools)
*/
const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

// Data for testing ejs
const members = ['Cersei', 'Tywin', 'Tyrion', 'Jamie'];

//****************START API SERVER ASSIGNMENT*********************/
// Data for players display
let players = require('./data');

// GET REQUEST
app.get('/api/players', (req, res) => {
  if (!players) {
    res.status(404).json({ message: 'No Players in your list' });
  }
  res.json(players);
});
// GET REQUEST used params to get a specific player by id show only player with specified id
app.get('/api/players/:id', (req, res) => {
  const requestID = req.params.id;

  let player = players.filter((player) => {
    return player.id == requestID;
  });

  res.json(player[0]);
});
//POST REQUEST
app.post('/api/players', (req, res) => {
  const player = {
    id: players.length + 1,
    name: req.body.name,
    team: req.body.team,
    rings: req.body.rings,
  };
  players.push(player);
  res.json(player);
});
// PUT Request (update a player by id parameter)
app.put('/api/players/:id', (req, res) => {
  const requestID = req.params.id;
  let player = players.filter((player) => {
    return player.id == requestID;
  })[0];
  const index = players.indexOf(player);
  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    player[key] = req.body[key];
  });
  players[index] = player;
  res.json(players[index]);
});
const names = members.map((member) => {
  return member;
});
// DELETE (splice out player to act as delete)
app.delete('/api/players/:id', (req, res) => {
  const requestID = req.params.id;
  let player = players.filter((player) => {
    return player.id == requestID;
  })[0];
  const index = players.indexOf(player);
  res.json({
    message: `Player ${requestID},  ${player.name} has been deleted`,
  });
  players.splice(index, 1);
});
//****************END API SERVER ASSIGNMENT*********************/

//****************START SERVER ASSIGNMENT 3 TEMPLATING**********/
app.use((req, res, next) => {
  console.log('new request made');
  console.log('host', req.hostname);
  console.log('path', req.path);
  console.log('Express Method =', req.method);
  next();
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Some Title', names: names.join(' ') }); //Send dynamic data to the selected ejs page
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page', players }); //Send dynamic data to the selected ejs page
});

app.get('/player/create', (req, res) => {
  res.render('create', { title: 'Create' });
});
app.post('/postit', (req, res) => {
  console.log(req.body);
  players.push(req.body);
  res.redirect('/about');
});

// use middleware to handle as last resort for 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: "4 oh' 4" });
});
//****************END SERVER ASSIGNMENT 3 TEMPLATING**********/

// tell server to listen to requests
app.listen(process.env.PORT || port, () =>
  console.log(`"API App LIstening at http://localhost:${port}`)
);
