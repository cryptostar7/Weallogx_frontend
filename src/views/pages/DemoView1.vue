<template lang="">
  <div>
  <input type="file" id="myPdf" /><br>
  <div id="pdfPreview">
  </div>
  </div>
</template>
<script>
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
import "https://mozilla.github.io/pdf.js/build/pdf.js";

export default {
  mounted(){
    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

    var fileReader = new FileReader();  
    $("#myPdf").on("change", function(e){
      var file = e.target.files[0]
      if(file.type == "application/pdf"){
        fileReader.onload = function() {
          var pdfData = new Uint8Array(this.result);
          // Using DocumentInitParameters object to load binary data.
          var loadingTask = pdfjsLib.getDocument({data: pdfData});
          loadingTask.promise.then(function(pdf) {
            console.log('PDF loaded');    
            // Fetch the first page
            console.log(pdf.numPages);
            for(var i =  1; i <= pdf.numPages; i++){
                generateCanvas(i, pdf);
            }         
          }, function (reason) {
            // PDF loading error
            console.error(reason);
          });
        };
        fileReader.readAsArrayBuffer(file);
      }
    });

    function generateCanvas(i, pdf){
        var divCan = document.createElement("div");
        var heading = document.createElement("h5").appendChild(document.createTextNode(i))
        var can = document.createElement("canvas");
        var pageNumber = i;
        pdf.getPage(pageNumber).then(function(page) {
        console.log('Page loaded' + i);
        
        var scale = 1;
        var viewport = page.getViewport({scale: scale});
        var context = can.getContext('2d');
          can.height = viewport.height;
          can.width = viewport.width;
          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          var renderTask = page.render(renderContext);
          renderTask.promise.then(function () {
            console.log('Page rendered');
          });
        });
        divCan.appendChild(can);
        document.getElementById('pdfPreview').appendChild(heading);
        document.getElementById('pdfPreview').appendChild(divCan);
    }
  }
}
</script>
<style lang="">
  
</style>