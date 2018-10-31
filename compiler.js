//require('./contracts/Inbox.sol')// bad idea
// npm install --save solc
// npm install --save mocha ganache-cli
// CURRENT WORKING web3 version 
// npm install --save web3@1.0.0-beta.35

//npm install --save mocha ganache-cli  web3@1.0.0-beta.26
//npm install -g node-gyp
//Starting installation...
//Please restart this script from an administrative PowerShell!
//npm install --global --production windows-build-tools
// se soluciono como administrador 
// otras pagina :
//https://github.com/sass/node-sass/issues/1980
/*https://stackoverflow.com/questions/48298361/npm-install-failed-at-the-node-sass4-5-0-postinstall-script
https://stackoverflow.com/questions/48298361/npm-install-failed-at-the-node-sass4-5-0-postinstall-script

 C:\Users\hpgus\Documents\curso_desarrollo de blockchain\EthereumCasts\inbox_mio>npm cache clean --force && npm install node-sass
npm WARN using --force I sure hope you know what you are doing.
para correr el equipo poner
node compiler.js
*/
const path = require('path');
const fs = require('fs');
const solc = require('solc');


const inboxPath = path.resolve(__dirname , 'contracts' , 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

//console.log(solc.compile(source,1)); node compiler.js
//console.log(solc.compile(source,1).contracts[':Inbox']); node compiler.js
//module.exports = solc.compile(source,1); node compiler.js
//console.log(solc.compile(source,1).contracts[':Inbox']);
module.exports = solc.compile(source,1).contracts[':Inbox'];

