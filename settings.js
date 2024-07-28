const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Majnon
	* Follow instagram.com/majnon._.98
	* Whatsapp : https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['212696262219','212671648947','212696262219']
global.packname = 'Jeen-MD'
global.author = 'Jeen-MD'
global.botname = 'Jeen-MD'
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.fake = {
	anonim: 'https://telegra.ph/file/41d94a398196d36958834.jpg',
	thumbnailUrl: 'https://telegra.ph/file/41d94a398196d36958834.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K',
	gh: 'https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K',
	gc: 'https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K',
	ch: '120363250409960161@newsletter',
}

global.limit = {
	free: 70,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	owner: 'Just for ayoub and majnon!',
	admin: 'Just for admin Admin!',
	botAdmin: 'I am not admin Admin!',
	group: 'Just use in groups Group!',
	private: 'Just in private Chat!',
	prem: 'you need to buy Premium!',
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

global.APIs = {
	zaynn: 'https://api.zaynn.my.id/api',
}
global.APIKeys = {
	'https://api.zaynn.my.id/api': 'Najedev',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
