// import { OutputChunk, RollupOutput } from 'rollup'
// const { build } = require('./build')
const path = require('path')
function assertOutputHashContentChange(
  output1, // : RollupOutput,
  output2 // : RollupOutput
) {
  for (const chunk of output1.output) {
    if (chunk.type === 'chunk') {
      const chunk2 = output2.output.find(
        (c) => c.type === 'chunk' && c.fileName === chunk.fileName
      ) // as OutputChunk | undefined
      if (chunk2) {
        expect(
          chunk.code
          // `the ${chunk.fileName} chunk has the same hash but different contents between builds`
        ).toEqual(chunk2.code)
      }
    }
  }
}
describe('[Default]', () => {
  test('common build', async () => {
    const vitePath = require.resolve('vite')
    console.log(vitePath)
    const vite = require(vitePath)
    const res = await vite.build({
      root: path.resolve(__dirname, '../src'),
      build: {
        write: false
      }
    })
    expect(res).toMatchSnapshot()
    // console.log(res)
    // const result = await build()
    // assertOutputHashContentChange(result[0], result[1])
  })
})
