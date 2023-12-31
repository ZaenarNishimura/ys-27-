
import yts from 'yt-search'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `Masukkan judul lagu\n\n📌Contoh *${usedPrefix + command}* Penampakan Jawir Terekam Jelas`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `Video/Audio tidak ditemukan`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  let play = `
	≡ *FG MUSIC*
┌──────────────
▢ 📌 *Judul* : ${vid.title}
▢ 📆 *Diterbitkan:* ${vid.ago}
▢ ⌚ *Durasi:* ${vid.timestamp}
▢ 👀 *Tampilan:* ${vid.views}
└──────────────

_Enviando..._`
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpl)

if (size.split('MB')[0] >= limit) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️Berat* : ${ukuran}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${batas} MB*`) 
if (size.includes('GB')) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️Berat* : ${size}\n▢ *🎞️Kualitas* : ${q}\n\n▢ _File melebihi batas unduhan_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *FG YTDL*
  
▢ *📌Judul* : ${title}
▢ *🎞️Kualitas* : ${q}
▢ *⚖️Berat* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
    } catch {
		m.reply(`Error: coba lagi`)
    }

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
