import fs from 'fs/promises'
import path from 'path'

/**
 * Load static content
 */
export const loadContent = (fileName) =>
  fs.readFile(path.join(process.cwd(), 'src/content', fileName), 'utf8')
