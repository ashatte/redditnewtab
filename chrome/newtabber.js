// listen for all clicks on document and filter by <a> tag
document.onclick = function (e) {
  e = e ||  window.event;
  var element = e.target || e.srcElement;

  if (element.tagName == 'A' && element.classList.contains("may-blank")) {
    openInNewTab(element.href);
	// reddit-link-title
    return false; // prevent default action and stop event propagation
  }
};

// function to open href in a new tab
function openInNewTab(url) {
  //var win = window.open(url, '_blank');
  var a = document.createElement("a");
  a.href = url;
  var evt = document.createEvent("MouseEvents");
  //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
								
	// potential solution for pop-up blockers or osx
	//evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, true, 0, null);
    a.dispatchEvent(evt);
  //win.focus();
}