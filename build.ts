import path from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

;(async () => {
  const res = await build({
    root: path.resolve(__dirname, './')
  })
  console.log(res)
})()
