<template lang="">
  <div>
  <input type="file" id="myPdf" @change="getPreview"/><br>
  <div class="modal fade" id="pdfPreviewCanvasModal" tabindex="-1" aria-labelledby="pdfPreviewCanvasModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <button type="button" class="btn-close prev-modal-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-body text-center my-4">
          <p class="preview-modal-heading1">Select the pages from the PDF file to extract the data</p>
          <p class="preview-modal-heading2" >Just click the box to select the relevant page</p>
              <div class="container">
                <div id="pdfPreview" class="row"></div>
            </div>
        </div>
        <div class="preview-modal-bottom-div py-3">
           <div class="d-flex justify-content-center">
            <a class="nav-link btn form-next-btn active fs-14 d-block m-0 mr-1">Done</a>
           <a class="nav-link btn preview-cancel-btn fs-14 d-block m-0 ms-1">Cancel</a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <input type="text" id="extractPageNumber"/>

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
// function testFunction(){

// };
export default {
  mounted() {
    // function testFunction(){
    //   console.log('fdsfds');
    // };
  },
  methods: {
    // testFunction: function() {
    //   var cards = document.querySelectorAll(".previewCard");
    //   // input validation for min and max value with putting comma
    //   cards.forEach(element =>
    //     element.addEventListener("click", function(e) {
    //       console.log(e);
    //     })
    //   );
    // },
    getPreview: function(e) {
      var file = e.target.files[0];
      if (file && file.type == "application/pdf") {
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

              return new bootstrap.Modal(
                document.getElementById("pdfPreviewCanvasModal")
              ).show();
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
        classAtt.value = "col-6 col-md-3 col-lg-2 p-2 d-flex justify-content-center";

        var classAtt2 = document.createAttribute("class");
        classAtt2.value = "previewCard";

        var dataAtt = document.createAttribute("data-page");
        dataAtt.value = i;

        var classAtt3 = document.createAttribute("class");
        classAtt3.value = "previewCardHeading text-center";

        var divCol = document.createElement("div");
        divCol.setAttributeNode(classAtt2);
        divCol.setAttributeNode(dataAtt);

        var divCan = document.createElement("div");
        divCan.setAttributeNode(classAtt);

        var heading = document.createElement("h6");
        heading.setAttributeNode(classAtt3);
        heading.appendChild(document.createTextNode("Page - " + i));

        var can = document.createElement("canvas");

        var pageNumber = i;
        pdf.getPage(pageNumber).then(function(page) {
          var scale = 0.2;
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
        divCol.appendChild(can);
        divCol.appendChild(heading);
        divCan.appendChild(divCol);
        document.getElementById("pdfPreview").appendChild(divCan);
        divCol.addEventListener("click", function(e) {
          if(!e.target.hasAttribute('data-page')){
            let parent = e.target.parentElement;
            let pId = parent.getAttribute('data-page');
            let input = document.getElementById('extractPageNumber');
            if(parent.classList.contains('active')){
                let tempVal = input.value.split(',').filter(i => i !== pId);
                input.value = tempVal.join(',');
            }else{
              if(input.value){
                let tempVal = input.value.split(',');
                tempVal.push(pId);
                input.value = tempVal.join(',');
              }else{
                input.value = pId;
              }
            }
              parent.classList.toggle('active');
          }
        })
      }
    },
  },
};
</script>
<style>
.previewCard {
  border: 1.25px solid #F2F2F2 !important;
  border-radius: 5px;
  overflow: hidden;
}
.previewCard .previewCardHeading{
font-weight: 600;
font-size: 12px;
text-align: center;
color: #B1B1B1;
}

.previewCard.active {
  border: 1.25px solid #000000 !important;
}
.previewCard.active .previewCardHeading {
color: #000;
}
.modal-dialog{
  max-width: 1200px;
  margin: 2rem auto;
  height: calc(100vh - 70px);
  overflow: hidden;
}
.preview-modal-heading1{
font-weight: 700;
font-size: 22px;
text-align: center;
color: #000000;
}
.preview-modal-heading2{
  font-weight: 400;
font-size: 20px;
text-align: center;
color: #555555;
margin: 12px 0 25px 0;
}
.prev-modal-close-btn{
  position: absolute;
  top:35px;
  right: 35px;
  z-index: 999;
  box-shadow: none!important;
  outline: none!important;
  border: none!important;
}

.preview-cancel-btn{
border: 1px solid #DFDFDF;
border-radius: 6.5rem;
    padding: 0.625rem 1rem;
    min-width: 230px;
    margin: 0 auto;
font-weight: 600;
font-size: 14px;
color: #000000;
}
.preview-cancel-btn:hover{
border: 1px solid #000000;
color: #000000;
}
</style>