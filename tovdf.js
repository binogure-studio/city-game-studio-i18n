const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

const langMatch = {
  de: 'german',
  en: 'english',
  es: 'spanish',
  ko: 'korean',
  pt: 'portuguese',
  fr: 'french',
  ru: 'russian',
  tr: 'turkish'
}
const language_directory = path.resolve('achievements')
const encoding = {
  encoding: 'utf-8'
}

console.log('"lang" {')

const files = fs.readdirSync(language_directory)
files.map((filename) => {
  console.error(`Reading ${filename}`)

  let filepath = path.resolve(language_directory, filename)
  let language = path.basename(filename, '.yml')
  let translation = yaml.load(fs.readFileSync(filepath, encoding))

  console.log(`  "${langMatch[language]}" {
    "Tokens" {`)

  Object.keys(translation[language]).forEach((key) => {
    let value = translation[language][key]

    if (/.*\n$/.test(value)) {
      value = value.slice(0, value.length - 1)
    }

    console.log(`      "${key}"  "${value}"`)
  })

  console.log(`    }
  }`)
})

console.log(`}`)
