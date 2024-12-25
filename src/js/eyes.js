// document.addEventListener("DOMContentLoaded", function () {
//   var eyes = document.querySelectorAll(".eyes-container .eye");

//   if (eyes.length === 0) {
//     console.error("No elements with class '.eye' found in the DOM.");
//     return;
//   }

//   document.addEventListener("mousemove", function (event) {
//     eyes.forEach(function (eye) {
//       // Проверка, что элемент видим и доступен
//       if (!eye) return;

//       var x = eye.offsetLeft + eye.offsetWidth / 2;
//       var y = eye.offsetTop + eye.offsetHeight / 2;
//       var rad = Math.atan2(event.pageX - x, event.pageY - y);
//       var rot = rad * (180 / Math.PI) * -1 + 180;
//       eye.style.transform = "rotate(" + rot + "deg)";
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Select the move-area and ensure it exists
  var moveArea = document.querySelector(".move-area");
  if (!moveArea) {
    console.error("Element '.move-area' not found in the DOM.");
    return; // Exit if move-area is not found
  }

  // Select all eye elements within the move-area
  var eyes = document.querySelectorAll(".eye");
  if (eyes.length === 0) {
    console.error("No elements with class '.eye' found in the DOM.");
    return; // Exit if no eye elements are found
  }

  // Add mousemove event listener to the move-area
  moveArea.addEventListener("mousemove", function (event) {
    eyes.forEach(function (eye) {
      var x = eye.offsetLeft + eye.offsetWidth / 2;
      var y = eye.offsetTop + eye.offsetHeight / 2;
      var rad = Math.atan2(event.pageX - x, event.pageY - y);
      var rot = rad * (180 / Math.PI) * -1 + 180;
      eye.style.transform = "rotate(" + rot + "deg)";
    });
  });
});




// document.addEventListener("DOMContentLoaded", function() {
//   var moveArea = document.querySelector(".move-area");
//   var eye = document.querySelector(".eye");

//   moveArea.addEventListener("mousemove", function(event) {
//     var x = eye.offsetLeft + (eye.offsetWidth / 2);
//     var y = eye.offsetTop + (eye.offsetHeight / 2);
//     var rad = Math.atan2(event.pageX - x, event.pageY - y);
//     var rot = (rad * (180 / Math.PI) * -1) + 180;
//     eye.style.transform = 'rotate(' + rot + 'deg)';
//   });
// });


// $(document).ready(function(){
//   $(".move-area").mousemove(function(event) {
//     let eye = $(".eye");
//     let x = (eye.offset().left) + (eye.width() /2);
//     let y = (eye.offset().top) + (eye.height() /2);
//     let rad = Math.atan2(event.pageX - x, event.pageY - y);
//     let rot = (rad * (180/Math.PI) * -1) + 180;
//     eye.css({
//      "transform": "rotate(" + rot + "deg)",
//     });
//   });
// });