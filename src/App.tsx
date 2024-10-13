import { useState, useEffect } from "react"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  const [schema, setSchema] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/schema")
      .then(res => res.text())
      .then(data => {
        setSchema(data)
      })
  }, [])
  console.log(schema)

  return (
    <div className="">
      <ModeToggle />
      <pre className="">{schema}</pre>
    </div>
  )
}

export default App
