const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
╭━━━━━━━━━━━━╮
- - Eai, ${pushname}! 

*〘 COMANDOS JHEFE 〙*

「 _mais usados>>>_

    */cadastrar <seunome>* - Game do jhefer
    *${prefix}regras* - "Numero da regras"
    *${prefix}stmg* - Sticker em image
    *${prefix}adminList* - Lista de adms
    *${prefix}gcinfo* - Informações do Grupo
    *${prefix}images* - Faz download de Imagens
    *${prefix}setgroupname*   
                        」


│ *${prefix}regras "numero da regras"
│ *${prefix}stc*
│ *${prefix}ttp* - Texo em sticker
│ *${prefix}sgif*
│ *${prefix}stickergiphy*
│ *${prefix}stmg* - sticker em imagem
│ *${prefix}meme* - Escreve em fotos
│ *${prefix}nulis* - Escreve no caderno
│ _${prefix}quotemaker offline_
│ *${prefix}rate* - Julgar o que diz
│ *${prefix}kapan*
│ *${prefix}apakah*
│ *${prefix}bisakah*
│ *${prefix}infosurah*
│ *${prefix}surah*
│ *${prefix}tafsir*
│ *${prefix}ALaudio*
│ *${prefix}jsolat*
│ *${prefix}katakasar*
│ *${prefix}klasmen*
│ *${prefix}tiktokpic*
│ *${prefix}artinama*
│ *${prefix}cekjodoh*
│ *${prefix}zodiak*
│ *${prefix}motivasi*
│ *${prefix}urgay*
│ *${prefix}sreddit*
│ *${prefix}resep*
│ *${prefix}stalkig*
│ *${prefix}wiki*
│ *${prefix}cuaca*
│ *${prefix}chord*
│ *${prefix}lirik*
│ *${prefix}movie*
│ *${prefix}whatanime*
│ *${prefix}aiquote*
│ *${prefix}doggo*
│ *${prefix}fakta*
│ *${prefix}fakboy*
│ *${prefix}katabijak*
│ *${prefix}quote*
│ *${prefix}brainly*
│ *${prefix}cerpen*
│ *${prefix}cersex*
│ *${prefix}puisi*
│ *${prefix}anime* - Pesquisa de anime 
│ *${prefix}kpop* - Faz uma pesquisa 
│ *${prefix}memes* - Mostra alguns memes 
│ *${prefix}tts* - texto em audio use o pt
│ *${prefix}translate* - OFFLINE
│ *${prefix}resi* - Rastreamento de correio 
│ *${prefix}covidindo* -  Dados sobre o COVID-19
│ *${prefix}ceklokasi* - Localização.
│ *${prefix}shortlink* - Encurtador de link
│ *${prefix}bapakfont* - Troca a fonte da letra
│ *${prefix}linkgc* - Link do grupo.
│ *${prefix}adminList* Lista de Administradores
│ *${prefix}ownergc* - Criador do grupo
│ *${prefix}me* - Mostra seu perfil
│ *${prefix}listban* - lista de banidos
│ *${prefix}listblock* -Lista numeros bloqueados
│ *${prefix}gcinfo* - Informações de grupos
│ *${prefix}dewabatch* - Pesquisa informações animes
│ *${prefix}howmuch* - total de menbros.
│ *${prefix}mtk* - Calculadora de  + - * /
│ *${prefix}google* - pesquina no google
│ *${prefix}ptl* -  Foto de mulher 
│ *${prefix}grupbot* - Grupo do bot. 
│ *${prefix}read* - Ativar leitura de mensagens
│ *${prefix}getpic @tagmember* - Envia a foto de um menbro marcar
│ *${prefix}santet*  - Abraçar alguem 
│ *${prefix}nyenye* OFFLINE
│ *${prefix}saylist* - Lista de mensagens da say
│ *${prefix}addsay* - add msg a say
│ *${prefix}say* - mostrar mensagens da say
│ *${prefix}delsay* - del msg da say
│ *${prefix}listbacot* - mostra msg do bacot
│ *${prefix}addbacot* - add msg ao bacot
│ *${prefix}bacot* - mostra msg ao bacot
│ *${prefix}delbacot* - del msg do bacot
│ *${prefix}jadian* - acontecer
│ *${prefix}mystat* -  Mostra status no bot
│ *${prefix}infogempa* OFFLINE
│ *${prefix}tod* - jogo indonesio
│ *${prefix}kbbi*s
│ *${prefix}pornhub*
│ *${prefix}infobmkg*
│ *${prefix}bucin*
│ *${prefix}ytsearch*
│ *${prefix}tahta*
│ *${prefix}artimimpi*
│ *${prefix}family100*
│ *${prefix}playstore*
│ *${prefix}shopee*
│ *${prefix}glitch*
│ *${prefix}distance*
│ *${prefix}emojisticker*
│ *${prefix}jadwalbola*
│ *${prefix}caklontong*
│ *${prefix}tebakgambar*
│ *${prefix}simi*
│ *${prefix}kusonime*
│ *${prefix}asupan*
│ *${prefix}stalktiktok*
│ *${prefix}logoff*
│ *${prefix}blackpink*
│ *${prefix}glowtext* - OFFLINE
│ *${prefix}twitter*
│ *${prefix}quotesen*
│ *${prefix}gsmarena*
│ *${prefix}infoalamat*
│ *${prefix}detail*
│ *${prefix}findsticker*
│ *${prefix}film*
│ *${prefix}imgtourl*
│ *${prefix}myzodiak*
│ *${prefix}missing*
│ *${prefix}stalktwit* - Placa Bird
│ *${prefix}silverpb*
│ *${prefix}goldpb* - Gera uma image premium yt
│ *${prefix}darkjokesss* OFFLINE


*_〘 Seção de Downloads 〙_*

│ *${prefix}fb*
│ *${prefix}fb2*
│ *${prefix}ig*
│ *${prefix}ig2*
│ *${prefix}igstory*
│ *${prefix}play*
│ *${prefix}play2*
│ *${prefix}play3 [file]*
│ *${prefix}tiktok*
│ *${prefix}ytmp3*
│ *${prefix}ytmp4*
│ *${prefix}twitter*


*_〘 Comandos de Animes 〙_*

│ *${prefix}nhpdf [kodenuklir]*
│ *${prefix}anoboy* [ongoing anime]
│ *${prefix}rhug*
│ *${prefix}slap*
│ *${prefix}waifu*
│ *${prefix}nsfwgif*
│ *${prefix}bjgif*
│ *${prefix}cumgif*
│ *${prefix}kissgif*
│ *${prefix}rhentai*
│ *${prefix}pussy*
│ *${prefix}bjanime*
│ *${prefix}gifhentai*
│ *${prefix}boobs*
│ *${prefix}randomhentai*
│ *${prefix}randomhug*
│ *${prefix}baka*
│ *${prefix}animeavatar*
│ *${prefix}neko*
│ *${prefix}loli*
│ *${prefix}wallpaper*
│ *${prefix}wallpaper2*
│ *${prefix}wpanime*
│ *${prefix}nekonsfw*


*_〘 Pesquisas de Images 〙_*

│ *${prefix}ameliandani*
│ *${prefix}pictcogan*
│ *${prefix}pictcecan*
│ *${prefix}aesthetic*
│ *${prefix}images*


*_〘 Testando o Jhefer 〙_*

│ *${prefix}tnc* Termos e acordos
│ *${prefix}donasi* 
│ *${prefix}botstat* - Estatistica
│ *${prefix}ownerbot* - Dono do bot
│ *${prefix}join* - Entrar em um grupo


*_〘 Apenas para o Dono 〙_*

│ *${prefix}ban* - Banimento
│ *${prefix}bc* - Transmissões
│ *${prefix}leaveall* - Sair de todos os chats
│ *${prefix}clearall* - Limpars todos os chats
│ *${prefix}setstatus* - Definir Status
│ *${prefix}setpic* - Definir imagem
│ *${prefix}screen* - Screen da Tela
│ *${prefix}addprem* - Add pessoas premium
│ *${prefix}delprem* - Del pessoas premium
    

    
O melhor bot do Whatsapp é o jhefer✨`
}
    
    /*
    Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
    */
    
exports.textAdmin = () => {
    return `
⚠ [ *Comandos para ADM* ] ⚠ 

_Para usar os comandos set o Jhefer como administrador do Grupo_

│ *${prefix}add*
│ *${prefix}addregras* - Adicionar Regras
│ *${prefix}regras "numero da regra"
│ *${prefix}kick* @tag
│ *${prefix}promote* @tag
│ *${prefix}demote* @tag
│ *${prefix}infoall*
│ *${prefix}del*
│ *${prefix}mutegrup on/off*
│ *${prefix}seticon*
│ *${prefix}revoke link gc*
│ *${prefix}setgroupname*
│ *${prefix}resend*
│ *${prefix}bokep*
│ *${prefix}antilink on/off* anti-sticker
│ *${prefix}edotensei*
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Para o dono do grupo* ] ⚠
Cuidado ao usar este comando.
*${prefix}kickall* - exclui todos os menbros
*Somente o dono do grupo*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://trakteer.id/arugabot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.`


}
