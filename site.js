// ⚠️ À COMPLÉTER AVANT LA MISE EN LIGNE : remplace les 3 valeurs ci-dessous.
// Elles sont injectées automatiquement partout dans les pages.
var SELYRA = {
  editor: "chelxy.dve",
  email: "selyra.sav@gmail.com",
  support: "https://discord.gg/tgMvUvh4h3",
};

document.querySelectorAll("[data-c]").forEach(function (el) {
  var value = SELYRA[el.getAttribute("data-c")];
  if (!value) return;
  if (el.getAttribute("data-c") === "email" && value.indexOf("@") > 0) {
    el.innerHTML = '<a href="mailto:' + value + '">' + value + "</a>";
  } else if (el.getAttribute("data-c") === "support" && value.indexOf("http") === 0) {
    el.innerHTML = '<a href="' + value + '" rel="noopener">' + value + "</a>";
  } else {
    el.textContent = value;
  }
});
