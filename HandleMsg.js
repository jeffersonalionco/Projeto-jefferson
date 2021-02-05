require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-automate')

const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const axios = require('axios')
const os = require('os')
const speed = require('performance-now')
const fetch = require('node-fetch')
const translatte = require('translatte')
const bent = require('bent')
const request = require('request-promise')
const emojiUnicode = require('emoji-unicode')
const get = require('got')
exports.jogo = require('./jogo.js')
const appRoot = require('app-root-path')
const low = require('lowdb')
const google = require('google-it')
const { stdout } = require('process');
const Math_js = require('mathjs')
const FileSync = require('lowdb/adapters/FileSync')
const db_group = new FileSync(appRoot+'/lib/data/group.json')
exports.jogo = require('./jogo.js')
const db = low(db_group)
db.defaults({ group: []}).write()

const { 
    removeBackgroundFromImageBase64
} = require('remove.bg')

const {
    exec
} = require('child_process')

const {
    menuId,
    centro, 
    cid_centro,
    cekResi, 
    urlShortener, 
    meme, 
    translate, 
    getLocationData,
    images,
    resep,
    rugapoi,
    rugaapi,
    cariKasar,
    downloader
} = require('./lib')


const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')

const { 
    msgFilter, 
    color, 
    processTime, 
    isUrl,
	download
} = require('./utils')

const { 
    uploadImages,
    custom,
    picturemis
 } = require('./utils/fetcher')

const fs = require('fs-extra')
const { index } = require('mathjs')
const jogo = require('./jogo.js')
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const prem = JSON.parse(fs.readFileSync('./lib/database/prem.json'))


let dbcot = JSON.parse(fs.readFileSync('./lib/database/bacot.json'))
let dsay = JSON.parse(fs.readFileSync('./lib/database/say.json'))
let dregras = JSON.parse(fs.readFileSync('./lib/database/regras.json'))
let c_id_jogo = JSON.parse(fs.readFileSync('./jogo/ids.json'))
let _autostiker = JSON.parse(fs.readFileSync('./lib/helper/antisticker.json'))
let antilink = JSON.parse(fs.readFileSync('./lib/helper/antilink.json'))
let ativar_cid = JSON.parse(fs.readFileSync('./lib/database/ativar_cid.json'))
let p1011 = JSON.parse(fs.readFileSync('./jogo/personagens/1011.json'))
let p1012 = JSON.parse(fs.readFileSync('./jogo/personagens/1012.json'))
let p1013 = JSON.parse(fs.readFileSync('./jogo/personagens/1013.json'))
let p1014 = JSON.parse(fs.readFileSync('./jogo/personagens/1014.json'))
let p1015 = JSON.parse(fs.readFileSync('./jogo/personagens/1015.json'))
let p1016 = JSON.parse(fs.readFileSync('./jogo/personagens/1016.json'))
let p1017 = JSON.parse(fs.readFileSync('./jogo/personagens/1017.json'))

let listagrupos = JSON.parse(fs.readFileSync('./lib/database/listagrupos.json'))
let { 
    ownerNumber, 
    groupLimit, 
    memberLimit,
    prefix,
    vhtearkey,
    keepSave,
    iTechApi,
    apiKey
} = setting

const {
    apiNoBg,
	apiSimi
} = JSON.parse(fs.readFileSync('./settings/api.json'))

function formatin(duit){
    let	reverse = duit.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i].id == needle) return i;
    }
    return false;
}


const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

module.exports = HandleMsg = async (aruga, message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList, } = message
        let { body } = message
        var { name, formattedTitle, gcok} = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
        const botNumber = await aruga.getHostNumber() + '@c.us'
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await aruga.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const pengirim = sender.id
        const serial = sender.id
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const blockNumber = await aruga.getBlockedIds()
        const groupMembers = isGroupMsg ? await aruga.getGroupMembersId(groupId) : ''
        const GroupLinkDetector = antilink.includes(chatId)
        const stickermsg = message.type === 'sticker'
        const nuser = `${author}`

        // Bot Prefix
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
        const q = args.join(' ')
		const argx = chats.slice(0).trim().split(/ +/).shift().toLowerCase()
        const isCmd = body.startsWith(prefix)
        const uaOverride = process.env.UserAgent
        const url = args.length !== 0 ? args[0] : ''
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		
        // [IDENTIFY]
        const ownerNumber = "554598331383@c.us"
        const isOwnerBot = ownerNumber.includes(pengirim)
        const isOwner = ownerNumber.includes(pengirim)
        const isOwnerB = ownerNumber.includes(pengirim)
        const isBanned = banned.includes(pengirim)
		const isSimi = simi.includes(chatId)
		const isNgegas = ngegas.includes(chatId)
        const isKasar = await cariKasar(chats)
        const isAutoStikerOn = isGroupMsg ? _autostiker.includes(chat.id) : false
        const isImage = type === 'image'
        const isPrem = prem.includes(pengirim)
        var nomegrupo = name

        const isMuted = (chatId) => {
            if(muted.includes(chatId)){
              return false
          }else{
              return true
              }
          }
        
        
    
        if(!isCmd && isKasar && isGroupMsg) { console.log(color('[BADW]', 'orange'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${argx}`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }

      if (chats == 'Assalamualaikum'){
          aruga.reply(from, 'Waalaikumsalam wr wb.', id)
      }
      if (chats == '0009'){
          const listasay = dsay
          for (let pos = 0; pos <= listasay.length; pos++){
              enviar.reply(from, `${listasay[pos]}`, id)
              
          }
      }
      var id_number_final = nuser.length
      for (let i = 0; i < id_number_final; i++) {
        if (nuser.charAt(i) ==="@") {
            var sliceBegin = nuser.slice(0, (i+1));
            id_number = sliceBegin;

        }
    }
    var id_chatid_final = chatId.length
    for (let i = 0; i < id_chatid_final; i++) {
      if (chatId.charAt(i) ==="@") {
          var sliceBegin = chatId.slice(0, (i+1));
          id_chatid = sliceBegin;

      }
  }
       var idgrupo = [`554598306644-1610674787@g.us`, '556996012233-1610923541@g.us']
        if(chatId === '554598492314-1489089620@g.us'){
        aruga.reply(idgrupo[0], `*CHAT* ${nomegrupo}\n\n\n${chats}`, id)
        aruga.reply(idgrupo[1], `*CHAT* ${nomegrupo}\n\n\n${chats}`, id)
        }
        if(command){
            aruga.reply(idgrupo[0], `- Comando *[ ${command} ]* \Usado no grupo/chat *${nomegrupo}*\n\n_----Robo JHEFER----_`, id)
            }
      var palavraEn = /bot/.exec(chats)
      if(palavraEn == 'bot'){

      }
      /*if(chats == 'jogo'){
          jogo(aruga, message, from, id);
      }*/
      function escrever(setnome){
          if(isGroupMsg){
            let user = JSON.parse(fs.readFileSync(`./jogo/cadastros/${id_number}.json`))
            user.nome = setnome
            fs.writeFile(`./jogo/cadastros/${id_number}.json`, JSON.stringify(user, null, 2))
            aruga.reply(from, `_Nome alterado para:_ *[ ${user.nome} ]*`,  id)
          }else{
            let user = JSON.parse(fs.readFileSync(`./jogo/cadastros/${id_chatid}.json`))
            user.nome = setnome
            fs.writeFile(`./jogo/cadastros/${id_chatid}.json`, JSON.stringify(user, null, 2))
            aruga.reply(from, `_Nome alterado para:_ *[ ${user.nome} ]*`,  id)

          }
      }

      if (chats == 'assalamualaikum'){
          aruga.reply(from, 'Waalaikumsalam wr wb.', id)
      }
      if (chats == 'P'){
          aruga.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'p'){
          aruga.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'Bot'){
          aruga.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'bot'){
          aruga.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'kontol'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Kontol') {
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'song') {
          aruga.sendPtt(from, './media/song.mp3', id)
      }
      if (chats == 'kntl') {
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'ajg'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Ajg'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'AJG'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'pepek'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Pepek'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Ppq'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'PPQ'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'ngentot'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Ngentot'){
          aruga.sendPtt(from, './media.astg.mp3', id)
      }
      if (chats == 'Anjg'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'anjg'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'anjing'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Anjing'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Hi'){
          aruga.sendPtt(from, './media/ohayou.mp3', id)
      }
      if (chats == 'hi'){
          aruga.sendPtt(from, './media/ohayou.mp3', id)
      }
      if (chats == 'Halo'){
          aruga.sendPtt(from, './media/ohayou.mp3', id)
      }
      if (chats == 'halo'){
          aruga.sendPtt(from, './media/ohayou.mp3', id)
      }
      if (chats == 'woi'){
          aruga.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'Woi'){
          aruga.sendPtt(from, './media/nani-kore.mp3', id)
      }
      if (chats == 'Asu'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'asu'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Asw'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'asw'){
          aruga.sendPtt(from, './media/astg.mp3', id)
      }
      if (chats == 'Gblk'){
          aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'gblk'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Goblok'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'goblok'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Gblg'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'gblg'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'bego'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Bego'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Tolol'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'tolol'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'bodo'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Bodo'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'bodoh'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'Bodoh'){
        aruga.sendPtt(from, './media/bakaa.mp3', id)
      }
      if (chats == 'boa noite'){
        aruga.sendPtt(from, './media/boanoite.mp3', id)
      }


        const mess = {
            wait: '[ WAIT ] Em andamento⏳ aguarde um momento',
            error: {
                St: '[❗] Envie imagens com legenda *#sticker* ou tags de imagem que foram enviadas',
                Ti: '[❗] Repita o adesivo com a legenda *#stickertoimg* ou a etiqueta do adesivo que foi enviada',
                Qm: '[❗] Ocorreu um erro, talvez o tema não esteja disponível!',
                Yt3: '[❗] Ocorreu um erro, não foi possível converter para mp3!',
                Yt4: '[❗] Ocorreu um erro, talvez o erro tenha sido causado pelo sistema.',
                Ig: '[❗] Ocorreu um erro, talvez porque a conta é privada',
                Ki: '[❗] O bot não pode eliminar o grupo de administração!',
                Sp: '[❗] O bot não consegue remover Admin',
                Ow: '[❗] O bot não consegue tirar o proprietário',
                Bk: '[❗] O bot não consegue bloquear o proprietário',
                Anúncio: '[❗] Não é possível adicionar destino, talvez porque seja privado',
                Iv: '[❗] O link que você enviou é inválido!'
            }
        }


        //fitur anti link
        if (isGroupMsg && GroupLinkDetector && !isGroupAdmins && !isOwner){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                const check = await aruga.inviteInfo(chats);
                if (!check) {
                    return
                } else {
                    aruga.reply(from, '*[DETECTOR DO LINK DO GRUPO]* \nVocê enviou o link do bate-papo em grupo, desculpe, você foi expulso do grupo :(', id).then(() => {
                        aruga.removeParticipant(groupId, sender.id)
                    })
                }
            }
            if (chats.match(/(https:\/\/.com)/gi)) {
                const check = await aruga.inviteInfo(chats);
                if (!check) {
                    return
                } else {
                    aruga.reply(from, '*[DETECTOR DO LINK DO GRUPO]* \nVocê enviou o link do bate-papo em grupo, desculpe, você foi expulso do grupo :(', id).then(() => {
                        aruga.removeParticipant(groupId, sender.id)
                    })
                }
            }
        }
        if (chats.match(/(https:\/\/.com.br)/gi)) {
            const check = await aruga.inviteInfo(chats);
            if (!check) {
                return
            } else {
                aruga.reply(from, '*[DETECTOR DO LINK DO GRUPO]* \nVocê enviou o link do bate-papo em grupo, desculpe, você foi expulso do grupo :(', id).then(() => {
                    aruga.removeParticipant(groupId, sender.id)
                })
            }
        }
        
        
        
        if (isAutoStikerOn && isMedia && isImage) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await aruga.sendImageAsSticker(from, imageBase64)
                .then(async () => {
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                })
                .catch(async (err) => {
                    console.error(err)
                    await aruga.reply(from, `Error!\n${err}`, id)
                })
        }

        // Menu shells
        // FAÇA UMA RUPTURA /NÚMERO CECAN, VOCÊ PODE SE PERSONALIZAR, FAÇA!

        const cegan = [
            "https://i.ibb.co/JmVx5bJ/Cogan.jpg",
            "https://i.ibb.co/JmVx5bJ/Cogan.jpghttps://i.ibb.co/3pGT2PT/Cogan-1.jpg",
            "https://i.ibb.co/mSbzWBg/Boyfriend-material-cogan.jpg",
            "https://i.ibb.co/K29d94b/download-4.jpg",
            "https://i.ibb.co/L0Fxdsb/image.jpg",
            "https://i.ibb.co/9GYpqDt/lang2-4.jpg"
        ]
        const cecan = [
            {
            lahwoi : "Cante isso para 1",
            imagex : "https://i.ibb.co/VT4ggGj/Instagram.jpg",
            },
            {
            lahwoi : "Cante isso para 2",
            imagex : "https://i.ibb.co/x1nD1HD/Instagram-1.jpg",
            },
            {
            lahwoi : "Cante isso para 3",
            imagex : "https://i.ibb.co/ZXPPFKF/Argumentasi-Dimensi.jpg",
            },
            {
            lahwoi : "Cante isso para 4",   
            imagex : "https://i.ibb.co/NpY5ZBR/image.jpg",
            },
            {
            lahwoi : "Cante isso para 5",
            imagex : "https://i.ibb.co/PWsL6HF/download-1.jpg",
            },
            {
            lahwoi : "Cante isso para 6",
            imagex :"https://i.ibb.co/JFkDWjB/RASANYA-ANJING-BANGET.jpg",
            },
            {
            lahwoi : "Cante isso para 7",
            imagex : "https://i.ibb.co/5W2gMq6/download-2.jpg",
            },
            {
            lahwoi : "Cante isso para 8",
            imagex : "https://i.ibb.co/QNWhdgC/download-3.jpg",
            },
            {
            lahwoi : "O ultimo canto",
            imagex : "https://i.ibb.co/RS1vWC3/Blur.jpg"
            }
        ]
        
        const estetek = [
            "https://i.ibb.co/Xk1kggV/Aesthetic-Wallpaper-for-Phone.jpg",
            "https://i.ibb.co/wBNyv8X/image.jpg",
            "https://i.ibb.co/hgcJbg7/Leaving-Facebook.jpg",
            "https://i.ibb.co/27TW3bT/Pinterest.jpg",
            "https://i.ibb.co/2MR16Ct/Image-about-vintage-in-ALittle-Bit-Of-This-And-That-by-Little-Nerdy-Gnome.jpg",
            "https://i.ibb.co/WfrzTWH/minteyroul-on-We-Heart-It.jpg",
            "https://i.ibb.co/dMpkfWT/1001-Kreative-Aesthetic-Wallpaper-Ideen-f-r-das-Handy.jpg",
            "https://i.ibb.co/cN3Br2J/red-grunge-wallpaper-dark-edgy-aesthetic-collage-background-trendy-cool-dark-red-iphone-wallpaper.jpg",
            "https://i.ibb.co/c8QMXZv/ee16de425985d4a1b628dddc1461b546.jpg"
        ]


	const apakah = [
            'sim',
            'Não',
            'Tente repetir'
            ]

        const bisakah = [
            'Lata',
            'Não podes',
            'Tentar Repetir'
            ]

        const kapan = [
            'Mais 1 semana',
            '1 mês a mais',
            'Mais 1 ano',
            '100 anos a partir de agora',
            'não sei',
            '2030'
            ]

        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]
    

	// Filter Banned People
        if (isBanned) {
            return console.log(color('[BAN]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        }

		
        switch (command) {
        // Menu and TnC
        case 'speed':
            case 'ping':
                const loadedMsg = await aruga.getAmountOfLoadedMessages()
                const chatIds = await aruga.getAllChatIds()
                const groups = await aruga.getAllGroups()
                const timestamp = speed();
                const latensi = speed() - timestamp
                const charged = await aruga.getIsPlugged();
                const device = await aruga.getMe() 
                const deviceinfo = `- Nivel de Bateria: ${device.battery}%\n  ├ Está carregando: ${charged}\n  └ 24 Hours Online : ${device.is24h}\n  ├ OS Version : ${device.phone.os_version}\n  └ Número da compilação : ${device.phone.os_build_number}\n\n _*Jam :*_ ${moment(t * 1000).format('HH:mm:ss')}`
                aruga.sendText(from, `*Informação do dispositivo*\n${deviceinfo}\n\nUso de RAM: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\nCPU: *${os.cpus().length}*\n\nStatus :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Chats pessoas\n- *${chatIds.length}* Total Chats\n\nSpeed: ${latensi.toFixed(4)} _Second_`)
                break
                case 'setpic':
                    if (!isOwnerB) return aruga.reply(from, `Este comando só pode ser usado pelo Dono do Bot!`, id)
                    if (isMedia) {
                        const mediaData = await decryptMedia(message)
                        const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.setProfilePic(imageBase64)
                        aruga.sendTextWithMentions(`Obrigado @${sender.id.replace('@c.us','')} Foto do Profilenye ..`)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.setProfilePic(imageBase64)
                        aruga.sendTextWithMentions(from, `Obrigado @${sender.id.replace('@c.us','')} Foto de perfil 😘`)
                    } else {
                        aruga.reply(from, `Formato errado! \n ⚠️ Envie imagens com ${prefix}setpic`, id)
                    }
                    break
        case 'setnome': 
                if(args[0] == 1){
                user
                fs.writeFile(user, )
                }
        break
        case 'cadastrar':
            if(seforgame != true) return aruga.reply(from, ':)- _Este comando é só para o desenvolvedor do game FFRPG(JHEFFER) logo estara disponiveis aos usuarios_', id)
            if(isGroupMsg){
            aruga.reply(nuser, `\`\`\`- Vamos fazer seu cadastro.\`\`\` \n\nEnvie *#cadastrar* user_name_perfil`, id)
            return aruga.reply(from, `*_[ ${pushname} ]_* - para se cadastrar use o privado do bot`, id)
        }
            let nome = args[0]
            const ids = c_id_jogo
            var final = ids.length
            let cn = 0

            for (let i = 0; i < final ; i++) {
               if(chatId == ids[i]){
                 cn = 1;
                }
               }
const cadastros = `\n
\{
"nome": "${pushname}",
"username": "${nome}",
"estatistica": \{
    "hp":\{"atual": 1000, "hp_max": 1000\},
    "armadura": \{"maximo": 100, "minimo": 1\}, 
    "nivel": 1, 
    "evasao": \{"maximo": 10, "minimo": 1\},
    "vit": \{"atual": "block", "minimo": 10, "maximo": 100\}, 
    "agi": \{"atual": "block", "minimo": 10, "maximo": 100\}, 
    "vel": \{"atual": "block", "minimo": 10, "maximo": 100\},
    "mag": \{"atual": "block", "minimo": 10, "maximo": 100\},
    "esp": \{"atual": "block", "minimo": 10, "maximo": 100\}

\}
\}`

            if(cn == 0){
            fs.appendFile(`./jogo/cadastros/${id_chatid}.json`, cadastros, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
              c_id_jogo.push(chatId)
            fs.writeFileSync('./jogo/ids.json' , JSON.stringify(c_id_jogo))
            aruga.reply(from, 'Cadastrado com sucesso', id)
            }else{
                aruga.reply(from, `Ja esta cadastrado(a)`, id)
            }
            break
        case 'ver':
            let jogocomando = args[0]
            painel(jogocomando)
            break
        case 'setnome':
            let setnome = args[0]
            escrever(setnome)
            break
        case 'dev2':
            const user = JSON.parse(fs.readFileSync(`./jogo/cadastros/${id_chatid}.json`))
            user.nome = 'gabriel'
            fs.writeFile(`./jogo/cadastros/${id_chatid}.json`, JSON.stringify(user, null, 2))
            aruga.reply(from, user.nome, id)
            /*fs.appendFile(`./jogo/cadastros/${id_chatid}.json`, cadastros, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });*/

        break
        case 'dev':
        let texto = `
        id: ${id}
        chat: ${chatId}
        group: ${groupId}
        sender: ${sender}
        message: ${message}
        author: ${author}
        quotes ${quotedMsg}


        `
        aruga.reply(from, texto, id)
        break
        case 'getpic':
            if (!isGroupMsg) return aruga.reply(from, `Este recurso só pode ser usado em grupos`, id)
            const texnugm = body.slice(8)
            const getnomber =  await aruga.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await aruga.getProfilePicFromServer(useriq)
    
                    aruga.sendFileFromUrl(from, jnck, `awok.jpg` , `nehh ngab`)
                } catch {
                    aruga.reply(from, `Sem foto de perfil!`, id)
                }
            break
        case 'tnc':
            await aruga.sendText(from, menuId.textTnC())
            break
        case 'help':
            const bots = `Oi Jovem, aqui é Jheffer Bot, para descobrir o menu de comandos, digite *${prefix}menu* , *${prefix}p*`
            await aruga.reply(from, bots , id)
            break
        case 'p':
        case 'menu':
            await aruga.sendText(from, menuId.textMenu(pushname))
            .then(() => ((isGroupMsg) && (isGroupAdmins)) ? aruga.sendText(from, `Menu de administração do grupo: *${prefix}menuadmin*`) : null)
            break
            
        case 'menuadmin':
            if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Falha, lembre-se de que você é membro, não administrador', id)
            await aruga.sendText(from, menuId.textAdmin())
            break
        case 'donate':
        case 'donasi':
            await aruga.sendText(from, menuId.textDonasi())
            break
          case 'tod':
    aruga.reply(from, `Antes de jogar, prometa realizar qualquer comando dado. \n\nPor favor, selecione: \n➥ ${prefix}truth\n➥ ${prefix}dare`, id)
    break
    case 'truth':
    if (!isGroupMsg) return aruga.reply(from, menuId.textPrem())
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
            .then(res => res.text())
            .then(body => {
                let truthx = body.split('\n')
                let truthz = truthx[Math.floor(Math.random() * truthx.length)]
                aruga.reply(from, truthz, id)
            })
            .catch(() => {
                aruga.reply(from, 'Hayolohhh, algo deu errado !!', id)
            })
            break
    case 'dare':
    if (!isGroupMsg) return aruga.reply(from, menuId.textPrem())
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
            .then(res => res.text())
            .then(body => {
                let darex = body.split('\n')
                let darez = darex[Math.floor(Math.random() * darex.length)]
                aruga.reply(from, darez, id)
            })
            .catch(() => {
                aruga.reply(from, 'Hayolohhh, algo deu errado !!', id)
            })
            break
     case 'citacita'://Piyobot
     if (!isGroupMsg) return aruga.reply(from, menuId.textPrem())
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
            .then(res => res.text())
            .then(body => {
            let cita = body.split('\n')
            let raya = cita[Math.floor(Math.random() * cita.length)]
            aruga.sendFileFromUrl(from, raya, 'citacita.mp3', id)
                .then(() => console.log('Sucesso enviando esperança'))
              })
             .catch(() => {
            aruga.reply(from, 'Ada yang Error!', id)
             })
             break
         case 'kbbi':
            if (args.length == 0) return aruga.reply(from, `Para pesquisar uma palavra no Grande Dicionário Indonésio (KBBI), digite:${prefix}kbbi [kata]`, id)
            const kbbip = body.slice(6)
            const kbbis = await rugaapi.kbbi(kbbip)
            await aruga.reply(from, kbbis, id)
            .catch(() => {
                aruga.reply(from, 'ada yang error!!', id)
            })
            break
            case 'blackpink':
                if (args.length == 0) return aruga.reply(from, `enviar pedidos ${prefix}logoff [nome]`, id)
                aruga.reply(from, mess.wait, id)
                const bpk = body.slice(11)
                aruga.sendFileFromUrl(from, `https://api.vhtear.com/blackpinkicon?text=${bpk}&apikey=${vhtearkey}`, `${bpk}.jpg`, `nehh ngab`, id)
                break
                case 'glowtext':
                    if (args.length == 0) return aruga.reply(from, `enviar pedidos ${prefix}logoff [nome]`, id)
                    aruga.reply(from, mess.wait, id)
                    const srhdah = body.slice(10)
                    aruga.sendFileFromUrl(from, `https://api.vhtear.com/glowtext?text=${srhdah}&apikey=${vhtearkey}`, `${srhdah}.jpg`, `nehh ngab`, id)
                    break
            case 'logoff':
                if (args.length == 0) return aruga.reply(from, `enviar pedidos ${prefix}logoff [nome]`, id)
                aruga.reply(from, mess.wait, id)
                const jadiin = body.slice(8)
                const hero = ["alok", "alvaro", "andrew", "antonio", "caroline", "ford", "hayato", "joseph", "kelly", "laura", "maxim", "miguel", "misa", "moco", "nikita", "notora", "olivia", "paloma", "rafael", "shani", "steffie", "wukong"]
                let awikxs = hero[Math.floor(Math.random() * hero.length)]
                aruga.sendFileFromUrl(from, `https://api.vhtear.com/logoff?hero=${awikxs}&text=${jadiin}&apikey=${vhtearkey}`, `${jadiin}.jpg`, 'nehh ngab...', id)
                break
        case 'pornhub':
            if (args.length === 1) return aruga.reply(from, `enviar pedidos *${prefix}pornhub [ |Teks1|Teks2 ]*,\n\n contoh : *${prefix}pornhub |Dimas| HUB*`, id)
            argz = body.trim().split('|')
            if (argz.length >= 2) {
                aruga.reply(from, `paciente processo demora`, id)
                const lpornhub = argz[1]
                const lpornhub2 = argz[2]   
                if (lpornhub > 10) return aruga.reply(from, '*Texto1 muito longo!* \n_Máximo 10 letras!_', id)
                if (lpornhub2 > 10) return aruga.reply(from, '*Texto2 muito longo!* \nMáximo 10 letras!_', id)
                aruga.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/phblogo?text1=${lpornhub}&text2=${lpornhub2}`)
            } else {
                await aruga.reply(from, `Formato errado! \n [❗] Enviar comando *${prefix}pornhub [ |Teks1| Teks2 ]*,\n\n contoh : *${prefix}logopornhub |Dimas| HUB*`, id)
            }
            break
        case 'slightning':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await aruga.sendStickerfromUrl(from, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await aruga.sendStickerfromUrl(from, Slight)
            } else {
                await aruga.reply(from, `Formato errado! \n⚠️ Envie imagens com #stickerlightning`, id)
            }
            break
        case 'sfire':
        case 'stickerfire':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await aruga.sendStickerfromUrl(from, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await aruga.sendStickerfromUrl(from, Sfire)
            } else {
                await aruga.reply(from, `Formato errado! \n ⚠️ Envie imagens com ${prefix}stickerfire`, id)
            }
            break
        case 'thunder':
            if (args.length === 1) return aruga.reply(from, `Enviar pedidos *${prefix}thunder [ Teks ]*, exemplo *${prefix}thunder Tobz*`, id)
            aruga.reply(from, mess.wait, id)
            const thndr = body.slice(9)
            if (thndr.length > 10) return aruga.reply(from, '*Texto muito longo!* \n_Máximo 10 letras!_', id)
            await aruga.sendFileFromUrl(from, `https://api.vhtear.com/thundertext?text=${thndr}&apikey=${vhtearkey}`, 'thndr.jpg', '', id)
            break
        case 'tebakgambar':
            if (!isGroupMsg) return aruga.reply(from, 'Este comando só pode ser usado em grupos!', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/tebakgambar&apikey=' + vhtearkey)
            if (resp.data.error) return aruga.reply(from, resp.data.error, id)
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            aruga.sendFileFromUrl(from, resp.data.result.soalImg, 'tebakgambar.jpg', '_Por favor, responda o significado desta imagem_', id)
            aruga.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            aruga.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            aruga.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            aruga.reply(from, jwban, id)
            } catch (err) {
                console.error(err.message)
                await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Desculpe, questionário de perguntas não encontrado')
           }
           break
        case 'caklontong':
            if (!isGroupMsg) return aruga.reply(from, 'Este comando só pode ser usado em grupos!', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/funkuis&apikey=' + vhtearkey)
            if (resp.data.error) return aruga.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n\n➸ Poin : ${resp.data.result.poin}`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}\n\n➸ Deskripsi : ${resp.data.result.desk}`
            aruga.reply(from, anm2, id)
            aruga.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            aruga.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            aruga.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            aruga.reply(from, jwban, id)
            } catch (err) {
                console.error(err.message)
                await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
           }
           break
        case 'ownerbot':
            await aruga.sendContact(from, ownerNumber)
            .then(() => aruga.sendText(from, 'Não faça muitas perguntas, isso não é StackOverFlow!'))
            break
            case 'maps':
            if (!isGroupAdmins) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
            rugaapi.maps()
            .then(async (res) => {
            	await aruga.reply(from, `${res}`, id)
            })
            break
            case 'bokep2':
                if (!isGroupAdmins) return aruga.reply(from, 'Este recurso só pode ser usado pelo Owner Bot, por medo de abuso', id)
			    rugaapi.bokep2()
			    .then(async (res) => {
				await aruga.reply(from, `${res}`, id)
			})
            break
            case 'linkgroup': 
                if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
                aruga.reply(from, ` ${id} - usuario`, id)
                aruga.reply(from, `jefferson`, chatId, id)
            break
            case 'wallpaper':
                aruga.reply(from, mess.wait, id);
                axios.get('https://akaneko-api.herokuapp.com/api/mobileWallpapers').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
                });
                break
                case 'loli':
                aruga.reply(from, mess.wait, id);
                axios.get('http://lolis-life-api.herokuapp.com/getLoli').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'loli.jpeg', "Aproveite esses Lolis!", id);
                });
                break
            case 'autosticker':
	        case 'autostiker':
            case 'autostik':
                if (args[0] === 'enable') {
                    if (isAutoStikerOn) return await aruga.reply(from, 'O recurso de autocolante automático foi ativado', id)
                    _autostiker.push(chat.id)
                    fs.writeFileSync('./lib/helper/antisticker.json', JSON.stringify(_autostiker))
                    await aruga.reply(from, 'O recurso autosticker foi ativado com sucesso' , id)
                } else if (args[0] === 'disable') {
                    _autostiker.splice(chat.id, 1)
                    fs.writeFileSync('./lib/helper/antisticker.json', JSON.stringify(_autostiker))
                    await aruga.reply(from, 'O recurso autostiker foi desativado com sucesso' , id)
                } else {
                    await aruga.reply(from, 'Formato incorreto' , id)
                }
            break
                case 'neko':
                try {
                    aruga.reply(from, mess.wait, id)
                    axios.get('https://akaneko-api.herokuapp.com/api/neko').then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'neko.jpeg', 'Neko *Nyaa*~');
                    });
                } catch (err) {
                    console.log(err);
                    throw(err);
                };
                break
                case 'boobs':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/boobs').then(res => {
                	aruga.sendFileFromUrl(from, res.data.url, 'porn hentai >~<');
                });
                break
                case 'gifhentai':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/Random_hentai_gif').then(res => {
                	aruga.sendFileFromUrl(from, res.data.result, '.gif');
                });
                break
                case 'bjanime':
               if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id)
                const sblow = await axios.get('https://tobz-api.herokuapp.com/api/nsfwblowjob')
                const rblow = sblow.data
                aruga.sendFileFromUrl(from, rblow.result, `RandoBlow.gif`, 'Boquete aleatório!', id)
                    break
                case 'pussy':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para seus registradores', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
                	aruga.sendFileFromUrl(from, res.data.url);
                });
                break
               case 'rhentai':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://nekos.life/api/v2/img/hentai').then(res => {
               	aruga.sendFileFromUrl(from, res.data.url);
               });
               break
               case 'kissgif':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://nekos.life/api/v2/img/kiss').then(res => {
               	aruga.sendFileFromUrl(from, res.data.url);
               });
               break
                case 'cumgif':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/cum').then(res => {
                	aruga.sendFileFromUrl(from, res.data.url)
                });
                break
                case 'bjgif':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/bj').then(res => {
                	aruga.sendFileFromUrl(from, res.data.url);
                });
                break
                case 'nsfwgif':
                if (!isPrem) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
                	aruga.sendFileFromUrl(from, res.data.url);
                });
                break
                case 'waifu':
                if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'Waifu UwU');
                });
                break
                case 'slap':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/slap').then(res => {
                	aruga.sendFileFromUrl(from, res.data.url);
                });
                break
                case 'rhug':
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/hug').then(res => {
                	aruga.sendFileFromUrl(from, res.data.url);
                });
                break
                case 'animeavatar':
                    if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!' , id)
                    aruga.reply(from, mess.wait, id);
                    axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'Avatar UwU');
                    });
                    break
            case 'nekonsfw':
                if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                    aruga.sendText(from, mess.wait);
                    axios.get('https://tobz-api.herokuapp.com/api/nsfwneko').then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'Por que é realmente igual ao 2D');
            })
                break
            case 'wallpaper2':
                aruga.reply(from, mess.wait, id);
                axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
                });
                break
            case 'baka':
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/baka').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'baka')
                })
                break
                case 'aesthetic':
                    const anjayani = estetek[Math.floor(Math.random() * estetek.length)]
                    await aruga.sendImage(from,anjayani, id)
                    .then(() => aruga.sendText(from, 'nehh buat wallpaper lu'))
                    break
                case 'pictcogan':
                        const ganteng = cegan[Math.floor(Math.random() * cegan.length)]
                        await aruga.sendImage(from, ganteng)
                        .then(() => aruga.sendText(from, 'nehh pict cogann xixi'))
                        break
                    case 'pictcecan':
                        const cantik = cecan[Math.floor(Math.random() * cecan.length)]
                        await aruga.sendImage(from, cantik.imagex, 'Cecan.jpg', cantik.lahwoi, id)
                        break
                case 'antilink':
                    if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
                    if (!isGroupAdmins) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!', id)
                    if (!isBotGroupAdmins) return aruga.reply(from, 'Ó administrador, torne-me o administrador do grupo primeiro :)', id)
                    if (args[0] == 'on') {
                        var cek = antilink.includes(chatId);
                        if(cek){
                            return aruga.reply(from, '*Detector de link anti-grupo* já está ativo neste grupo', id) //if number already exists on database
                        } else {
                            antilink.push(chatId)
                            fs.writeFileSync('./lib/helper/antilink.json', JSON.stringify(antilink))
                            aruga.reply(from, '*[Anti Link de Grupo]* foi ativado \nCada membro do grupo que enviar uma mensagem contendo um link de grupo será expulso por um bot!', id)
                        }
                    } else if (args[0] == 'off') {
                        var cek = antilink.includes(chatId);
                        if(!cek){
                            return aruga.reply(from, '*Detector de link anti-grupo* não está mais ativo neste grupo', id) //if number already exists on database
                        } else {
                            let nixx = antilink.indexOf(chatId)
                            antilink.splice(nixx, 1)
                            fs.writeFileSync('./lib/helper/antilink.json', JSON.stringify(antilink))
                            aruga.reply(from, '*[Anti Group Link]* foi desabilitado\n', id)
                        }
                    } else {
                        aruga.reply(from, `escolher on / off\n\n*[Anti Group Link]*\nCada membro do grupo que postar uma mensagem contendo o link do grupo será expulso pelo bot!`, id)
                    }
                    break  
                    case 'tag':
                    if (!isGroupMsg) return aruga.reply(from, 'este comando só pode ser usado dentro do grupo', id)
                    if (!args.length >= 1) return await aruga.reply(from, 'mensagens não podem estar vazias', id) ;{
                        const text = body.slice(5)
                        const mem = groupMembers
                        const randMem = mem[Math.floor(Math.random() * mem.length)];
                        const sapa = `${text} 👉 @${randMem}`
                        await aruga.sendTextWithMentions(from, sapa)
                    }
                    break    
                    case 'ava':
                    if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos', id)
                    if (!quotedMsg) return aruga.reply(from, 'Quote/reply  mensagem para alguém que irá baixar a foto !!', id)
                    try {
                        const dp = await aruga.getProfilePicFromServer(quotedMsgObj.sender.id)
                        if (dp == undefined) {
                            var pfp = aruga.reply(from, 'Ele(a) é tímido, talvez esteja deprimido e não se atreva a colocar uma foto no perfil', id)
                            } else {
                            var pfp = aruga.sendFileFromUrl(from, dp, 'profile.png')
                            } 
                    } catch {
                        aruga.reply(from, 'Sem foto de perfil / privada', id)
                    }
                    break
                    case 'mystat':{
                    const userid = sender.id
                    const ban = banned.includes(userid)
                    const blocked = await aruga.getBlockedIds()
                    const isblocked = blocked.includes(userid)
                    const ct = await aruga.getContact(userid)
                    const isOnline = await aruga.isChatOnline(userid) ? '✔' : '❌'
                    var sts = await aruga.getStatus(userid)
                    const bio = sts
                    const admins = groupAdmins.includes(userid) ? 'Admin' : 'Membro'
                    var found = false
                        Object.keys(pengirim).forEach((i) => {
                            if(pengirim[i].id == userid){
                                found = i
                            }
                        })
                    var adm = admins
                    if (ct == null) {
                        return await aruga.reply(from, 'Número do WhatsApp inválido [não registrado no WhatsApp]', id) 
                    } else {
                    const contact = ct.pushname
                    const dp = await aruga.getProfilePicFromServer(userid)
                    if (dp == undefined) {
                        var pfp = 'https://raw.githubusercontent.com/Gimenz/line-break/master/profil.jpg'
                        } else {
                        var pfp = dp
                        } 
                    if (contact == undefined) {
                        var nama = '_Ele é tímido, não quer mostrar o nome dele_' 
                        } else {
                        var nama = contact
                        } 
                    const caption = `*Detalhes do menbro* ✨ \n\n● *Nome :* ${nama}\n● *Bio :* ${bio.status}\n● *Chat link :* wa.me/${sender.id.replace('@c.us', '')}\n● *Função :* ${adm}\n● *Banido pelo Bot :* ${ban ? '✔' : '❌'}\n● *Bloqueado pelo bot :* ${isblocked ? '✔' : '❌'}\n● *Conversou com bots :* ${isOnline}`
                    aruga.sendFileFromUrl(from, pfp, 'dp.jpg', caption)
                    }
                    }
                break     
                case 'jadian':
                    if (!isGroupMsg) return aruga.reply(from, 'este comando só pode ser usado dentro do grupo', id)
                    const mem = groupMembers
                    const aku = mem[Math.floor(Math.random() * mem.length)];
                    const kamu = mem[Math.floor(Math.random() * mem.length)];
                    const sapa = `Cieee... @${aku.replace(/[@c.us]/g, '')} (💘) @${kamu.replace(/[@c.us]/g, '')} acabou de acontecer aqui \nPara o pj por favor`
                    await aruga.sendTextWithMentions(from, sapa)
                    break     
                
            case 'resend':
                if (!isGroupAdmins) return aruga.reply(from, 'Falha, este recurso só pode ser usado por Admin',id)
                if (quotedMsgObj) {
                    let encryptMedia
                    let replyOnReply = await aruga.getMessageById(quotedMsgObj.id)
                    let obj = replyOnReply.quotedMsgObj
                    if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
                        encryptMedia = quotedMsgObj
                        if (encryptMedia.animated) encryptMedia.mimetype = ''
                    } else if (obj && /ptt|audio|video|image/.test(obj.type)) {
                        encryptMedia = obj
                    } else return
                    const _mimetype = encryptMedia.mimetype
                    const mediaData = await decryptMedia(encryptMedia)
                    await aruga.sendFile(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, 'file', ':)', encryptMedia.id)
                } else aruga.reply(from, config.msg.noMedia, id)
                break
                case 'ameliandani':
                    if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
                    const andani = fs.readFileSync('./lib/amelia.json')
                    const amel = JSON.parse(andani)
                    const randum = Math.floor(Math.random() * amel.length)
                    const uwoyy = amel[randum]
                    aruga.sendImage(from, uwoyy.image, 'Amel.jpg', uwoyy.teks, id)
                    break
            case 'bokep': // MFARELS
            case 'randombokep': // MFARELS
            case 'bkp': // MFARELS
                if (!isPrem) return aruga.reply(from, 'Comande o proprietário do \nChat Premium para se registrar', id)
                const mskkntl = fs.readFileSync('./lib/18+.json') // MFARELS
                const kntlnya = JSON.parse(mskkntl) // MFARELS
                const rindBkp = Math.floor(Math.random() * kntlnya.length) // MFARELS
                const rindBkep = kntlnya[rindBkp] // MFARELS
                aruga.sendFileFromUrl(from, rindBkep.image, 'Bokep.jpg', rindBkep.teks, id) // MFARELS
                break
        case 'join':
            if (args.length == 0) return aruga.reply(from, `Se você quiser convidar o bot para o grupo, por favor, convide ou digite ${prefix}join [link group]`, id)
            let linkgrup = body.slice(6)
            let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
            let chekgrup = await aruga.inviteInfo(linkgrup)
            if (!islink) return aruga.reply(from, 'Desculpe, o link do grupo está errado! por favor nos envie o link correto', id)
            if (isOwnerBot) {
                await aruga.joinGroupViaLink(linkgrup)
                      .then(async () => {
                          await aruga.sendText(from, 'Entrou no grupo com sucesso através do link!')
                          await aruga.sendText(chekgrup.id, `e aí vocês, eu sou o jheffer Bot. Para descobrir os comandos neste tipo de bot ${prefix}menu`)
                      })
            } else {
                let cgrup = await aruga.getAllGroups()
                if (cgrup.length > groupLimit) return aruga.reply(from, `Desculpe, o grupo neste bot está cheio \n Group é: ${groupLimit}`, id)
                if (cgrup.size < memberLimit) return aruga.reply(from, `Desculpe, o bot não entrará se os membros do grupo não excederem ${memberLimit} people`, id)
                await aruga.joinGroupViaLink(linkgrup)
                      .then(async () =>{
                          await aruga.reply(from, 'Entrou no grupo com sucesso via link!', id)
                      })
                      .catch(() => {
                          aruga.reply(from, 'Falhou!', id)
                      })
            }
            break
        case 'shopee':
            if (!isGroupMsg) return aruga.reply(from, `Este comando só pode ser usado em grupos!`, id)
            if (args.length === 1) return aruga.reply(from, `Enviar pedidos *${prefix}shopee [ Query ]*, exemplo : *${prefix}shopee HP Samsul a20*`)
            const shopek = body.slice(8)
            aruga.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/shopee?query=${shopek}&count=5&apikey=${vhtearkey}`)
                const dataplay = dataplai.data.result
                 let shopeq = `*「 SHOPEE 」*\n\n*Resultado da pesquisa : ${shopek}*\n`
                for (let i = 0; i < dataplay.items.length; i++) {
                    shopeq += `\n─────────────────\n\n• *Nama* : ${dataplay.items[i].nama}\n• Harga* : ${dataplay.items[i].harga}\n• *Terjual* : ${dataplay.items[i].terjual}\n• *Lokasi Toko* : ${dataplay.items[i].shop_location}\n• *Deskripsi* : ${dataplay.items[i].description}\n• *Link Product : ${dataplay.items[i].link_product}*\n`
                }
                await aruga.sendFileFromUrl(from, dataplay.items[0].image_cover, `shopee.jpg`, shopeq, id)
            } catch (err){
                console.log(err)
            }
            break
        case 'playstore':
            if (!isGroupMsg) return aruga.reply(from, `Este comando só pode ser usado em grupos!`, id)
            if (args.length === 0) return aruga.reply(from, `Enviar pedidos *${prefix}playstore [ Query ]*, Exemplo : *${prefix}playstore Mobile Legends*`)
            const keywotp = body.slice(11)
            aruga.reply(from, mess.wait, id)
            try {
                const dataplai = await axios.get(`https://api.vhtear.com/playstore?query=${keywotp}&apikey=${vhtearkey}`)
                const dataplay = dataplai.data
                 let keluarplay = `*「 PLAYSTORE 」*\n\nResultado da pesquisa : ${keywotp}*\n`
                for (let i = 0; i < dataplay.result.length; i++) {
                    keluarplay += `\n─────────────────\n\n• *Nome* : ${dataplay.result[i].title}\n• *Desenvolvedor* : ${dataplay.result[i].developer}\n• *Descrição* : ${dataplay.result[i].description}\n• *Paket ID* : ${dataplay.result[i].app_id}\n• *Harga* : ${dataplay.result[i].price}\n• *Link App* : https://play.google.com${dataplay.result[i].url}\n`
                }
                await aruga.sendFileFromUrl(from, dataplay.result[0].icon, `iconapk.webp`, keluarplay, id)
            } catch (err){
                console.log(err)
            }
            break
        case 'setgroupname':
            if (!isGroupMsg) return aruga.reply(from, `Este recurso só pode ser usado em grupos`, id)
            if (!isGroupAdmins) return aruga.reply(from, `Este recurso só pode ser usado por administradores de grupo`, id)
            if (!isBotGroupAdmins) return aruga.reply(from, `Este recurso só pode ser usado quando o bot é um administrador`, id)
            const namagrup = body.slice(14)
            const sebelum = chat.groupMetadata.gcok
            let halaman = global.page ? global.page : await aruga.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            aruga.sendTextWithMentions(from, `O nome do grupo foi alterado pelo administrador @${sender.id.replace('@c.us','')}\n\n• Antes: ${sebelum}\n• Depois de: ${namagrup}`)
            break
        case 'setname':
                if (!isOwnerB) return aruga.reply(from, `Este comando só pode ser usado pelo Owner Bot!`, id)
                    const setnem = body.slice(9)
                    await aruga.setMyName(setnem)
                    aruga.sendTextWithMentions(from, `Obrigado pelo novo nome @${sender.id.replace('@c.us','')} 😘`)
                break
                case 'read':
                    if (!isGroupMsg) return aruga.reply(from, `Este comando só pode ser usado em grupos!`, id)                
                    if (!quotedMsg) return aruga.reply(from, `Por favor, responda o bot de mensagem`, id)
                    if (!quotedMsgObj.fromMe) return aruga.reply(from, `Por favor, responda o bot de mensagem`, id)
                    try {
                        const reader = await aruga.getMessageReaders(quotedMsgObj.id)
                        let list = ''
                        for (let pembaca of reader) {
                        list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
                    }
                        aruga.sendTextWithMentions(from, `Eu sinto Muito ...n${list}`)
                    } catch(err) {
                        console.log(err)
                        aruga.reply(from, `Desculpe, ninguém leu as mensagens do bot ainda ou desativou os recibos de leitura`, id)    
                    }
                    break
        case 'setstatus':
                if (!isOwnerB) return aruga.reply(from, `Este comando só pode ser usado pelo Owner Bot!`, id)
                    const setstat = body.slice(11)
                    await aruga.setMyStatus(setstat)
                    aruga.sendTextWithMentions(from, `Obrigado pelo novo status @${sender.id.replace('@c.us','')} 😘`)
                break
        case 'botstat': {
            const loadedMsg = await aruga.getAmountOfLoadedMessages()
            const charged = await aruga.getIsPlugged();
            const device = await aruga.getMe() 
            const deviceinfo = `- Nivel Bateria : ${device.battery}%\n  ├ Está carregando : ${charged}\n  └ 24 Hours Online : ${device.is24h}\n  ├ OS Version : ${device.phone.os_version}\n  └ Número da compilação : ${device.phone.os_build_number}\n\n _*Jam :*_ ${moment(t * 1000).format('HH:mm:ss')}`   
            const chatIds = await aruga.getAllChatIds()
            const groups = await aruga.getAllGroups()
            const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '62895334962050@c.us'].includes(x.id._serialized)).includes(true))
            aruga.sendText(from, `*Informação do dispositivo*\n${deviceinfo}\n\nStatus :\n- *${loadedMsg}* Loaded Messages\n- *${groupsIn.length}* Group Joined\n- *${groups.length - groupsIn.length}* Groups Left\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length - groups.length - groupsIn.length}* Personal Chats Active\n- *${chatIds.length}* Total Chats\n- *${chatIds.length - groupsIn.length}* Total Chats ativos`)
            break
        }

	//Sticker Converter
	case 'stikertoimg':
	case 'stickertoimg':
	case 'stmg':
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                aruga.reply(from, `Sendo processado! Por favor espere um momento...`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await aruga.sendFile(from, imageBase64, 'imgsticker.jpg', 'Converter com sucesso adesivo em imagem!', id)
                .then(() => {
                    console.log(`Sticker to Image Processed for ${processTime(t, moment())} Seconds`)
                })
        } else if (!quotedMsg) return aruga.reply(from, `Formato incorreto, marque o adesivo que deseja usar como imagem!`, id)
        break
			
			
        // Sticker Creator
	case 'coolteks':
	case 'cooltext':
            if (args.length == 0) return aruga.reply(from, `Para criar um texto CoolText legal em imagens, use ${prefix}cooltext teks\n\nContoh: ${prefix}cooltext jhefer`, id)
		rugaapi.cooltext(args[0])
		.then(async(res) => {
		await aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
		})
		break
        case 'sticker':
        case 'stiker':
        case 'stc':
            if ((isMedia || isQuotedImage) && args.length === 0) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                aruga.sendImageAsSticker(idgrupo, imageBase64), id;
                aruga.sendImageAsSticker(from, imageBase64)
                .then(() => {
                    aruga.reply(from, 'aqui esta seu sticker jovem')
                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                })
                aruga.reply(from, '*Acesse o grupo do jefe https://chat.whatsapp.com/I4fuHGCak695NdlEONZF5o .*', id)
                
            } else if (args[0] === 'nobg') {
                if (isMedia === true) {
                    try {
                        var mediaData = await decryptMedia(message, uaOverride)
                        var imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        var base64img = imageBase64
                        var outFile = './media/img/noBg.png'
                        //untuk api key kalian bisa dapatkan pada website remove.bg
                        var result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'VLv8PE7axMpzyc1z9QLzrbdM', size: 'auto', type: 'auto', outFile })
                        await fs.writeFile(outFile, result.base64img)
                        await aruga.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`)
                    } catch (err) {
                        aruga.reply(from, 'Error', id)
                    }
                }}
                break
	case 'brainly':
            if (args.length >= 2){
                const BrainlySearch = require('./lib/brainly')
                let tanya = body.slice(9)
                let jum = Number(tanya.split('.')[1]) || 2
                if (jum > 10) return aruga.reply(from, 'Max 10!', id)
                if (Number(tanya[tanya.length-1])){
                    tanya
                }
                aruga.reply(from, `➸ *Questão* : ${tanya.split('.')[0]}\n\n➸ *Total Resposta* : ${Number(jum)}`, id)
                await BrainlySearch(tanya.split('.')[0],Number(jum), function(res){
                    res.forEach(x=>{
                        if (x.jawaban.fotoJawaban.length == 0) {
                            aruga.reply(from, `➸ *Questão* : ${x.pertanyaan}\n\n➸ *Responda* : ${x.jawaban.judulJawaban}\n`, id)
			    aruga.sendText(from, 'nihh ngab')
                        } else {
                            aruga.reply(from, `➸ *Questão* : ${x.pertanyaan}\n\n➸ *Responda* 〙: ${x.jawaban.judulJawaban}\n\n➸ *Responder ao link da foto* : ${x.jawaban.fotoJawaban.join('\n')}`, id)
                        }
                    })
                })
            } else {
                aruga.reply(from, `Uso :\n${prefix}brainly [pertanyaan] [.jumlah]\n\nEx : \n${prefix}brainly NKRI .2`, id)
            }
            break
            case 'tomp3':
                if (isMedia || isQuotedVideo){
                    if (mimetype === 'video/mp4') {
                        var medata = await decryptMedia(message, uaOverride)
                        aruga.reply(from, mess.wait, id)
                        aruga.sendPtt(from, medata, id)
                    }
                }
                break
            case 'stickergif':
                case 'stikergif':
                case 'sgif':
                    if (isMedia || isQuotedVideo) {
                        if (mimetype === 'video/mp4' && message.duration < 20 || mimetype === 'image/gif' && message.duration < 20) {
                            var mediaData = await decryptMedia(message, uaOverride)
                            aruga.reply(from, '[WAIT] Em andamento⏳ aguarde ± 1 min!', id)
                            var filename = `./media/stickergif.${mimetype.split('/')[1]}`
                            await fs.writeFileSync(filename, mediaData)
                            await exec(`gify ${filename} ./media/stickergif.mp4 --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                                var gif = await fs.readFileSync('./media/stickergif.mp4', { encoding: "base64" })
                                await aruga.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                                .catch(() => {
                                    aruga.reply(from, 'calma jovem', id)
                                })
                            })
                          } else {
                            aruga.reply(from, `[❗] Envie um GIF com uma legenda *${prefix}stickergif* max 10 sec!`, id)
                           }
                        } else {
                    aruga.reply(from, `[❗] Envie um GIF com uma legenda *${prefix}stickergif*`, id)
                    }
                    break
        case 'stikergiphy':
        case 'stickergiphy':
            if (args.length !== 1) return aruga.reply(from, `Desculpe, o formato da mensagem está errado. \N Digite a mensagem com ${prefix}stickergiphy <link_giphy>`, id)
            const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
            const isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
            if (isGiphy) {
                const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                if (!getGiphyCode) { return aruga.reply(from, 'Falha ao recuperar o código giphy', id) }
                const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                aruga.sendGiphyAsSticker(from, smallGifUrl).then(() => {
                    aruga.reply(from, 'Here\'s your sticker')
                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                }).catch((err) => console.log(err))
            } else if (isMediaGiphy) {
                const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                if (!gifUrl) { return aruga.reply(from, 'Falha ao recuperar o código giphy', id) }
                const smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif')
                aruga.sendGiphyAsSticker(from, smallGifUrl)
                .then(() => {
                    aruga.reply(from, 'Here\'s your sticker')
                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                })
                .catch(() => {
                    aruga.reply(from, `Ada yang error!`, id)
                })
            } else {
                await aruga.reply(from, 'Desculpe, o adesivo do comando giphy só pode usar o link do giphy.  [Giphy Only]', id)
            }
            break
case 'infobmkg':
axios.get(`https://mnazria.herokuapp.com/api/bmkg-gempa`).then (res => {
	const inidia = `${res.data.result}\n*Saran* : ${res.data.saran}`
	aruga.sendText(from, inidia, id)
	})
	break
case 'bucin':
axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then(res => {
	const ayamgrg = `*Bucin detectado*\n*Percentagem* : ${res.data.persen}% \n_${res.data.desc}_ `;
	aruga.sendText(from, ayamgrg, id)
	})
    break
case 'setdesc':
    if (!isGroupAdmins) return aruga.reply(from, 'Este recurso só pode ser usado por Admin!')
    const descnya = body.slice(9)
    const ganti = await aruga.setGroupDescription(descnya)
        aruga.setGroupDescription(groupId, ganti)
        break
case 'quotesen':
const qtos = await axios.get(`https://api.vhtear.com/quotes?apikey=${vhtearkey}`).then(res => {
    const fto = `Autor : *${res.data.result.author}*\n\ncitações : *${res.data.result.content}*`;
    aruga.sendText(from, fto, id)
})
break
case 'detail':
    if (args.length == 0) return aruga.reply(from, `Para pesquisar os detalhes de uma área! \nExemplos : ${prefix}jam Jakarta`, id)
    const jamu = await axios.get(`https://api.i-tech.id/tools/jam?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&kota=${body.slice(8)}`).then(res => {
        const husal = `*Território :* ${res.data.timezone}\n*Cidade :* ${res.data.address}\n*Encontro :* ${res.data.date}\n*Jam :* ${res.data.time}\n*Latitude :* ${res.data.latitude}\n*Longitude :* ${res.data.longitude}`
        aruga.reply(from, husal, id)
        .catch(() => {
            aruga.reply(from,'Error...', id)
        })
    })
    .catch(() => {
        aruga.reply(from, 'Desculpe, a região que você está procurando não pode ser encontrada', id)
    })
    break
case 'infogempa':
if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
const bmkg = await axios.get('https://arugaz.herokuapp.com/api/infogempa').then(res => {
const hasil = `*INFORMAÇÕES SOBRE TERREMOTO*\n*Localização* : _${res.data.lokasi}_\n*Profundidade* : _${res.data.kedalaman}_\n*Koordinat* : _${res.data.koordinat}_\n*Magnitude* : _${res.data.magnitude}_\n*Waktu* : _${res.data.waktu}_\n${res.data.potensi}`;
aruga.sendText(from, hasil, id)
}) 
break
        case 'meme':
            if ((isMedia || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                aruga.sendFile(from, ImageBase64, 'image.png', '', null, true)
                    .then(() => {
                        aruga.reply(from, 'Obrigado!',id)
                    })
                    .catch(() => {
                        aruga.reply(from, 'Algo deu errado!')
                    })
            } else {
                await aruga.reply(from, `Sem imagem! Envie uma foto com uma legenda ${prefix}meme <teks_atas> | <teks_bawah>\ncontoh: ${prefix}meme teks atas | teks bawah`, id)
            }
            break
        case 'quotemaker':
            const qmaker = body.trim().split('|')
            if (qmaker.length >= 3) {
                const quotes = qmaker[1]
                const author = qmaker[2]
                const theme = qmaker[3]
                aruga.reply(from, 'Processo sis ...', id)
                try {
                    const hasilqmaker = await images.quote(quotes, author, theme)
                    aruga.sendFileFromUrl(from, `${hasilqmaker}`, '', 'Ini kak..', id)
                } catch {
                    aruga.reply('Bem, o processo falhou, irmão, ainda está correto?...', id)
                }
            } else {
                aruga.reply(from, `Uso ${prefix}quotemaker |isi quote|author|theme\n\nexemplo: ${prefix}quotemaker |aku sayang kamu|-aruga|random\n\npara o tema, use random, sis ...`)
            }
            break
        case 'nulis':
            if (args.length == 0) return aruga.reply(from, `Faça o bot escrever o texto que é enviado como imagem\nPemakaian: ${prefix}nulis [teks]\n\nex: ${prefix}nulis Eu amo o jheffer`, id)
            const nulisq = body.slice(7)
            const nulisp = await rugaapi.tulis(nulisq)
            await aruga.sendImage(from, `${nulisp}`, '', 'Nih...', id)
            .catch(() => {
                aruga.reply(from, 'algo deu errado', id)
            })
            break

        //Islam Command
        case 'listsurah':
            try {
                axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══✪〘 Lista jhefer 〙✪══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '╠➥ '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 *J H E F   B O T* 〙'
                    aruga.reply(from, hehex, id)
                })
            } catch(err) {
                aruga.reply(from, err, id)
            }
            break
        case 'infosurah':
            if (args.length == 0) return aruga.reply(from, `*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                var pesan = ""
                pesan = pesan + "Nome : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                aruga.reply(from, pesan, message.id)
              break
        case 'surah':
            if (args.length == 0) return aruga.reply(from, `*_${prefix}surah <nama surah> <ayat>_*\nMenampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${prefix}surah al-baqarah 1\n\n*_${prefix}surah <nama surah> <ayat> en/id_*\nExibe certos versos do Al-Quran e suas traduções em inglês / indonésio. Exemplo de uso: ${prefix}surah al-baqarah 1 id`, message.id)
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var { data } = responseh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responseh2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responseh2.data
                  var last = function last(array, n) {
                    if (array == null) return void 0;
                    if (n == null) return array[array.length - 1];
                    return array.slice(Math.max(array.length - n, 0));
                  };
                  bhs = last(args)
                  pesan = ""
                  pesan = pesan + data.text.arab + "\n\n"
                  if(bhs == "en") {
                    pesan = pesan + data.translation.en
                  } else {
                    pesan = pesan + data.translation.id
                  }
                  pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                  aruga.reply(from, pesan, message.id)
                }
              break
        case 'tafsir':
            if (args.length == 0) return aruga.reply(from, `*_${prefix}tafsir <nama surah> <ayat>_*\nMenampilkan certos versos do Al-Quran junto com sua tradução e interpretação em indonésio. Exemplo de uso: ${prefix}tafsir al-baqarah 1`, message.id)
                var responsh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var {data} = responsh.data
                var idx = data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = data[idx].number
                if(!isNaN(nmr)) {
                  var responsih = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+args[1])
                  var {data} = responsih.data
                  pesan = ""
                  pesan = pesan + "Tafsir Q.S. "+data.surah.name.transliteration.id+":"+args[1]+"\n\n"
                  pesan = pesan + data.text.arab + "\n\n"
                  pesan = pesan + "_" + data.translation.id + "_" + "\n\n" +data.tafsir.id.long
                  aruga.reply(from, pesan, message.id)
              }
              break
        case 'alaudio':
            if (args.length == 0) return aruga.reply(from, `*_${prefix}ALaudio <nama surah>_*\nExibe um link de uma surata de áudio específica. Exemplo de uso: ${prefix}ALaudio al-fatihah \n \n *_${prefix}ALaudio <nome da surata> <ayat>_* \n Envia o áudio de certas suratas e versos junto com suas traduções em indonésio. Exemplo de uso: ${prefix}ALaudio al-fatihah 1 \ n \ n *_${prefix}ALaudio <nome da surata> <ayat> en_* \nEnviar o áudio de certas suratas e versos junto com suas traduções em inglês. Exemplo de uso: ${prefix}ALaudio al-fatihah 1 en`, message.id)
              ayat = "ayat"
              bhs = ""
                var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                var surah = responseh.data
                var idx = surah.data.findIndex(function(post, index) {
                  if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                    return true;
                });
                nmr = surah.data[idx].number
                if(!isNaN(nmr)) {
                  if(args.length > 2) {
                    ayat = args[1]
                  }
                  if (args.length == 2) {
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    ayat = last(args)
                  } 
                  pesan = ""
                  if(isNaN(ayat)) {
                    var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/'+nmr+'.json')
                    var {name, name_translations, number_of_ayah, number_of_surah,  recitations} = responsih2.data
                    pesan = pesan + "Surata do Alcorão em Áudio"+number_of_surah+" "+name+" ("+name_translations.ar+") "+ "dengan jumlah "+ number_of_ayah+" ayat\n"
                    pesan = pesan + "Cantado por "+recitations[0].name+" : "+recitations[0].audio_url+"\n"
                    pesan = pesan + "Cantado por "+recitations[1].name+" : "+recitations[1].audio_url+"\n"
                    pesan = pesan + "Cantado por "+recitations[2].name+" : "+recitations[2].audio_url+"\n"
                    aruga.reply(from, pesan, message.id)
                  } else {
                    var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/'+nmr+"/"+ayat)
                    var {data} = responsih2.data
                    var last = function last(array, n) {
                      if (array == null) return void 0;
                      if (n == null) return array[array.length - 1];
                      return array.slice(Math.max(array.length - n, 0));
                    };
                    bhs = last(args)
                    pesan = ""
                    pesan = pesan + data.text.arab + "\n\n"
                    if(bhs == "en") {
                      pesan = pesan + data.translation.en
                    } else {
                      pesan = pesan + data.translation.id
                    }
                    pesan = pesan + "\n\n(Q.S. "+data.surah.name.transliteration.id+":"+args[1]+")"
                    await aruga.sendFileFromUrl(from, data.audio.secondary[0])
                    await aruga.reply(from, pesan, message.id)
                  }
              }
              break
        case 'jsolat':
            if (args.length == 0) return aruga.reply(from, `Para ver os horários de oração para cada região, digite: ${prefix}jsolat [area] \n \npara a lista de regiões existentes, digite: ${prefix}area`, id)
            const solatx = body.slice(8)
            const solatj = await rugaapi.jadwaldaerah(solatx)
            await aruga.reply(from, solatj, id)
            .catch(() => {
                aruga.reply(from, 'Certifique-se de que sua área esteja na lista!', id)
            })
            break
        case 'daerah':
            const daerahq = await rugaapi.daerah()
            await aruga.reply(from, daerahq, id)
            .catch(() => {
                aruga.reply(from, 'Algo deu Errado', id)
            })
            break
	//Group All User
	case 'grouplink':
    case 'linkgc':
            if (!isBotGroupAdmins) return aruga.reply(from, 'Este comando só pode ser usado quando o bot se torna administrador', id)
            if (isGroupMsg) {
                const inviteLink = await aruga.getGroupInviteLink(groupId);
                aruga.sendLinkWithAutoPreview(from, inviteLink, `\nLink do grupo *${name}* Use *${prefix}revoke* para redefinir o link do grupo`)
            } else {
            	aruga.reply(from, 'Este comando só pode ser usado em grupos!', id)
            }
            break
	case "revoke":
	if (!isBotGroupAdmins) return aruga.reply(from, 'Este comando só pode ser usado quando o bot se torna administrador', id)
                    if (isBotGroupAdmins) {
                        aruga
                            .revokeGroupInviteLink(from)
                            .then((res) => {
                                aruga.reply(from, `Use com sucesso Revogar Link do Grupo *${prefix}grouplink* para obter o último link de convite de grupo`, id);
                            })
                            .catch((err) => {
                                console.log(`[ERR] ${err}`);
                            });
                    }
                    break;
        //Media 
        case 'ytmp3':
            case 'ytmp3':
                if (args.length == 0) return aruga.reply(from, `Para baixar músicas do youtube \n digite: ${prefix}ytmp3 [link_yt]`, id)
                const linkmp3 = args[0].replace('https://youtu.be/','').replace('https://www.youtube.com/watch?v=','')
                rugaapi.ytmp3(`https://youtu.be/${linkmp3}`)
                .then(async(res) => {
                    if (res.error) return aruga.sendFileFromUrl(from, `${res.url}`, '', `${res.error}`)
                    await aruga.sendFileFromUrl(from, `${res.thumb}`, 'image.jpg', `*「 YOUTUBE MP3 」*\n\n*título:* ${res.title}\n *Do canal:* ${res.channel} \n *Carregado:* ${res.uploaded} \n *Duração:* ${res.duration} \n*Visualização:* ${res.total_view} \n *Tamanho:* ${res.filesize} \n \n *_Paciente, jhefer está enviando seu Áudio_*`, id)
                    await aruga.sendFileFromUrl(from, `${res.link}`, '', id)
                    .catch(() => {
                aruga.reply(from, `Error ngab`, id)
            })
                })
                break
            case 'jadwalbola':
                if (!isGroupMsg) return aruga.reply(from, `Este comando só pode ser usado em grupos!`, id)
            aruga.reply(from, mess.wait, id)
            try {
                const jdbola = await fetch(`https://api.vhtear.com/jadwalbola&apikey=${vhtearkey}`)
                if (!jdbola.ok) throw new Error(`unexpected response ${jdbola.statusText}`)
                const jdbola2 = await jdbola.json()
                const { data } = await jdbola2.result
                let xixixi = `*「 JADWAL BOLA 」*\n\n`
                for (let i = 0; i < data.length; i++) {
                    xixixi += `\n─────────────────\n\n*Kick-Off* : ${data[i].kickoff}\n*Pertandingan* : ${data[i].pertandingan}\n*Stasiun TV* : ${data[i].stasiuntv}`
                }
                await aruga.sendText(from, xixixi, id)
            } catch (err) {
                    console.log(err)
                    await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Jadwal tidak ditemukan')
            }
            break
            case 'emojisticker':
            case 'emojistiker':
                if (args.length !== 1) return aruga.reply(from, `Kirim perintah ${prefix}emojisticker [emoji]\nContoh : ${prefix}emojisticker 😫`, id)
                const emoji = emojiUnicode(q)
                await aruga.reply(from, `Wait....`, id)
                console.log(`Creating code emoji => ${emoji}`)
                aruga.sendStickerfromUrl(from, `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${vhtearkey}`)
                 .catch ((err) => {
                    console.log(err)
                    aruga.reply(from, 'Maaf, emoji yang kamu kirim tidak support untuk dijadikan sticker, cobalah emoji lain', id)
                })
                break
            case 'distance':
                if (!isGroupMsg) return aruga.reply(from, `Perintah ini hanya bisa di gunakan dalam group!`, id)
                if (args.length === 0) return aruga.reply(from, `[❗] Kirim perintah *${prefix}distance [ Daerah1|Daerah2 ]*\ncontoh : *${prefix}distance Jakarta|Bandung*`)
                aruga.reply(from, `[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!`, id)
                try {
                    const dfdc1 = arg.split('|')[0]
                    const dfdc2 = arg.split('|')[1]
                    const dfdcres = await axios.get('https://api.vhtear.com/distance?from='+dfdc1+'&to='+dfdc2+'&apikey='+vhtearkey)
                    const { result } = dfdcres.data
                    await aruga.reply(from, `*「 DRIVING-FLYING DISTANCE 」*\n\n${result.data}`, id)
                } catch (err) {
                    console.error(err.message)
                    await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Lokasi tidak ditemukan')
                }
                break
                case 'glitch':
                    if (args.length === 0) return aruga.reply(from, `Kirim perintah *${prefix}glitch [ |Teks1|Teks2 ]*, contoh *${prefix}glitch |Urbae|Dev Elaina*`, id)
                    argz = body.trim().split('|')
                    if (argz.length >= 2) {
                        aruga.reply(from, mess.wait, id)
                        const glitch1 = argz[1]
                        const glitch2 = argz[2]
                        if (glitch1.length > 10) return aruga.reply(from, '*Teks1 Terlalu Panjang!*\n_Maksimal 10 huruf!_', id)
                        if (glitch2.length > 15) return aruga.reply(from, '*Teks2 Terlalu Panjang!*\n_Maksimal 15 huruf!_', id)
                        aruga.sendFileFromUrl(from, `https://api.vhtear.com/glitchtext?text1=${glitch1}&text2=${glitch2}&apikey=${vhtearkey}`)
                    } else {
                        await aruga.reply(from, `Wrong Format!\n[❗] Kirim perintah *${prefix}glitch [ |Teks1|Teks2 ]*, contoh *${prefix}glitch |Urbae|Dev Elaina*`, id)
                    }
                    break
                    case 'anoboy':
                        await aruga.reply(from, mess.wait, id)
                        rugaapi.anoboy()
                            .then(async ({ result }) => {
                                let anoboyInfo = '-----[ *ANOBOY ON-GOING* ]-----'
                                for (let i = 0; i < result.length; i++) {
                                    anoboyInfo += `\n\n➸ *Title*: ${result[i].title}\n➸ *URL*: ${result[i].url}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                                }
                                await aruga.reply(from, anoboyInfo, id)
                                console.log('Success sending on-going anime!')
                            })
                            .catch(async (err) => {
                                console.error(err)
                                await aruga.reply(from, 'Error!', id)
                            })
                    break
                    case 'imagetourl':
                        case 'imgtourl':
                            if (isMedia && isImage || isQuotedImage) {
                                await aruga.reply(from, mess.wait, id)
                                const encryptMedia = isQuotedImage ? quotedMsg : message
                                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                                await aruga.reply(from, linkImg, id)
                            } else {
                                await aruga.reply(from, 'Format pesan salah...', id)
                            }
                        break
                    case 'findsticker':
                        case 'findstiker':
                           if (args.length == 0) return aruga.reply(from, `Format pesan salah!\nContoh : ${prefix}findstiker gore`, id)
                            await aruga.reply(from, mess.wait, id)
                            try {
                                rugaapi.sticker(args)
                                    .then(async ({ result }) => {
                                        if (result.response !== 200) return await aruga.reply(from, 'Not found!', id)
                                        for (let i = 0; i < result.data.length; i++) {
                                            await aruga.sendStickerfromUrl(from, result.data[i])
                                        }
                                        console.log('Success sending sticker!')
                                    })
                            } catch (err) {
                                console.error(err)
                                await aruga.reply(from, `Error!\n\n${err}`, id)
                            }
                        break
            case 'instastory':
            case 'igstory':
                if (args.length == 0) return aruga.reply(from, 'Format pesan salah!', id)
                await aruga.reply(from, mess.wait, id)
                    rugaapi.its(args)
                    .then(async ({ result }) => {
                        for (let i = 0; i < result.story.itemlist.length; i++) {
                            const { urlDownload } = result.story.itemlist[i]
                            await aruga.sendFileFromUrl(from, urlDownload, '', '', id)
                            console.log('Success sending IG Story!')
                        }
                    })
            break
                    case 'ig':
                        case 'instagram':
                           if (args.length == 0) return aruga.reply(from, `Kirim perintah *${prefix}ig [linkIg]*`, id)
                            const igUrl = body.split(' ')[1]
                            if (!igUrl.startsWith('https://www.instagram.com')) return aruga.reply(from, 'Maaf, ini bukan link instagram!')
                            aruga.reply(from, mess.wait, id)
                             {
                                request.get({
                                    url: `http://keepsaveit.com/api?api_key=${keepSave}&url=${igUrl}`,
                                    json: true,
                                    headers: {
                                        'User-Agent': 'request'
                                    }
                                }, (err, res, data) => {
                                    if (err) {
                                        console.log('Error : ', err);
                                    } else if (res.statusCode !== 200) {
                                        console.log('Status:', res.statusCode);
                                        aruga.reply(from, data.msg, id)
                                    } else {
                                        const { title, links } = data.response
                                        const { ext, url, size, resolution } = links
                                        const regexIg = /\\\//gi;
                                        const thisUrlIg = url.replace(regexIg, '/')
                                        if (ext === 'mp4') {
                                            aruga.sendFileFromUrl(from, thisUrlIg, 'KZ0-IGDL.mp4', `*From :* ${title.split(' on')[0]}\n*Size :* ${size}\n*Resolusi :* ${resolution}`, id)
                                        } else {
                                            aruga.sendFileFromUrl(from, thisUrlIg, 'KZ0-IGDL.mp3', `*From:* ${title.split(' on')[0]}\n*Size:* ${size}`, id)
                                        }
                                    }
                            })
                        }
                                break
                            case 'nhpdf':
                                if (args.length == 0)return aruga.reply(from, `Kode nuklir tidak ditemukan\nUsage : ${prefix}nhpdf 20935`, id)
                                rugaapi.nhpdf(args)
                                .then(async(res) => {
                                    await aruga.sendFileFromUrl(from, `${res.pdf_file}`, '', `${res.title}`, id)
                                })
                                .catch(() => {
                                    aruga.reply(from, 'Error', id)
                                })
                                break
                            case 'asupan':
                                if (!isGroupMsg) return await aruga.reply(from, 'Fitur ini hanya bisa digunakan didalam grup!', id)
                                await aruga.reply(from, mess.wait, id)
                                rugaapi.asupan()
                                    .then(async (body) => {
                                        const asupan = body.split('\n')
                                        const asupanx = asupan[Math.floor(Math.random() * asupan.length)]
                                        await aruga.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'asupan.mp4', 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', id)
                                        console.log('Success sending video!')
                                    })
                                    .catch(async (err) => {
                                        console.error(err)
                                        await aruga.reply(from, 'Error!', id)
                                    })
                            break
                             
case 'ytsearch':
    if (args.length === 0) return aruga.reply(from, `Kirim perintah *${prefix}ytsearch [ Query ]*, Contoh : ${prefix}ytsearch alan walker alone`)
    const ytsher = body.slice(10)
    aruga.reply(from, mess.wait, id)
    try {
        const response2 = await fetch(`https://api.vhtear.com/youtube?query=${encodeURIComponent(ytsher)}&apikey=${vhtearkey}`)
        if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
        const jsonserc = await response2.json()
        const { result } = await jsonserc
        let xixixi = `*「 YOUTUBE SEARCH 」*\n\n*Hasil Pencarian : ${ytsher}*\n`
        for (let i = 0; i < result.length; i++) {
            xixixi += `\n─────────────────\n\n• *Judul* : ${result[i].title}\n• *Ditonton* : ${result[i].views}\n• *Durasi* : ${result[i].duration}\n• *Channel* : ${result[i].channel}\n• *URL* : ${result[i].urlyt}\n`
        }
        await aruga.sendFileFromUrl(from, result[0].image, 'thumbserc.jpg', xixixi, id)
    } catch (err) {
            console.log(err)
            await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
    }
    break
			
        //Primbon Menu
        case 'missing':
           if (args.length == 0) return aruga.reply(from, 'Format pesan salah')
            const atas = q.substring(0, q.indexOf('|') - 1)
            const tengah = q.substring(q.indexOf('|') + 2, q.lastIndexOf('|') - 1)
            const bawah = q.substring(q.lastIndexOf('|') + 2)
            if (isMedia && isImage || isQuotedImage) {
                await aruga.reply(from, mess.wait, id)
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const imageLink = await uploadImages(mediaData, `missing.${sender.id}`)
                rugaapi.missing(atas, tengah, bawah, imageLink)
                    .then(async ({ result }) => {
                        await aruga.sendFileFromUrl(from, result.imgUrl, 'missing.jpg', '', id)
                        console.log('Success sending image!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await aruga.reply(from, 'Error!', id)
                    })
            } else {
                await aruga.reply(from, 'Format pesan salah', id)
            }
        break
        case 'myzodiac':
            case 'myzodiak':
                if (args.length == 0) return await aruga.reply(from, 'Format pesan salah', id)
                await aruga.reply(from, mess.wait, id)
                rugaapi.zodiak2(args[0])
                    .then(async ({ result }) => {
                        if (result.status === 204) {
                            return await aruga.reply(from, result.ramalan, id)
                        } else {
                            let ramalan = `Zodiak: ${result.zodiak}\n\nRamalan: ${result.ramalan}\n\nAngka laksek: ${result.nomorKeberuntungan}\n\n${result.motivasi}\n\n${result.inspirasi}`
                            await aruga.reply(from, ramalan, id)
                                .then(() => console.log('Success sending zodiac fortune!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await aruga.reply(from, 'Error!', id)
                    })
            break
		case 'zodiak':
            if (args.length !== 4) return aruga.reply(from, `Untuk mengecek zodiak, gunakan ${prefix}zodiak nama tanggallahir bulanlahir tahunlahir\nContoh: ${prefix}cekzodiak fikri 13 06 2004`, id)
            const cekzodiak = await rugaapi.cekzodiak(args[0],args[1],args[2])
            await aruga.reply(from, cekzodiak, id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
		case 'artinama':
			if (args.length == 0) return aruga.reply(from, `Untuk mengetahui arti nama seseorang\nketik ${prefix}artinama namakamu`, id)
            rugaapi.artinama(body.slice(10))
			.then(async(res) => {
				await aruga.reply(from, `Arti : ${res}`, id)
			})
			break
		case 'cekjodoh':
			if (args.length !== 2) return aruga.reply(from, `Untuk mengecek jodoh melalui nama\nketik: ${prefix}cekjodoh nama-kamu nama-pasangan\n\ncontoh: ${prefix}cekjodoh bagas siti\n\nhanya bisa pakai nama panggilan (satu kata)`)
			rugaapi.cekjodoh(args[0],args[1])
			.then(async(res) => {
				await aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.text}`, id)
			})
			break
			
        // Random Kata
      	case 'motivasi':
            fetch('https://raw.githubusercontent.com/selyxn/motivasi/main/motivasi.txt')
            .then(res => res.text())
            .then(body => {
                let splitmotivasi = body.split('\n')
                let randommotivasi = splitmotivasi[Math.floor(Math.random() * splitmotivasi.length)]
                aruga.reply(from, randommotivasi, id)
            })
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
	      case 'urgay':
        		if (args.length == 0) return aruga.reply(from, `Untuk mengetahui seberapa gay seseorang gunakan ${prefix}urgay namanya\n\nContoh: ${prefix}urgay burhan`, id)
            axios.get(`https://arugaz.herokuapp.com/api/howgay`)
            .then(res => {
                const gayy = res.data.desc
                aruga.reply(from, gayy, id)
            })
            break
        case 'fakta':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body => {
                let splitnix = body.split('\n')
                let randomnix = splitnix[Math.floor(Math.random() * splitnix.length)]
                aruga.reply(from, randomnix, id)
            })
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'katabijak':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body => {
                let splitbijak = body.split('\n')
                let randombijak = splitbijak[Math.floor(Math.random() * splitbijak.length)]
                aruga.reply(from, randombijak, id)
            })
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'fakboy':
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
            .then(res => res.text())
            .then(body => {
                let splitpantun = body.split('\n')
                let randompantun = splitpantun[Math.floor(Math.random() * splitpantun.length)]
                aruga.reply(from, randompantun.replace(/aruga-line/g,"\n"), id)
            })
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'quote':
            const quotex = await rugaapi.quote()
            await aruga.reply(from, quotex, id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
    		case 'cerpen':
      			rugaapi.cerpen()
      			.then(async (res) => {
		    		await aruga.reply(from, res.result, id)
      			})
		      	break
	     	case 'cersex':
                if (!isPrem) return aruga.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
			      rugaapi.cersex()
			      .then(async (res) => {
			    	await aruga.sendFileFromUrl(from, `${res.image}`, 'image.jpg' , `Judul : ${res.judul}\nCerita : ${res.cerita}`, id)
		      	})
		      	break
	    	case 'puisi':
		      	rugaapi.puisi()
		      	.then(async (res) => {
			    	await aruga.reply(from, res.result, id)
		      	})
		      	break

        //Random Images
        case 'anime':
            if (args.length == 0) return aruga.reply(from, `Untuk menggunakan ${prefix}anime\nSilahkan ketik: ${prefix}anime [query]\nContoh: ${prefix}anime random\n\nquery yang tersedia:\nrandom, waifu, husbu, neko`, id)
            if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomnime = body.split('\n')
                    let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                    aruga.sendFileFromUrl(from, randomnimex, '', 'Nee..', id)
                })
                .catch(() => {
                    aruga.reply(from, 'Ada yang Error!', id)
                })
            } else {
                aruga.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}anime untuk melihat list query`)
            }
            break
        case 'kpop':
            if (args.length == 0) return aruga.reply(from, `Untuk menggunakan ${prefix}kpop\nSilahkan ketik: ${prefix}kpop [query]\nContoh: ${prefix}kpop bts\n\nquery yang tersedia:\nblackpink, exo, bts`, id)
            if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomkpop = body.split('\n')
                    let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                    aruga.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
                })
                .catch(() => {
                    aruga.reply(from, 'Ada yang Error!', id)
                })
            } else {
                aruga.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}kpop untuk melihat list query`)
            }
            break
        case 'memes':
            const randmeme = await meme.random()
            aruga.sendFileFromUrl(from, randmeme, '', '', id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        
        // Search Any
	case 'dewabatch':
		if (args.length == 0) return aruga.reply(from, `Para pesquisar um lote de anime de Dewa Batch, digite ${prefix}dewabatch judul\n\nContoh: ${prefix}dewabatch naruto`, id)
		rugaapi.dewabatch(args[0])
		.then(async(res) => {
		await aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.text}, id`)
		})
        break
        case 'infoalamat':
        if (args.length == 0) return aruga.reply(from, `Untuk mencari suatu alamat\nUsage : ${prefix}infoalamat polresta`, id)
        rugaapi.ingfo(body.slice(12))
        .then(async(res) => {
            const ingf = `*Alamat :* ${res.result.data}\n\n*Keterangan :* ${res.result.deskripsi}`
            aruga.reply(from, ingf, id)
        })
        .catch(() => {
            aruga.reply(from, 'Errorr...', id)
        })
        break
    case 'kusonime':
        if (args.length == 0) return aruga.reply(from, `Untuk mencari anime batch dari Kusonime, ketik ${prefix}kusonime judul\n\nContih : ${prefix}kusonime naruto`, id)
        rugaapi.kusonime(args[0])
        .then(async(res) => {
            await aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.text}, id`)
        })
        break
        case 'images':
            if (args.length == 0) return aruga.reply(from, `Untuk mencari gambar dari pinterest\nketik: ${prefix}images [search]\ncontoh: ${prefix}images naruto`, id)
            const cariwall = body.slice(8)
            const hasilwall = await images.fdci(cariwall)
            await aruga.sendFileFromUrl(from, hasilwall, '', '', id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'sreddit':
            if (args.length == 0) return aruga.reply(from, `Untuk mencari gambar dari sub reddit\nketik: ${prefix}sreddit [search]\ncontoh: ${prefix}sreddit naruto`, id)
            const carireddit = body.slice(9)
            const hasilreddit = await images.sreddit(carireddit)
            await aruga.sendFileFromUrl(from, hasilreddit, '', '', id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
	    break
        case 'resep':
            if (args.length == 0) return aruga.reply(from, `Untuk mencari resep makanan\nCaranya ketik: ${prefix}resep [search]\n\ncontoh: ${prefix}resep tahu`, id)
            const cariresep = body.slice(7)
            const hasilresep = await resep.resep(cariresep)
            await aruga.reply(from, hasilresep + '\n\nIni kak resep makanannya..', id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'nekopoi':
             rugapoi.getLatest()
            .then((result) => {
                rugapoi.getVideo(result.link)
                .then((res) => {
                    let heheq = '\n'
                    for (let i = 0; i < res.links.length; i++) {
                        heheq += `${res.links[i]}\n`
                    }
                    aruga.reply(from, `Title: ${res.title}\n\nLink:\n${heheq}\nmasih tester bntr :v`)
                })
            })
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
            case 'stalktiktok':
            case 'stalktik':
            case 'stalktt':
                if (args.length == 0) return aruga.reply(from, `Untuk men-stalk akun Tiktok seseorang\nUsage ${prefix}stalktiktok [username]\ncontoh : ${prefix}stalktiktok @itsandani`, id)
                const stalktik = await rugaapi.stalktt(args[0])
                const pictt = await rugaapi.ttpict(args[0])
                await aruga.sendFileFromUrl(from, pictt, '', stalktik, id)
                .catch(() => {
                    aruga.reply(from, 'Akun tidak dapat ditemukan...', id)
                })
                break
            case 'gsmarena':
                if (args.length == 0) return aruga.reply(from, `Untuk mencari spefisikasi handphone dari Website GSMArena\nKetik ${prefix}gsmarena [jenishandphone]`, id)
                const gsms = await rugaapi.gsm(args[0])
                const fotox = await rugaapi.gsmpict(args[0])
                await aruga.sendFileFromUrl(from, fotox, '', gsms, id)
                .catch(() => {
                    aruga.reply(from, 'Maaf, Jenis Handphone yang anda cari tidak dapat kami temukan', id)
                })
                break
            case 'darkjokes':
                aruga.reply(from, mess.wait, id)
                 await axios.get(`https://api.zeks.xyz/api/darkjokes?apikey=benbenz`).then(res => {
                    aruga.sendFileFromUrl(from, `${res.data.result}`, 'image.jpg', id)
                    console.log('Success')
                    .catch(() => {
                        aruga.reply(from, 'Error')
                    })
                })
                .catch(() => {
                    aruga.reply(from, 'Error ngabb...', id)
                })
                break
            case 'goldpb':
                if (args.length == 0) return aruga.reply(from, `O bot enviará um Gold Play Button com um nome personalizado por você\nExemplo : ${prefix}goldpb Jheffe`, id)
                const yuza = body.slice(8)
                await axios.get(`https://api.zeks.xyz/api/gplaybutton?text=${yuza}&apikey=benbenz`).then(res => {
                    console.log('Getting Picture');
                    aruga.sendFileFromUrl(from, `${res.data.result}`, 'image.jpg', 'Parabéns por 1 milhão de assinantes', id)
                    })
                .catch(() => {
                    aruga.reply(from, 'Error....', id)
                })
                break
            case 'silverpb':
                if (args.length == 0) return aruga.reply(from, `Bot akan mengirimkan Silver Play Button dengan kata yang anda masukkan\nContoh : ${prefix}silverpb Urbaee`, id)
                const yuzu = body.slice(10)
                await axios.get(`https://api.zeks.xyz/api/splaybutton?text=${yuzu}&apikey=benbenz`).then(res => {
                    aruga.sendFileFromUrl(from, `${res.data.result}`, 'image.jpg', 'Congratss!!', id)
                    .catch(() => {
                        aruga.reply(from, 'Error ngab', id)
                    })
                })
                .catch(() => {
                    aruga.reply(from, 'Error ngab...', id)
                })
                break
            case 'stalktwit':
            case 'stalktwitter':
                if (args.length == 0) return aruga.reply(from, `Para perseguir a conta Blue Bird / Twitter de alguém\nexemplo ${prefix}stalktwit [username]\nexemplo : ${prefix}twitter anakbabi123`, id)
                const stalkus = await rugaapi.stalktwit(args[0])
                const sulkas = await rugaapi.burpot(args[0])
                await aruga.sendFileFromUrl(from, sulkas, '', stalkus, id)
                .catch(() => {
                    aruga.reply(from, 'Desculpe, nenhum nome de usuário foi encontrado', id)
                })
                break
            case 'stalkig':
                if (args.length == 0) return aruga.reply(from, `Untuk men-stalk akun instagram seseorang\nketik ${prefix}stalkig [username]\ncontoh: ${prefix}stalkig ini.arga`, id)
                const igstalk = await rugaapi.stalkig(args[0])
                const igstalkpict = await rugaapi.stalkigpict(args[0])
                await aruga.sendFileFromUrl(from, igstalkpict, '', igstalk, id)
                .catch(() => {
                    aruga.reply(from, 'Akun tidak dapat ditemukan...', id)
                })
                break
        case 'wiki':
            if (args.length == 0) return aruga.reply(from, `Untuk mencari suatu kata dari wikipedia\nketik: ${prefix}wiki [kata]`, id)
            const wikip = body.slice(6)
            const wikis = await rugaapi.wiki(wikip)
            await aruga.reply(from, wikis, id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'cuaca':
            if (args.length == 0) return aruga.reply(from, `Untuk melihat cuaca pada suatu daerah\nketik: ${prefix}cuaca [daerah]`, id)
            const cuacaq = body.slice(7)
            const cuacap = await rugaapi.cuaca(cuacaq)
            await aruga.reply(from, cuacap, id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
        case 'lyrics':
        case 'lirik':
            if (args.length == 0) return aruga.reply(from, `Untuk mencari lirik dari sebuah lagu\bketik: ${prefix}lirik [judul_lagu]`, id)
            rugaapi.lirik(body.slice(7))
            .then(async (res) => {
                await aruga.reply(from, `Lirik Lagu: ${body.slice(7)}\n\n${res}`, id)
            })
            break
        case 'chord':
            if (args.length == 0) return aruga.reply(from, `Untuk mencari lirik dan chord dari sebuah lagu\bketik: ${prefix}chord [judul_lagu]`, id)
            const chordq = body.slice(7)
            const chordp = await rugaapi.chord(chordq)
            await aruga.reply(from, chordp, id)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
            case 'ssweb':
                if (args.length == 0) return aruga.reply(from, `Kirim perintah *${prefix}ssweb [link website]*`, id)
                rugaapi.ssweb(args)
                .then(async(res) => {
                    if (res.error) return aruga.sendFileFromUrl(from, `${res.url}`, '', `${res.error}`)
                    await aruga.sendFileFromUrl(from, `${res.data.result}`, 'ss.jpg', 'cekrekkk..', id)
                    .catch(() => {
                        aruga.reply(from, 'error ngabb...', id)
                    })
                })
                break
            case 'fb2':
            case 'fbvid':
                if (args.length == 0) return aruga.reply(from, `Untuk mendownload sebuah video dari Facebook, Ketik ${preifx}fb [linkvideo]`, id)
                aruga.reply(from, '_Scrapping Metadata..._', id)
                rugaapi.fb2(args)
                .then(async(res) => {
                    if (res.error) return aruga.sendFileFromUrl(from, `${res.url}`, '', `${res.error}`)
                    await aruga.sendFileFromUrl(from, `${res.linkHD}`, '', '', id)
                    .catch(() => {
                        aruga.reply(from, 'Error...', id)
                    })
                })
                break
            case 'fb':
            case 'facebook':
                if (args.length == 0) return aruga.reply(from, `Kirim perintah *${prefix}fb [linkfb]*`, id)
                aruga.reply(from, '_Scrapping Metadata...._', id)
                rugaapi.fb(args)
                .then(async(res) => {
                    await aruga.sendFileFromUrl(from, `${res.result.VideoUrl}`, '', '', id)
                    .catch(() => {
                        aruga.reply(from, `Error...`, id)
                    })
                })
                break
                case 'igstory':
                    if (args.length == 0) return aruga.reply(from, `Kirim perintah ${prefix}igstory [linkigstory]`, id)
                    aruga.reply(from, '_Scrapping Metadata..._', id)
                    rugaapi.story(body.slice(9))
                    .then(async(res) => {
                        const { urlDownload } = itemlist
                        if (res.error) return aruga.sendFileFromUrl(from, `${res.url}`, '', `${res.error}`, id)
                        await aruga.sendFileFromUrl(from, `${urlDownload[0]}`, '', '', id)
                    })
                    .catch(() => {
                        aruga.reply(from, 'Error...' , id)
                    })
                    break
                case 'ig2':
                    if (args.length == 0) return aruga.reply(from, `Kirim perintah ${prefix}ig2 linkig`, id)
                    aruga.reply(from, '_Scrapping Metadataa..._', id)
                    rugaapi.ig2(args)
                    .then(async(res) => {
                        if (res.error) return aruga.reply(from, `${res.url}`, '', `${res.error}`)
                        await aruga.sendFileFromUrl(from, `${res.result}`, '', '', id)
                        .catch(() => {
                            aruga.reply(from, 'Maaf, mungkin link tersebut berasal dari akun yang private', id)
                        })
                    })
                    break
            case 'twitter':
                if (args.length == 0) return aruga.reply(from, `Kirim Perintah ${prefix}twitter [linktwitter]`, id)
                aruga.reply(from, mess.wait, id)
                rugaapi.twit(args)
                .then(async(res) => {
                    if (res.error) return aruga.reply(from, `${res.url}`, '', `${res.error}`)
                    await aruga.sendFileFromUrl(from, `${res.getVideo}`, '', '', id)
                    .catch(res => {
                        aruga.reply(from, 'error ngab...', id)
                    })
                })
                break
            case 'tiktok':
                if (args.length == 0) return aruga.reply(from, `Kirim perintah *${prefix}tiktok [linkTiktok]*`, id)
                rugaapi.nowm(args)
                .then(async(res) => {
                    if (res.error) return aruga.sendFileFromUrl(from `${res.url}`, '', `${res.error}`)
                    await aruga.sendFileFromUrl(from, `${res.image}`, 'image.jpg', `*「 TIKTOK 」*\n\n*Name :* ${res.nameInfo}\n*Upload Date :* ${res.timeInfo}\n*Caption :* ${res.textInfo}`, id)
                    await aruga.sendFileFromUrl(from, `${res.mp4direct}`, '', '', id)
                    .catch(() => {
                        aruga.reply(from, 'Error ngab...', id)
                    })
                })
            break
            case 'ytmp4':
            if (args.length == 0) return aruga.reply(from, `Untuk mendownload lagu dari youtube\nketik: ${prefix}ytmp4 [link_yt]`, id)
		if (!isPrem) return aruga.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
            const linkmp4 = args[0].replace('https://youtu.be/','').replace('https://www.youtube.com/watch?v=','')
			rugaapi.ytmp4(`https://youtu.be/${linkmp4}`)
            .then(async(res) => {
				if (res.error) return aruga.sendFileFromUrl(from, `${res.url}`, '', `${res.error}`)
				await aruga.sendFileFromUrl(from, `${res.imgUrl}`, 'img.jpg', `*「 YOUTUBE MP4 」*\n\n*Judul :* ${res.title}\n*Size :* ${res.size}\n*ID Video :* ${res.id}\n*Execute :* ${res.ext}\n\n*_Sabar, Urbae lagi ngirim videonya_*`, id)
				await aruga.sendFileFromUrl(from, `${res.UrlVideo}`, '', `*${res.title}*\n*${res.size}*\n*${res.ext}*`, id)
				.catch(() => {
					aruga.reply(from, `Error ngab`, id)
				})
            })
            .catch(() => {
                aruga.reply(from, 'Error...', id)
            })
            break
            case 'play'://silahkan kalian custom sendiri jika ada yang ingin diubah
           if (args.length == 0) return aruga.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            axios.get(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`)
            .then(async (res) => {
                await aruga.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `*「 PLAY 」*\n\n*Judul :* ${res.data[0].title}\n*Durasi :* ${res.data[0].duration}detik\n*Uploaded :* ${res.data[0].uploadDate}\n*View :* ${res.data[0].viewCount}\n\n_*Wait, Urbae lagi ngirim lagunya*_`, id)
				rugaapi.ytmp3(`https://youtu.be/${res.data[0].id}`)
				.then(async(res) => {
					await aruga.sendFileFromUrl(from, `${res.link}`, '', '', id)
					.catch(() => {
						aruga.reply(from, `Error ngab...`, id)
					})
				})
            })
            break
            case 'play3'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return aruga.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            axios.get(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`)
            .then(async (res) => {
                await aruga.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `「 PLAY 」\n\nJudul: ${res.data[0].title}\nDurasi: ${res.data[0].duration}detik\nUploaded: ${res.data[0].uploadDate}\nView: ${res.data[0].viewCount}\n\n*_Wait, Urbae lagi ngirim Filenya_*`, id)
				rugaapi.yt3(`https://youtu.be/${res.data[0].id}`)
				.then(async(res) => {
					if (res.status == 'error') return aruga.sendFileFromUrl(from, `${res.link}`, '', `${res.error}`)
					await aruga.sendFileFromUrl(from, `${res.url_audio}`, `${res.title}.mp3`, '', id)
					.catch(() => {
						aruga.reply(from, `Error ngab...`, id)
					})
				})
            })
            break
            case 'play2'://silahkan kalian custom sendiri jika ada yang ingin diubah
            if (args.length == 0) return aruga.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
            axios.get(`https://arugaytdl.herokuapp.com/search?q=${body.slice(7)}`)
            .then(async (res) => {
                await aruga.sendFileFromUrl(from, `${res.data[0].thumbnail}`, ``, `*「 PLAY VIDEO 」*\n\n*Judul :* ${res.data[0].title}\n*Durasi :* ${res.data[0].duration}detik\n*Uploaded :* ${res.data[0].uploadDate}\n*View :* ${res.data[0].viewCount}\n\n*_Wait, Urbae lagi ngirim videonya_*`, id)
				rugaapi.ymp4(`https://youtu.be/${res.data[0].id}`)
				.then(async(res) => {
					await aruga.sendFileFromUrl(from, `${res.getVideo}`, '', '', id)
					.catch(() => {
						aruga.reply(from, `Error ngab...`, id)
					})
				})
            })
            break
            case 'film':
               if (args.length == 0) return aruga.reply(from, `Format salah!\nKirim perintah ${prefix}film [judul film]\nContoh : ${prefix}film the conjuring`, id)
                await aruga.reply(from, mess.wait, id)
                rugaapi.film(args)
                    .then(async ({ result }) => {
                        let movies = `Result for: *${result.judul}*`
                        for (let i = 0; i < result.data.length; i++) {
                            movies +=  `\n\n➸ *Quality:* : ${result.data[i].resolusi}\n➸ *URL*: ${result.data[i].urlDownload}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        movies += '\n\nBy: VideFrelan'
                        await aruga.reply(from, movies, id)
                        console.log('Success sending movie result!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await aruga.reply(from, 'Error!', id)
                    })
            break
		case 'movie':
			if (args.length == 0) return aruga.reply(from, `Untuk mencari suatu movie dari website sdmovie.fun\nketik: ${prefix}movie judulnya`, id)
			rugaapi.movie((body.slice(7)))
			.then(async (res) => {
				if (res.status == 'error') return aruga.reply(from, res.hasil, id)
				await aruga.sendFileFromUrl(from, res.link, 'movie.jpg', res.hasil, id)
			})
			break
        case 'whatanime':
            if (isMedia && type === 'image' || quotedMsg && quotedMsg.type === 'image') {
                if (isMedia) {
                    var mediaData = await decryptMedia(message, uaOverride)
                } else {
                    var mediaData = await decryptMedia(quotedMsg, uaOverride)
                }
                const fetch = require('node-fetch')
                const imgBS4 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                aruga.reply(from, 'Searching....', id)
                fetch('https://trace.moe/api/search', {
                    method: 'POST',
                    body: JSON.stringify({ image: imgBS4 }),
                    headers: { "Content-Type": "application/json" }
                })
                .then(respon => respon.json())
                .then(resolt => {
                	if (resolt.docs && resolt.docs.length <= 0) {
                		aruga.reply(from, 'Desculpe, não sei o que é este anime, certifique-se de que a imagem a ser pesquisada não está desfocada / cortada', id)
                	}
                    const { is_adult, title, title_chinese, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = resolt.docs[0]
                    teks = ''
                    if (similarity < 0.92) {
                    	teks = '*Eu tenho pouca fé nisso* :\n\n'
                    }
                    teks += `➸ *titulo japones* : ${title}\n➸ *Titulo chines* : ${title_chinese}\n➸ *Titulo Romaji* : ${title_romaji}\n➸ *Titulo English* : ${title_english}\n`
                    teks += `➸ *R-18?* : ${is_adult}\n`
                    teks += `➸ *Eps* : ${episode.toString()}\n`
                    teks += `➸ *Semelhança* : ${(similarity * 100).toFixed(1)}%\n`
                    var video = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`;
                    aruga.sendFileFromUrl(from, video, 'anime.mp4', teks, id).catch(() => {
                        aruga.reply(from, teks, id)
                    })
                })
                .catch(() => {
                    aruga.reply(from, 'Ada yang Error!', id)
                })
            } else {
				aruga.reply(from, `Maaf format salah\n\nSilahkan kirim foto dengan caption ${prefix}whatanime\n\nAtau reply foto dengan caption ${prefix}whatanime`, id)
			}
            break
            
        // Other Command
        case 'resi':
            if (args.length !== 2) return aruga.reply(from, `Desculpe, o formato da mensagem está errado. \nPor favor, digite sua mensagem com ${prefix}resi <kurir> <no_resi>\n\nKurir yang tersedia:\njne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex`, id)
            const kurirs = ['jne', 'pos', 'tiki', 'wahana', 'jnt', 'rpx', 'sap', 'sicepat', 'pcp', 'jet', 'dse', 'first', 'ninja', 'lion', 'idl', 'rex']
            if (!kurirs.includes(args[0])) return aruga.sendText(from, `Este tipo de despachante de entrega não é compatível. Este serviço só oferece suporte a ${couriers.join (',')} despachantes de frete Verifique novamente.`)
            console.log('Memeriksa No Resi', args[1], 'dengan ekspedisi', args[0])
            cekResi(args[0], args[1]).then((result) => aruga.sendText(from, result))
            break
        case 'tts':
            if (args.length == 0) return aruga.reply(from, `Converte texto em som (google voice)\nketik: ${prefix}tts <kode_bahasa> <teks>\ncontoh : ${prefix}tts id halo\nuntuk kode bahasa cek disini : https://anotepad.com/note/read/5xqahdy8`)
            const ttsGB = require('node-gtts')(args[0])
            const dataText = body.slice(8)
                if (dataText === '') return aruga.reply(from, 'qual é o texto afinal ..', id)
                try {
                    ttsGB.save('./media/tts.mp3', dataText, function () {
                    aruga.sendPtt(from, './media/tts.mp3', id)
                    })
                } catch (err) {
                    aruga.reply(from, err, id)
                }
            break
        case 'translate':
            if (args.length != 1) return aruga.reply(from, `Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ${prefix}translate <kode_bahasa>\ncontoh ${prefix}translate id`, id)
            if (!quotedMsg) return aruga.reply(from, `Maaf, format pesan salah.\nSilahkan reply sebuah pesan dengan caption ${prefix}translate <kode_bahasa>\ncontoh ${prefix}translate id`, id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, args[0])
                .then((result) => aruga.sendText(from, result))
                .catch(() => aruga.sendText(from, 'Error, Kode bahasa salah.'))
            break
		case 'covidindo':
			rugaapi.covidindo()
			.then(async (res) => {
				await aruga.reply(from, `${res}`, id)
			})
			break
        case 'ceklokasi':
            if (quotedMsg.type !== 'location') return aruga.reply(from, `Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`, id)
            console.log(`Request Status Zona Penyebaran Covid-19 (${quotedMsg.lat}, ${quotedMsg.lng}).`)
            const zoneStatus = await getLocationData(quotedMsg.lat, quotedMsg.lng)
            if (zoneStatus.kode !== 200) aruga.sendText(from, 'Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const text = `*CEK LOKASI PENYEBARAN COVID-19*\nHasil pemeriksaan dari lokasi yang anda kirim adalah *${zoneStatus.status}* ${zoneStatus.optional}\n\nInformasi lokasi terdampak disekitar anda:\n${datax}`
            aruga.sendText(from, text)
            break
        case 'shortlink':
            if (args.length == 0) return aruga.reply(from, `tipo ${prefix}shortlink <url>`, id)
            if (!isUrl(args[0])) return aruga.reply(from, 'Desculpe, o url que você enviou é inválido.', id)
            const shortlink = await urlShortener(args[0])
            await aruga.sendText(from, shortlink)
            .catch(() => {
                aruga.reply(from, 'Ada yang Error!', id)
            })
            break
		case 'bapakfont':
			if (args.length == 0) return aruga.reply(from, `Mude a frase para Alayyyyy\n\nusar ${prefix}bapakfont teste`, id)
			rugaapi.bapakfont(body.slice(11))
			.then(async(res) => {
				await aruga.reply(from, `${res}`, id)
			})
			break
		
		//Fun Menu
        case 'klasemen':
		case 'klasmen':
			if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
			const klasemen = db.get('group').filter({id: groupId}).map('members').value()[0]
            let urut = Object.entries(klasemen).map(([key, val]) => ({id: key, ...val})).sort((a, b) => b.denda - a.denda);
            let textKlas = "*Klasemen Denda Sementara*\n"
            let i = 1;
            urut.forEach((klsmn) => {
            textKlas += i+". @"+klsmn.id.replace('@c.us', '')+" ➤ Rp"+formatin(klsmn.denda)+"\n"
            i++
            });
            await aruga.sendTextWithMentions(from, textKlas)
			break

        // Group Commands (group admin only)
	    case 'add':
            if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!, Membros mah gosah são arrogantes', id)
            if (!isBotGroupAdmins) return aruga.reply(from, 'Falha, se eu quiser usar este recurso, deixe-me ser o administrador', id)
	        if (args.length !== 1) return aruga.reply(from, `Usar ${prefix}add\nUsar: ${prefix}add <nomor>\nex: ${prefix}add 628xxx`, id)
                try {
                    await aruga.addParticipant(from,`${args[0]}@c.us`)
                } catch {
                    aruga.reply(from, 'O alvo sumiu no radar, Inimigos à Frente!', id)
                }
            break
        case 'kick':
            if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Falha, este recurso funcionará se usado pelo administrador, mas os membros não precisam ser difíceis', id)
            if (!isBotGroupAdmins) return aruga.reply(from, 'Falha, se eu quiser usar este recurso, deixe-me ser o administrador', id)
            if (mentionedJidList.length === 0) return aruga.reply(from, 'Desculpe, o formato da mensagem está errado. \nPPor favor, marque uma ou mais pessoas para serem excluídas', id)
            if (mentionedJidList[0] === botNumber) return await aruga.reply(from, 'Desculpe, o formato da mensagem está incorreto. \nNão é possível emitir uma conta de bot sozinho', id)
            await aruga.sendTextWithMentions(from, `Pronto, tire ${mentionedJidList.map(x => `@${x.replace('@c.us', '')} a fim de se tornarem filhos adotivos`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return await aruga.sendText(from, 'GOBLOK, como você pode chutar um administrador estúpido')
                await aruga.removeParticipant(groupId, mentionedJidList[i])
            }
            break
            case 'promote':
                if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro do grupo!', id)
                if (!isGroupAdmins) return aruga.reply(from, 'Falha, este recurso funcionará se usado pelo administrador, mas os membros não precisam ser difíceis', id)
                if (!isBotGroupAdmins && !isOwnerB) return aruga.reply(from, 'Falha, se eu quiser usar este recurso, torne-me o administrador', id)
                if (mentionedJidList.length !== 1) return aruga.reply(from, 'Desculpe, só pode promover 1 usuário ', id)
                if (groupAdmins.includes(mentionedJidList[0])) return await aruga.reply(from, 'GOBLOG, filho já é um administrador estúpido.', id)
                if (mentionedJidList[0] === botNumber) return await aruga.reply(from, 'Desculpe, o formato da mensagem está errado. \nNão é possível promover a conta do bot por si só', id)
                await aruga.promoteParticipant(groupId, mentionedJidList[0])
                await aruga.sendTextWithMentions(from, `Done, ciee, @${mentionedJidList[0].replace('@c.us', '')} Diangkat derajatnyaaa xixi.`)
                break
            case 'demote':
                if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
                if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Falha, este recurso funcionará se usado pelo administrador, mas os membros não precisam ser difíceis', id)
                if (!isBotGroupAdmins) return aruga.reply(from, 'Falha, se eu quiser usar este recurso, deixe-me ser o administrador', id)
                if (mentionedJidList.length !== 1) return aruga.reply(from, 'Desculpe, apenas 1 usuário pode ser demonstrado', id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await aruga.reply(from, 'GOBLOG, o garoto ainda não se tornou um administrador. Quero que você rebaixe. o que pode ser estúpido.', id)
                if (mentionedJidList[0] === botNumber) return await aruga.reply(from, 'Desculpe, o formato da mensagem está errado. \nNão é possível demonstrar a conta do bot', id)
                await aruga.demoteParticipant(groupId, mentionedJidList[0])
                await aruga.sendTextWithMentions(from, `Pronto, você está morto @${mentionedJidList[0].replace('@c.us', '')} Então seu porco é awkowko`)
                break
            case 'bye':
                if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
                if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Falha, este recurso funcionará se usado pelo administrador, mas os membros não precisam ser difíceis', id)
                aruga.sendText(from, 'Jahat kelen sama aku... ( ⇀‸↼‶ )').then(() => aruga.leaveGroup(groupId))
                break
            case 'del':
                if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Falha, este recurso funcionará se usado pelo administrador, mas os membros não precisam ser difíceis', id)
                if (!quotedMsg) return aruga.reply(from, `Desculpe, o formato da mensagem está errado, por favor. \n Replicar mensagem ao bot com uma legenda ${prefix}del`, id)
                if (!quotedMsgObj.fromMe) return aruga.reply(from, `Desculpe, o formato da mensagem está errado, por favor. \nReplicar mensagem ao bot com uma legenda ${prefix}del`, id)
                aruga.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                break
        case 'sandwriting':
            if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 0)  return aruga.reply(from, `Kirim perintah *${prefix}sandwriting [ Teks ]*\nContoh *${prefix}sandwriting Urbae Ganteng*`, id)
            const swrt = body.slice(13)
            try {
            const swrt2 = await axios.get('https://api.vhtear.com/sand_writing?text1=' + swrt + '&apikey=' + vhtearkey)
            const { imgUrl } = swrt2.data.result
            const swrt3 = `*「 SAND WRITING 」*
*Text : ${swrt}*`
            const pictk = await bent("buffer")(imgUrl)
            const base64 = `data:image/jpg;base64,${pictk.toString("base64")}`
            aruga.sendImage(from, base64, swrt3)
            } catch (err) {
             console.error(err.message)
             await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, User tidak ditemukan')
             aruga.sendText(from, 'Sand Writing Error : ' + err)
           }
          break
        case 'artimimpi':
            if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (args.length === 0) return aruga.reply(from, `Kirim perintah *${prefix}artimimpi [mimpi]*\nContoh : *${prefix}artimimpi ular*`, id)
            try {
            const resp = await axios.get('https://api.vhtear.com/artimimpi?query=' + body.slice(10) + '&apikey=' + vhtearkey)
            if (resp.data.error) return aruga.reply(from, resp.data.error, id)
            const anm2 = `➸ Artimimpi : ${resp.data.result.hasil}`
            aruga.reply(from, anm2, id)
            } catch (err) {
                console.error(err.message)
                await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Mimpi tidak ditemukan')
                aruga.sendText(from, 'Artimimpi Error : ' + err)
           }
            break
        case 'tahta':
            if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
             const jreng = body.slice(7)
             if (!jreng) return aruga.reply(from, `Kirim perintah *${prefix}tahta [teks]*\n\nContoh *${prefix}tahta elaina*`, id)
             if (jreng.length > 7) return aruga.reply(from, 'Maksimal 7 Huruf!', id)
             aruga.sendText(from, '_Sedang diproses, mohon tunggu sebentar!..._', id)
             await aruga.sendFileFromUrl(from, `https://api.vhtear.com/hartatahta?text=${jreng}&apikey=${vhtearkey}`,`${jreng}.jpg`,`Harta Tahta ${jreng}`, id)
             .catch(() => {
                 aruga.reply(from, 'Error', id)
             })
             break
        case 'family100':
            if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            try {
            const resp = await axios.get('https://api.vhtear.com/family100&apikey=' + vhtearkey)
            if (resp.data.error) return aruga.reply(from, resp.data.error, id)
            const anm2 = `➸ Soal : ${resp.data.result.soal}\n_Silahkan DiJawab_`
            const jwban = `➸ Jawaban : ${resp.data.result.jawaban}`
            aruga.reply(from, anm2, id)
            aruga.sendText(from, `30 Detik Lagi...`, id)
            await sleep(10000)
            aruga.sendText(from, `20 Detik Lagi...`, id)
            await sleep(10000)
            aruga.sendText(from, `10 Detik Lagi...`, id)
            await sleep(10000)
            aruga.reply(from, jwban, id)
            } catch (err) {
                console.error(err.message)
                await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Soal Quiz tidak ditemukan')
                aruga.sendText(ownerNumber, 'Family100 Error : ' + err)
           }
           break
           case 'tiktokpic':
                if (args.length == 0) return await aruga.reply(from, `Untuk mendapatkan foto dari username tiktok\nUsage : ${prefix}tiktokpic itsandani`, id)
                const namaih = body.slice(11)
                await aruga.reply(from, mess.wait, id)
                try {
                    console.log(`Getting profile pic for ${namaih}`)
                    const tkt = await axios.get(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${namaih}`)
                    if (tkt.data.error) return aruga.reply(from, tkt.data.error, id)
                    await aruga.sendFileFromUrl(from, tkt.data.result, 'tiktokpic.jpg', 'Ini :D', id)
                    console.log('Success sending TikTok profile pic!')
                } catch (err) {
                    console.error(err)
                    await aruga.reply(from, 'Error!', id)
                }
            break
        case 'simi':
            if (args.length == 0) return aruga.reply(from, 'Enviar pedidos*/ [teks]*\nex : */ halo*')
            const que = body.slice(6)
            const sigo = await axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${que}`)
            console.log(que)
            const sigot = sigo.data
            aruga.reply(from, sigot.result, id)
            console.log(sigot)
            break
        case 'edotensei':
            if (!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Este comando só pode ser usado pelo grupo Proprietário', id)
            if (!isBotGroupAdmins) return aruga.reply(from, 'Este comando só pode ser usado quando o bot se torna administrador', id)
            if (mentionedJidList.length === 0) return aruga.reply(from, `Recurso para excluir membro e adicionar membro novamente, enviar o comando ${prefix}edotensei @tagmember`, id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return aruga.reply(from, mess.error.Ki, id)
                if (ownerNumber.includes(mentionedJidList[i])) return aruga.reply(from, 'Não é possível emitir o proprietário do bot')
                await aruga.removeParticipant(groupId, mentionedJidList[i])
                await sleep(1000)
                await aruga.addParticipant(from,`${mentionedJidList}`)
            } 
            break
        case 'todoschats':
            //ghostForward(to: ChatId, messageId: MessageId):
            //await aruga.simulateTyping(chat.id, false)
           await aruga.getAllChats()
            //await aruga.ghostForward(from, 'Robo Jhefer', id)
           
        break
        case 'infoall':
        case 'everyone':
            if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins & !isOwnerB) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!', id)
            const textInfo = body.slice(8)
            const namagcnih = name
            const memchu = chat.groupMetadata.participants.length
            const groupMem = await aruga.getGroupMembers(groupId)
            let hehex = `Nome Group : *${namagcnih}*\n\nTotal Members : *${memchu}*\n\n╔══✪〘 Mencionando all 〙✪══\n\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehex += '╠➥'
                hehex += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehex += '╚═〘 *J H E F E   B O T* 〙'
            await aruga.sendTextWithMentions(from, `Info dari : ${pushname}\n` + textInfo+ '\n\n' +hehex)
            await aruga.ghostForward(from, hehex, id)
            break
		case 'katakasar':
			if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
			aruga.reply(from, `Para ativar o recurso Palavras fortes no Chat de Grupo \n \nEste recurso ainda será usado? Se alguém disser palavras ásperas receberá uma multa \n \nUse \n ${prefix}rude on - habilite \n ${prefix}rude off --dable \n \n${prefix}reset - redefina o valor da multa`, id)
			break
		case 'kasar':
			if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!', id)
			if (args.length !== 1) return aruga.reply(from, `Para ativar o recurso Palavras fortes no Chat de Grupo \n \nEste recurso ainda será usado? Se alguém disser palavras ásperas receberá uma multa \n \nUse \n ${prefix}rude on - habilite \n ${prefix}rude off --dable \n \n ${prefix}reset - redefina o valor da multa`, id)
			if (args[0] == 'on') {
				ngegas.push(chatId)
				fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
				aruga.reply(from, 'O recurso Anti-Crude foi ativado', id)
			} else if (args[0] == 'off') {
				let nixx = ngegas.indexOf(chatId)
				ngegas.splice(nixx, 1)
				fs.writeFileSync('./settings/ngegas.json', JSON.stringify(ngegas))
				aruga.reply(from, 'O recurso Anti-Crude foi desativado', id)
			} else {
				aruga.reply(from, `Para ativar o recurso Palavras fortes no Chat de Grupo \n \nEste recurso ainda será usado? Se alguém disser palavras ásperas receberá uma multa \n \nUse \n ${prefix}rude on - habilite \n ${prefix}rude off --dable \n \n ${prefix}reset - redefina o valor da multa`, id)
			}
			break
		case 'reset':
			if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!', id)
			const reset = db.get('group').find({ id: groupId }).assign({ members: []}).write()
            if(reset){
				await aruga.sendText(from, "A classificação foi reiniciada.")
            }
			break
		case 'mutegrup':
			if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!', id)
            if (!isBotGroupAdmins) return aruga.reply(from, 'Falha, adicione o bot como administrador do grupo!', id)
			if (args.length !== 1) return aruga.reply(from, `Para alterar as configurações do bate-papo em grupo para que apenas os administradores possam conversar \n \nUsage: \n ${prefix}mutegrup ativado - habilitar \n ${prefix}mutegrup desativado - desativar`, id)
            if (args[0] == 'on') {
				aruga.setGroupToAdminsOnly(groupId, true).then(() => aruga.sendText(from, 'Alterado com sucesso para que apenas o administrador possa conversar!'))
			} else if (args[0] == 'off') {
				aruga.setGroupToAdminsOnly(groupId, false).then(() => aruga.sendText(from, 'Alterado com sucesso para que todos os membros possam conversar!'))
			} else {
				aruga.reply(from, `Para alterar as configurações do chat em grupo para que apenas o administrador possa bater papo\n\nUso: \n ${prefix}mutegrup ativado - habilitar \n ${prefix}mutegrup desativado - desativar`, id)
			}
			break
		case 'seticon':
			if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!', id)
            if (!isBotGroupAdmins) return aruga.reply(from, 'Falha, adicione o bot como administrador do grupo!', id)
			if (isMedia && type == 'image' || isQuotedImage) {
				const dataMedia = isQuotedImage ? quotedMsg : message
				const _mimetype = dataMedia.mimetype
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
				await aruga.setGroupIcon(groupId, imageBase64)
			} else if (args.length === 1) {
				if (!isUrl(url)) { await aruga.reply(from, 'Desculpe, o link que você enviou é inválido.', id) }
				aruga.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
				? aruga.reply(from, 'Desculpe, o link que você enviou não contém uma imagem.', id)
				: aruga.reply(from, 'Alterou com sucesso o perfil do grupo', id))
			} else {
				aruga.reply(from, `Este comando é usado para mudar o ícone #profile do grupo de chat\n\n\nUsar: \n1. Envie /responda uma imagem com a legenda ${prefix}setprofile \n \n2. Digite ${prefix}setprofile linkImage`)
			}
			break
			
        //Owner Group
        case 'kickall': //mengeluarkan semua member
        if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
        if (!isOwner) return aruga.reply(from, 'Desculpe, este comando só pode ser usado pelo proprietário do grupo!', id)
        if (!isBotGroupAdmins) return aruga.reply(from, 'Falha, adicione o bot como administrador do grupo!', id)
            const allMem = await aruga.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {

                } else {
                    await aruga.removeParticipant(groupId, allMem[i].id)
                }
            }
            aruga.reply(from, 'Chute de sucesso para todos os membros', id)
        break

        //Owner Bot
        case 'addprem':
            if (!isOwnerB) return aruga.reply(from, 'Este comando só pode ser usado pelo Owner Bot!', id)
            if (args.length == 0) return aruga.reply(from, `Para adicionar alguém para se tornar um membro premium`, id)
            prem.push(args[0]+'@c.us')
            fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
            aruga.reply(from, 'sucesso adicionar', id)
            break
        case 'ban':
            if (!isOwnerB) return aruga.reply(from, 'Este comando é apenas para bots Proprietários!', id)
            if (args.length == 0) return aruga.reply(from, `Para banir alguém de usar comandos \n \n Como digitar: \n ${prefix}ban add 628xx - para ativar \n ${prefix}ban del 628xx - para desativar \n \n como agrupar rapidamente vários tipos de pneus:\n${prefix}ban @tag @tag @tag`, id)
            if (args[0] == 'add') {
                banned.push(args[1]+'@c.us')
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                aruga.reply(from, 'Vá para BAN! awkowkowko', id)
            } else
            if (args[0] == 'del') {
                let xnxx = banned.indexOf(args[1]+'@c.us')
                banned.splice(xnxx,1)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                aruga.reply(from, 'Pobre, é por isso que eu recusei')
            } else {
             for (let i = 0; i < mentionedJidList.length; i++) {
                banned.push(mentionedJidList[i])
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                aruga.reply(from, 'Vá para BAN! awkowkowko', id)
                }
            }
            break
            case 'delprem':
                if (!isOwnerB) return aruga.reply(from, 'Este comando só pode ser usado pelo Owner Bot!', id)
            if (args.length == 0) return aruga.reply(from, `Para excluir alguém para se tornar um membro regular`, id)
            let prsl = prem.indexOf(args[0]+'@c.us')
            prem.splice(prsl, 1)
            fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
            aruga.reply(from, 'Sucesso ao excluir membro prem', id)
            break
            case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return aruga.reply(from, `*Hasil Pencarian : ${googleQuery}* tidak ditemukan`, id)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Titulo* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    aruga.reply(from, vars, id);
                }).catch(e => {
                    console.log(e)
                    aruga.sendText(ownerNumber, 'Google Error : ' + e);
                })
                break
                case 'randomhentai':
                        if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                        if (!isPrem) return aruga.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                        aruga.sendText(from, mess.wait);
                        axios.get(`https://api.i-tech.id/anim/hentai?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD`).then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'hentai.jpg', id)
            })
                        break
                case 'randomhug':
                        if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                        if (!isPrem) return aruga.reply(from, 'Command Premium\nChat owner buat mendaftar', id)
                        aruga.sendText(from, mess.wait);
                        axios.get(`https://tobz-api.herokuapp.com/api/hug`).then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'hug.jpg', id)
        })
                        break
            case 'ptl':
                    if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                    const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
                    let pep = pptl[Math.floor(Math.random() * pptl.length)]
                    aruga.sendFileFromUrl(from, pep, 'pptl.jpg', 'nihh ngab', id)
                    break
            case 'groupinfo' :
            case 'gcinfo' :
                    if (!isGroupMsg) return aruga.reply(from, 'Este comando só pode ser usado em grupos!', message.id)
                    var totalMem = chat.groupMetadata.participants.length
                    var desc = chat.groupMetadata.desc
                    var groupname = name
                    var timestp = chat.groupMetadata.creation
                    var date = moment(timestp * 1000).format('dddd, DD MMMM YYYY')
                    var time = moment(timestp * 1000).format('HH:mm:ss')
                    var ownerwoi = chat.groupMetadata.owner
                    var grplink = antilink.includes(chat.id)
                    var statusroswell = ativar_cid.includes(chat.id)
                    var botadmin = isBotGroupAdmins ? 'Admin' : 'Member'
                    var grouppic = await aruga.getProfilePicFromServer(chat.id)
                    if (grouppic == undefined) {
                         var pfp = errorurl
                    } else {
                         var pfp = grouppic 
                    }
                    await aruga.sendFileFromUrl(from, pfp, 'group.png', `*「 Info Grupo 」*
*➸ Nome : ${groupname}*

Este grupo foi fundado *${date}* Soco *${time}*


*➸ Membros : ${totalMem}*
*➸ Dono do grupo : ${ownerwoi}*
*➸ Status Antilink : ${grplink ? 'On' : 'Off'}*
*➸ Roswell : ${statusroswell ? 'registrado en Roswell' : 'Nao faz parte de Roswell'}*
*➸ Status do grupo de bots : ${botadmin}*
*➸ Descição de Grupo* 
${desc}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
_Desc atualizado por: @${chat.groupMetadata.descOwner.replace('@c.us','')} em *${moment(chat.groupMetadata.descTime * 1000).format('dddd, DD MMMM YYYY')}* pukul ${moment(chat.groupMetadata.descTime * 1000).format('HH:mm:ss')}_`)

                    break
                    case 'grupbot':
                        const ch = `https://chat.whatsapp.com/I4fuHGCak695NdlEONZF5o\n\nEntre mais respeite os colegas e amigos`
                        await aruga.sendText(from, ch, id)
                        break
                    case 'clc':
                        if (args.length === 3) return aruga.reply(from, `[❗] somente numeros *${prefix}clc [ numero ]*\nexemplo : ${prefix}clc 12*12 \n*NOTE* :\n- Para multiplicar use *\n- Para somar use +\n- Para Subtrair use -\n- Para dividir use /`)
                        const mtk = body.slice(5)
                        if (typeof Math_js.evaluate(mtk) !== "number") {
                        aruga.reply(from, `"${mtk}", somente numeros \n [❗] somente numeros *${prefix}clc [ numero ]*\nexemplo : ${prefix}clc 12*12 \n*NOTE* :\n- Para multiplicar use *\n- Para somar use +\n- Para Subtrair use -\n- Para dividir use /`, id)
                    } else {
                        aruga.reply(from, `*o resultado:*\n*${mtk} = ${Math_js.evaluate(mtk)}*`, id)
                    }
                    break
                    case 'screen': {
                        if (!isOwnerB) return await aruga.reply(from, 'Fitur ini hanya dapat digunakan oleh admin bot')
                        const snap = await aruga.getSnapshot()
                        aruga.sendImage(from, snap, 'snapshot.png', 'Session Snapshot')
                    }
                        break
                        case 'listbacot':
                            const bacul = dbcot
                            let bacotanmu = `╔══✪〘 *List Bacot!* 〙✪══\n`
                            for (let i = 0; i < bacul.length; i++) {
                                bacotanmu += '╠➥'
                                bacotanmu += ` ${bacul[i]}\n`
                            }
                            bacotanmu += '╚═〘 *U R B A E  B O T* 〙'
                            await aruga.sendText(from, bacotanmu)
                            break
                        case 'premlist':
                            const premlist = prem
                            let kuntul =  `╔══✪〘 *Premium Member!* 〙✪══\n`
                            for (let i = 0; i < premlist.length; i++) {
                                kuntul += `╠➥`
                                kuntul += `${premlist[i]}\n`
                            }
                            kuntul += '╚═〘 *U R B A E  B O T* 〙'
                            await aruga.reply(from, kuntul)
                            break
                        case 'saylist':
                            const saylest = dsay
                            let kimtil = `╔══✪〘 *Say List!* 〙✪══\n`
                            for (let i = 0; i < saylest.length; i++) {
                                kimtil += '╠➥'
                                kimtil += `${saylest[i]}\n`
                            }
                            kimtil += '╚═〘 *U R B A E  B O T* 〙'
                            await aruga.sendText(from, kimtil)
                            break
                        case 'regras' :
                            if(args.length == 1){
                            const rgs = args[0]
                            const regrasg = dregras.length
                            if(regrasg <= rgs) return await aruga.reply(from, `O banco de dados total é atualmente apenas até 1 *${sayur - 1}` , id)
                            const lags = dregras[rgs]
                                aruga.sendText(from, lags)
                            } else {
                            const kata = dregras[Math.floor(Math.random() * (dregrFas.length))];
                                aruga.reply(from, kata, id)
                    }
                    break
                        case 'addregras': {
                            if(!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
                            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Falha, este recurso funcionará se usado pelo administrador, mas os membros não precisam ser difíceis', id)
                            if (!isBotGroupAdmins) return aruga.reply(from, 'Falha, se eu quiser usar este recurso, deixe-me ser o administrador', id)
                            if (mentionedJidList[0] === botNumber) return await aruga.reply(from, 'Desculpe, o formato da mensagem está incorreto. \nNão é possível emitir uma conta de bot sozinho', id)
                            const regras = body.slice(11)
                                dregras.push(regras)
                                fs.writeFileSync('./lib/database/regras.json' , JSON.stringify(dregras))
                                aruga.reply(from, `Pronto adicionado ao banco de dados\nPara remover uma regra basta comunicar o administrador do jheffer *#ownerbot* \n\n\`\`\`Total de regras adicionada\`\`\`\` : *${dregras.length - 1}* ,\n _Integrantes usar o comando_ *#regras* _e o numero da regra para visualizar_` , id)
                        }

                        ////***Banco de Dados sobre regras */
                    break
                    case 'addsay':{
                            if (!args.length >= 1) return aruga.reply(from, 'Kalimatnya manaa?', id)
                            const say = body.slice(8)
                                dsay.push(say)
                                fs.writeFileSync('./lib/database/say.json' , JSON.stringify(dsay))
                                aruga.reply(from, `Done add say ke database\nTotal add say : *${dsay.length - 1}* ,` , id)
                        }
                        break
                        case 'addbacot':{
                            if (!args.length >= 1) return aruga.reply(from, 'BACOTAN NYA MANA ANJING?? DASAR BODOH!', id)  
                                const bacot = body.slice(10)
                                dbcot.push(bacot)
                                fs.writeFileSync('./lib/database/bacot.json', JSON.stringify(dbcot))
                                aruga.reply(from, `Sukses menambahkan Kata bacot ke database\nTotal data bacot sekarang : *${dbcot.length - 1}*`, id)
                            }
                            break
                        case 'delbacot':
                                if (!isGroupMsg) return aruga.reply(from, `Este comando só pode ser usado dentro de grupos!`, id)
                                    const delbd = dbcot.indexOf(body.slice(12))
                                    dbcot.splice(delbd, 1)
                                    fs.writeFileSync('./lib/database/bacot.json', JSON.stringify(dbcot))
                                    aruga.reply(from, `Sucesso ao remover Bacot!`, id)
                                break
                case 'bacot':
                    if(args.length == 1) {
                        const no = args[0]
                        const cekdb = dbcot.length
                        if(cekdb <= no) return await aruga.reply(from, `O total de dados está atualmente apenas acima *${cekdb - 1}*`, id)
                        const res =  dbcot[no]
                        aruga.sendText(from, res)
                        } else {
                            const kata = dbcot[Math.floor(Math.random() * (dbcot.length))];
                            aruga.reply(from, kata, id)
                        }
                    break  
                case 'say':
                    if(args.length == 1){
                        const wuh = args[0]
                        const sayur = dsay.length
                        if(sayur <= wuh) return await aruga.reply(from, `O banco de dados total é atualmente apenas até 1 *${sayur - 1}` , id)
                        const lahs = dsay[wuh]
                        aruga.sendText(from, lahs)
                    } else {
                        const kata = dsay[Math.floor(Math.random() * (dsay.length))];
                        aruga.reply(from, kata, id)
                    }
                    break
                    case 'delprem':
                        if (!isOwnerB) return aruga.reply(from, `Este comando só pode ser usado pelo Owner Bot`, id)
                        const delprem = prem.indexOf(body.slice(9)+'@c.us')
                        prem.splice(delprem, 1)
                        fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
                        aruga.reply(from, `Success delete premium member`, id)
                        break
                    case 'delsay':
                        if (!isGroupMsg) return aruga.reply(from, `Este comando só pode ser usado dentro de grupos!`, id)
                            const delsay = dsay.indexOf(body.slice(8))
                            dsay.splice(delsay, 1)
                            fs.writeFileSync('./lib/database/say.json', JSON.stringify(dsay))
                            aruga.reply(from, `Sucesso na exclusão de Say!`, id)
                        break
                case 'nyenye':
                    if(!isGroupMsg) return aruga.reply(from, 'Fitur ini hanya bisa digunakan didalam Grup!', id)
                    if (args.length = 0) return aruga.reply(from, `kirim ${prefix}nyenye kalimat\ncontoh: ${prefix}nyenye nisa cantik', id`)
                    const teksnya = body.slice(8)
					const uwoyis = await axios.get(`https://api.i-tech.id/tools/hilih?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&kata=${teksnya}`).then(res => {
					const ihih = `${res.data.result}`
                    aruga.reply(from, ihih, id)
                })
                    break   
                case 'santet': //work
                    if (!isGroupMsg) return aruga.reply(from, 'Maaf, perintah ini hanya dapat dipakai didalam grup!', id)
                    if (mentionedJidList.length === 0) return aruga.reply(from, 'Tag member yang mau disantet, contoh : /santet @wahyu | karena dia gay', id)
                    if (args.length === 1) return aruga.reply(from, 'Masukkan alasan kenapa menyantet dia!!', id)
                        const target = arg.split('|')[0]
                        const alasan = arg.split('|')[1]
                        await aruga.sendTextWithMentions(from, `Santet terkirim ke ${target}, Dengan alasan : ${alasan}`)
                            break
                    case 'doggo':
                            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
                            let kya = list[Math.floor(Math.random() * list.length)]
                            aruga.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Doggo sparkles', id)
                        break
                    case 'wpanime' :
                            const walnime = ['https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','hithuttps://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
                            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
                            aruga.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
                        break
                    case 'aiquote' :
                            const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
                            await aruga.sendFileFromUrl(from, aiquote.data, 'quote.jpg', 'FOLLOW NGAB \ :V https://www.instagram.com/_l_.lawliet_/' , id )
                        break
                case 'ttp':
                     axios.get(`https://st4rz.herokuapp.com/api/ttp?kata=${body.slice(5)}`)
                        .then(res => {
                        aruga.sendImageAsSticker(from, res.data.result)
                     })
                    break
                 case 'kapan':
                     if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                     if (args.length == 0) return aruga.reply(from, `Tidak ada Kata!\n Contoh : ${prefix}kapan kamu mati?`, id)
                     const when = args.join(' ')
                     const ans = kapan[Math.floor(Math.random() * (kapan.length))]
                     if (!when) aruga.reply(from, `⚠️ Format salah! Ketik *${prefix}menu* untuk penggunaan.`)
                     await aruga.sendText(from, `Pertanyaan: *${when}* \n\nJawaban: ${ans}`)
                     break
                 case 'nilai':
                 case 'rate':
                     if (!isGroupMsg) return aruga.reply(from, 'Este comando só pode ser usado em grupos!', id)
                     if (args.length == 0) return aruga.reply(from, `Um recurso para julgar o que você diz \n Ex : ${prefix}rate kegantenganku`, id)
                     const rating = args.join(' ')
                     const awr = rate[Math.floor(Math.random() * (rate.length))]
                     if (!rating) aruga.reply(from, `⚠️ Formato incorreto! Tipo*${prefix}menu* para uso.`)
                     await aruga.sendText(from, `Questão: *${rating}* \n\nResposta ${awr}`)
                     break
                 case 'apakah':
                     if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                     if (args.length == 0) return aruga.reply(from, `Tidak ada Kata!\nContoh : ${prefix}apakah dia cantik?`, id)
                     const nanya = args.join(' ')
                     const jawab = apakah[Math.floor(Math.random() * (apakah.length))]
                     if (!nanya) aruga.reply(from, '⚠️ Format salah! Ketik */menu* untuk penggunaan.')
                     await aruga.sendText(from, `Pertanyaan: *${nanya}* \n\nJawaban: ${jawab}`)
                     break
                  case 'bisakah':
                     if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                     if (args.length == 0) return aruga.reply(from, `Tidak ada Kata!\nContoh : ${prefix}bisakah dia mencintaiku?`, id)
                     const bsk = args.join(' ')
                     const jbsk = bisakah[Math.floor(Math.random() * (bisakah.length))]
                     if (!bsk) aruga.reply(from, '⚠️ Format salah! Ketik */menu* untuk penggunaan.')
                     await aruga.sendText(from, `Pertanyaan: *${bsk}* \n\nJawaban: ${jbsk}`)
                     break
            case 'listban':
                let bened = `Lista de numeros Banido\nTotal : ${banned.length}\n`
                for (let i of banned) {
                    bened += `➸ ${i.replace(/@c.us/g,'')}\n`
                }
                await aruga.reply(from, bened, id)
                break
            case 'me':
                if(!isGroupMsg) return aruga.reply(from, 'Este recurso só pode ser usado em grupos!', id)
                if (isBanned) return false
                if (isGroupMsg) {
                    if (!quotedMsg) {
                    var pic = await aruga.getProfilePicFromServer(author)
                    var namae = pushname
                    var sts = await aruga.getStatus(author)
                    var adm = isGroupAdmins
                    const { status } = sts
                    if (pic == undefined) {
                    var pfp = errorurl
                    } else {
                        var pfp = pic
                    } 
                    await aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `*Perfil do usuario* ✨️ \n\n➸ *User name: ${namae}*\n\n➸ *Info Usuario: ${status}*\n\n➸ *Admin Grupo: ${adm}*\n\n`)
                 } else if (quotedMsg) {
                 var qmid = quotedMsgObj.sender.id
                 var pic = await aruga.getProfilePicFromServer(qmid)
                 var namae = quotedMsgObj.sender.name
                 var sts = await aruga.getStatus(qmid)
                 var adm = isGroupAdmins
                 const { status } = sts
                  if (pic == undefined) {
                  var pfp = errorurl
                  } else {
                  var pfp = pic
                  } 
                  await aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n➸ *Admin Group: ${adm}*\n\n`)
                 }
                }
                break
        case 'listblock':
            let hih = `Esta é a lista de números bloqueados\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await aruga.reply(from, hih, id)
            break
        case 'bc':
                if (!isOwnerBot) return aruga.reply(from, 'Este pedido é apenas para proprietários de barcos!', id)
            if (args.length == 0) return aruga.reply(from, `Para transmitir para todos os chats, digite:\n${prefix}bc [isi chat]`)
            let msg = body.slice(4)
            const chatz = await aruga.getAllChatIds()
            for (let idk of chatz) {
                var cvk = await aruga.getChatById(idk)
                if (!cvk.isReadOnly) aruga.sendText(idk, `〘  *J H E F F E R  B O T *  〙\n\n${msg}`)
                if (cvk.isReadOnly) aruga.sendText(idk, `〘  *J H E F F E R  B O T *  〙\n\n${msg}`)
            }
            aruga.reply(from, 'Sucesso na transmissão! ', id)
                break

            case 'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
            if (!isOwnerB) return aruga.reply(from, 'Este comando é apenas para o bot do proprietário', id)
            const allChatso = await aruga.getAllChatIds()
            const loadedx = await aruga.getAmountOfLoadedMessages()
            const allGroupq = await aruga.getAllGroups()
            for (let gclist of allGroupq) {
                await aruga.sendText(gclist.contact.id, `Desculpe, o bot está limpando,\n- Total de chats ativos : *${allChatso.length}*\n- Loaded Messages : *${loadedx}*\n\nSconvide mais bots se necessário`)
                await aruga.leaveGroup(gclist.contact.id)
                await aruga.deleteChat(gclist.contact.id)
            }
            aruga.reply(from, 'Success leave all group!', id)
            break
        case 'clearall': // deleta todas as mensagens da conta do bot
            if (!isOwnerBot) return aruga.reply(from, 'Este comando é apenas para o bot do proprietário', id)
            const allChatx = await aruga.getAllChats()
            for (let dchat of allChatx) {
                await aruga.deleteChat(dchat.id)
            }
            aruga.reply(from, 'Sucesso, limpar todo o chat!', id)
            break
        default:
            break
        case 'adminlist':
            if (!isGroupMsg) return aruga.reply(from, 'Este comando só pode ser usado em grupos!', id)
            let mimin = ''
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await aruga.sendTextWithMentions(from, mimin)
            break
        case 'howmuch':
            if (!isGroupMsg) return aruga.reply(from, 'Este comando só pode ser usado em grupos')
            const tulul = name
            const yaelah = chat.groupMetadata.participants.length
                await aruga.sendText(from, `Total de membros em *${tulul}* is : *${yaelah}*` )
                break
        case 'ownergc':
            if (!isGroupMsg) return aruga.reply(from, 'Este comando só pode ser usado em grupos!', id)
            const Owner_ = chat.groupMetadata.owner
            await aruga.sendTextWithMentions(from, `Grupo Proprietário : @${Owner_}`)
            break
            /*if (!isGroupMsg) return aruga.reply(from, 'Desculpe, este comando só pode ser usado dentro de grupos!', id)
                    if (!isGroupAdmins) return aruga.reply(from, 'Falha, este comando só pode ser usado por administradores de grupo!', id)
                    if (!isBotGroupAdmins) return aruga.reply(from, 'Ó administrador, torne-me o administrador do grupo primeiro :)', id)*/
        
        case 'registrar':
            if (!isGroupMsg) return aruga.reply(from, 'Oi, sou o jhefe! juiz da Roswell. nao posso registrar pessoas, apenas comunidades na Roswell', id)
                    if (!isGroupAdmins) return aruga.reply(from, `*${pushname}* - você nao é um lider, nao pode regsitrar essa comunidade!`, id)
                    if (!isBotGroupAdmins) return aruga.reply(from, 'Sou representante de Roswell, so registro comunidades em que eu faço parte da administração :)', id)
            if(args[0] == 'on'){
                    let pegarid = ativar_cid.includes(chatId)
                    let nomegrupo = name 
                if(pegarid){
                        aruga.reply(from, `Sua comunidade ja esta registrada na cidade!`, id)
                }else{
                        ativar_cid.push(chatId)
                        listagrupos.push(nomegrupo)
                        aruga.reply(from, 'Acabamos de registrar sua comunidade na cidade! Seja um lider e cresça junto com sua equipe para conquistar mais territorios!', id)
                        fs.writeFileSync('./lib/database/ativar_cid.json', JSON.stringify(ativar_cid))
                        fs.writeFileSync('./lib/database/listagrupos.json', JSON.stringify(listagrupos))
                        
                    }
            }else if (args[0] == 'off') {
                    let cek = ativar_cid.includes(chatId);
                    let gruponame = name
                    if(!cek){
                        return aruga.reply(from, `A comunidade *${gruponame}* nao esta na cidade.`, id)
                    } else {
                        let nixx = ativar_cid.indexOf(chatId)
                        let nixxx = listagrupos.indexOf(chatId)
                        ativar_cid.splice(nixx, 1)
                        listagrupos.splice(nixxx, 1)
                        fs.writeFileSync('./lib/database/ativar_cid.json', JSON.stringify(ativar_cid))
                        fs.writeFileSync('./lib/database/listagrupos.json', JSON.stringify(listagrupos))
                        aruga.reply(from, 'Comunidade retirada da cidade>>! :?\n', id)
                    }
                }

            
            break
        case 'roswell':
            let verId = chatId
            let status = 0
            for(let i = 0; i < ativar_cid.length; i++){
                if(verId == ativar_cid[i]){
                    status = 1
                }
            }
            if(status == 1){
                if(!verId){
                    aruga.reply(from, `_Sua comunidade não esta registrada em Roswell, questione seu Lider(admin)_`)
                }else{
                   var textolista = `*Comunidades registrada em Roswell* \n\n`
                    for(let i = 0; i < listagrupos.length; i++){
                        let namegrp = listagrupos[i]
                        textolista += `--> _${namegrp}_\n`
                    }
            }
                await aruga.reply(from, cid_centro.cid_centro(pushname, textolista), id)
            }else if(status == 0){
                aruga.reply(from, `Esta comunidade nâo esta registrada em Roswell, questione seu Lider(admin)`, id)
    
            }
            break
        case 'centro':
            aruga.reply(from, centro.centro(), id)
            break;
            
            

            





        }
		// Simi-simi function
		if ((!isCmd && isGroupMsg && isSimi) && message.type === 'chat') {
			axios.get(`https://arugaz.herokuapp.com/api/simisimi?kata=${encodeURIComponent(message.body)}&apikey=${apiSimi}`)
			.then((res) => {
				if (res.data.status == 403) return aruga.sendText(ownerNumber, `${res.data.result}\n\n${res.data.pesan}`)
				aruga.reply(from, `Simi berkata: ${res.data.result}`, id)
			})
			.catch((err) => {
				aruga.reply(from, `${err}`, id)
			})
		}
		
		// Kata kasar function
		if(!isCmd && isGroupMsg && isNgegas) {
            const find = db.get('group').find({ id: groupId }).value()
            if(find && find.id === groupId){
                const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                const isIn = inArray(pengirim, cekuser)
                if(cekuser && isIn !== false){
                    if(isKasar){
                        const denda = db.get('group').filter({id: groupId}).map('members['+isIn+']').find({ id: pengirim }).update('denda', n => n + 5000).write()
                        if(denda){
                            await aruga.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp"+formatin(denda.denda), id)
                        }
                    }
                } else {
                    const cekMember = db.get('group').filter({id: groupId}).map('members').value()[0]
                    if(cekMember.length === 0){
                        if(isKasar){
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 5000}]).write()
                        } else {
                            db.get('group').find({ id: groupId }).set('members', [{id: pengirim, denda: 0}]).write()
                        }
                    } else {
                        const cekuser = db.get('group').filter({id: groupId}).map('members').value()[0]
                        if(isKasar){
                            cekuser.push({id: pengirim, denda: 5000})
                            await aruga.reply(from, "Jangan badword bodoh\nDenda +5.000", id)
                        } else {
                            cekuser.push({id: pengirim, denda: 0})
                        }
                        db.get('group').find({ id: groupId }).set('members', cekuser).write()
                    }
                }
            } else {
                if(isKasar){
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 5000}] }).write()
                    await aruga.reply(from, "Jangan badword bodoh\nDenda +5.000\nTotal : Rp5.000", id)
                } else {
                    db.get('group').push({ id: groupId, members: [{id: pengirim, denda: 0}] }).write()
                }
            }
        }
    } catch (err) {
        console.log(color('[EROR]', 'red'), err)
    }
}
