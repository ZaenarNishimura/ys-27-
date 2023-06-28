
import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
    try {
    let q = m.quoted ? m.quoted : m
   let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
   // if (!/video|audio/.test(mime)) throw `✳️ Balas ke video atau catatan suara yang ingin Anda konversi ke mp3 dengan perintah :\n\n*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Gagal mengunduh media'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ Gagal mengonversi'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
    } catch (e) {
        m.reply(`✳️ Balas ke video atau catatan suara yang ingin Anda konversi ke mp3 dengan perintah :\n\n*${usedPrefix + command}*`)
   }
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = ['tomp3', 'mp3', 'toudio'] 

export default handler
