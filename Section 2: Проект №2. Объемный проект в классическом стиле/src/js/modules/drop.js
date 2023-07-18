const drop = () => {
  // drag *
  // dragend *
  // dragenter - объект над dropArea
  // dragexit *
  // dragleave - объект за пределами dropArea
  // dragover - объект зависает над dropArea
  // dragstart *
  // drop - объект отправлен в dropArea

  const fileInputs = document.querySelectorAll('[name="upload"]');

  ["dragent", "dragleave", "dragover", "drop"].forEach((eventNeme) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefaults();
    e.stopProgration();
  }

  function highlight(item) {
    item.closest(".file_upload").style.border = "5px solid yellow";
    item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0, .7 )";
  }

  function unhighlight(item) {
    item.closest(".file_upload").style.border = "none";
    if(item.closest('.calc_ from')){
        item.closest(".file_upload").style.backgroundColor = "#fff";
    }else{
        item.closest(".file_upload").style.backgroundColor = "#ededed";
    }
  }

  ["dragent", "dragover"].forEach((eventNeme) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ["dragent", "dragover"].forEach((eventNeme) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (e)=>{
        input.files = e.dataTransfer.files;
        let dots;
        const arr =  input.files[0].name.split('.');
        arr[0].length > 5 ? dots = "..."  : dots = ".";
        const name =  arr[0].substring(0, 6) + dots + arr[1];
        input.previousElementSibling.textContent = name; 
    });
  });
};

export default drop;
