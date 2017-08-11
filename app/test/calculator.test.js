/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = '<div id="fixture"><input id="x" type="text">' +
      '<input id="y" type="text">' +
      '<input id="add" type="button" value="Add Numbers">' +
      'Result: <span id="result" /></div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  it('should return the sum of x and y', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('should calculate zero for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should calculate zero for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should give me the multiplied value', function () {
    document.getElementById('x').value = 2;
    document.getElementById('y').value = 3;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('6');
  })

});
