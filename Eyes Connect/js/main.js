var map = L.map('map').setView([46.603354, 1.888334], 2);

    // Ajouter une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Charger les données géographiques des États-Unis
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA.geo.json')
      .then(response => response.json())
      .then(data => {
        L.geoJSON(data, {
          style: function(feature) {
            return {
              fillColor: 'green', // Couleur de remplissage verte
              fillOpacity: 0.5, // Opacité de remplissage
              color: 'black', // Couleur de la bordure
              weight: 1 // Épaisseur de la bordure
            };
          }
        }).addTo(map);
      });

    // Charger les données géographiques du Canada
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/CAN.geo.json')
      .then(response => response.json())
      .then(data => {
        L.geoJSON(data, {
          style: function(feature) {
            return {
              fillColor: 'green', // Couleur de remplissage verte
              fillOpacity: 0.5, // Opacité de remplissage
              color: 'black', // Couleur de la bordure
              weight: 1 // Épaisseur de la bordure
            };
          }
        }).addTo(map);
      });

    // Charger les données géographiques du Mexique
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/MEX.geo.json')
      .then(response => response.json())
      .then(data => {
        L.geoJSON(data, {
          style: function(feature) {
            return {
              fillColor: 'green', // Couleur de remplissage verte
              fillOpacity: 0.5, // Opacité de remplissage
              color: 'black', // Couleur de la bordure
              weight: 1 // Épaisseur de la bordure
            };
          }
        }).addTo(map);
      });

      // Charger les données géographiques du Mexique
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries/FRA.geo.json')
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data, {
        style: function(feature) {
          return {
            fillColor: 'green', // Couleur de remplissage verte
            fillOpacity: 0.5, // Opacité de remplissage
            color: 'black', // Couleur de la bordure
            weight: 1 // Épaisseur de la bordure
          };
        }
      }).addTo(map);
    });