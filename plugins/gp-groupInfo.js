//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
┌──「 *INFORMASI GRUP* 」
▢ *♻️ID:*
   • ${groupMetadata.id}
▢ *🔖Nama* : 
• ${groupMetadata.subject}
▢ *👥Anggota* :
• ${participants.length}
▢ *🤿Pemilik Grup:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️Admins:*
 ${listAdmin}
▢ *🪢 Konfigurasi Grup:*
• ${isBanned ? '✅' : '❎'} banned
• ${welcome ? '✅' : '❎'} welcome
• ${detect ? '✅' : '❎'} Detector
• ${del ? '❎' : '✅'} Anti Delete
• ${antiLink ? '✅' : '❎'} Anti Link WhatsApp

*▢  📬 Pengaturan pesan:*
• Selamat datang: ${sWelcome}
• Selamat tinggal: ${sBye}
• dipromosikan: ${sPromote}
• Gradien: ${sDemote}

▢ *📌Keterangan* :
   • ${groupMetadata.desc?.toString() || 'orang asing'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrup', 'groupinfo', 'infogp'] 
handler.group = true

export default handler
