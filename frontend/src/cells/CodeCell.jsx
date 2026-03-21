import { useState } from "react"
import Editor from "@monaco-editor/react"
import sendExecution from "../services/kernelClient"

function CodeCell() {

  const [code, setCode] = useState("int a = 5;")
  const [output, setOutput] = useState("")

  const runCell = () => {

    sendExecution(code, (msg) => {

      if (msg.type === "stdout") {
        setOutput(msg.data)
      }

    })

  }

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>

      <button onClick={runCell}>Run</button>

      <Editor
        height="200px"
        language="cpp"
        value={code}
        onChange={(v) => setCode(v)}
      />

      <div>
        <b>Output:</b>
        <pre>{output}</pre>
      </div>

    </div>
  )
}

export default CodeCell