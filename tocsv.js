const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const language_directory = path.resolve('languages')
const encoding = {
  encoding: 'utf-8'
}

const files = fs.readdirSync(language_directory)
const result = files.reduce((acc, filename) => {
  let filepath = path.resolve(language_directory, filename)
  let language = path.basename(filename, '.yml')
  let translation = yaml.load(fs.readFileSync(filepath, encoding))

  acc.id.push(language)

  Object.keys(translation[language]).forEach((key) => {
    let value = translation[language][key]

    acc[key] = acc[key] || []
    acc[key].push(value)
  })

  return acc
}, {
  id: []
})

console.log(result)

