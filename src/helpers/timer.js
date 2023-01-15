const getTimer = (time1, time2, time3) => {
  var i = 0;
  var myInt = setInterval(function () {
    i = i + 1;
    if (i == time1) {
      console.log("go to take a vaccine");
    } else if (i == time2) {
      console.log("go to take last vaccine");
    } else if (i == time3) {
      console.log("third one is available");
    }
    console.log(i);
  }, 1000);
};

module.exports = getTimer;
