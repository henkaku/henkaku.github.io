function getFirmware() {
  var ua = navigator.userAgent;
  var index = ua.toLowerCase().indexOf('playstation vita');
  if (index == -1) {
    return false;
  } else {
    var ver = ua.substring(index+17,index+21);
    return ver;
  }
}

function setupInstall() {
  var ver = getFirmware();
  var text;
  var canInstall = false;
  if (!location.origin) {
    location.origin = location.protocol + "//" + location.host;
  }
  if (ver === false) {
    text = '<p>Please visit <strong>' + location.origin + '</strong> from your PS Vita or PSTV to install HENkaku.</p>';
  } else if (ver !== "3.60") {
    text = '<p>Your firmware <strong>' + ver + '</strong> is currently not supported. You cannot install HENkaku at this time.</p>';
  } else {
    text = '<p>You are about to void the warranty of your device! We believe the code is safe, but unforeseen circumstances may damage your device, so install HENkaku at your own risk!</p>' + 
      '<p>When the installation completes, the browser will automatically close and homebrew launching will be enabled. If VitaShell is not currently installed, it will be installed as a new icon in LiveArea.</p>' + 
      '<p>Installation can take anywhere from a few seconds to a minute. If any error message comes up, just press okay and try again. If the browser freezes for longer than a minute, hold the power button for 15 seconds to shut down the device. You can then attempt to install again.</p>';
    canInstall = true;
  }
  document.getElementById('installText').innerHTML = text;
  document.getElementById('installBtn').disabled = !canInstall;
}