var xOut;
var yOut;
var zOut;

window.onload = function() {
    document.addEventListener('deviceready', init, false);
    init();     //delete to run on device
}

/** init()
 * generate objects  out of global variables
 * create options var that sets poll to take place every 1000 millisecond(1 second) w/ frequency value
 * utlizes watchAcceleration() with callback functions for success(), accelError() and uses options var
 * 
 */
function init() {
    xOut = document.getElementById('xOut');
    yOut = document.getElementById('yOut');
    zOut = document.getElementById('zOut');

    var  options = {frequency: 1000};
    var accel = navigator.accelerometer.watchAcceleration(success, accelError, options);
}

/**success(accel)
 * takes the accelerometer fata from the X, Y, Z axis of an accelerometer object and uses
 * that data to populate xOut, yOut, zOut HTML elements
 * 
 * @param {*} accel 
 */
function success(accel) {
    var x = accel.x;
    var y = accel.y;
    var z = accel.z;

    xOut.innerHTML = x;
    yOut.innerHTML = y;
    zOut.innerHTML = z;
}

function accelError(error) {
    alert("Accelerometer Error");
}