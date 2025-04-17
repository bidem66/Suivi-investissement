const cryptoData = [
  { nom: "SOL", quantite: 1.02, paye: 176, actuel: 181 },
  { nom: "LINK", quantite: 1.1, paye: 90, actuel: 87 },
];

const actionsData = [
  { nom: "TSLA", quantite: 0.8, paye: 78, actuel: 73 },
  { nom: "NVDA", quantite: 0.5, paye: 90, actuel: 92 },
];

function creerTableau(titre, data, devise) {
  let html = `<h2>${titre}</h2><table><tr><th>Nom</th><th>Quantité</th><th>Payé</th><th>Actuel</th><th>Valeur</th><th>+/-</th></tr>`;
  data.forEach(item => {
    const valeur = item.quantite * item.actuel;
    const invest = item.quantite * item.paye;
    const gain = valeur - invest;
    const couleur = gain >= 0 ? 'gain' : 'perte';
    html += `<tr>
      <td>${item.nom}</td>
      <td>${item.quantite}</td>
      <td>${item.paye} ${devise}</td>
      <td>${item.actuel} ${devise}</td>
      <td>${valeur.toFixed(2)} ${devise}</td>
      <td class="${couleur}">${gain.toFixed(2)} ${devise}</td>
    </tr>`;
  });
  html += '</table>';
  return html;
}

document.getElementById('crypto-table').innerHTML = creerTableau("Crypto (CAD)", cryptoData, "$CAD");
document.getElementById('actions-table').innerHTML = creerTableau("Actions/Métaux (USD)", actionsData, "$USD");
