const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_12_47_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU4LFxuICAgICAgICA3OCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdiMG5xZXFneXkyaEtPWVZZMWdaU3krbTZlQ1RXWWcwaDhpMWRFc0Qwd1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZyNUl5dTJEUllDR2FMOTR2SWduQkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTRkNjIxZTItYWNiYi00Y2FkLWJjYjAtZjM1ZWQ5OWFmODc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTcwLFxuICAgICAgMjM4LFxuICAgICAgNzgsXG4gICAgICAxMzIsXG4gICAgICAxMTgsXG4gICAgICA3MixcbiAgICAgIDM1LFxuICAgICAgMjI3LFxuICAgICAgMTU5LFxuICAgICAgMjMxLFxuICAgICAgMjE5LFxuICAgICAgMjUzLFxuICAgICAgODYsXG4gICAgICAyNDQsXG4gICAgICAyMjgsXG4gICAgICAxNzcsXG4gICAgICA5NCxcbiAgICAgIDU5LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTkxLFxuICAgICAgNzUsXG4gICAgICA5NyxcbiAgICAgIDE3MyxcbiAgICAgIDcyLFxuICAgICAgMjAwLFxuICAgICAgMTYyLFxuICAgICAgNTgsXG4gICAgICAyNSxcbiAgICAgIDExOSxcbiAgICAgIDIzOSxcbiAgICAgIDczLFxuICAgICAgMTAsXG4gICAgICA4MSxcbiAgICAgIDI4LFxuICAgICAgMTc1LFxuICAgICAgNTgsXG4gICAgICAyMzQsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFTTVESFNSOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzODk1MTEwNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5ODcxNTY0NTc3NjA0Mjo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tbHpxTUJFTzdTMnJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRkVCS3pzcTJ6L2U5ckl1d1M0ODZxQ250TkJUakZlNGhSRFpJRFZJVXFoYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHaWloVktDTnp4NW9lbFZrOHNrbEVKYWVEcHhOZ1BNRVNPbzVOb1N2aWJyS2lOUWNZKzRzYTZIRkU2UEpTcGFuR3J1MDFGSEd1MlRPTUhWZ3NqdHVDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwUkJsUnVhcGFVTnF2VGUyYldZc2FkT25KSG5WdXFnaldqV2F1VEZuVWZjaFJ0b1RrMUVuTmRHM2xjSkpMQkRMTGhQWjlwaGJaNWJGZjk2UldmNFZqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM4OTUxMTA3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3NDQxMjY2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
