import { execSync } from 'child_process'
import fs from 'fs'

fs.rmSync('styled-system', { recursive: true, force: true })

genFiles('react')
genFiles('solid')

/** @param {string} framework */
function genFiles (framework) {
  console.log(`Generating ${framework} files`)

  // Generate files
  fs.writeFileSync('panda.config.json', JSON.stringify({ jsxFramework: framework }), 'utf-8')
  execSync('panda codegen', { stdio: 'inherit' })
  fs.renameSync('styled-system/jsx', `styled-system/${framework}`)
  fs.renameSync('styled-system/types/jsx.d.ts', `styled-system/types/${framework}-jsx.d.ts`)

  // Replace imports
  const files = fs.readdirSync(`styled-system/${framework}`)
  for (const file of files) {
    console.log(`Replacing imports in ${file}`)
    const content = fs.readFileSync(`styled-system/${framework}/${file}`, 'utf-8')
    const newContent = content.replace(/from '\.\.\/types\/jsx'/g, `from '../types/${framework}-jsx'`)
    fs.writeFileSync(`styled-system/${framework}/${file}`, newContent, 'utf-8')
  }
}
