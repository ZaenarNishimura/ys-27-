
import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `Masukkan tautan Tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/`
if (!args[0].match(/tiktok/gi)) throw `❎ verifikasi bahwa tautannya dari tiktok`
m.react(rwait)

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ TIKTOK
▢ *Nama:* ${p.nickname}
▢ *Nama belakang:* ${p.unique_id}
▢ *Durasi:* ${p.duration}
▢ *Keterangan:* ${p.description}
└───────────`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
    m.react(done)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ Kesalahan mengunduh video'
    conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ *TIKTOK DL-2*
▢ *Nickname:* ${nickname} ${description ? `\n▢ *Keterangan:* ${description}` : ''}
└───────────`, m)
m.react(done)
} catch {
    m.reply(`❎ Kesalahan mengunduh video`)
}
} 
    
}  
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i
handler.diamond = true

export default handler
