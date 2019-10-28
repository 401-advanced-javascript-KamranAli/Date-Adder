function add(date, diff) {
  let result;
  const diffThing = diff.slice(diff.length - 1);
  const numberThing = Number(diff.slice(0, diff.length - 1));

  if(diffThing === 's') {
    result = new Date(date.setSeconds(date.getSeconds() + numberThing));
  } 
  if(diffThing === 'm') {
    result = new Date(date.setMinutes(date.getMinutes() + numberThing));
  } 
  if(diffThing === 'h') {
    result = new Date(date.setHours(date.getHours() + numberThing));
  } 
  if(diffThing === 'd') {
    result = new Date(date.setDate(date.getDate() + numberThing));
  } 
  if(diffThing === 'w') {
    result = new Date(date.setDate(date.getDate() + numberThing * 7));
  } 
  if(diffThing === 'm') {
    result = new Date(date.setMonth(date.getMonth() + numberThing));
  } 
  if(diffThing === 'y') {
    result = new Date(date.setFullYear(date.getFullYear() + numberThing));
  } 

  return result;
}

module.exports = add;