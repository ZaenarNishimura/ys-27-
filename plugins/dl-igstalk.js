
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `Masukkan Nama Pengguna Instagram\n\n📌Contoh: ${usedPrefix + command} zkyze_1` 
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Nama:* ${res.name} 
▢ *🔖Nama belakang:* ${res.username}
▢ *👥pengikut:* ${res.followersH}
▢ *🫂Mengikuti:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await conn.sendFile(m.chat, res.profilePic, 'igstalk.png', te, m)
      } catch {
        m.reply(`Periksa apakah nama penggunanya *Instagram*`)
      }
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler
