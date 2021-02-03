const fetch = require('node-fetch')

module.exports = async function searchName(name) {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
   
    let json = await response.json()
    return json

    
}

