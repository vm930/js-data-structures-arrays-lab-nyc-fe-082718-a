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
  const copysOfDrivers = [drivers.push(name)];
}

//prependDriver(name)
function prependDriver(name){
  const copysOfDrivers = [...drivers, "name"];
  return copysOfDrivers;
}

//removeLastDriver()
function removeLastDriver(){
  const removeLastDriver = drivers.splice(-1)
}