const redis = require("redis")
const client = redis.createClient({ host: "redis" })

client.on("ready", () => {
  console.log("Connection is ready...")
})

client.on("error", (err) => {
  console.log(err)
})

client.on("message", (channel, message) => {
  console.log("Received new message! 🔔")

  console.log(`Message is: ${JSON.parse(message).fullName}, from channel: ${channel}`)
})

client.subscribe("UserCreated")
