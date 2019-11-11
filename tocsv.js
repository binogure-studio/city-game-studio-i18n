const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const language_directory = path.resolve('languages')
const encoding = {
  encoding: 'utf-8'
}

const files = fs.readdirSync(language_directory)
const result = files.reduce((acc, filename) => {
  console.error(`Reading ${filename}`)

  let filepath = path.resolve(language_directory, filename)
  let language = path.basename(filename, '.yml')
  let translation = yaml.load(fs.readFileSync(filepath, encoding))

  acc.id.push(language)

  Object.keys(translation[language]).forEach((key) => {
    let value = translation[language][key]

    if (/.*\n$/.test(value)) {
      value = value.slice(0, value.length - 1)
    }

    acc[key] = acc[key] || []
    acc[key].push(value)
  })

  return acc
}, {
  id: []
})

let amount_of_translations = result.id.length

console.log(Object.keys(result).reduce((acc, key) => {
  let value = result[key]
  let amount_of_percent = null

  if (amount_of_translations != value.length) {
    console.error(`Error on ${key}`)
  }

  value.forEach((item) => {
    if (amount_of_percent == null) {
      amount_of_percent = item.split('%d').length
    } else if (item != null && amount_of_percent != item.split('%d').length) {
      console.error(`Error with ${key} ${item}`)
    }
  })

  amount_of_percent = null

  value.forEach((item) => {
    if (amount_of_percent == null) {
      amount_of_percent = item.split('%s').length
    } else if (item != null && amount_of_percent != item.split('%s').length) {
      console.error(`Error with ${key}`)
    }
  })

  return `${acc}${key},"${value.join('","')}"
`
}, ''))
