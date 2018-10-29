
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3= new Web3(ganache.provider());

class Car {
	park(){
		return 'stopped';
	}

	drive(){
		return 'vroom';
	}
}
// cmd: npm run test 
// en el json hay que poner :
	/* "scripts": {
	    "test": "mocha"
	  },*/

let car;
beforeEach(()=>{
	//console.log('a');
	 car = new Car();
});

describe('Car',()=>
{
	it('can park ',()=>{
		/*aca va la posta */
		//const car = new Car();
		assert.equal(car.park(),'stopped');
	})

	it('can drive ', ()=>{
		/*aca va la posta */
		//const car = new Car();
		assert.equal(car.drive(),'vroom');
	})
})





