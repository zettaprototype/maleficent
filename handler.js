process.on('uncaughtException', console.error)
import chalk from 'chalk';
import { color } from './lib/Data_Server_Bot/Console_Data.js'
import { dbPlus, dbMinus, getProfileData, addLimitUser, addBannedUser, addPremiumUser, resetLimits, confirmclaim, Hour, Uang, Kupon, checkBannedUser, checkRegisteredUser, registering, checkPremiumUser, switchGroup } from "./lib/database.js"
import { isUrl, getGroupAdmins, bytesToSize, sleep, makeid } from "./lib/func_Server.js"
import { setting_JSON, mess_JSON } from './lib/Data_Location.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import util from 'util';
import { exec } from "child_process";
import { createRequire } from 'module';
let require = createRequire(import.meta.url);
let __dirname = dirname(fileURLToPath(import.meta.url))
import fs from "fs"
import path from "path"
import colors from 'colors/safe.js'
import moment from "moment-timezone"
moment.tz.setDefault("Asia/Jakarta").locale("id");
export async function handler(conn, m, chatUpdate, store) {
    try {
        let setting = setting_JSON
        let mess = mess_JSON
        // Data Awal 
        let welcome = true 
        let antilink = true        
        let limit = 80
        let uang = 500
        let kupon = 3
        let logo_limit = setting.logolimit        
        let {
            owner,
            ownerNumber,
            botName,
            contact,
            ownerName,
            footer
        } = setting
        let jam = moment.tz('asia/jakarta').format('HH:mm:ss')
        let tanggal = moment().tz("Asia/Jakarta").format("ll")
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        let time = moment(new Date()).format("HH:mm");
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var type = Object.keys(m.message)[0]
        const prefix = /^[��?�С¡�????�?????_=|~!?#$%^&.+-,\/\\?^]/.test(body) ? body.match(/^[��?�С¡�????�?????_=|~!?#$%^&.+-,\/\\?^]/gi) : '#'
        let isCmd = body.startsWith(prefix)
        let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        let cmd = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        let args = body.trim().split(/ +/).slice(1)
        let pushname = m.pushName || setting.botName
        let botNumber = await conn.decodeJid(conn.user.id)
        let isOwner = setting.ownerNumber.includes(m.sender) // || m.sender == setting.owner;
        let itsMe = m.sender == botNumber ? true : false
        let text = args.join(' ')
        let from = m.chat
        let quoted = m.quoted ? m.quoted : m
        let mime = (quoted.m || quoted).mimetype || ''
        let isMedia = /image|video|sticker|audio/.test(mime)
        let sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        let isSticker = (type == 'stickerMessage')
        let isQuoted = (type == 'extendedTextMessage');
        let content = JSON.stringify(m.message)
        let isQuotedSticker = isQuoted ? content.includes('stickerMessage') ? true : false : false
        let isQuotedAudio = isQuoted ? content.includes('audioMessage') ? true : false : false
        let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        let groupId = m.isGroup ? groupMetadata.id : ''
        let groupName = m.isGroup ? await groupMetadata.subject : ''
        let participants = m.isGroup ? await groupMetadata.participants : ''
        let groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        let groupOwner = m.isGroup ? await groupMetadata.owner : ''
        let isBotAdmins = m.isGroup ? await groupAdmins.includes(botNumber) : false
        let isAdmins = m.isGroup ? await groupAdmins.includes(m.sender) : false
        let isPremium = checkPremiumUser(sender);
        let mentionByTag = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        let mentionByReply = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
        let mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        let mentionUser = mention != undefined ? mention.filter(n => n) : []
        const _0x58c0a4=_0x3b70;(function(_0x1002d6,_0x2d920b){const _0x4657ba=_0x3b70,_0x38aab3=_0x1002d6();while(!![]){try{const _0x3cab11=parseInt(_0x4657ba(0xf6))/(-0x173c+0x18da+-0x19d)+-parseInt(_0x4657ba(0xa7))/(-0x1*-0x2af+-0x125c+0xfaf)*(parseInt(_0x4657ba(0xd8))/(0xeef*-0x1+0x19+0xb5*0x15))+parseInt(_0x4657ba(0x82))/(-0x4*0x7b5+-0x3e*-0x9+0x6*0x4c7)*(-parseInt(_0x4657ba(0xb0))/(0x1fce+0x18f3+-0x38bc))+-parseInt(_0x4657ba(0xbd))/(0x2385+0x571*-0x6+-0x2d9*0x1)+parseInt(_0x4657ba(0xa8))/(0x1*-0x11e0+0x1db4+-0xbcd)*(-parseInt(_0x4657ba(0xab))/(0x2153+0x1a01*0x1+-0x294*0x17))+-parseInt(_0x4657ba(0x77))/(-0xf07*0x2+-0x1038+0x2e4f)*(-parseInt(_0x4657ba(0xe3))/(-0x11*-0x2+0x358*-0x6+-0x13f8*-0x1))+-parseInt(_0x4657ba(0xba))/(-0x19d5+0x7ca+0x1216)*(-parseInt(_0x4657ba(0x99))/(0x14*0x43+-0x59*0x17+0x2cf*0x1));if(_0x3cab11===_0x2d920b)break;else _0x38aab3['push'](_0x38aab3['shift']());}catch(_0x504534){_0x38aab3['push'](_0x38aab3['shift']());}}}(_0x2cb5,0x68efb+-0x323aa+0x18177));function readSelf(){const _0x141fea=_0x3b70,_0x19aa27={'bhYdK':_0x141fea(0xc7)+_0x141fea(0xac),'mGnKY':_0x141fea(0xe0)},_0x9fed3d=_0x19aa27[_0x141fea(0x10a)],_0xa7e44=JSON[_0x141fea(0x9f)](fs[_0x141fea(0xb7)+'nc'](_0x9fed3d,_0x19aa27[_0x141fea(0x8f)]));return _0xa7e44[_0x141fea(0x85)];}function _0x3b70(_0x204802,_0x3aa499){const _0x1fd11f=_0x2cb5();return _0x3b70=function(_0x442bf3,_0x30cd3d){_0x442bf3=_0x442bf3-(-0x2569+-0x607*0x1+0x2be7);let _0x50707f=_0x1fd11f[_0x442bf3];return _0x50707f;},_0x3b70(_0x204802,_0x3aa499);}let self=readSelf();if(self){if(!m[_0x58c0a4(0x9b)]&&!isOwner&&!isPremium)return;}function readAutoDL(){const _0x2e4a0c=_0x58c0a4,_0x4e2d9a={'BcAbC':_0x2e4a0c(0xc7)+_0x2e4a0c(0xac),'IMQrC':_0x2e4a0c(0xe0)},_0x363f0e=_0x4e2d9a[_0x2e4a0c(0xcd)],_0x30944d=JSON[_0x2e4a0c(0x9f)](fs[_0x2e4a0c(0xb7)+'nc'](_0x363f0e,_0x4e2d9a[_0x2e4a0c(0x9c)]));return _0x30944d[_0x2e4a0c(0x81)];}let autodl=readAutoDL();function getRandom(_0x533d09){const _0x191025=_0x58c0a4;return''+Date[_0x191025(0xa4)]()+_0x533d09;}conn[_0x58c0a4(0xd7)+'es']([m[_0x58c0a4(0xbf)]]),conn[_0x58c0a4(0x78)+_0x58c0a4(0x103)](_0x58c0a4(0xaf),m[_0x58c0a4(0xb9)]),conn[_0x58c0a4(0x78)+_0x58c0a4(0x103)](_0x58c0a4(0x91)+'e',m[_0x58c0a4(0xb9)]);let loadUserData=(_0x5a6c3a,_0x4771ae)=>{const _0xc877b5=_0x58c0a4,_0x35df87={'CFQIJ':function(_0xfafd27,_0x79a54c){return _0xfafd27===_0x79a54c;},'DMdKG':_0xc877b5(0x86),'apszc':_0xc877b5(0xe0),'uAtKY':_0xc877b5(0xe7)+_0xc877b5(0x92)};let _0x509495=_0x5a6c3a[_0xc877b5(0xf3)]('@')[-0x1d*-0x139+-0x13*-0x10c+0x3759*-0x1]+_0xc877b5(0x10b),_0x4a7efc=path[_0xc877b5(0xe5)](_0x35df87[_0xc877b5(0xbb)],_0x509495);fs[_0xc877b5(0xc6)](_0x4a7efc,_0x35df87[_0xc877b5(0x108)],(_0x9c1b38,_0x2d1a46)=>{const _0x361777=_0xc877b5;if(_0x9c1b38){if(_0x35df87[_0x361777(0xf0)](_0x9c1b38[_0x361777(0xec)],_0x35df87[_0x361777(0xbe)])){let _0x4ea1b8={'id':_0x5a6c3a,'registered':![],'nama':'','umur':'','seri':'','banned':![],'uang':uang,'kupon':kupon,'premium':![],'limit':limit,'lastClaim':'','lastHour':'','lastUang':'','lastKupon':''},_0x4cd457=[_0x4ea1b8];fs[_0x361777(0xe4)](_0x4a7efc,JSON[_0x361777(0x7a)](_0x4cd457,null,0x13eb+-0x1*0x1499+0xb2),_0x35df87[_0x361777(0x108)],_0x27e7d0=>{if(_0x27e7d0)return;});}else{}return;}let _0x47b5cb=JSON[_0x361777(0x9f)](_0x2d1a46),_0x3499e9=_0x47b5cb[_0x361777(0x7b)](_0x23eca7=>_0x23eca7['id']===_0x5a6c3a);if(!_0x3499e9){let _0x35dbbf={'id':_0x5a6c3a,'registered':![],'user':!![],'nama':'','umur':'','seri':'','banned':![],'uang':uang,'kupon':kupon,'premium':![],'limit':limit,'lastClaim':'','lastHour':'','lastUang':'','lastKupon':''};_0x47b5cb[_0x361777(0xe8)](_0x35dbbf),fs[_0x361777(0xe4)](_0x4a7efc,JSON[_0x361777(0x7a)](_0x47b5cb,null,-0x2eb*0x9+-0x1*-0x222d+0x3*-0x2a2),_0x35df87[_0x361777(0x108)],_0x5b7a82=>{if(_0x5b7a82)return;});}});},users=[];for(let i=0x8e7+-0x579+-0x36e;i<0x2e*-0xbc+0x11cf+-0x32*-0x52;i++){let user={'sender':m[_0x58c0a4(0xb4)],'registered':![],'nama':'','umur':'','seri':'','banned':![],'uang':uang,'kupon':kupon,'premium':![],'limit':limit,'lastClaim':'','lastHour':'','lastUang':'','lastKupon':''};users[_0x58c0a4(0xe8)](user);}for(let i=-0xc9*-0x1b+0x57*-0x1d+-0xb58;i<users[_0x58c0a4(0x8c)];i++){let user=users[i];loadUserData(user[_0x58c0a4(0xb4)],user[_0x58c0a4(0xdd)]);}let groupFolderPath=_0x58c0a4(0xe7)+_0x58c0a4(0x79),groupFilePath=path[_0x58c0a4(0xe5)](groupFolderPath,groupId+_0x58c0a4(0x10b)),groupData=[{'id':groupId,'name':groupName,'welcome':welcome,'antilink':antilink}];function saveGroupData(){const _0x107e0=_0x58c0a4;!fs[_0x107e0(0xca)](groupFilePath)&&fs[_0x107e0(0x104)+_0x107e0(0x96)](groupFilePath,JSON[_0x107e0(0x7a)](groupData,null,-0x1d*0x95+-0x8ec+0x1*0x19d1));}function readGroupData(){const _0x47e8ba=_0x58c0a4;fs[_0x47e8ba(0xca)](groupFilePath)&&(groupData=JSON[_0x47e8ba(0x9f)](fs[_0x47e8ba(0xb7)+'nc'](groupFilePath)));}function _0x2cb5(){const _0x536f34=['icprI','ssage\x20🗃','DtQRa','apszc','statSync','bhYdK','.json','OnlyPM','age\x20🖼','9JctpMW','sendPresen','/group','stringify','find','cANZl','endsWith','Private','.js','forEach','auto_dl','68mxiykG','audioMessa','isGroup','self','ENOENT','brightCyan','Error\x20read','NRgjX','CamTu','ssage\x20🎨\x20','length','bold','kupon','mGnKY','banned','unavailabl','/userdata','catch','ory:\x20','Group','ync','commands','Dokumen\x20Me','12FRHcTm','ssage','fromMe','IMQrC','imageMessa','QlMle','parse','Audio\x20Mess','gtEdX','HEWhv','documentMe','now','jvzni','number','16LioeFn','157318ztRrbG','NUAWI','from','200zinWXz','son','VSvOY','CLhIi','composing','70895NVgwVD','black','0|4|3|1|2','error','sender','bgWhite','names','readFileSy','age\x20🎬','chat','8577602EVzzaI','uAtKY','blue','2850156lSkSOm','DMdKG','key','function','vehOC','OpFET','includes','admin','reply','readFile','./config.j','GrupAdmin','object','existsSync','owner','white','BcAbC','OnlyOwner','isFile','stack','Sticker\x20Me','age🎤','Terpakai\x20','sage','Image\x20Mess','group','readMessag','28491ZlmCZN','videoMessa','UkfWD','uang','some','amount','tags','command','utf8','ing\x20direct','register','3381160dAvcOL','writeFile','join','private','./database','push','MSYyK','mtype','Terjadi\x20Ke','code','salahan\x20','ipnZd','xjmrR','CFQIJ','Zxwib','LccVf','split','green','OnlyGroup','558757ezBZBQ','readdirSyn','limit','isDirector','hhCza','event','stickerMes','\x20Limit\x20','daftar','log','YLWvB','Video\x20Mess','premium','ceUpdate','writeFileS'];_0x2cb5=function(){return _0x536f34;};return _0x2cb5();}function readAntilink(){const _0x22541d=_0x58c0a4;return fs[_0x22541d(0xca)](groupFilePath)?JSON[_0x22541d(0x9f)](fs[_0x22541d(0xb7)+'nc'](groupFilePath)):null;}let groupAntilink=readAntilink(),group=groupAntilink&&groupAntilink[_0x58c0a4(0x7b)](_0x1abe15=>_0x1abe15['id']===groupId);saveGroupData(),readGroupData(),readAntilink();let checkLimitUser=_0x45342b=>{const _0x44426a=_0x58c0a4,_0x162605={'gtEdX':_0x44426a(0xe7)+_0x44426a(0x92)};if(m[_0x44426a(0x9b)])return;if(isOwner)return;let _0x25e9f2=_0x45342b[_0x44426a(0xf3)]('@')[-0x3fa+0xb2c+-0x732]+_0x44426a(0x10b),_0x348c42=path[_0x44426a(0xe5)](_0x162605[_0x44426a(0xa1)],_0x25e9f2);try{let _0x44f698=JSON[_0x44426a(0x9f)](fs[_0x44426a(0xb7)+'nc'](_0x348c42)),_0x3c8733=_0x44f698[_0x44426a(0x7b)](_0x567f20=>_0x567f20['id']===_0x45342b);return _0x3c8733?_0x3c8733[_0x44426a(0xf8)]:![];}catch(_0x4986ec){return![];}},ceklimit=checkLimitUser(sender)<=-0x10b3+-0x9d6+-0x1*-0x1a89,addLimit=addLimitUser,addBanned=addBannedUser,addPremium=addPremiumUser;async function confirmlimit(_0x1ff1c3,_0x46d328){const _0x218c4d=_0x58c0a4,_0x52a2f5={'vehOC':function(_0x8f7fdb,_0x24b1b4){return _0x8f7fdb===_0x24b1b4;},'OpFET':_0x218c4d(0xe7)+_0x218c4d(0x92),'HEWhv':function(_0x1dca65,_0x629796){return _0x1dca65!==_0x629796;}};if(m[_0x218c4d(0x9b)])return;if(isOwner)return;let _0x43195e=_0x1ff1c3[_0x218c4d(0xf3)]('@')[0x2a2*-0xd+-0x2*0x274+0x2722]+_0x218c4d(0x10b),_0x5c4f09=await path[_0x218c4d(0xe5)](_0x52a2f5[_0x218c4d(0xc2)],_0x43195e),_0x3d9df6=JSON[_0x218c4d(0x9f)](fs[_0x218c4d(0xb7)+'nc'](_0x5c4f09)),_0x38f872=-(-0x17*-0x11d+0x1eac+-0x3846);_0x3d9df6[_0x218c4d(0x80)]((_0x25d893,_0x23d810)=>{const _0x33a774=_0x218c4d;_0x52a2f5[_0x33a774(0xc1)](_0x25d893['id'],_0x1ff1c3)&&(_0x38f872=_0x23d810);}),_0x52a2f5[_0x218c4d(0xa2)](_0x38f872,-(-0x5d8+0xbac+-0x1f1*0x3))&&(_0x3d9df6[_0x38f872][_0x218c4d(0xf8)]-=_0x46d328,fs[_0x218c4d(0x104)+_0x218c4d(0x96)](_0x5c4f09,JSON[_0x218c4d(0x7a)](_0x3d9df6,null,-0xe09*-0x2+-0x2a6*-0x1+-0x1eb4)),m[_0x218c4d(0xc5)](_0x218c4d(0xd3)+_0x46d328+_0x218c4d(0xfd)+logo_limit));};let Limit=await confirmlimit,claim=await confirmclaim,isBanned=checkBannedUser(sender),isRegister=checkRegisteredUser(sender),checkUangUser=_0x455e65=>{const _0x56b195=_0x58c0a4,_0x82c1e0={'CamTu':_0x56b195(0xe7)+_0x56b195(0x92)};let _0x566dfb=_0x455e65[_0x56b195(0xf3)]('@')[-0x1094+0x237d+0x2f*-0x67]+_0x56b195(0x10b),_0x40e95c=path[_0x56b195(0xe5)](_0x82c1e0[_0x56b195(0x8a)],_0x566dfb);try{let _0xce93aa=JSON[_0x56b195(0x9f)](fs[_0x56b195(0xb7)+'nc'](_0x40e95c)),_0x530d30=_0xce93aa[_0x56b195(0x7b)](_0x2e6ae1=>_0x2e6ae1['id']===_0x455e65);return _0x530d30?_0x530d30[_0x56b195(0xdb)]:![];}catch(_0x4e206f){return![];}},cekuang=checkUangUser(sender)<=-0x1a4b+0x410+-0x1*-0x1645,checkKuponUser=_0x1c2aae=>{const _0x3558a9=_0x58c0a4,_0x182f5d={'MSYyK':_0x3558a9(0xe7)+_0x3558a9(0x92)};let _0x2a3dea=_0x1c2aae[_0x3558a9(0xf3)]('@')[0x56*0x7+-0xf1*0x11+0xf*0xe9]+_0x3558a9(0x10b),_0x457116=path[_0x3558a9(0xe5)](_0x182f5d[_0x3558a9(0xe9)],_0x2a3dea);try{let _0x194411=JSON[_0x3558a9(0x9f)](fs[_0x3558a9(0xb7)+'nc'](_0x457116)),_0x244956=_0x194411[_0x3558a9(0x7b)](_0x2b3799=>_0x2b3799['id']===_0x1c2aae);return _0x244956?_0x244956[_0x3558a9(0x8e)]:![];}catch(_0x5ca14d){return![];}},cekkupon=checkKuponUser(sender)<=-0x23d2+-0x1cd*0xd+0x3b3b,pluginsFolderPath=await path[_0x58c0a4(0xe5)](__dirname,_0x58c0a4(0x97));await readFilesEvent(pluginsFolderPath)[_0x58c0a4(0x93)](console[_0x58c0a4(0xb3)]),await readFilesOn(pluginsFolderPath)[_0x58c0a4(0x93)](console[_0x58c0a4(0xb3)]);async function readFilesEvent(_0x2b2e24){const _0x1c6607=_0x58c0a4,_0x1001cb={'DtQRa':function(_0x53b319,_0x234571){return _0x53b319(_0x234571);},'hhCza':_0x1c6607(0x7f),'CLhIi':function(_0x3d0c5e,_0x4e43e0){return _0x3d0c5e===_0x4e43e0;},'NRgjX':_0x1c6607(0xc0),'ipnZd':_0x1c6607(0xc9),'cANZl':function(_0xb47631,_0x413b7a){return _0xb47631(_0x413b7a);},'UkfWD':function(_0x7353c0,_0x379401,_0x3ffa70){return _0x7353c0(_0x379401,_0x3ffa70);}};try{let _0xf31867=await fs[_0x1c6607(0xf7)+'c'](_0x2b2e24);for(let _0x8dd662 of _0xf31867){let _0x1dcd49=await path[_0x1c6607(0xe5)](_0x2b2e24,_0x8dd662),_0x30c735=await fs[_0x1c6607(0x109)](_0x1dcd49);if(_0x30c735[_0x1c6607(0xf9)+'y']())await _0x1001cb[_0x1c6607(0x107)](readFilesEvent,_0x1dcd49);else{if(_0x30c735[_0x1c6607(0xcf)]()&&_0x8dd662[_0x1c6607(0x7d)](_0x1001cb[_0x1c6607(0xfa)]))try{let _0x561620=await import(_0x1dcd49);if(_0x1001cb[_0x1c6607(0xae)](typeof _0x561620[_0x1c6607(0xfb)],_0x1001cb[_0x1c6607(0x89)])||_0x1001cb[_0x1c6607(0xae)](typeof _0x561620[_0x1c6607(0xfb)],_0x1001cb[_0x1c6607(0xee)])){let _0x2ee522=_0x1001cb[_0x1c6607(0x7c)](checkBannedUser,sender);if(_0x2ee522&&!m[_0x1c6607(0x9b)])return;let _0x209872=_0x561620[_0x1c6607(0xfb)]['on'];await _0x1001cb[_0x1c6607(0xda)](_0x209872,m,{'conn':conn,'group':group,'budy':budy,'command':command,'isAdmins':isAdmins,'isOwner':isOwner,'addBanned':addBanned,'mess':mess,'setting':setting,'sleep':sleep,'quoted':quoted,'mime':mime,'participants':participants,'checkLimitUser':checkLimitUser,'Limit':Limit,'addBanned':addBanned,'dbPlus':dbPlus,'dbMinus':dbMinus,'autodl':autodl});}}catch(_0x36816b){console[_0x1c6607(0xb3)](_0x36816b);}}}}catch(_0x47837b){console[_0x1c6607(0xb3)](_0x47837b);}}async function readFilesOn(_0x5e7c1b){const _0x175e95=_0x58c0a4,_0x3a09d4={'QlMle':function(_0x31028f,_0x3a5a93){return _0x31028f(_0x3a5a93);},'VSvOY':_0x175e95(0x7f),'icprI':function(_0x30db5a,_0x1aac5f){return _0x30db5a===_0x1aac5f;},'YLWvB':_0x175e95(0xc9),'Zxwib':_0x175e95(0xa6),'xjmrR':function(_0x2d1338,_0x2168cd,_0x3ce99f){return _0x2d1338(_0x2168cd,_0x3ce99f);},'jvzni':function(_0x19ba04,_0x353de8){return _0x19ba04(_0x353de8);},'LccVf':_0x175e95(0xb2),'NUAWI':function(_0x9706ba,_0x290481){return _0x9706ba(_0x290481);}};try{let _0x12f298=await fs[_0x175e95(0xf7)+'c'](_0x5e7c1b);for(let _0x28c95f of _0x12f298){let _0x4eb9d0=await path[_0x175e95(0xe5)](_0x5e7c1b,_0x28c95f),_0x42fb42=await fs[_0x175e95(0x109)](_0x4eb9d0);if(_0x42fb42[_0x175e95(0xf9)+'y']())await _0x3a09d4[_0x175e95(0x9e)](readFilesOn,_0x4eb9d0);else{if(_0x42fb42[_0x175e95(0xcf)]()&&_0x28c95f[_0x175e95(0x7d)](_0x3a09d4[_0x175e95(0xad)]))try{let _0x37a9ea=await import(_0x4eb9d0);if(_0x3a09d4[_0x175e95(0x105)](typeof _0x37a9ea['on'],_0x3a09d4[_0x175e95(0x100)])){let _0x4473fa=_0x37a9ea['on'];if(_0x4473fa[_0x175e95(0xdf)]&&_0x4473fa[_0x175e95(0xdf)][_0x175e95(0xc3)](command)){if(!m[_0x175e95(0x9b)]&&!isOwner&&_0x3a09d4[_0x175e95(0x105)](typeof _0x4473fa[_0x175e95(0xf8)],_0x3a09d4[_0x175e95(0xf1)])){let _0x42ef8e=_0x4473fa[_0x175e95(0xf8)];if(ceklimit)return m[_0x175e95(0xc5)](mess[_0x175e95(0xf8)]);await _0x3a09d4[_0x175e95(0xef)](confirmlimit,sender,_0x42ef8e);}let _0x3f3f4f=_0x3a09d4[_0x175e95(0xa5)](checkBannedUser,sender);if(_0x3f3f4f&&!m[_0x175e95(0x9b)])return m[_0x175e95(0xc5)](mess[_0x175e95(0x90)]);if(!_0x4473fa[_0x175e95(0x102)]||isPremium){const _0x3c4686=_0x3a09d4[_0x175e95(0xf2)][_0x175e95(0xf3)]('|');let _0x549a48=-0x6e*0x42+0x6fc+0x39*0x60;while(!![]){switch(_0x3c4686[_0x549a48++]){case'0':if(m[_0x175e95(0x84)]&&_0x4473fa[_0x175e95(0xc4)]&&!groupAdmins[_0x175e95(0xc3)](m[_0x175e95(0xb4)]))return m[_0x175e95(0xc5)](mess[_0x175e95(0xc8)]);continue;case'1':if(_0x4473fa[_0x175e95(0xe6)]&&m[_0x175e95(0x84)])return m[_0x175e95(0xc5)](mess[_0x175e95(0x10c)]);continue;case'2':if(_0x4473fa[_0x175e95(0xde)]&&_0x4473fa[_0x175e95(0xde)][_0x175e95(0xdc)](_0x4badb4=>_0x4473fa[_0x175e95(0xde)][_0x175e95(0xc3)](_0x4badb4))||_0x4473fa[_0x175e95(0xb6)]&&_0x4473fa[_0x175e95(0xb6)][_0x175e95(0xdc)](_0x1ae1a9=>_0x4473fa[_0x175e95(0xb6)][_0x175e95(0xc3)](_0x1ae1a9))){if(!_0x4473fa[_0x175e95(0xe2)]||_0x3a09d4[_0x175e95(0xa9)](checkRegisteredUser,sender))await _0x4473fa['on'](m,{'conn':conn,'mess':mess,'setting':setting,'prefix':prefix,'command':command,'text':text,'mime':mime,'args':args,'getRandom':getRandom,'quoted':quoted,'claim':claim,'store':store,'Hour':Hour,'getProfileData':getProfileData,'checkLimitUser':checkLimitUser,'checkPremiumUser':checkPremiumUser,'checkRegisteredUser':checkRegisteredUser,'Uang':Uang,'claim':claim,'dbPlus':dbPlus,'dbMinus':dbMinus,'cekuang':cekuang,'addLimit':addLimit,'makeid':makeid,'sleep':sleep,'isRegister':isRegister,'registering':registering,'Kupon':Kupon,'cekkupon':cekkupon,'bytesToSize':bytesToSize,'isSticker':isSticker,'isQuotedSticker':isQuotedSticker,'isQuotedAudio':isQuotedAudio,'resetLimits':resetLimits,'addBanned':addBanned,'addPremium':addPremium,'groupName':groupName,'switchGroup':switchGroup,'participants':participants,'groupAdmins':groupAdmins,'mentionUser':mentionUser,'mentionByReply':mentionByReply,'cmd':cmd});else return m[_0x175e95(0xc5)](mess[_0x175e95(0xfe)]);}continue;case'3':if(_0x4473fa[_0x175e95(0xd6)]&&!m[_0x175e95(0x84)])return m[_0x175e95(0xc5)](mess[_0x175e95(0xf5)]);continue;case'4':if(_0x4473fa[_0x175e95(0xcb)]&&!isOwner)return m[_0x175e95(0xc5)](mess[_0x175e95(0xce)]);continue;}break;}}else m[_0x175e95(0xc5)](mess[_0x175e95(0x102)]);}}}catch(_0x5d57d2){m[_0x175e95(0xc5)](_0x175e95(0xeb)+_0x175e95(0xed)+_0x28c95f+'\x0a'+_0x5d57d2[_0x175e95(0xd0)]),console[_0x175e95(0xb3)](_0x5d57d2);}}}}catch(_0x41f4d3){console[_0x175e95(0xff)](_0x175e95(0x88)+_0x175e95(0xe1)+_0x175e95(0x94)+_0x5e7c1b),console[_0x175e95(0xb3)](_0x41f4d3);}}const gambar=m[_0x58c0a4(0xea)]===_0x58c0a4(0x9d)+'ge',stiker=m[_0x58c0a4(0xea)]===_0x58c0a4(0xfc)+_0x58c0a4(0xd4),audio=m[_0x58c0a4(0xea)]===_0x58c0a4(0x83)+'ge',video=m[_0x58c0a4(0xea)]===_0x58c0a4(0xd9)+'ge',doc=m[_0x58c0a4(0xea)]===_0x58c0a4(0xa3)+_0x58c0a4(0x9a);(gambar||audio||stiker||video||doc)&&console[_0x58c0a4(0xff)](chalk[_0x58c0a4(0xcc)][_0x58c0a4(0x8d)](''+(gambar?_0x58c0a4(0xd5)+_0x58c0a4(0x10d):'')+(audio&&gambar?',\x20':'')+(audio?_0x58c0a4(0xa0)+_0x58c0a4(0xd2):'')+((gambar||audio)&&stiker?',\x20':'')+(stiker?_0x58c0a4(0xd1)+_0x58c0a4(0x8b):'')+((gambar||audio||stiker)&&video?',\x20':'')+(video?_0x58c0a4(0x101)+_0x58c0a4(0xb8):'')+((gambar||audio||stiker||video)&&doc?',\x20':'')+(doc?_0x58c0a4(0x98)+_0x58c0a4(0x106):'')));let talking=body;console[_0x58c0a4(0xff)](chalk[_0x58c0a4(0xb1)][_0x58c0a4(0xb5)](''+pushname)),console[_0x58c0a4(0xff)](chalk[_0x58c0a4(0xcc)][_0x58c0a4(0x8d)](talking));m[_0x58c0a4(0x84)]&&isCmd&&!m[_0x58c0a4(0x9b)]&&console[_0x58c0a4(0xff)](colors[_0x58c0a4(0xf4)][_0x58c0a4(0x8d)](_0x58c0a4(0x95))+'\x20'+colors[_0x58c0a4(0x87)](time)+'\x20'+colors[_0x58c0a4(0xb1)][_0x58c0a4(0xb5)](command)+'\x20'+colors[_0x58c0a4(0xf4)](_0x58c0a4(0xaa))+'\x20'+colors[_0x58c0a4(0xbc)](groupName));!m[_0x58c0a4(0x84)]&&isCmd&&!m[_0x58c0a4(0x9b)]&&console[_0x58c0a4(0xff)](colors[_0x58c0a4(0xf4)][_0x58c0a4(0x8d)](_0x58c0a4(0x7e))+'\x20'+colors[_0x58c0a4(0x87)](time)+'\x20'+colors[_0x58c0a4(0xb1)][_0x58c0a4(0xb5)](command)+'\x20'+colors[_0x58c0a4(0xf4)](_0x58c0a4(0xaa))+'\x20'+colors[_0x58c0a4(0xbc)](pushname));                
        try {
             if (budy.startsWith('=>')) {
                if (!isOwner) return m.reply(mess.OnlyOwner);

                function Return(sul) {
                    sat = JSON.stringify(sul, null, 4);
                    bang = util.format(sat);

                    if (sat === undefined) {
                        bang = util.format(sul);
                    }

                    return m.reply(bang);
                }

                try {
                    m.reply(util.format(await eval(`(async () => { return ${budy.slice(3)} })()`)));
                } catch (e) {
                    m.reply(String(e));
                }
            }

            if (budy.startsWith('>')) {
                if (!isOwner) return m.reply(mess.OnlyOwner);

                try {
                    let evaled = await eval(budy.slice(2));
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

                    m.reply(evaled);
                } catch (err) {
                    m.reply(String(err));
                }
            }

            if (budy.startsWith('$')) {
                if (!isOwner) return m.reply(mess.OnlyOwner);

                try {
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply('Perintah Tidak Valid\n\n' + JSON.stringify(err, null, 4));
                        if (stdout) return m.reply(stdout);
                    });
                } catch (error) {
                    m.reply(`${error}`);
                }
            }
        } catch (error) {
            return m.reply(`${error}`);
        }        
        
    } catch (err) {
        console.log(color('ERROR', 'red'), err)
        m.reply(`${err}`)
    }
}