'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAOtVrRC9GABAPZBLHFwiDjB9zmtfhLYRgRCnxPZCSjRGf79xgr2L5AoigBYwilJULRi5QU9t9wEhezg6ukWSUlGxgZARDP3kp5m1DriUbc7aX2uWRk1VwI3qir2X6p5atrDzkfoZBgyXtqgxCuHFnKQHI3sB7FA67XqMOnoWrv84xKq1D02',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
