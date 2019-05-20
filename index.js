const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(games){
  let findResult = games.find(function(e){
   return e.result == "W"
})
  if (findResult != undefined){
    return findResult.year
  } else {
    return undefined
  }
}
