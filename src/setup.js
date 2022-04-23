require("dotenv").config()
let bashArray = []

process.argv.forEach((index, value) => bashArray.push(index))

const url = bashArray[4]
const threads = bashArray[3]

if (!isNaN(parseInt(threads) && isValidURL(url))) {
  process.env["THREADS"] = threads
  process.env["URL"] = url
  console.log(`Setting up...`)
  console.log(`Crawling through: ${url}`)
} else {
  console.log("Invalid command.")
}

function isValidURL(url) {
  var res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  )
  return res !== null
}

const { exec } = require("child_process")

exec("npm start", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})
