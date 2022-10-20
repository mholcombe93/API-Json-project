import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';


fetch('http://www.nokeynoshade.party/api/queens?limit=50')
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./seed/queens.json", JSON.stringify(data)))
  .catch(error=> console.error(error))