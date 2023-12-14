document.body.onkeydown = function (e) {
  if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.body.requestFullscreen();
		}
  }
};
