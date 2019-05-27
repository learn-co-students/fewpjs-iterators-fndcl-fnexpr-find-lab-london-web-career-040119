const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = results => {
  let result = results.find( match => match.result === "W" )
  return result ? result.year : undefined;
}
