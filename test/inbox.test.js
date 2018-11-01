
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3= new Web3(ganache.provider());

const {interface , bytecode} = require('../compiler');
let accounts;
let inbox;

const INITIAL_STRING = 'Hi there!'


// npm run test
beforeEach(async()=>{

    //Get  a list  of all accounts
	accounts = await web3.eth.getAccounts();

	// use  one of those  accounts  to deploy
	// the contract intance the contract Contract

	inbox = await new web3.eth.Contract(JSON.parse(interface))
	    .deploy({data:bytecode, arguments: ['Hi there!']})
	    .send({from: accounts[0], gas: '1000000'});

	

});

describe('Inbox',()=>{
	it('deploys a contract',()=>{
		//console.log(inbox);
		assert.ok(inbox.options.address);

	});

	it('has a default message',async()=>{

		const message = await inbox.methods.message().call();
		//console.log(message);
		assert.equal(message,'Hi there!')
		 
		

	});
});







