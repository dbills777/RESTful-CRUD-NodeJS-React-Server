### ApiServer With Templating Engine.

[API SERVER](https://frozen-coast-94100.herokuapp.com/api/players)
<hr>
## Uses same endpoints as API server #2. 
<hr>

<hr>
- Minimum 4 HTTP Types of endpoints
<hr>
From postman any of the below methods can be used on the specified ENDPOINTS.
refresh /api/players to see the changes that have been made in the mock database.
<hr>
- GET  
   /api/players 
   - Returns the list from data.js
<hr>
- POST
  /api/players 
  - Example: /api/players/1 (with PostMan) A POST Request sent with postman to this creates a new player and adds it to the list of players. Key values sent in the BODY. The Keys are: name, team and rings. Any Values can be sent for each of these items. and it will create a new player matching with the information sent.
<hr>
- PUT
  /api/players/:id 
  - Example: /api/players/1 (with PostMan) A PUT Request sent with postman to this Endpoint finds the player with the ID from the Parameter and updates its information with values sent in the BODY. The Keys are: name, team and rings. Any Values can be sent for each of these items. and it will update the player matching the ID that is sent.
<hr>
- DELETE
  /api/players/:id
   - Example: /api/players/3 (with PostMan) A delete Request sent with postman to this Endpoint finds the player with the given ID and splices it out of the array
<hr>

- Database NOT required
- Data kept in memory (Static Object)
  - endpoints edit data in memory
- End Points are documented in APIreadme file
  - works and tested with live site and postman endpoints.
- End Points must return JSON Formatted Data
  - Postman shows each item action returned in JSON for PUT POST DELETE. GET can be seen in the browser.
