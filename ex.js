var i = 0;
var myInt = setInterval(function () {
  i = i + 1;
  if (i == 3) {
    console.log("go to take a vaccine");
  } else if (i === 9) {
    console.log("go to take last vaccine");
    clearTimeout();
  }
  console.log(i);
}, 1000);
