function superbowlWin(objects) {
  const winner = objects.find(element => element.result === "W")
  return winner ? winner.year : winner
}
