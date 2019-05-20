const superbowlWin = (results) => {
  const win = results.find(test => test.result === 'W');
  return win ? win.year : win;
}; 