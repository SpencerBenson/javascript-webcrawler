# [javascript-webcrawler](https://javascript-webcrawlerjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/javascript-webcrawler/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/javascript-webcrawler.svg?style=flat)](https://www.npmjs.com/package/javascript-webcrawler) [![CircleCI Status](https://circleci.com/gh/facebook/javascript-webcrawler.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/javascript-webcrawler) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://javascript-webcrawlerjs.org/docs/how-to-contribute.html#your-first-pull-request)

javascript-webcrawler is a JavaScript web crawler for collecting links.

- **link:** javascript-webcrawler makes it painless to crawl a website and collect links.
- **Bash tool:** Once a website is crawled, the links/urls will be displayed on the console
- **image links:** It also collects image urls for a particular website, so you don have to.

## Installation

javascript-webcrawler is in it's alpha stage. Though there is room for improvement, it works right out of the box.

- [Step 1:] unzip the folder in your desired location.
- [step 2:]Install nodeJS from (https://nodejs.org/en/).
- [Step 3:] In case you don't already have, Install your favorite code editor eg Visual Studio Codde (https://code.visualstudio.com/).
- [Step 4:] Navigate to the project folder and run `npm i` in a bash interface, to install the dependencies.
- [Step 5:] Once the project is installed, you can start crawling.

## Examples

There are several wbsites you can crawl. Here is the first one to get you started:

## Sample code

```jsx
./crawl -n 4 https://www.amazon.com/
```

## Output:

```jsx
 https://www.amazon.com/gp/help/customer/display.html
 https://www.amazon.com/gp/primecentral
```

etc...
