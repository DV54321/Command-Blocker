const discord = require('discord.js')
const client = new discord.Client()
const { Token } = require('./config.json')
var processVersion = '1.0.0'
var Start = new Date()
var SW = 1000
client.on('ready', () => {
  console.log(`${Start} || Starting Command Blocker v${processVersion}`)
  setTimeout(function (argument) {
    var end = new Date() - Start
    console.log('Command Blocker || Loaded' + `${client.guilds.size}` + ' in ', end)
    console.log(`${Start} || Running on node version ${process.versions.node}`)
  }, SW)
})
client.login(Token)
