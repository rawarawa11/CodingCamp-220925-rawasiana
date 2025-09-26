// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Welcome name prompt
const welcome = document.getElementById("welcome");
let userName = prompt("Masukkan Nama Anda:");
if (userName) {
  welcome.innerText = `Hi ${userName}, Welcome to My Portfolio`;
}

// Form validation & result
document.getElementById("messageForm").addEventListener("submit", function(e){
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let tgl = document.getElementById("tgl").value;
  let gender = document.querySelector('input[name="gender"]:checked')?.value;
  let pesan = document.getElementById("pesan").value;

  if(!gender){
    alert("Pilih jenis kelamin!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <p><b>Nama:</b> ${nama}</p>
    <p><b>Tanggal Lahir:</b> ${tgl}</p>
    <p><b>Jenis Kelamin:</b> ${gender}</p>
    <p><b>Pesan:</b> ${pesan}</p>
    <p><b>Current Time:</b> ${new Date().toLocaleString()}</p>
  `;
});
