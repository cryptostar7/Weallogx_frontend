<template lang="">
  <div>
  <input type="file" id="myPdf" @change="getPreview"/><br>
  
  <div class="container">
    <div id="pdfPreview" class="row"></div>
  </div>


  <div class="modal fade common-modal" id="pdfPreviewCanvasModal" tabindex="-1" aria-labelledby="pdfPreviewCanvasModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><img
              src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
        </div>
        <div class="modal-body text-center">
            <!-- <div id="pdfPreview"></div> -->
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<script>

import "https://mozilla.github.io/pdf.js/build/pdf.js";
// Loaded via <script> tag, create shortcut to access PDF.js exports.
const pdfjsLib = window["pdfjs-dist/build/pdf"];
// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";

const fileReader = new FileReader();
export default {
  methods: {
    getPreview: function(e) {
      var file = e.target.files[0];
      if (file.type == "application/pdf") {
        fileReader.onload = function() {
          var pdfData = new Uint8Array(this.result);
          // Using DocumentInitParameters object to load binary data.
          var loadingTask = pdfjsLib.getDocument({ data: pdfData });
          loadingTask.promise.then(
            function(pdf) {
              console.log("PDF loaded");
              // Fetch the first page
              console.log(pdf.numPages);
              document.getElementById("pdfPreview").innerHTML = null;
              for (var i = 1; i <= pdf.numPages; i++) {
                generateCanvas(i, pdf);
              }

              // return new bootstrap.Modal(document.getElementById('pdfPreviewCanvasModal')).show();
            },
            function(reason) {
              // PDF loading error
              console.error(reason);
            }
          );
        };
        fileReader.readAsArrayBuffer(file);
      }

      function generateCanvas(i, pdf) {
        // Create a class attribute:
        var classAtt = document.createAttribute("class");
        classAtt.value = "col p-2";

        var classAtt2 = document.createAttribute("class");
        classAtt2.value = "previewCard";

        var classAtt3 = document.createAttribute("class");
        classAtt3.value = "previewCardHeading text-center"; 

        var divCan = document.createElement("div");
        divCan.setAttributeNode(classAtt);
        var heading = document.createElement("h5");
        heading.setAttributeNode(classAtt3);
        heading.appendChild(document.createTextNode(i))

        var can = document.createElement("canvas");
        can.setAttributeNode(classAtt2);

        var pageNumber = i;
        pdf.getPage(pageNumber).then(function(page) {
          console.log("Page loaded" + i);

          var scale = 0.3;
          var viewport = page.getViewport({ scale: scale });
          var context = can.getContext("2d");
          can.height = viewport.height;
          can.width = viewport.width;
          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          var renderTask = page.render(renderContext);
          renderTask.promise.then(function() {
            console.log("Page rendered");
          });
        });
        divCan.appendChild(can);
        divCan.appendChild(heading);
        document.getElementById("pdfPreview").appendChild(divCan);
      }
    },
  },
};
</script>
<style>
.previewCard {
  border: '2px solid black' !important;
}
</style>