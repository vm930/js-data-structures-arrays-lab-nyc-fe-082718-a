// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

//destructivelyAppendDriver(name)
function destructivelyAppendDriver(name){
  drivers.push(name);  
}
//destructivelyPrependDriver(name)
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
//destructivelyRemoveLastDriver(name)
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
//destructivelyRemoveFirstDriver()
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

//appendDriver(name)
function appendDriver(name){
  const copysOfDrivers = [...drivers, name];
  return copysOfDrivers
}

//prependDriver(name)
function prependDriver(name){
  const copysOfDrivers = [name, ...drivers];
  return copysOfDrivers;
}

//removeLastDriver()
function removeLastDriver(){
  let copysOfDrivers = [...drivers]
  copysOfDrivers.pop();
  return copysOfDrivers;
}

//removeFirstDriver()
function removeFirstDriver(){
  let copysOfDrivers = [...drivers]
  copysOfDrivers.shift();
  return copysOfDrivers;
}