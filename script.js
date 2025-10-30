let downloadBtn = document.querySelector("#downloadCv");
let downloadLink = document.createElement("a");

downloadBtn.onclick = downloadCV; // ✅ assign function, don't call it

function downloadCV() {
  downloadLink.href = "assets/Logo/Resume/aryan pawar Resume.pdf"; // ✅ correct slashes
  downloadLink.download = "Aryan_Rahul_Pawar_Resume.pdf";
  downloadLink.click(); // ✅ triggers download
}



// TODO : add a view resume 
// document.querySelector("#downloadCv").addEventListener("click", () => {
//   window.open("assets/Logo/Resume/aryan pawar Resume.pdf");
// });
