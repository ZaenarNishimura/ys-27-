
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ Masukkan teks`
m.react('💬')

	try {
        let syms = `Anda adalah Bot, model bahasa hebat yang dilatih oleh OpenAI. Ikuti instruksi pengguna dengan hati-hati. Jawab menggunakan Markdown.`
        let res = await gpt.ChatGpt(text, syms)
         await m.reply(res.text)
	} catch {
		m.reply(`❎ Error: coba nanti`)
	}

}
handler.help = ['ia <text>']
handler.tags = ['tools']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']

export default handler
