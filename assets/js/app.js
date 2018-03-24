// Header Anim
let uiHeader = document.querySelector("header");
let headerHeight = uiHeader.offsetHeight + 5;
uiHeader.style.top = -headerHeight + "px";

window.addEventListener('scroll', function(e) {
  let scrollPosition = window.scrollY;

  window.requestAnimationFrame(function() {
    if(uiHeader.style.transition != "0.5s ease top") {
      uiHeader.style.transition = "0.5s ease top";
    }

    if(scrollPosition > 75) {
      uiHeader.style.top = "0px";
    } else {
      uiHeader.style.top = -headerHeight + "px";
    }
  });
});
