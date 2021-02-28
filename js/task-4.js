import users from './users.js';

const getInactiveUsers = users => {
  // const notActiveUsers = [];
  // users.forEach(user => {
  //   if (user.isActive === false) {
  //     notActiveUsers.push(user);
  //   }
  // });
  // return notActiveUsers; 

  const notActiveUsers = users.filter(user => user.isActive === false);
  return notActiveUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]