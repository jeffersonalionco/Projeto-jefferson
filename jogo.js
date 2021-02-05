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
const appRoot = require('app-root-path')
const low = require('lowdb')
const google = require('google-it')
const { stdout } = require('process');
const Math_js = require('mathjs')
const FileSync = require('lowdb/adapters/FileSync')
const db_group = new FileSync(appRoot+'/lib/data/group.json')
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
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants')
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const prem = JSON.parse(fs.readFileSync('./lib/database/prem.json'))


let dbcot = JSON.parse(fs.readFileSync('./lib/database/bacot.json'))
let dsay = JSON.parse(fs.readFileSync('./lib/database/say.json'))
let dregras = JSON.parse(fs.readFileSync('./lib/database/regras.json'))
let c_id_jogo = JSON.parse(fs.readFileSync('./jogo/ids.json'))
let lista_username = JSON.parse(fs.readFileSync('./jogo/global/lista_username.json'))
let _autostiker = JSON.parse(fs.readFileSync('./lib/helper/antisticker.json'))
let antilink = JSON.parse(fs.readFileSync('./lib/helper/antilink.json'))
let ativar_cid = JSON.parse(fs.readFileSync('./lib/database/ativar_cid.json'))

let listagrupos = JSON.parse(fs.readFileSync('./lib/database/listagrupos.json'))
let { 
    ownerNumber, 
    groupLimit, 
    memberLimit,
    prefix,
    prefixo, 
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

module.exports = jogo = async (aruga, message) => {
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
        const id_usuario = pegar_id();
        const id_cadastro = id_player();
        var isGamer = isgamer();
        const nuser = `${author}`
        var nomegrupo = name
        const fotoperfilusuario = await aruga.getProfilePicFromServer(id_usuario.who);
        const timer = ms => new Promise(res => setTimeout(res, ms));

        // Bot Prefix
        body = (type === 'chat' && body.startsWith(prefixo)) ? body : ((type === 'image' && caption || type === 'video' && caption) && caption.startsWith(prefixo)) ? caption : ''
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
        var seforgame

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

if(chats){
    let c_id_jogo = JSON.parse(fs.readFileSync('./jogo/ids.json'))
    let qtd = c_id_jogo.length
    seforgame = false
        for(let i = 1; i < qtd; i++){
            if(id_usuario === c_id_jogo[i]){
                seforgame = true
            }
        }
}
        var idgrupo = [`554598306644-1610674787@g.us`, '556996012233-1610923541@g.us']
        if(command && id_usuario != '554598331383@c.us'){
        aruga.reply(idgrupo[0], `- Comando *[ ${command} ]* \Usado no grupo/chat *${nomegrupo}*\n\n_----Robo JHEFER----_`, id)
        }
      switch(command){
    //todos os comndos sem
    case 'cadastrar':
            if(isGroupMsg){
            aruga.reply(id_usuario, `\`\`\`- Vamos fazer seu cadastro.\`\`\` \n\nEnvie *#cadastrar* user_name_perfil`, id)
            return aruga.reply(from, `*_[ ${pushname} ]_* - para se cadastrar use o privado do bot`, id)
        }
        if(args[0] == null || args[0] == ' ') return aruga.reply(from, `É obrigatorio definir um username no jogo EX: */cadastrar seu_user_name* \n\n _Lembrando que seu username é_ *UNICO* _será usado  para outros jogadores te localizar no mapa._`, id)
        if(seforgame != true) return aruga.reply(from, ':)- _Este comando é só para o desenvolvedor do game FFRPG(JHEFFER) logo estara disponiveis aos usuarios_', id)
            let username = args[0]
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
"username": "${username}",
"classe": "Defina um heroi",
"atributos": \{
    "armadura": \{"maximo": 100, "minimo": 1\}, 
    "nivel": 1, 
    "evasao": \{"maximo": 10, "minimo": 1\},
    "hp": \{"atual": 1000, "minimo": 0, "maximo": 30\}, 
    "vit": \{"atual": "block", "minimo": 0, "maximo": 30\}, 
    "agi": \{"atual": "block", "minimo": 0, "maximo": 30\}, 
    "vel": \{"atual": "block", "minimo": 0, "maximo": 30\},
    "mag": \{"atual": "block", "minimo": 0, "maximo": 30\},
    "esp": \{"atual": "block", "minimo": 0, "maximo": 30\},
    "estatistica": \{ 
        "mp": 35, 
        "eva": 60, 
        "eva_m": 45, 
        "prec": 87, 
        "arm": 400, 
        "arm_m": 387, 
        "dex": 0,
        "mnt": 300,
        "exp": 259
        \}

\}
\}`


            if(cn == 0){
            fs.appendFile(`./jogo/cadastros/${id_chatid}.json`, cadastros, function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
              c_id_jogo.push(chatId)
            fs.writeFileSync('./jogo/ids.json' , JSON.stringify(c_id_jogo))
            aruga.reply(from, 'Cadastrado com sucesso! Acesse */config* para configurar seu personagem.', id)
            }else{
                aruga.reply(from, `Já esta cadastrado(a) use */config* para mais informações.`, id)
            }

            
    const salve_id = `\n
\{
    "usarname": "${username}",
    "id": "${id_usuario}"
\}
`
if(cn == 0){
    fs.appendFile(`./jogo/global/${username}.json`, salve_id, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      lista_username.push(username)
    fs.writeFileSync('./jogo/global/lista_username.json' , JSON.stringify(lista_username))
    }
            break
    case 'meuperfil':
        if(!isgamer) return aruga.reply(from, '*!Sem permissão.* somente para jogador quando liberado. */ajuda*', id)
        
        var cadastro = JSON.parse(fs.readFileSync(`./jogo/cadastros/${id_cadastro}.json`))
        var resposta = `*FINAL FANTASY (RPG_JHEFER)*
Ola, ${pushname} seus dados de perfil são.
    
    *(HP – Hit Point)*: _${cadastro.atributos.hp.atual}HP_
    _(vida do personagem)_

    *Nome fantasia:* _${cadastro.nome}_
    *Classe:* _${cadastro.classe}_
    *Nivel:*   _${cadastro.atributos.nivel}_ - de 100
    *Vitalidade (VIT):*   _${cadastro.atributos.vit.atual} - de ${cadastro.atributos.vit.maximo}_
    *Agilidade (AGI):*   _${cadastro.atributos.agi.atual} - de ${cadastro.atributos.agi.maximo}_
    *Velocidade (VEL):*   _${cadastro.atributos.vel.atual} - de ${cadastro.atributos.vel.maximo}_
    *Magia (MAG):*   _${cadastro.atributos.mag.atual} - de ${cadastro.atributos.mag.maximo}_
    *Espírito (ESP):*   _${cadastro.atributos.esp.atual} - de ${cadastro.atributos.esp.maximo}_ 
    
    --ATTACK SEUS INIMIGOS--`


    await aruga.sendImage(from, './media/capa.jpg','image-name.jpg', resposta );
        break
    case 'personagens' :
        if(!isgamer) return aruga.reply(from, '*!Sem permissão.* somente para jogador quando liberado. */ajuda*', id)
    var personagem = `
*--ESCOLHA SEU PERSONAGEN--*

_(Homem)_
*Id[ 1011 ]* - Alastor
*Id[ 1012 ]* - Bombur
*Id[ 1013 ]* - Sethos
*Id[ 1014 ]* - Uriel

_(Mulher)_
*Id[ 1015 ]* - Irina
*Id[ 1016 ]* - Naya
*Id[ 1017 ]* - Tyren

Após escolher seu personagem nao sera possivel alterar caso nao esteja no nivel 20

*/definir ID* - _Use este comando mais o id do heroi que deseja para definir em seu perfil._

`
await aruga.sendImage(from, './media/herois.png','image-name.jpg', personagem, id );
    break;
    case 'tmsg':
        //ghostForward(to: ChatId, messageId: MessageId):
        //await aruga.simulateTyping(chat.id, false)
       //await aruga.getAllChats()
       for(let i = 1; i <= 4; i++){
       await aruga.loadEarlierMessages(id_usuario, id)
        //await aruga.ghostForward(from, 'Robo Jhefer', id)
       }
    break
case 'definir':
    if(!isgamer) return aruga.reply(from, '*!Sem permissão.* somente para jogador quando liberado. */ajuda*', id)
    var idp = 0;
    for(let i = 1010; i < 1018; i++){
        if(args[0] == i){
            idp = i;
        }
    }
    var setpers = JSON.parse(fs.readFileSync(`./jogo/personagens/${idp}.json`))
    var cadastro = JSON.parse(fs.readFileSync(`./jogo/cadastros/${id_cadastro}.json`))
    cadastro.nome = setpers.nome
    cadastro.classe = setpers.classe
    cadastro.atributos.vit.atual = setpers.vit
    cadastro.atributos.agi.atual = setpers.agi
    cadastro.atributos.vel.atual = setpers.vel
    cadastro.atributos.mag.atual = setpers.mag
    cadastro.atributos.esp.atual = setpers.esp


    fs.writeFile(`./jogo/cadastros/${id_cadastro}.json`, JSON.stringify(cadastro, null, 2))
    aruga.reply(from, 'Pronto, use */meuperfil* para verificar.', id)
    break
case 'testes':
    if(isgamer) return aruga.reply(from, '*!Sem permissão.* somente para jogador quando liberado. */ajuda*', id)
        aruga.reply(from, `Contagem de 9s`, id)
        for(let i = 1; i <= 9; i++){
        
            await timer(1000).then(_=>console.log("done"));
            aruga.reply(from, `${i} segundo -----`, id)
        }
    //  await timer(9000).then(_=>console.log("done"));
        aruga.reply(from, `${desbloquear}`, id)
    break;
case 'teste':
    var teste = IsUserName(args[0])
    aruga.reply(from, `${teste}`, id)
    var grouppic = await aruga.getProfilePicFromServer(chat.id)
    if (grouppic == undefined) {
        var pfp = errorurl

   } else {
        var pfp = grouppic 
   }
   await aruga.simulateTyping(from, true)
   await aruga.reply(from, pfp, 'group.png', `*「 Info Grupo 」*`, id)
    break;
case 'ajuda':
    let texto = `
*Esses comandos presente no bot, que se iniciam com [ / ]provavelmente é para jogadores cadastrado no jogo do jhefer.*

\`\`\`no momento, o jogo nao esta acabado, por isso nao tem nenhuma pessoa cadastrada.\`\`\`

*---mais comandos de ajuda*

_[EM BREVE]_
    `
    await aruga.simulateTyping(from, true)
    aruga.reply(from, texto, id)
    break


}

function id_por_username(username){
    var user_name = JSON.parse(fs.readFileSync(`./jogo/global/${username}.json`))
    let Id = user_name.id
    console.log(Id)
    return Id;
}
function pegar_id(){ //---- pega o id de usuario tanto em grupo como em chat privado
    let id_user = 0
    if(isGroupMsg){
        id_user = author;
    }else if(!isGroupMsg){
        id_user = chatId;
    }
    return id_user;
}
function id_player(){
    let cadastro = 0;
    var id_chatid_final = id_usuario.length
    for (let i = 0; i < id_chatid_final; i++) {
      if (id_usuario.charAt(i) ==="@") {
          var sliceBegin = id_usuario.slice(0, (i+1));
          cadastro = sliceBegin;

      }
    }
    return cadastro;
}

function isgamer(){ //---- Verifica se o usuario tem cadastro no game, caso tenha true caso contrario false
    let qtd = c_id_jogo.length
    let status = false
        for(let i = 1; i < qtd; i++){
            if(id_usuario === c_id_jogo[i]){
                status = true
            }
        }
        return status;
}
} catch (err) {
        console.log(color('[EROR]', 'red'), err)
    }
}