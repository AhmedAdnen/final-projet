document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Récupération des valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Affichage des informations de contact (pour démo, dans un vrai cas, on enverrait ces infos au serveur)
    alert(`Nom: ${name}\nEmail: ${email}\nMessage: ${message}`);
  });
  