let height = 0;

document.body.onkeydown = function (e) {
  if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.body.requestFullscreen();
		}
  }
	if (e.key == 'ArrowDown' || e.code == 'ArrowDown') {
		height += window.innerHeight
    window.scroll({
			top: height,
			behavior: "smooth",
		});
  }
	if (e.key == 'ArrowUp' || e.code == 'ArrowUp') {
		console.log(window.innerHeight);
		height -= window.innerHeight;
    window.scroll({
			top: height,
			behavior: "smooth",
		});
  }
};
