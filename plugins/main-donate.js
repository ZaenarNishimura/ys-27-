
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
Donate Bot Agar Bot Tetap Aktif!
*Gak Donate Tapi Chat Owner Bot Ngoceh Bot Gak Aktif Kntl Lu*

*Donate :*
Dana
- 083188229366
Pulsa
- 083188229366
(xsis)

*Terimakasih Yang Sudah Donate*
- Beli Premium ataupun sewa dll Bisa Tanyakan Ke Owner Bot
*Ketik .creator Untuk Melihat Contact Owner Botz*
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donate', 'premium', 'sewa'] 

export default handler
