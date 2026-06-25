//exo1
function calculerTTC(prixHT, tauxTVA = 20) {
    const montantTVA = prixHT * (tauxTVA / 100);
    const prixTTC = prixHT + montantTVA;
    const prixArrondi = Math.round(prixTTC * 100) / 100;
    console.log(`Le prix TTC est de ${prixArrondi}€ (TVA : ${tauxTVA}%)`);
    return prixArrondi;
}

//exo2
const listecourses =[""];
function ajouterArticle(nom){
    const article = nom.toLowerCase().trim();
    if (listecourses.includes(article)) {
        console.log(`L'article "${article}" est déjà dans la liste.`);
    } else {
        listecourses.push(article);
        console.log(`L'article "${article}" a été ajouté à la liste.`);
    }
    return listecourses;
}

    function supprimerArticle(nom) {
    const index = listeCourses.indexOf(nom.toLowerCase().trim());
    if (index === -1) {
        console.log(`"${nom}" n'est pas dans la liste.`);
        return;
    }
    listeCourses.splice(index, 1);
    console.log(`"${nom}" a ete supprime.`);
}

function afficherListe() {
    if (listeCourses.length === 0) {
        console.log("La liste est vide.");
        return;
    }
    console.log("--- Liste de courses ---");
    listeCourses.forEach((article, index) => {
        console.log(`${index + 1}. ${article}`);
    });
}

function rechercherArticle(terme) {
    return listeCourses.filter(article =>
        article.includes(terme.toLowerCase())
    );
}

//exo3
const contacts = ['nom, prenom, email, telephone, ville'];
function ajouterContact(contact){
    contacts.push(contact); 
    console.log('contact "${contact.nom} ${contact.prenom} ajoute.');
}

function trouverParVille(ville){
    return contacts.filter(c => c.ville.toLowerCase() === ville.toLowerCase());
}

function afficherContact(contact) {
    const { prenom, nom, telephone, email, ville } = contact;
    console.log(`
    Nom    : ${prenom} ${nom}
    Tel    : ${telephone}
    Email  : ${email}
    Ville  : ${ville}
    `);
}

function trouverParNom(recherche) {
    const terme = recherche.toLowerCase();
    return contacts.filter(c =>
        c.prenom.toLowerCase().includes(terme) ||
        c.nom.toLowerCase().includes(terme)
    );
}

//exo4
const formulaire = document.getElementById('monFormulaire');
formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(' le formulaire est soumis !');
    //validation
 const partName = document.getElementById('#name');
 const partPrenom = document.getElementById('#prenom');
 const partEmail = document.getElementById('#email');
 const partPassword = document.getElementById('#password');
 const email = "exemple@gmail.com";
 
 if (partName.value.trim() === '') {
    alert('Le champ nom est requis.');
    return;
 }
 if (partPrenom.value.trim() === '') {
    alert('Le champ prénom est requis.');
    return;
 }
 if (partEmail.value.trim() === '' ) {
    alert('Le champ email est requis.');   
    return;
 }
 if (!partEmail.value.includes('@') && !partEmail.value.includes('gmail.com')) { 
        // Vérifie si l'email contient '@' et 'gmail.com'
        alert('Veuillez entrer une adresse email valide.');
        return;
 }
 if (partPassword.value.trim().length < 8) {
    alert('Le champ password doit contenir au moins 8 caractères.');
    return;
 }

})




