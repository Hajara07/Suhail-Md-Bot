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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348038951107";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_22_19_09_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibENqTVRoS2gyR0Q3OXMwOHJmaFkyMGhMeUMvR0dBQlY1NUJyM3BYTUFKST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiakpNaXA1ZlVTc09rekkwS2xFR3N0QVwiLFxuICBcInBob25lSWRcIjogXCI4MTM3NDliOS01ZjI1LTQ3N2YtODY2NC1lZTc4NjY3MTNiMzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAxMTEsXG4gICAgICAxMTMsXG4gICAgICAyMjcsXG4gICAgICAxMjUsXG4gICAgICAxMTUsXG4gICAgICAyOSxcbiAgICAgIDEwNSxcbiAgICAgIDIwOSxcbiAgICAgIDE3OCxcbiAgICAgIDk1LFxuICAgICAgMTM2LFxuICAgICAgMTcyLFxuICAgICAgMjQ5LFxuICAgICAgNjUsXG4gICAgICA4OCxcbiAgICAgIDE4OSxcbiAgICAgIDY0LFxuICAgICAgMzQsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MSxcbiAgICAgIDg3LFxuICAgICAgNzIsXG4gICAgICAyOSxcbiAgICAgIDQyLFxuICAgICAgMTEsXG4gICAgICAxMjUsXG4gICAgICAxMTgsXG4gICAgICAxNzAsXG4gICAgICAzOSxcbiAgICAgIDE3MSxcbiAgICAgIDk1LFxuICAgICAgMTA2LFxuICAgICAgNzEsXG4gICAgICAxOTAsXG4gICAgICA5NyxcbiAgICAgIDE3MSxcbiAgICAgIDQ0LFxuICAgICAgMjAxLFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJEWjlLRkJYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM4OTUxMTA3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk4NzE1NjQ1Nzc2MDQyOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFAzaXR3RkVPZWs1N2NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDaWpNZlhrMHBFa2w1ejlnaDFJNmdEcm82eUprSGxmV0NmTitVZ2RSOHowPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxUbmhKZ2ZCdVNhdzVpOTdlWVdyQ0hBeWhZdWt0Y0RNbHBHUWNQWklKbzZzTGpoNGl1ZEs5RzlaWjlGdUZnZGhDeTh4bkYwcWNFZFIrYk83SVBJakNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpwQlFYMGdlY2t6RmJBZ3VOYUV4Ui9EbTgxM2VQWFBxSk9YYUhTaDZ1WWVlYnpURTV2SFhPT0RtUWVyMXUvUHJyRkVqMGNZdmN1ellyWG9CU3NTNkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzg5NTExMDc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc2NDgzNjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
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
 
