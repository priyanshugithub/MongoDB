const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name : 'Joe' });
        joe.save()
           .then(() => done());
    });
    it ('finds all users with name of Joe', (done) => {
        User.find({name : 'Joe'}) //find me every user with name of Joe
        .then((users) => {
            assert(users[0]._id.toString() === joe._id.toString());
            done(); 
            .then(call done 'save many ')
        });
    });
});