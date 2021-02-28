import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  const usersFriends = [];
  users.forEach(user => {
    if (user.friends.includes(friendName)) {
      usersFriends.push(user.name);
    }  
  });
  return usersFriends;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]