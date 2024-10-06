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

  sessionName:process.env.SESSION_ID || "SUHAIL_20_15_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCSTNJeFlCNHNGZ3F6SVd0WEdqOGpreEJJVVVVeS90V1IxWnlMTVhwU0NRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBVzNwNzlSR1JtYVZBTFlCZ0d1OW5BXCIsXG4gIFwicGhvbmVJZFwiOiBcImIyOWVhMTk3LTFjMzUtNDRiZS05Nzk2LWUzNmIxOGJlZjg1OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDExOSxcbiAgICAgIDI0MyxcbiAgICAgIDEwNCxcbiAgICAgIDY4LFxuICAgICAgMjcsXG4gICAgICA3NCxcbiAgICAgIDIyOCxcbiAgICAgIDIzMyxcbiAgICAgIDEzLFxuICAgICAgNTMsXG4gICAgICA1NCxcbiAgICAgIDIyOSxcbiAgICAgIDE0MCxcbiAgICAgIDU0LFxuICAgICAgMTYwLFxuICAgICAgODgsXG4gICAgICA0MCxcbiAgICAgIDYwLFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMzksXG4gICAgICA3MCxcbiAgICAgIDE5LFxuICAgICAgMjQyLFxuICAgICAgOTgsXG4gICAgICAyNSxcbiAgICAgIDEwNyxcbiAgICAgIDE0NCxcbiAgICAgIDQsXG4gICAgICAyNixcbiAgICAgIDQzLFxuICAgICAgMjAzLFxuICAgICAgMjIwLFxuICAgICAgNDQsXG4gICAgICAxOTEsXG4gICAgICAxMjIsXG4gICAgICAyMTUsXG4gICAgICAxNTQsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTJDNDJSRDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzg5NTExMDc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJtYSdhYiBjb2xsZWN0aW9uXCIsXG4gICAgXCJsaWRcIjogXCI5ODcxNTY0NTc3NjA0MjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbU11NW9IRUx5OGhyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkt1OGE1cXAzNXZublNDbm1GYXVPRXd4WEI3enZlTmFSSStveGd6VXlKQ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOWFVWEhRYStHbW9mSWtuaURDUHpJblI5WEhzd1F3UHV2Y2FxWHpEanltVlRaQ1NHWXhBOGVRN29WejR2cXA5M3lBbVJNY2N5ejZueGNDeGJ2QmdJREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWER2RlVST2pDK2dtalJxbVFrQ0ZnZG5Sc2NzK0p0MitoYmZBYjIzS1ZsU3FIdktINkdTa0xuRlBxV1ZZRytTSVpTVFVtRXRWVEZZYTVtZUNRS0ZwaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzODk1MTEwNzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTU5Mjk1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
