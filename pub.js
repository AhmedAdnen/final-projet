document.getElementById('annonceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    
    // Récupération des valeurs des champs du formulaire
    const titre = document.getElementById('titre').value;
    const description = document.getElementById('description').value;
    const categorie = document.getElementById('categorie').value;
    const image = document.getElementById('image').files[0];
    
    // Création de l'annonce (dans ce cas, on affiche les données)
    let resultat = document.getElementById('resultat');
    resultat.innerHTML = `
      <h2>Annonce Publiée</h2>
      <p><strong>Titre :</strong> ${titre}</p>
      <p><strong>Description :</strong> ${description}</p>
      <p><strong>Catégorie :</strong> ${categorie}</p>
      ${image ? `<p><strong>Image :</strong> ${image.name}</p>` : ''}
    `;
  });
  