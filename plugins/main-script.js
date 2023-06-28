import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*Halo*
- Script Yang Sudah Di Recode Ini Masih Di Rahasiakan Oleh Owner Botz 

*Tapi Jangan Khawatir Karna Owner Botz Sudah Menyediakan Link Script Yang Tidak Di Recode*
- Donate Bot Agar Bot Ini Tetap Berjalan!
*Jangan Ngeluh Kalau Bot Gak Fast Respon*

%readmore

Script : ${_package.homepage}
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
