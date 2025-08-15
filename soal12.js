// Soal 12
// Hari Selasa, 5 Agustus 2025
// Amzhar Afarka X PPLG 2


const prompt = require("prompt-sync")({ sigint: true });

let jari_jari
let pi;

while (true) {
    jari_jari = parseFloat(prompt("Masukkan jari_jari: "));
    

    if(!isNaN(jari_jari) && jari_jari > 0) {
        
        if(jari_jari % 7 === 0) {
            pi = 22/7;
        } else {
            pi = 3.14;
        }
        break;
    }
    else {
        console.log("Input tidak valid. Silakan masukkan angka lebih dari 0 dan jangan berupa huruf atau karakter lain.");
    }
}
    
let luas = 4 *  pi * jari_jari * jari_jari;
let Volume  = 4/3 * pi * jari_jari * jari_jari * jari_jari;

console.log(`Luas Permukaan Bola: ${luas.toFixed(2)} cm²`);
console.log(`Volume Bola: ${Volume.toFixed(2)} cm³`);
