let socket = null

function connect() {

  socket = new WebSocket("ws://localhost:4000")

}

function sendExecution(code, callback) {

  if (!socket) connect()

  socket.onmessage = (event) => {

    const msg = JSON.parse(event.data)
    callback(msg)

  }

  socket.send(JSON.stringify({
    type: "execute_request",
    code
  }))
}

export default sendExecution