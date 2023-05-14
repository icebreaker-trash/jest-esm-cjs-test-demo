// import path from 'path'
// import { fileURLToPath } from 'url'
// import { build } from 'vite'
const path = require('path')
const vitePath = require.resolve('vite')
const vite = require(vitePath)
// const __dirname = fileURLToPath(new URL('.', import.meta.url))

async function build() {
  console.log(vitePath)
  const res = await vite.build({
    root: path.resolve(__dirname, '../src'),
    build: {
      write: false
    }
  })
  return res
}
// build()
module.exports = {
  build
}
