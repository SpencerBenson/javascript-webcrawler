import fetch from "node-fetch"
import * as cheerio from "cheerio"
import * as linkParser from "url"

require("dotenv").config()

const link = process.env.URL
const threads = process.env.THREADS
const ignore = "/search"

const visitedlinks: object = {}

const crawlLink = async ({ link, ignore, threads }) => {
  try {
    if (!link) {
      console.log("")
    }
    if (visitedlinks[link]) return
    console.log(link)
    visitedlinks[link] = true

    const { host, protocol } = linkParser.parse(link)

    const response = await fetch(link)
    const html = await response.text()
    const $ = cheerio.load(html)
    const links = $("a")
      .map((i, link) => link.attribs.href)
      .get()

    const imagelinks = $("img")
      .map((i, link) => link.attribs.src)
      .get()

    links
      .filter((link) => link.includes(host) && !link.includes(ignore))
      .forEach((link) => {
        try {
          crawlLink({
            link: getlink(link, host, protocol),
            ignore,
            threads,
          })
        } catch (e) {
          console.log("")
        }
      })
  } catch (err) {
    console.log("")
  }
}
const getlink = (link, host, protocol) => {
  if (link.includes("http")) {
    return link
  } else if (link.startsWith("/")) {
    return `${protocol}//${host}${link}`
  } else {
    return `${protocol}//${host}/${link}`
  }
}
crawlLink({
  link,
  ignore,
  threads,
})
