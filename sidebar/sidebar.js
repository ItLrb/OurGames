const closeSidebar = document.querySelector("#close");
const openSidebar = document.querySelector("#open");
const Sidebar = document.querySelector(".sidebar");

openSidebar.addEventListener("click", () => {
  openSidebar.style.display = "none";
  Sidebar.style.width = "190px";
  Sidebar.style.left = "0px";

  setTimeout(() => {
    closeSidebar.style.display = "flex";
  }, 450);

  closeSidebar.addEventListener("click", () => {
    openSidebar.style.display = "flex";
    Sidebar.style.width = "0px";
    Sidebar.style.left = "-190px";

    closeSidebar.style.display = "none";
  });
});

function SaidoSite() {
  window.confirm("Deseja sair do site?");
}