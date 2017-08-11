(function () {
'use strict';

//Creating the module and factory we reference in the beforeEach blocks in our test file
angular.module('api.users', []).factory('Users', function () {
  var Users = {};

  //Users. method = function () {};
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
  Users.all = function () {
    return userList;
  };

  Users.findById = function(id) {
    return userList.find(function(user) {
    return user.id === id;
  });
  };

  return Users;
});
})();
