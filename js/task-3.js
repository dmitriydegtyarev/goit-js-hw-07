import users from './users.js';

const getUsersWithGender = (users, gender) => {
  const userNameByGender = [];
  users.forEach(user => {
    if (user.gender === gender) {
      userNameByGender.push(user.name);
    }  
  });

  return userNameByGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]