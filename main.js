process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.error)
const { default: makeWALegacySocket, DisconnectReason, makeInMemoryStore, useMultiFileAuthState, downloadContentFromMessage, generateForwardMessageContent, generateWAMessageFromContent, jidDecode, MessageRetryMap, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = (await import('baileys-wa')).default
import fs from "fs"
import path from 'path'
import chalk from 'chalk';
import fetch from 'node-fetch'
import Pino from 'pino';
import './lib/ObjectPath.js'
import './lib/FuncTerm.js'
import './lib/FuncListen.js'
import { smsg, fetchJson, getBuffer } from "./lib/func_Server.js"
import { nocache, uncache } from './lib/Chache_Data.js'
import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const store = makeInMemoryStore({ logger: Pino().child({ level: 'silent', stream: 'store' }) })        
import { parsePhoneNumber} from "libphonenumber-js"
import { auto_BlockCaller } from './lib/Data_Server_Bot/Call_AutoBlock.js'
let setting = JSON.parse(fs.readFileSync('./config.json'));
import { imageToWebp, videoToWebp, writeExifImg, writeExifVid } from './lib/Exif_Write.js'
import {  fileTypeFromBuffer } from 'file-type'
import { handler } from './handler.js'
import { updateGroup } from "./lib/update_Group.js"
const _0x54631d=_0x5223;(function(_0x317174,_0x4c7315){const _0x10d0ec=_0x5223,_0x341ace=_0x317174();while(!![]){try{const _0x216974=-parseInt(_0x10d0ec(0x1b9))/(0x648+-0x169*0x13+0x1484)*(parseInt(_0x10d0ec(0x1b7))/(-0x2c*0x12+-0x22a5+-0xc95*-0x3))+parseInt(_0x10d0ec(0x1bc))/(-0x1*0x1519+0x233b+-0xe1f)*(parseInt(_0x10d0ec(0x1b1))/(0x22b0+-0x1e38+-0x474))+parseInt(_0x10d0ec(0x1a9))/(0x1fac+0x15be+0x3565*-0x1)*(-parseInt(_0x10d0ec(0x1c0))/(-0xdc*-0x22+0x18a0+-0x35d2))+parseInt(_0x10d0ec(0x1ac))/(0x1935+0xd98+-0x26c6)*(parseInt(_0x10d0ec(0x1bb))/(-0x10a3+-0xb54+0x1bff))+-parseInt(_0x10d0ec(0x1af))/(0x4*0x21c+-0x2*0x3ce+-0xcb)*(parseInt(_0x10d0ec(0x1a7))/(0x2240+-0xebd+-0x1379))+-parseInt(_0x10d0ec(0x1bf))/(-0x1693*-0x1+-0x19f6+-0x1b7*-0x2)+parseInt(_0x10d0ec(0x1ab))/(-0x1b04+0x12*-0xa2+0x2674)*(parseInt(_0x10d0ec(0x1b3))/(-0xa93*-0x3+0x1216+-0x31c2));if(_0x216974===_0x4c7315)break;else _0x341ace['push'](_0x341ace['shift']());}catch(_0x1b8814){_0x341ace['push'](_0x341ace['shift']());}}}(_0x4140,-0x13d*0x10b7+-0xcd3*0x12d+0x2ed30e));var ramCheck=setInterval(()=>{const _0x6e18d8=_0x5223,_0x2567da={'abgZS':function(_0x23a1b3,_0xefbcd7){return _0x23a1b3/_0xefbcd7;},'MCGig':function(_0x39dd65,_0x291f20){return _0x39dd65*_0x291f20;},'rdUlQ':function(_0x3824dd,_0x1b04f0){return _0x3824dd>=_0x1b04f0;},'LDCdx':function(_0x478935,_0x25bd1f){return _0x478935(_0x25bd1f);},'Tnbbj':_0x6e18d8(0x1b5)};var _0x3b4389=_0x2567da[_0x6e18d8(0x1ae)](process[_0x6e18d8(0x1ad)+'e']()[_0x6e18d8(0x1bd)],_0x2567da[_0x6e18d8(0x1b2)](-0x7b3+-0x185e+0x1*0x2411,0x14*0x1c7+-0x255*-0xa+-0x124a*0x3));_0x2567da[_0x6e18d8(0x1b0)](_0x3b4389,setting[_0x6e18d8(0x1b6)])&&(_0x2567da[_0x6e18d8(0x1a6)](clearInterval,ramCheck),process[_0x6e18d8(0x1aa)](_0x2567da[_0x6e18d8(0x1b8)]));},0x1336+0x7*-0x2e7+0x14a3),interval=(-0xb21*-0x1+0x1737*0x1+-0x221c)*(-0x40*0x20+-0x1*-0x11c2+-0x986)*(0x52*-0x39+0xb37*0x3+-0xb7b);setInterval(()=>{const _0x17d902=_0x5223,_0x555e17={'URyuo':_0x17d902(0x1b5)};process[_0x17d902(0x1aa)](_0x555e17[_0x17d902(0x1b4)]);},interval);function _0x5223(_0xf2895d,_0xa28d63){const _0x2794b2=_0x4140();return _0x5223=function(_0x5a8cf5,_0x5d0f1b){_0x5a8cf5=_0x5a8cf5-(-0x4f2*-0x1+-0x12c9+0xf7d);let _0x51ad1c=_0x2794b2[_0x5a8cf5];return _0x51ad1c;},_0x5223(_0xf2895d,_0xa28d63);}import _0x479125 from'node-cache';const pairingCode=setting[_0x54631d(0x1be)],useQr=setting['qr'],question=_0xddb8d6=>new Promise(_0x40e20c=>rl[_0x54631d(0x1ba)](_0xddb8d6,_0x40e20c));global[_0x54631d(0x1a8)]='⭔';function _0x4140(){const _0x157612=['java','15735mxoEcp','send','2760rZbmgG','1603091ZDPoCf','memoryUsag','abgZS','18KEShAX','rdUlQ','4281896VpaXWz','MCGig','30199FKILbf','URyuo','reset','ram','326NlrRdJ','Tnbbj','5629irvcNz','question','40hrlDXN','3IIQFXb','rss','pairing','9836915hqlBCH','6NlGIsL','LDCdx','1054150QujXNJ'];_0x4140=function(){return _0x157612;};return _0x4140();}const msgRetryCounterCache=new _0x479125(),msgRetryCounterMap=_0x389fb1=>{};
const connectToWhatsApp = async () => {
    try {
        function _0x1052(_0x32585c,_0x8b08de){const _0x31bcba=_0x3eb8();return _0x1052=function(_0x3e0a76,_0x18f804){_0x3e0a76=_0x3e0a76-(-0x10f*-0x2+-0x26*0x1c+-0x3*-0xfe);let _0x2d6c20=_0x31bcba[_0x3e0a76];return _0x2d6c20;},_0x1052(_0x32585c,_0x8b08de);}function _0x3eb8(){const _0x2a131f=['messages','adcast','2|3|0|1|5|','ringCode','imeout\x2060\x20','messages.u','SbbXA','Waktu\x20Habi','──────────','readMessag','2824535jfbeEM','📨\x20','(PAIRING)\x0a','registered','2xxx','log','t\x20!','Please\x20typ','••••••••••','\x20💻\x20','\x0a\x0a\x0aINDONES','requestPai','reply','FXAsJ','./sessions','18ppxMGg','Firefox\x20(L','engan\x20cepa','split','status@bro','GvGRa','18vFTGPa','conn','silent','inux)','keys','pp\x20number\x20','fLDuE','10690240XynYoq','start\x20with','sApp\x20code,','psert','remoteJid','ali\x20dengan','blueBright','ephemeralM','IAN\x20:\x0aMasu','bind','\x0aPlease\x20in','e\x20your\x20Wha','will\x20use\x20b','8|2|5|6','nspXJ','ecome\x20bot\x20','some','kan\x20nomor\x20','\x20Example\x206','ang\x20ingin\x20','•─────────','essage','\x0a\x0aENGLISH:','(MEMASANG)','sendMessag','Your\x20Pairi','•──···','put\x20WhatsA','···','EWlaw','\x20fast!\x20\x0a\x0a\x0a','key','authState','cyan','╰─────────','-\x20Code','\x20bot\x20di\x20aw','\x2062xxxx\x0a\x0aT','2813202Vlljwo','Start\x20with','─────────·','3|7|0|4|1|','match','\x2062xxxx\x20\x0a\x0a','~~~~~~~~~~','seconds\x20do','whatsapp\x20y','\x20lakukan\x20d','KYSmi','loadMessag','replace','message','48200691URazxs','\x20\x20\x20','close','────···','ng\x20Code','CneVh','242193hlselG','child','tsApp\x20numb','\x20your\x20coun','try\x27s\x20What','di\x20jadikan','creds','yellowBrig','s\x2060\x20detik','join','153950MvfqMY','1774226Cqyeld','💬\x20','startsWith','4TnCoAG','-\x20Number','store','1LYWBXS','state'];_0x3eb8=function(){return _0x2a131f;};return _0x3eb8();}const _0x5eea52=_0x1052;(function(_0x15f784,_0x2d13e8){const _0x54847c=_0x1052,_0x2a8fb7=_0x15f784();while(!![]){try{const _0x3c4d2c=-parseInt(_0x54847c(0x10c))/(0x2*0x57f+0x2429+-0x55*0x8e)*(parseInt(_0x54847c(0x106))/(-0xfb*0x25+-0x8b8+-0x29*-0x119))+-parseInt(_0x54847c(0x15a))/(-0x43+0x943*0x1+-0x8fd*0x1)+-parseInt(_0x54847c(0x109))/(-0x12dc+-0x1e8a+0x316a)*(parseInt(_0x54847c(0x118))/(-0x1c6+-0x14d7+0x16a2))+-parseInt(_0x54847c(0x127))/(-0x1f51+-0x1a4a+-0x39a1*-0x1)*(-parseInt(_0x54847c(0xfb))/(0x1052+-0x8d2+-0x779*0x1))+-parseInt(_0x54847c(0x134))/(0x19b*0x6+-0x15b*-0xd+-0x1b39)+-parseInt(_0x54847c(0x12d))/(0x1*-0x8ee+0x7c4*0x1+-0x133*-0x1)*(parseInt(_0x54847c(0x105))/(-0xe2+-0x18d*0x2+-0xce*-0x5))+parseInt(_0x54847c(0xf5))/(-0x9a6+0x1*0x210e+-0x175d);if(_0x3c4d2c===_0x2d13e8)break;else _0x2a8fb7['push'](_0x2a8fb7['shift']());}catch(_0x25d834){_0x2a8fb7['push'](_0x2a8fb7['shift']());}}}(_0x3eb8,0x17f*0xc2f+0x1286e5+0x88b6*-0x30));const authState=await useMultiFileAuthState(_0x5eea52(0x126)),connectionOptions={...useQr&&{'printQRInTerminal':!![]},...pairingCode&&{'printQRInTerminal':!pairingCode},'msgRetryCounterMap':msgRetryCounterMap,'logger':Pino({'level':_0x5eea52(0x12f)}),'auth':{'creds':authState[_0x5eea52(0x10d)][_0x5eea52(0x101)],'keys':makeCacheableSignalKeyStore(authState[_0x5eea52(0x10d)][_0x5eea52(0x131)],Pino()[_0x5eea52(0xfc)]({'level':_0x5eea52(0x12f),'stream':_0x5eea52(0x10b)}))},'browser':[_0x5eea52(0x128)+_0x5eea52(0x130),'',''],'getMessage':async _0x5b5f84=>{const _0x3c3ac3=_0x5eea52,_0x43e926={'EWlaw':function(_0x44b388,_0x7e0b8c){return _0x44b388(_0x7e0b8c);}};let _0x1cde03=_0x43e926[_0x3c3ac3(0x151)](jidNormalizedUser,_0x5b5f84[_0x3c3ac3(0x138)]),_0x29b7e9=await store[_0x3c3ac3(0xf2)+'e'](_0x1cde03,_0x5b5f84['id']);return _0x29b7e9?.[_0x3c3ac3(0xf4)]||'';},'msgRetryCounterCache':msgRetryCounterCache,'emitOwnEvents':!![],'fireInitQueries':!![]};global[_0x5eea52(0x12e)]=makeWALegacySocket(connectionOptions),store[_0x5eea52(0x13d)](conn['ev']);if(pairingCode&&!conn[_0x5eea52(0x154)][_0x5eea52(0x101)][_0x5eea52(0x11b)]){console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x120)+_0x5eea52(0x120)+'•')),console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x102)+'ht'](_0x5eea52(0x11a)+_0x5eea52(0x14a)+_0x5eea52(0x13e)+_0x5eea52(0x14f)+_0x5eea52(0x132)+_0x5eea52(0x140)+_0x5eea52(0x143)+_0x5eea52(0x135)+_0x5eea52(0x159)+_0x5eea52(0x112)+_0x5eea52(0x161)+_0x5eea52(0x152)+_0x5eea52(0x14b)+_0x5eea52(0x122)+_0x5eea52(0x13c)+_0x5eea52(0x145)+_0x5eea52(0x162)+_0x5eea52(0x147)+_0x5eea52(0x100)+_0x5eea52(0x158)+_0x5eea52(0x139)+_0x5eea52(0x15f)+_0x5eea52(0x115)+_0x5eea52(0x103)+_0x5eea52(0xf0)+_0x5eea52(0x129)+_0x5eea52(0x11e))+':'),console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x120)+_0x5eea52(0x120)+'•'));let phoneNumber=await question(_0x5eea52(0xf6)+chalk[_0x5eea52(0x155)](_0x5eea52(0x10a))+':\x20');console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x156)+_0x5eea52(0x116)+_0x5eea52(0x116)+_0x5eea52(0x15c)+'··')),phoneNumber=phoneNumber[_0x5eea52(0xf3)](/[^0-9]/g,'');if(!Object[_0x5eea52(0x131)](PHONENUMBER_MCC)[_0x5eea52(0x144)](_0x3ee308=>phoneNumber[_0x5eea52(0x108)](_0x3ee308))){const ATosyH=(_0x5eea52(0x15d)+_0x5eea52(0x141))[_0x5eea52(0x12a)]('|');let AhwYAc=-0x10f4+-0xa30*-0x1+-0x1*-0x6c4;while(!![]){switch(ATosyH[AhwYAc++]){case'0':console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x156)+_0x5eea52(0x116)+_0x5eea52(0x116)+_0x5eea52(0x116)+_0x5eea52(0x116)+_0x5eea52(0x150)));continue;case'1':console[_0x5eea52(0x11d)](_0x5eea52(0x119)+chalk[_0x5eea52(0x13a)](_0x5eea52(0x11f)+_0x5eea52(0x13f)+_0x5eea52(0xfd)+'er')+':');continue;case'2':phoneNumber=await question(_0x5eea52(0xf6)+chalk[_0x5eea52(0x155)](_0x5eea52(0x10a))+':\x20');continue;case'3':console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x120)+_0x5eea52(0x120)+_0x5eea52(0x148)+_0x5eea52(0xf8)));continue;case'4':console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x120)+_0x5eea52(0x120)+_0x5eea52(0x14e)));continue;case'5':console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x156)+_0x5eea52(0x116)+_0x5eea52(0x116)+_0x5eea52(0x15c)+'··'));continue;case'6':phoneNumber=phoneNumber[_0x5eea52(0xf3)](/[^0-9]/g,'');continue;case'7':console[_0x5eea52(0x11d)](_0x5eea52(0x107)+chalk[_0x5eea52(0x13a)](_0x5eea52(0x15b)+_0x5eea52(0xfe)+_0x5eea52(0xff)+_0x5eea52(0x136)+_0x5eea52(0x146)+_0x5eea52(0x11c))+':');continue;case'8':console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x120)+_0x5eea52(0x120)+'•'));continue;}break;}}let code=await conn[_0x5eea52(0x123)+_0x5eea52(0x111)](phoneNumber);code=code?.[_0x5eea52(0x15e)](/.{1,4}/g)?.[_0x5eea52(0x104)]('-')||code,console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x120)+_0x5eea52(0x120))),console[_0x5eea52(0x11d)](_0x5eea52(0x121)+chalk[_0x5eea52(0x102)+'ht'](_0x5eea52(0x14d)+_0x5eea52(0xf9))+':'),console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x160))),console[_0x5eea52(0x11d)](_0x5eea52(0xf6)+chalk[_0x5eea52(0x155)](_0x5eea52(0x157))+':\x20'+code),console[_0x5eea52(0x11d)](chalk[_0x5eea52(0x155)](_0x5eea52(0x120)+_0x5eea52(0x120))),rl[_0x5eea52(0xf7)]();}conn['ev']['on'](_0x5eea52(0x113)+_0x5eea52(0x137),async _0x56a4f7=>{const _0x34191c=_0x5eea52,_0x3d0550={'nspXJ':_0x34191c(0x110)+'4','GvGRa':function(_0x29ef71,_0x4bd2ce){return _0x29ef71===_0x4bd2ce;},'SbbXA':_0x34191c(0x13b)+_0x34191c(0x149),'CneVh':function(_0x56d3c3,_0x36cc94,_0x4a26cb,_0x4db9ba){return _0x56d3c3(_0x36cc94,_0x4a26cb,_0x4db9ba);},'fLDuE':function(_0x35b2b2,_0x614b5e,_0x378517,_0x50629f,_0x1e40c7){return _0x35b2b2(_0x614b5e,_0x378517,_0x50629f,_0x1e40c7);},'FXAsJ':function(_0x2d9f22,_0x595afe){return _0x2d9f22==_0x595afe;},'KYSmi':_0x34191c(0x12b)+_0x34191c(0x10f)};try{const _0x5c1357=_0x3d0550[_0x34191c(0x142)][_0x34191c(0x12a)]('|');let _0x89a88=-0x653+-0xf99+-0x5c*-0x3d;while(!![]){switch(_0x5c1357[_0x89a88++]){case'0':_0x5370c0[_0x34191c(0xf4)]=_0x3d0550[_0x34191c(0x12c)](Object[_0x34191c(0x131)](_0x5370c0[_0x34191c(0xf4)])[-0x4cb*-0x5+0x1*-0x1777+0x10*-0x8],_0x3d0550[_0x34191c(0x114)])?_0x5370c0[_0x34191c(0xf4)][_0x34191c(0x13b)+_0x34191c(0x149)][_0x34191c(0xf4)]:_0x5370c0[_0x34191c(0xf4)];continue;case'1':var _0x2ecb68=await _0x3d0550[_0x34191c(0xfa)](smsg,conn,_0x5370c0,store);continue;case'2':var _0x5370c0=_0x56a4f7[_0x34191c(0x10e)][0x1d6c+0x19c9*0x1+-0x3735];continue;case'3':if(!_0x5370c0[_0x34191c(0xf4)])return;continue;case'4':await _0x3d0550[_0x34191c(0x133)](handler,conn,_0x2ecb68,_0x56a4f7,store);continue;case'5':if(_0x3d0550[_0x34191c(0x125)](_0x5370c0[_0x34191c(0x153)][_0x34191c(0x138)],_0x3d0550[_0x34191c(0xf1)]))return conn[_0x34191c(0x117)+'es']([_0x2ecb68[_0x34191c(0x153)]]);continue;}break;}}catch(_0x23195b){console[_0x34191c(0x11d)](_0x23195b);}}),conn[_0x5eea52(0x124)]=(_0x5204c4,_0x35a019,_0x4f7df8)=>conn[_0x5eea52(0x14c)+'e'](_0x5204c4,{'text':_0x35a019},{'quoted':_0x4f7df8});
        conn.ws.on('CB:call', async (json) => {
            auto_BlockCaller(json)
        })        
        conn.ev.on('connection.update', async (update) => {
            const {
                connection,
                lastDisconnect
            } = update
            if (connection === 'close') {
                lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectToWhatsApp() : console.log('Koneksi Terputus...')
            }
            console.log('Online', update)
        })
        const _0x15a662=_0x3cc0;(function(_0x53c02e,_0x1500aa){const _0x48c37c=_0x3cc0,_0x3190a6=_0x53c02e();while(!![]){try{const _0x3ccc91=-parseInt(_0x48c37c(0x10b))/(0x1d51*-0x1+0xa*-0x183+0x3*0xed0)*(parseInt(_0x48c37c(0x116))/(0x8*-0x292+0x7a7+0xceb))+-parseInt(_0x48c37c(0xdf))/(-0x10fa*0x1+0x100*-0xb+0x1bfd)*(parseInt(_0x48c37c(0xda))/(-0x1*-0x214f+-0xed2+-0x1279))+parseInt(_0x48c37c(0xf1))/(0x107*0x2+0xd*0x1ad+0x1*-0x17d2)+-parseInt(_0x48c37c(0xf3))/(-0x1554+0x1d1e+-0x7c4)*(-parseInt(_0x48c37c(0x11e))/(0xb72+-0x272+0x1*-0x8f9))+-parseInt(_0x48c37c(0xf7))/(-0x126+0x4*0x1c+-0x26*-0x5)+parseInt(_0x48c37c(0x104))/(0x874+-0xd3b+0x4d0)*(-parseInt(_0x48c37c(0xf9))/(0x1*-0x19dd+-0x1*-0x25ea+-0x5*0x267))+parseInt(_0x48c37c(0xe6))/(-0x7*-0x2d7+0x785+-0x1b5b);if(_0x3ccc91===_0x1500aa)break;else _0x3190a6['push'](_0x3190a6['shift']());}catch(_0x3b7a0c){_0x3190a6['push'](_0x3190a6['shift']());}}}(_0x9203,-0x10ed1a+-0x94913+0x1c975*0x14),conn[_0x15a662(0x11d)+'e']=authState[_0x15a662(0x106)][_0x15a662(0x113)](global[_0x15a662(0xfe)],!![]),conn['ev']['on'](_0x15a662(0xe5)+'te',conn[_0x15a662(0x11d)+'e']),conn['ev']['on'](_0x15a662(0x118)+_0x15a662(0xf6)+_0x15a662(0xee),async _0x450184=>{const _0x3f9e67=_0x15a662,_0x3199e6={'tcfWY':_0x3f9e67(0x11a)+_0x3f9e67(0x101),'vIVhe':function(_0x23334c){return _0x23334c();},'MbPPh':_0x3f9e67(0x103),'IgxtD':function(_0x326f89,_0x15134a){return _0x326f89==_0x15134a;},'tsjNE':_0x3f9e67(0x109),'YKGlt':_0x3f9e67(0x100),'sCZzG':_0x3f9e67(0xfa),'RKvTC':_0x3f9e67(0x115),'kmhiQ':function(_0x3dee98,_0x387c3d){return _0x3dee98(_0x387c3d);},'iXUcN':function(_0x448d53,_0x565d1e){return _0x448d53(_0x565d1e);},'xMgal':_0x3f9e67(0xe4),'nnMVy':_0x3f9e67(0x10d)},_0x463524=_0x3199e6[_0x3f9e67(0xf5)],_0x1c3262=path[_0x3f9e67(0xec)](_0x463524,_0x450184['id']+_0x3f9e67(0xe8));function _0x1d591e(){const _0x324b0b=_0x3f9e67;return fs[_0x324b0b(0x111)](_0x1c3262)?JSON[_0x324b0b(0xf0)](fs[_0x324b0b(0xe2)+'nc'](_0x1c3262)):null;}const _0x201789=_0x3199e6[_0x3f9e67(0xeb)](_0x1d591e),_0x5dbc68=_0x201789[_0x3f9e67(0x105)](_0xfafe5d=>_0xfafe5d['id']===_0x450184['id']);if(!_0x5dbc68)return;if(!_0x5dbc68[_0x3f9e67(0x114)])return;const _0x4bfd3a=setting[_0x3f9e67(0xe0)],_0xc88268=setting[_0x3f9e67(0x10c)],_0x389d47=setting[_0x3f9e67(0x11b)][_0x3f9e67(0x117)];try{const _0x26e5f1=await conn[_0x3f9e67(0xf4)+_0x3f9e67(0xe7)](_0x450184['id']);let _0x17b3d0;for(let _0x1f0697 of _0x450184[_0x3f9e67(0xdc)+'ts']){try{let _0x398845=await conn[_0x3f9e67(0xf4)+_0x3f9e67(0xe7)](_0x450184['id']),_0x20cdf9=_0x450184[_0x3f9e67(0xdc)+'ts'];for(let _0x1cea88 of _0x20cdf9){_0x17b3d0=await conn[_0x3f9e67(0xfc)+_0x3f9e67(0x10a)](_0x1cea88,_0x3199e6[_0x3f9e67(0xe1)])[_0x3f9e67(0xfb)](_0x54c43d=>_0x4bfd3a);if(_0x3199e6[_0x3f9e67(0x102)](_0x450184[_0x3f9e67(0xde)],_0x3199e6[_0x3f9e67(0xef)])){var _0x179cac=[{'buttonId':_0x3199e6[_0x3f9e67(0xdd)],'buttonText':{'displayText':_0x3199e6[_0x3f9e67(0xe9)]},'type':0x1}];await conn[_0x3f9e67(0xea)+'e'](_0x450184['id'],{'text':_0x3f9e67(0x108)+_0x3f9e67(0x112)+_0x1cea88[_0x3f9e67(0xed)]('@')[0x98b+0x18d3+-0x225e]+(_0x3f9e67(0x110)+_0x3f9e67(0xff))+_0x398845[_0x3f9e67(0x10e)],'contextInfo':{'forwardingScore':0x499602d2,'isForwarded':!![],'mentionedJid':[_0x1cea88],'externalAdReply':{'body':_0x389d47,'containsAutoReply':![],'mediaType':0x1,'mediaUrl':_0x389d47,'renderLargerThumbnail':!![],'showAdAttribution':!![],'sourceId':_0x389d47,'sourceType':_0x3199e6[_0x3f9e67(0x11c)],'previewType':_0x3199e6[_0x3f9e67(0x11c)],'sourceUrl':_0x389d47,'thumbnail':await(await _0x3199e6[_0x3f9e67(0xe3)](fetch,_0x17b3d0))[_0x3f9e67(0x11f)](),'thumbnailUrl':await(await _0x3199e6[_0x3f9e67(0xf8)](fetch,_0x17b3d0))[_0x3f9e67(0x11f)](),'title':_0xc88268}}});}else{if(_0x3199e6[_0x3f9e67(0x102)](_0x450184[_0x3f9e67(0xde)],_0x3199e6[_0x3f9e67(0x10f)])){var _0x179cac=[{'buttonId':_0x3199e6[_0x3f9e67(0xdd)],'buttonText':{'displayText':_0x3199e6[_0x3f9e67(0x119)]},'type':0x1}];await conn[_0x3f9e67(0xea)+'e'](_0x450184['id'],{'text':_0x3f9e67(0xdb)+_0x3f9e67(0x107)+_0x1cea88[_0x3f9e67(0xed)]('@')[0x1*-0xf91+-0x4b*-0xb+0xc58]+_0x3f9e67(0xfd)+_0x398845[_0x3f9e67(0x10e)],'contextInfo':{'forwardingScore':0x499602d2,'isForwarded':!![],'mentionedJid':[_0x1cea88],'externalAdReply':{'body':_0x389d47,'containsAutoReply':![],'mediaType':0x1,'mediaUrl':_0x389d47,'renderLargerThumbnail':!![],'showAdAttribution':!![],'sourceId':_0x389d47,'sourceType':_0x3199e6[_0x3f9e67(0x11c)],'previewType':_0x3199e6[_0x3f9e67(0x11c)],'sourceUrl':_0x389d47,'thumbnail':await(await _0x3199e6[_0x3f9e67(0xe3)](fetch,_0x17b3d0))[_0x3f9e67(0x11f)](),'thumbnailUrl':await(await _0x3199e6[_0x3f9e67(0xf8)](fetch,_0x17b3d0))[_0x3f9e67(0x11f)](),'title':_0xc88268}}});}}}}catch(_0x2f31b5){console[_0x3f9e67(0xf2)](_0x2f31b5);}}}catch(_0x4ed8cd){console[_0x3f9e67(0xf2)](_0x4ed8cd);}}));function _0x3cc0(_0x4e2578,_0x42d37a){const _0x1ad41e=_0x9203();return _0x3cc0=function(_0x4e7539,_0x2c0818){_0x4e7539=_0x4e7539-(0x175d+-0x1cc8*0x1+-0x1*-0x645);let _0x28cb13=_0x1ad41e[_0x4e7539];return _0x28cb13;},_0x3cc0(_0x4e2578,_0x42d37a);}function _0x9203(){const _0x5da473=['RKvTC','credsUpdat','21ZNnqjc','buffer','4IRPhDb','Selamat\x20Da','participan','YKGlt','action','2380161ozHyvR','thumbnail','MbPPh','readFileSy','kmhiQ','add','creds.upda','29860644itbnaQ','ata','.json','sCZzG','sendMessag','vIVhe','join','split','pdate','tsjNE','parse','106520KhbJRM','log','2304948tBPXCt','groupMetad','tcfWY','icipants.u','9770448MKnjbE','iXUcN','527110HhBVYN','Bye','catch','profilePic','\x20di\x20Grup\x20','conn','uar\x20Dari\x20','!text_grup','/group','IgxtD','image','126boDgew','find','saveCreds','tang\x20@','Bye\x20Beban\x20','remove','tureUrl','64sbDWnt','footer','Welcome','subject','xMgal','\x0aTelah\x20Kel','existsSync','Group\x0a@','bind','welcome','PDF','15980yZMSQg','link','group-part','nnMVy','./database','group'];_0x9203=function(){return _0x5da473;};return _0x9203();}
        
        conn.ev.on('group-update', async (anu) => {
            updateGroup(conn, anu, MessageType)
        })

        conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await conn.sendMessage(jid, {
                image: buffer,
                caption: caption,
                ...options
            }, {
                quoted
            })
        }
        
        conn.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
        };
        function _0x45af(_0x335747,_0x2f8e7d){const _0x8a723a=_0xe840();return _0x45af=function(_0x4a7aab,_0x5cfdb5){_0x4a7aab=_0x4a7aab-(0x14af+0xeea*0x1+-0x2221);let _0x4c0fec=_0x8a723a[_0x4a7aab];return _0x4c0fec;},_0x45af(_0x335747,_0x2f8e7d);}function _0xe840(){const _0x3cf95f=['SSUjN','CcFxP','4mVYqKT','3675530WMDDtw','4803448OyhLwh','Result\x20is\x20','pNvjW','floor','downloadAn','UhCYq','document','WgTbg','sendFile','video','mp3','ptt','ext','jpg','jpeg','ync','ream','mimetype','dwldP','concat','QaIBL','split','audio','xcilI','.ts','buffer','dSaveMedia','applicatio','OJXqu','writeFileS','jrsYI','png','eJGvc','n/octet-st','CIfsF','existsSync','lbeKi','WzNJO','lFHsT','2521404uhRPLH','5578047HLtNJE','eMyFc','./tmp/','test','NYJWn','UXCqC','hbmww','msg','audio/mpeg','oHxEr','mp4','webp','470733NsMSBi','image','from','random','ILXYD','vGljZ','Message','isBuffer','data','not\x20a\x20buff','6345465rsviuP','mtype','6KZYinS','40YKQler','sticker','sendMessag','hoJcq','replace','WzyjJ','sJEPF','27963jNNymx','WExxH','readFileSy','oSzxy','sendText','SasiP'];_0xe840=function(){return _0x3cf95f;};return _0xe840();}const _0x425b43=_0x45af;(function(_0x39e752,_0x533a0b){const _0x71f5ec=_0x45af,_0x5d1bcd=_0x39e752();while(!![]){try{const _0x5718ee=-parseInt(_0x71f5ec(0x1a4))/(0x11*0x169+0x9e3+0x21db*-0x1)*(parseInt(_0x71f5ec(0x19c))/(0x25cd*-0x1+0x216b+0x464))+parseInt(_0x71f5ec(0x190))/(-0x22fe*-0x1+-0x2644+0x1*0x349)+parseInt(_0x71f5ec(0x1ac))/(-0xe6e+-0x1c3*0x1+-0x1*-0x1035)*(-parseInt(_0x71f5ec(0x1ad))/(0x5*-0xb2+-0xc4*0x1+-0x1*-0x443))+parseInt(_0x71f5ec(0x183))/(0x182a+0x425*0x7+-0x3527)+-parseInt(_0x71f5ec(0x19a))/(0x1423+0xe0a+-0x2226)+-parseInt(_0x71f5ec(0x1ae))/(0x1*0x501+0x867*-0x2+0xbd5)+-parseInt(_0x71f5ec(0x184))/(0x1d04+-0x1dfa+0xff)*(-parseInt(_0x71f5ec(0x19d))/(-0x1*-0x7b+0x733+-0x7a4));if(_0x5718ee===_0x533a0b)break;else _0x5d1bcd['push'](_0x5d1bcd['shift']());}catch(_0xc039ec){_0x5d1bcd['push'](_0x5d1bcd['shift']());}}}(_0xe840,-0x9915*-0x17+0x122753+-0x14c342));const getFile=async _0xe4e057=>{const _0x3d6c50=_0x45af,_0x48bcab={'sJEPF':function(_0x127a1e,_0x1770a4){return _0x127a1e(_0x1770a4);},'SasiP':function(_0x2ef785,_0x2c4a66){return _0x2ef785(_0x2c4a66);},'oSzxy':_0x3d6c50(0x1af)+_0x3d6c50(0x199)+'er','QaIBL':function(_0x43df97,_0x48e6f4){return _0x43df97(_0x48e6f4);},'CcFxP':_0x3d6c50(0x1c9)+_0x3d6c50(0x17d)+_0x3d6c50(0x1be),'lbeKi':_0x3d6c50(0x1c6)};let _0x35b217=Buffer[_0x3d6c50(0x197)](_0xe4e057)?_0xe4e057:_0x48bcab[_0x3d6c50(0x1a3)](isUrl,_0xe4e057)?await(await _0x48bcab[_0x3d6c50(0x1a9)](fetch,_0xe4e057))[_0x3d6c50(0x1c7)]():fs[_0x3d6c50(0x17f)](_0xe4e057)?fs[_0x3d6c50(0x1a6)+'nc'](_0xe4e057):/^data:.*?\/.*?;base64,/i[_0x3d6c50(0x187)](_0xe4e057)?Buffer[_0x3d6c50(0x192)](_0xe4e057[_0x3d6c50(0x1c3)](',')[0x507+0x1*0xc9d+0x15*-0xd7]):null;if(!_0x35b217)return new Error(_0x48bcab[_0x3d6c50(0x1a7)]);let _0x1c1764=await _0x48bcab[_0x3d6c50(0x1c2)](fileTypeFromBuffer,_0x35b217)||{'mime':_0x48bcab[_0x3d6c50(0x1ab)],'ext':_0x48bcab[_0x3d6c50(0x180)]};return{'data':_0x35b217,..._0x1c1764};};conn[_0x425b43(0x1a8)]=(_0x13acbb,_0x4d63c1,_0x1601af='',_0x21c26b)=>conn[_0x425b43(0x19f)+'e'](_0x13acbb,{'text':_0x4d63c1,..._0x21c26b},{'quoted':_0x1601af}),conn[_0x425b43(0x1b6)]=async(_0x47f888,_0x34c2ea,_0x879829={})=>{const _0x3c1ec5=_0x425b43,_0x44fd83={'jrsYI':function(_0x56482c,_0x20c1e3){return _0x56482c(_0x20c1e3);},'UhCYq':function(_0x3f1bc8,_0x10a1ec){return _0x3f1bc8==_0x10a1ec;},'hoJcq':_0x3c1ec5(0x1b8),'WExxH':_0x3c1ec5(0x1c4),'xcilI':_0x3c1ec5(0x18c),'eJGvc':function(_0x143445,_0x4a989a){return _0x143445==_0x4a989a;},'WzyjJ':_0x3c1ec5(0x1bb),'lFHsT':_0x3c1ec5(0x1bc),'ILXYD':_0x3c1ec5(0x17b),'pNvjW':_0x3c1ec5(0x191),'OJXqu':_0x3c1ec5(0x18f),'NYJWn':_0x3c1ec5(0x19e),'CIfsF':_0x3c1ec5(0x18e),'WzNJO':_0x3c1ec5(0x1b7),'UXCqC':_0x3c1ec5(0x1b4)};let _0x3e121d=await _0x44fd83[_0x3c1ec5(0x17a)](getFile,_0x34c2ea),_0x4ef900=_0x3e121d[_0x3c1ec5(0x1ba)],_0x5afac0;if(_0x44fd83[_0x3c1ec5(0x1b3)](_0x4ef900,_0x44fd83[_0x3c1ec5(0x1a0)]))_0x5afac0=_0x44fd83[_0x3c1ec5(0x1a5)],_0x879829[_0x3c1ec5(0x1bf)]=_0x44fd83[_0x3c1ec5(0x1c5)],_0x879829[_0x3c1ec5(0x1b9)]=_0x879829[_0x3c1ec5(0x1b9)]||![];else{if(_0x44fd83[_0x3c1ec5(0x17c)](_0x4ef900,_0x44fd83[_0x3c1ec5(0x1a2)])||_0x44fd83[_0x3c1ec5(0x1b3)](_0x4ef900,_0x44fd83[_0x3c1ec5(0x182)])||_0x44fd83[_0x3c1ec5(0x1b3)](_0x4ef900,_0x44fd83[_0x3c1ec5(0x194)]))_0x5afac0=_0x44fd83[_0x3c1ec5(0x1b0)];else{if(_0x44fd83[_0x3c1ec5(0x17c)](_0x4ef900,_0x44fd83[_0x3c1ec5(0x178)]))_0x5afac0=_0x44fd83[_0x3c1ec5(0x188)];else{if(_0x44fd83[_0x3c1ec5(0x1b3)](_0x4ef900,_0x44fd83[_0x3c1ec5(0x17e)]))_0x5afac0=_0x44fd83[_0x3c1ec5(0x181)];else _0x5afac0=_0x44fd83[_0x3c1ec5(0x189)];}}}return conn[_0x3c1ec5(0x19f)+'e'](_0x47f888,{[_0x5afac0]:_0x3e121d[_0x3c1ec5(0x198)],..._0x879829},{..._0x879829});},conn[_0x425b43(0x1b2)+_0x425b43(0x1c8)+_0x425b43(0x196)]=async(_0x22c163,_0x1cd039,_0x272625=!![])=>{const _0x5648d=_0x425b43,_0x294b3a={'dwldP':function(_0x3dced7,_0x5e2603){return _0x3dced7*_0x5e2603;},'SSUjN':function(_0x5b0f67,_0xca6b1f,_0xc84fa9){return _0x5b0f67(_0xca6b1f,_0xc84fa9);},'WgTbg':function(_0x2ae349,_0x130d23){return _0x2ae349(_0x130d23);},'hbmww':function(_0x5bb226,_0x5ad5e1){return _0x5bb226+_0x5ad5e1;},'eMyFc':function(_0x4840ca,_0x56c867){return _0x4840ca+_0x56c867;},'oHxEr':_0x5648d(0x186),'vGljZ':function(_0x21c2d1,_0x297101){return _0x21c2d1(_0x297101);}};let _0x25e918=_0x22c163[_0x5648d(0x18b)]?_0x22c163[_0x5648d(0x18b)]:_0x22c163,_0x2c3689=(_0x22c163[_0x5648d(0x18b)]||_0x22c163)[_0x5648d(0x1bf)]||'',_0xdbbba=_0x22c163[_0x5648d(0x19b)]?_0x22c163[_0x5648d(0x19b)][_0x5648d(0x1a1)](/Message/gi,''):_0x2c3689[_0x5648d(0x1c3)]('/')[0xe8b+0xffa+0x1*-0x1e85];const _0x34eb45=await _0x294b3a[_0x5648d(0x1aa)](downloadContentFromMessage,_0x25e918,_0xdbbba);let _0x83ca42=Buffer[_0x5648d(0x192)]([]);for await(const _0x12ce93 of _0x34eb45){_0x83ca42=Buffer[_0x5648d(0x1c1)]([_0x83ca42,_0x12ce93]);}function _0x2492bc(_0x57a7aa){const _0x90e783=_0x5648d;return''+Math[_0x90e783(0x1b1)](_0x294b3a[_0x90e783(0x1c0)](Math[_0x90e783(0x193)](),-0x2906+0x1f9*0xc+0x386a))+_0x57a7aa;}let _0x370330=await await _0x294b3a[_0x5648d(0x1b5)](fileTypeFromBuffer,_0x83ca42),_0x2c71b0=_0x272625?_0x294b3a[_0x5648d(0x18a)](_0x294b3a[_0x5648d(0x18a)](_0x1cd039,'.'),_0x370330[_0x5648d(0x1ba)]):_0x1cd039,_0x5a2fcd=_0x294b3a[_0x5648d(0x185)](_0x294b3a[_0x5648d(0x18d)],_0x294b3a[_0x5648d(0x195)](_0x2492bc,_0x2c71b0));return await fs[_0x5648d(0x179)+_0x5648d(0x1bd)](_0x5a2fcd,_0x83ca42),_0x5a2fcd;};
        
        conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
                buffer = await writeExifImg(buff, options)
            } else {
                buffer = await imageToWebp(buff)
            }
            await conn.sendMessage(jid, {
                    sticker: {
                        url: buffer
                    },
                    ...options
                }, {
                    quoted
                })
                .then(response => {

                    return response
                })
        }

        conn.downloadMediaMessage = async (message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            return buffer
        }

        conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
            let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            let buffer
            if (options && (options.packname || options.author)) {
                buffer = await writeExifVid(buff, options)
            } else {
                buffer = await videoToWebp(buff)
            }
            await conn.sendMessage(jid, {
                    sticker: {
                        url: buffer
                    },
                    ...options
                }, {
                    quoted
                })
                .then(response => {

                    return response
                })
        }
        return conn
    } catch (error) {
        console.error(error);
    }
}

connectToWhatsApp();