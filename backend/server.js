const Fastify = require("fastify")
const setupWebSocket = require("./websocket")

const fastify = Fastify({ logger: true })

fastify.get("/", async () => {
  return { status: "CppNote backend running" }
})

setupWebSocket(fastify.server)

const start = async () => {
  try {
    await fastify.listen({ port: 4000 })
    console.log("Backend running on port 4000")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()