//Be desciptive with titles here. the describe and it it titles comined read like a sentence
describe('Users factory', function() {
//it('has a dummy spec to test 2 + 2', function() {
// An intentionally failing test. No code within expect() will never equal 4.
//expect(2 + 2).toEqual(4);

var Users;

var userList = [
  {
    id: '1',
    name: 'Jane',
    role: 'Designer',
    location : 'New York',
  },
  {
    id: '2',
    name: 'Bob',
    role: 'Designer',
    location : 'New York',
  },
  {
    id: '3',
    name: 'Jim',
    role: 'Developer',
    location : 'New York',
  },
  {
    id: '4',
    name: 'Bill',
    role: 'Designer',
    location : 'LA',
  }

];

var singleUser = {
  id : '2',
  name : 'Bob',
  role : 'Designer',
  location : 'New York'
};



// Before each test load our api.users module
beforeEach(angular.mock.module('api.users'));

//Before each test set our injected Users factory (_Users_) to our local Users variable
beforeEach(inject(function(_Users_) {
  Users= _Users_;
}));

//A simple test to verify whether the users factory exists
it('should exist', function() {
  expect(Users).toBeDefined();
});
describe('.all()', function() {
  it ('should exist', function() {
    expect(Users.all).toBeDefined();
  });

  it('should return a hard coded list of users', function() {
    expect(Users.all()).toEqual(userList);
  })
});

describe('.findById()', function() {
  it('should exist', function() {
    expect(Users.findById).toBeDefined();
  });

  // it('should return one user object if it exists', function() {
  //   expect(Users.findById('2')).toEqual(singleUser);
  // });

  // it('should return undefined if the user cannot be found', function() {
  //   expect(Users.findById('1').not.toBeDefined());
  // });
});
});
