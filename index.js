const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let team = array.find( team => team.result === "W" )
  if (!!team) {
    return team.year
  } else {
    return undefined
  }
}
