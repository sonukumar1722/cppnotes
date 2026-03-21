const WebSocket = require("ws")
const executeCode = require("./execution/executor")

function setupWebSocket(server) {

  const wss = new WebSocket.Server({ server })

  wss.on("connection", (ws) => {
    console.log("Client connected")

    ws.on("message", async (message) => {

      const data = JSON.parse(message)

      if (data.type === "execute_request") {

        ws.send(JSON.stringify({
          type: "execution_started"
        }))

        const output = await executeCode(data.code)

        ws.send(JSON.stringify({
          type: "stdout",
          data: output
        }))

        ws.send(JSON.stringify({
          type: "execution_complete"
        }))
      }
    })
  })
}

module.exports = setupWebSocket