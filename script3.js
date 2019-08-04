var users = [
    {id: 1, status: true }, 
    {id: 2, status: false }, 
    {id: 3, status: true },
    {id: 4, status: true },
    {id: 5, status: false },
    {id: 6, status: true },
    {id: 7, status: false },
    {id: 8, status: true },

];
const userstrue = users.filter(function(user) {
    return user.status === true 
  })
  // for (i = 0; userstrue.length; i++){

  //   document.write(userstrue[i][i]);
  // }

  document.getElementById('array').innerHTML = JSON.stringify(users,null,  4);
  document.getElementById('printArray').innerHTML = JSON.stringify(userstrue,null,  4);

  console.log(users);
  console.log(userstrue);


