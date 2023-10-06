function afficherListeUtilisateurs() {
    fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(json => {
        const users = json.results;

        users.forEach(user => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
                <img src="${user.picture.large}" alt="Photo de ${user.name.first} ${user.name.last}">
                <p>Nom: ${user.name.last}</p>
                <p>Prénom: ${user.name.first}</p>
                <p>Téléphone: ${user.phone}</p>
            `;
            listeUtilisateurs.appendChild(listItem);
        });
        const boutonAfficherUtilisateur = document.getElementById('afficherUtilisateur');
        boutonAfficherUtilisateur.addEventListener('click', () => {
            AfficherUtilisateur(users);
        });
    })
}
afficherListeUtilisateurs();

function AfficherUtilisateur(users) {
    const hasard = Math.floor(Math.random() * users.length);
    alert(`Nom: ${users[hasard].name.last}\nPrénom: ${users[hasard].name.first}\nTéléphone: ${users[hasard].phone}`);
}