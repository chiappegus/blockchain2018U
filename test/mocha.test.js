const assert = require('assert');

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




