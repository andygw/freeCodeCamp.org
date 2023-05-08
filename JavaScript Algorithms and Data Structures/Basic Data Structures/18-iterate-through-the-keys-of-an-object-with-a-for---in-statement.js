const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let num_online = 0;

  for (let user in usersObj) {
    if (usersObj[user].online) {
      num_online++;
    };
  };

  return num_online;
  // Only change code above this line
}

console.log(countOnline(users));
