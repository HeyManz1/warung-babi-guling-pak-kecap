const tombolMenuLain = document.querySelector("#tombol-menu-lain");
const menuTersembunyi = document.querySelectorAll(".sembunyi");
tombolMenuLain.addEventListener("click", function() {
 menuTersembunyi.forEach(function(kartu) {
  kartu.classList.remove("sembunyi");
 });
 tombolMenuLain.style.display = "none";
});

const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
menuToggle.addEventListener("click", function() {
 navLinks.classList.toggle("aktif");
 const terbuka = navLinks.classList.contains("aktif");
 menuToggle.setAttribute("aria-expanded", terbuka);
});
navLinks.querySelectorAll("a").forEach(function(link) {
 link.addEventListener("click", function() {
  navLinks.classList.remove("aktif");
  menuToggle.setAttribute("aria-expanded", "false");
 });
});

const sections = document.querySelectorAll(".section");
const pengamatScroll = new IntersectionObserver(function(entries) {
 entries.forEach(function(entry) {
  if (entry.isIntersecting) {
   entry.target.classList.add("terlihat");
   pengamatScroll.unobserve(entry.target);
  }
 });
}, { threshold: 0.15 });
sections.forEach(function(section) {
 section.classList.add("anim-scroll");
 pengamatScroll.observe(section);
});
