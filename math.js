function tambah(a, b)
{
return a + b;
}
function kali(a, b)
{
return a * b;
} 
function kurang(a, b) {
    return a - b;
}

function bagi(a, b) {
    if (b === 0) {
        throw new Error("Pembagian dengan 0 tidak diperbolehkan");
    }
    return a / b;
}

module.exports = { tambah, kali, kurang, bagi };
