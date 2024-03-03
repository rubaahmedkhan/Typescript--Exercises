"use strict";
//List of current usernames
const current_users = ["nida", "aqsa", "wahab", "ali", "saba"];
//List of new user names
const new_users = ["Ruba", "Anum", "Aqsa", "Saba", "Bilal"];
//loop through new_userslist
for (let new_user of new_users) {
    //check if the username already exists(case insensitive)
    if (current_users.includes(new_user.toLowerCase())) {
        console.log(`${new_user} is not available.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
    ;
}
;
