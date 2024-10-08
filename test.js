const { expect } = require('chai');
const { tambah, kali, kurang, bagi } = require('./math');
describe('Pengujian Fungsi Matematika', function() {
 it('seharusnya menghasilkan 7 saat menambahkan 5 + 2', function() {
 expect(tambah(5, 2)).to.equal(7);
 });
 it('seharusnya menghasilkan 6 saat mengalikan 2 * 3', function() {
 expect(kali(2, 3)).to.equal(9);
 });
 it('seharusnya menghasilkan 0 saat mengurangkan 4 - 4', function() {
 expect(kurang(4, 4)).to.equal(0);
 });
 it('seharusnya menghasilkan 2 saat membagi 8 / 4', function() {
 expect(bagi(8, 4)).to.equal(2);
 });
 it('seharusnya menghasilkan error saat membagi dengan 0', function() {
 expect(() => bagi(8, 0)).to.throw('Pembagian dengan Nol tidak diperbolehkan');
 });
});
