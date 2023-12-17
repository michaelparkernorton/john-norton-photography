let height = 0;
const colors = document.querySelectorAll(".color");
console.log(colors[1]);
let count = 0;

document.body.onkeydown = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body.requestFullscreen();
    }
  }
  if (e.key === "ArrowDown" || e.code === "ArrowDown") {
    //
    count = (count + 1) % colors.length;
    console.log(count);
    colors[count].scrollIntoView({ behavior: "smooth" });
    // height += window.innerHeight
    // window.scroll({
    // 	top: height,
    // 	behavior: "smooth",
    // });
  }
  if (e.key === "ArrowUp" || e.code === "ArrowUp") {
    // count -= 1;
    // count = Math.max(count - 1, 0);
    count = (count - 1 + colors.length) % colors.length;
    colors[count].scrollIntoView({ behavior: "smooth" });

    // console.log(window.innerHeight);
    // height -= window.innerHeight;
    // window.scroll({
    // 	top: height,
    // 	behavior: "smooth",
    // });
  }
};
