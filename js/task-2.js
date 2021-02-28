import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  const colorEyes = [];
  users.forEach(user => {
    if (user.eyeColor === color) {
      colorEyes.push(user);
    }
  });
  return colorEyes; 
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]