const testVar = {};

function testFunc() {
  return 'hi';
}
const superbowlWin = (results) => {
  const result = results.find(result => result.result === 'W');
  return result ? result.year : result;
};
