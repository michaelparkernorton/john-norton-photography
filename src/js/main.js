document.body.onkeydown = function (e) {
  if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
    document.body.requestFullscreen();
  }
};