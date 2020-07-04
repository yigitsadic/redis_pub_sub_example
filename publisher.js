const redis = require("redis")
const faker = require("faker")

const client = redis.createClient({ host: "redis" })

function publishMessage() {
  client.publish("UserCreated", JSON.stringify({
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    userId: faker.random.uuid()
  }), () => {
    console.log("Sent new message! 🔥")
  })
}

client.on("ready", async () => {
  console.log("Connection is ready...")

  while (true) {
    await new Promise(resolve => setTimeout(resolve, 5000));

    publishMessage()
  }
})

client.on("error", (err) => {
  console.log(err)
})
