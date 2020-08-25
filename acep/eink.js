// global variable
// ----------------------------------------------
const fileTag = "file-selector";
const divTagID = "#resizable";

// document.onload
// 當html dom 載入完成後的 onload event入口
// ----------------------------------------------
$(function(){
    const reader = new FileReader();
    const fileSelector = document.getElementById(fileTag);

    $(divTagID).resizable().draggable();

    fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    readImage(fileList[0], divTagID)
    });
});

// readImage function
// 依選取的檔案為input參數，載入local電腦中的圖片到畫面並放入div的background
// ----------------------------------------------
function readImage(file, divTag) {
  // Check if the file is an image.
  if (file.type && file.type.indexOf('image') === -1) {
    console.log('File is not an image.', file.type, file);
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    var img = new Image();
    img.onload = function(){
      console.log('img', img);
      console.log('img.widt', img.width);
      console.log(' img.height',  img.height);
      $(divTag).innerWidth(img.width);
      $(divTag).innerHeight(img.height);
      $(divTag).css("background-image", "url('" + img.src + "')");
    };

    // load image
    console.log('load', event);
    img.src = event.target.result;
  });

  // load file
  reader.readAsDataURL(file);
}