<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Campus Wegweiser HTW Saar</title>
  <link rel="stylesheet" href="styles.css">
  
</head>
<body>
  <div class="toolbar">
    <div class="hamburger dropdown">
      <button class="dropbtn"><i class="fas fa-bars"></i></button>
      <div class="dropdown-content">
	  	<a href="startseite.html">Startseite</a>
	  	<a href="orientierungsplan.html">Orientierungsplan</a>
        <a href="impressum.html">Impressum</a>
      </div>
    </div>	

    <div class="search-bar">
      <input id="searchInput" type="text" placeholder="Suche..." onkeypress="handleSearch(event)">
      <button><i class="fas fa-search"></i></button>
    </div>
  </div>

  <header class="header">
    <div class="container">
      <h1 class="slogan"> Wegweiser des Campus Rotenbühl</h1>
      <nav class="navbar">
        <ul>
          <li><a href="orientierungsplan.html">Hier gehts zum Orientierungsplan</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h2>Willkommen beim Wegweiser des HTW Saar Campus Rotenb&uuml;hl</h2>
      <p>
        Hier erwarten dich inspirierende Lernorte, hochmoderne Einrichtungen und eine vielf&auml;ltige akademische Gemeinschaft.
      </p>
      <p>
        Mithilfe unseres Wegweisers ist eine Reise zu den von dir gew&uuml;nschten Orten schnell und bequem zu erreichen.
      </p>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 NaWiWi | Kontakt: info@nawiwi-htwsaar.de</p>
    </div>
  </footer>

 <script>
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
  </script>
</body>
</html>


















