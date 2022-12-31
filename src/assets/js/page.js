console.log('e');

   const maxLimitInputs = document.querySelectorAll(".setMaxLimit");
   console.log(maxLimitInputs);
   maxLimitInputs.forEach(function (maxLimitInput) {
    console.log(maxLimitInput);
    maxLimitInput.addEventListener("input", function (e) {
         console.log(e);
       });
   });
