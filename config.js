import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283188229366', 'ZkySky', true],
  ['6283188229366'], 
  ['6283188229366'] 
] //Numeros de owner 

global.mods = ['6283188229366'] 
global.prems = ['6283188229366', '6283188229366', '6283188229366']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'NyoyohBotz!' 
global.author = 'Zky' 
global.fgig = 'https://www.instagram.com/zkyze_1' 
global.dygp = 'Belum Buat'
global.fgsc = 'https://github.com/FG98F/zakyzj1' 
global.fgyt = 'https://youtube.com/zkysky'
global.fgpyp = 'Dana 6283188229366'
global.fglog = 'https://telegra.ph/file/e802d400265b3e140dfb1.jpg' 

global.wait = '*Tunggu Sebentar ▰▰▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '♥️'
global.done = '✅'
global.error = '❌' 
global.xmoji = '👑'

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
