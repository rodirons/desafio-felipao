
let nomeDoHeroi = "Rodnelson";
let experiencia = 7511;

let nivelDoHeroi;

if (experiencia < 1000) {
    nivelDoHeroi = "Ferro";
} else if (experiencia > 1000 && experiencia <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (experiencia > 2000 && experiencia <= 5000) {
    nivelDoHeroi = "Prata";
} else if (experiencia > 5000 && experiencia <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (experiencia > 7000 && experiencia <= 8000) {
    nivelDoHeroi = "Platina";
} else if (experiencia > 8000 && experiencia <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (experiencia > 9000 && experiencia <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("O Herói " + nomeDoHeroi + " está no nível " + nivelDoHeroi + ".");
