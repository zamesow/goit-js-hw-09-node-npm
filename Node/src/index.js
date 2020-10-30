import validatePassword from './js/validate-password';
// import * as apiService from './js/api-service';
import { addUser } from './js/api-service';

addUser('mango');
console.log();
// console.log(validatePassword);
console.log(validatePassword('qweqweqwe'));

// console.log(apiService);

// import {
//     fetchAllUsers,
//     fetchUserById,
//     updateUserById,
//     x as value,
//     y as name,
// } from './js/api-service';

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
// console.log(name);