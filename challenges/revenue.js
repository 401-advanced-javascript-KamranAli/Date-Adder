function revenue(transactions){

  let obj = {};

  for(let i = 0; i < transactions.length; i++){
    const date = new Date(transactions[i].timestamp);

    const thing = date.toUTCString().slice(date.length - 16, 16); 
    const stuff = new Date(thing).toDateString();

    if(!obj[stuff]){
      obj[stuff] = transactions[i].price;
    } else {
      obj[stuff] += transactions[i].price;
    }
  }
  return obj;
}

module.exports = revenue;