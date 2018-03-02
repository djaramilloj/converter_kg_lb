
const expect = require("chai").expect
const  convertKGtoLB = require("..").default
const  convertLBtoKG = require("..").default

describe("#converter_kg_lb", function(){

it("here you will be able to set a value on kg and know how that value is on lb ", function(){
  const convertion = convertKGtoLB(20)
  expect(convertion).to.equal(40)
})
it("here you will be able to set a value on lb and know how that value is on kg", function(){
  const convertion = convertLBtoKG(20)
  expect(convertion).to.equal(10)
})

})
