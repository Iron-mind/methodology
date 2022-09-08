import {users as users1} from './users.js';
import users from './users.json' assert {type: "json"};
import axios from 'axios';

//REGISTRAR VARIOS USUARIOS A PARA TES

let registerLink = ' http://localhost:3003/api-auth/auth/register';
let anOtherUsers = users.slice(2, 27);
function countEmailsWithUpperCaseLetters(users) {
  let count = 0;
  for (let user of users) {
    if (user.email!==user.email.toLowerCase()) {
      count++;
      console.log(user.email);
    }
  }
  return count;
}

//console.log(countEmailsWithUpperCaseLetters(users));

function addUsersDummy(users) {
  let count = 0;
  for (let user of users) {
    let dummyUser = {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "phoneNumber": user.phoneNumber,
      "company": user.company,
      "nit": user.nit,
      "nitVerificationDigit": user.nitVerificationDigit,
      "email": user.email,
      "password": 'dummy',
      "confirmPassword": "dummy",
  } 
   console.log(dummyUser,user);
    axios.post(registerLink, dummyUser)
      .then(function (response) {
        count++;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.data)
      });
    
  }
  return count;
}
console.log('respuestas exitosas:', addUsersDummy(anOtherUsers));
console.log(anOtherUsers.length);