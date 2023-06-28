
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Teks hilang untuk survei \n\n📌 Contoh : \n*${usedPrefix + command}* Pesan  |sebagai|xdd`
if (!text.includes('|')) throw  `✳️ Pisahkan survei dengan *|* \n\n📌 Contoh : \n*${usedPrefix + command}* survei saya|n |bagaimana|xd|oke`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survei diminta oleh:* ${name}\n\n*Pesan:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <Halo|sebagai|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'pilih', 'polling'] 
handler.group = true

export default handler
