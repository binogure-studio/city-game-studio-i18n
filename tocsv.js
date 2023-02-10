const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const language_directory = [path.resolve('languages'), path.resolve('achievements')]
const encoding = {
  encoding: 'utf-8'
}
const files = language_directory.reduce((acc, directory) => {
  return acc.concat(fs.readdirSync(directory).map((filename) => {
    return path.resolve(directory, filename)
  }))
}, [])

const result = files.reduce((acc, filepath) => {
  let language = path.basename(filepath, '.yml')
  let translation = yaml.load(fs.readFileSync(filepath, encoding))

  console.error(`Reading ${filepath} (${language})`)

  if (!acc.id.find((item) => item == language)) {
    acc.id.push(language)
  }

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
    console.error(`Error on ${key} (Expected: ${amount_of_translations}, actual: ${value.length})`)
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
      console.error(`Error with ${key} ${item}`)
    }
  })

  return `${acc}${key},"${value.join('","')}"
`
}, ''))
