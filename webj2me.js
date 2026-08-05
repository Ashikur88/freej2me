/* WebJ2ME Engine Minimal Compatibility Script */
var J2ME = {
  run: function(jarUrl, container) {
    container.innerHTML = '<iframe src="https://j2me.js.org/?jar=' + encodeURIComponent(jarUrl) + '" style="width:100%; height:500px; border:none; border-radius:10px;"></iframe>';
  }
};
