// type implements advance class type

interface Model<IUserInfo, IMethods> {
    data: IUserInfo;
    methods: IMethods;
}

interface IUserInfo {
    name: string;
    address: string;
}

interface IMethods {
    userInfo(): string;
}

type UserModel = Model<IUserInfo, IMethods>;


// Class

class User implements UserModel {
    data: IUserInfo;
    methods: IMethods;

    constructor(name: string, address: string) {
        this.data = { name, address };
        this.methods = {
            userInfo(): string {
                return `I am ${name}, I live in ${address}.`;
            }
        };
    }
}

const user1 = new User('John', 'California');
const user2 = new User('Bob', 'Toronto');

console.log(user1.methods.userInfo());
console.log(user2.methods.userInfo());
