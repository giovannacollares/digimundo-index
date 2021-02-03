const fetch = require('node-fetch')

module.exports = async function searchLevel(level) {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/level/${level}`)
   
    let json = await response.json()
    return json

    
}

