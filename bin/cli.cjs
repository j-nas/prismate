const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

const prismaSchema = fs.readFileSync(
  path.join(__dirname, "../prisma/schema.prisma"),
  fs.read
)

console.log("\x1b[36m%s\x1b[0m", process.cwd())
console.log(__dirname)

app.use("/", express.static(path.join(__dirname, "../dist")))

app.get("/schema", (_req, res) => {
  res.setHeader("Content-Type", "text/plain")

  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(prismaSchema)
})
app.put("/schema", (req, res) => {
  fs.writeFileSync(path.join(__dirname, "../prisma/schema.prisma"), req.body)
  res.send("Schema updated")
})
// app.get()

app.listen(3000, () => {
  console.log("Prismate is running on http://localhost:3000")
})
