
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `Masa Waktu Ku Udah Abiss:( , Aku Akan Pergi.. Maaf Kalo Ada Salah:3 Bye`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
