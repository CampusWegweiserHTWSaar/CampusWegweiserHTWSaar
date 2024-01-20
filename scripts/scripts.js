function handleSearch(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      if (searchInput === "bibliothek") {
        window.location.href = "bibliothek.html";
      } else if (searchInput === "mensa") {
        window.location.href = "mensa.html";
      } else if (searchInput === "sekretariat") {
        window.location.href = "sekretariat.html";
      } else if (searchInput === "it-service") {
        window.location.href = "it-service.html";
      } else if (searchInput === "fachschaft") {
        window.location.href = "fachschaft.html";
      } else if (searchInput === "druckerraum") {
        window.location.href = "druckerraum.html";
      } else if (searchInput === "validierungsautomat") {
        window.location.href = "validierungsautomat.html";
      } else if (searchInput === "orientierungsplan") {
        window.location.href = "orientierungsplan.html";
      } else {
        alert("Keine Übereinstimmung gefunden.");
      }
    }
  }