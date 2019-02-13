const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: 1,
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: 2,
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: 3,
                name: 'Johnny',
                room: 'Node Course'
            }
        ];
    });

    it('should add a new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Johnny',
            room: 'The Office Fans'
        };
        let resultUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        let removedUser = users.removeUser(1);
        expect(users.users).toEqual([
            {
                id: 2,
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: 3,
                name: 'Johnny',
                room: 'Node Course'
            }
        ]);
    });

    it('should not remove user', () => {
        let newUsers = users.removeUser(99);
        expect(users.users).toEqual([
            {
                id: 1,
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: 2,
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: 3,
                name: 'Johnny',
                room: 'Node Course'
            }
        ]);
    });

    it('should find user', () => {
        let user = users.getUser(2);
        expect(user).toMatchObject(
            {
                id: 2,
                name: 'Jen',
                room: 'React Course'
            }
        );
    });

    it('should not find user', () => {
        let user = users.getUser(99);
        expect(user).toBeFalsy();
    });

    it('should return names for Node Course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Johnny']);
    });

    it('should return names for React Course', () => {
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });
});