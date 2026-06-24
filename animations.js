// 1. Animation "Marquee" à l'ancienne (texte qui défile) pour le h1
const texteDefilant = document.getElementById('texte-defilant');
let texte = texteDefilant.innerText;

setInterval(() => {
    // Prend le premier caractère et le met à la fin
    texte = texte.substring(1) + texte[0];
    texteDefilant.innerText = texte;
}, 120); // Vitesse un peu saccadée pour l'effet brut

