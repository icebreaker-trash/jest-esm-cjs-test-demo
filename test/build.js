// import path from 'path'
// import { fileURLToPath } from 'url'
// import { build } from 'vite'
const path = require('path')
const vite = require('vite')
// const __dirname = fileURLToPath(new URL('.', import.meta.url))

async function build() {
  const res = await vite.build({
    root: path.resolve(__dirname, '../src'),
    build: {
      write: false
    }
  })
  return res
}

module.exports = {
  build
}
