# API-Json-project
Creating an API using mongoose and express

Racers, start your engines! This API retrieves information about the queens, seasons, and episodes of RuPaul's Drag Race!

type http://localhost:3000/queens for a list of 50  drag race queens with their name, when the entered the werkroom, if they won or were miss congeniality, an image, a quote, what season(s) and what place on the season.

EXAMPLE
  GET a specifc queen by ID

http://localhost:3000/queens/63514ded7dbcf240624eead1

  {
    "_id": "63514ded7dbcf240624eead1",
    "order": 21,
    "name": "Tatianna",
    "winner": false,
    "missCongeniality": false,
    "image_url": "http://www.nokeynoshade.party/images/tatianna.jpg",
    "quote": "Cause baby boy what you see, isnt always the truth.",
    "seasons": [
      {
        "seasonNumber": "2",
        "place": 4,
        "_id": "63514ded7dbcf240624eead2"
      },
      {
        "seasonNumber": "A2",
        "place": 6,
        "_id": "63514ded7dbcf240624eead3"
      }
    ],

  GET a specifc queen by Name. Start wtih http://localhost:3000/queens/name/ followed by the queen's naem capitlized. Note if there is a space in the name the space should be replaced with "%20" 
    
EXAMPLE
    http://localhost:3000/queens/name/Tatianna 

    http://localhost:3000/queens/name/India%20Ferrah 

By using a third party editor such as Postman, this api allows for the following funtionality:

  (get) get all Queens = /
  (get) get a Queen with _id= /:id
  (get) get a Queen wtih name = /name/:name
  (get) get a Queen with order number = /order/:order
  (post) add a Queen = /
  (put) update a Queen = /:id
  (delete) remove a Queen = /:id
  
  EXAMPLE: Get

  http://localhost:3000/queens/63514ded7dbcf240624eeaca

  {
  "_id": "63514ded7dbcf240624eeaca",
  "order": 18,
  "name": "Sahara Davenport",
  "winner": false,
  "missCongeniality": false,
  "image_url": "http://www.nokeynoshade.party/images/sahara-davenport.jpg",
  "quote": "I'm happy I survived, but of course I'm sad, you know I sent my friend home.",
  "seasons": [
    {
      "seasonNumber": "2",
      "place": 7,
      "_id": "63514ded7dbcf240624eeacb"
    }
  ],
  "__v": 0
}

EXAMPLE: Post create a new Queen, note ID's will auto generate

  POST localhost:3000/queens/ 

    "order": 710,
    "name": "OtherNewExampleQueen",
    "winner": false,
    "missCongeniality": false,
    "image_url": "",
    "quote": "I'm Also Not Real!",
    "seasons": [
        {
            "seasonNumber": "2",
            "place": 17
        }
    ],
    "__v": 0
}

EXAMPLE: Put or update something on a Queen by ID

  PUT localhost:3000/queens/63514ded7dbcf240624eeac5

  {
    "_id": "63514ded7dbcf240624eeac5",
    "name": "Kylie Sonique Love",
    "winner": true,
    "seasons": [
      {
        "seasonNumber": "2",
        "place": 9,
        "_id": "63514ded7dbcf240624eeac6"
      },
       {
        "seasonNumber": "AS6",
        "place": 1
      }
      ]
}

EXAMPLE: Delete a Queen using an Id

  DELETE localhost:3000/queens/6351584bab797bcdabd7188a


----------
Added programs:

Chalk
Cors
Express
Mongoose
Morgan
Node-fetch
nodemon
type-module
