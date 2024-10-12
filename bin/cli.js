#!/usr/bin/env node

const { exec } = require("child_process")
const path = require("path")
const open = require("open")
const serveStatic = require("serve-static")
const finalhandler = require("finalhandler")
const http = require("http")

const serve = serveStatic(path.join(__dirname, "../dist"))

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res))
})

const PORT = 3232

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
  open(`http://localhost:${PORT}`)
})
