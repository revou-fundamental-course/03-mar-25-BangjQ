// ............kode js PROMPT.............
document.addEventListener("DOMContentLoaded", function () {
  let userName = localStorage.getItem("userName");

  if (!userName) {
    userName = prompt("Masukkan nama Anda:");
    if (userName) {
      localStorage.setItem("userName", userName);
    } else {
      userName = "User";
    }
  }

  let usernameElement = document.getElementById("username");
  usernameElement.textContent = "";

  let i = 0;
  function typeEffect() {
    if (i < userName.length) {
      usernameElement.textContent += userName[i];
      i++;
      setTimeout(typeEffect, 300); // Atur kecepatan mengetik
    } else {
      usernameElement.classList.add("typing"); // Tambahkan efek cursor
    }
  }

  typeEffect();
});


// .............................hamburger menu...............
const menuicon = document.querySelector(".icon-menu input");
const nav = document.querySelector("nav");

menuicon.addEventListener("click", function () {
  nav.classList.toggle("slider");
});

// ....................Auto Slide Banner.....................
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    index = (index + 1) % slides.length; // Loop kembali ke awal setelah slide terakhir
  }

  setInterval(showSlide, 3000); // Ganti gambar setiap 3 detik
  showSlide(); // Tampilkan slide pertama
});


// .....................animasi smooth scroll...............
const scrol = document.querySelectorAll(".scrolink");

scrol.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});




