const websocket = require('ws')
const ws = new websocket('wss://stream.binance.com:9443/ws/btcbrl@bookTicker');
ws.onmessage = (event) => {
    process.stdout.write('/033c')
    const obj = JSON.parse(event.data)
    console.log(`Symbol ${obj.s} `)
    console.log(`Best ask: ${obj.a} `)
    console.log(`Best bird: ${obj.b} `)
    //stockPriceElement.innerHTML = obj
}