
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Masukkan nomor yang ingin Anda kirimi undangan ke grup\n\n📌 Contoh :\n*${usedPrefix + command}* 6283188229366`
if (text.includes('+')) throw  `✳️ Masukkan nomor semua bersama-sama tanpa *+*`
if (isNaN(text)) throw ' 📌 Masukkan hanya angka plus kode negara Anda tanpa spasi'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *UNDANGAN GRUP*\n\nSeorang pengguna mengundang Anda untuk bergabung dengan grup ini \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ Tautan undangan telah dikirim ke pengguna`) 

}
handler.help = ['invite <628xxx>']
handler.tags = ['group']
handler.command = ['invite','invite'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
