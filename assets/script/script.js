
  document.getElementById("searchConsole").addEventListener("change", function () {
    const value = this.value.trim().toLowerCase();

    // Mapeamento entre o texto digitado e o arquivo correspondente
    const links = {
      "supernintendo": "supernintendo.html",
      "nintendo 64": "nintendo64.html",
      "nintendo switch": "nintendoswitch.html",
      "nintendo switch 2": "nintendoswitch2.html",
      "nintendo wii": "nintendowi.html",
      "playstation": "playstation.html",
      "playstation 2": "playstation2.html",
      "playstation 3": "playstation3.html",
      "playstation 4": "playstation4.html",
      "playstation 5": "playstation5.html"
    };

    if (links[value]) {
      window.location.href = links[value];
    } else {
      alert("Console não encontrado!");
    }
  });
