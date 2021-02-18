//load and initialize express
let express = require('express')
let app = express()
let fs = require("fs");
let path = require("path")
const fileupload = require('express-fileupload')

//import cors for cross-origin
const cors = require('cors');

//Require fileupload
app.use(express.urlencoded({ extended: true }));
app.use(fileupload())

//add cors method to app, this will allow server to get requesty from different port
const corsConfig = {
    origin: ["http://localhost:5500","http://127.0.0.1:5500","http://127.0.0.1:5500" ,"https://localhost:4000","http://localhost:4000"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type']
};
app.use(cors(corsConfig));

// Use express router
let router = express.Router();

// Configure router allow passing in json data
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//Default route
router.get('/', (req, res, next) => {    
    res.sendFile(__dirname + "/public/" + "index.html")
})

//Default POST route using express-fileupload
router.post('/saveImage', (req, res) => {
  const fileName = req.files.myFile.name
  const Image = req.files.myFile
  const path = __dirname + '/recievedfiles/' + fileName

  console.log(path);

  Image.mv(path, (error) => {
    if (error) {
      console.error(error)
      res.writeHead(500, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({ status: 'error', message: error }))
      return
    }

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({ status: 'success', path: '/img/houses/' + fileName }))
  })
})

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

//initialize port number
const PORT = process.env.PORT || 5000

//enable preflight for cors. This gives option * for paths without access
app.options("*", cors(corsConfig));

//start http server
var server = app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})