"use strict";
// type implements advance class type
// Class
class User {
    constructor(name, address) {
        this.data = { name, address };
        this.methods = {
            userInfo() {
                return `I am ${name}, I live in ${address}.`;
            }
        };
    }
}
const user1 = new User('John', 'California');
const user2 = new User('Bob', 'Toronto');
console.log(user1.methods.userInfo());
console.log(user2.methods.userInfo());
