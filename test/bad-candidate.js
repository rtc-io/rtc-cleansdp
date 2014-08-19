var test = require('tape');
var fs = require('fs');
var clean = require('..');

var input = fs.readFileSync(__dirname + '/data/bad-candidate.txt', 'utf8');
var expected = fs.readFileSync(__dirname + '/data/bad-candidate-clean.txt', 'utf8');

test('a bad candidate is removed from the sdp', function(t) {
  t.plan(1);
  t.equal(clean(input), expected, 'matched expected output');
});
