// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


window.alert("Error");

function mostraNotificaOgniTotTempo(intervallo) {
    setInterval(function() {
      if (Notification.permission === "granted") {
        var notifica = new Notification("Dotnet 7.0", {
          body: "La porta localhost:5140 è in ascolto",
          icon: "percorso/all'icona.png" // Opzionale: specifica l'icona della notifica
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
            var notifica = new Notification("Titolo della notifica", {
              body: "Questo è il contenuto della notifica",
              icon: "percorso/all'icona.png" // Opzionale: specifica l'icona della notifica
            });
          }
        });
      }
    }, intervallo);
  }
  
  // Utilizzo della funzione per mostrare una notifica ogni 5 secondi
  mostraNotificaOgniTotTempo(5000);