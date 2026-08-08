function MM_dragLayer(objName,x,hL,hT,hW,hH,toFront,dropBack,cU,cD,cL,cR,targL,targT,tol,dropJS,et,dragJS) { //v5.0 (modern, title-bar only)
  var el = document.getElementById(objName);
  if (!el || el._mmDragInit) return;
  el._mmDragInit = true;
  var handle = el.querySelector(".arrastrar") || el;
  handle.style.cursor = "move";
  handle.addEventListener("mousedown", function(e) {
    var t = e.target;
    while (t && t !== handle) { if (t.tagName === "A" || t.tagName === "IMG" || t.tagName === "INPUT" || t.tagName === "BUTTON") return; t = t.parentElement; }
    e.preventDefault();
    var startX = e.clientX, startY = e.clientY;
    var startLeft = parseInt(el.style.left) || 0;
    var startTop = parseInt(el.style.top) || 0;
    if (toFront) {
      var maxZ = 0;
      var allEls = document.querySelectorAll("[id]");
      for (var k = 0; k < allEls.length; k++) {
        var zv = parseInt(allEls[k].style && allEls[k].style.zIndex) || 0;
        if (zv > maxZ) maxZ = zv;
      }
      el.style.zIndex = maxZ + 1;
    }
    function onMove(ev) {
      el.style.left = (startLeft + (ev.clientX - startX)) + "px";
      el.style.top = (startTop + (ev.clientY - startY)) + "px";
    }
    function onUp() {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
}
