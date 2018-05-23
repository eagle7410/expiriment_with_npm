const fs = require('fs');
const {promisify} = require('util');

void async function install() {
	const write = promisify(fs.writeFile);
	await write(`${__dirname}/log.txt`, 'It all');
}();
