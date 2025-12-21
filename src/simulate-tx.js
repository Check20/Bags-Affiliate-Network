const fs = require('fs');
const { generateAffiliateLink } = require('./utils/bags-logic');

const ADMIN_WALLET = 'F15hKB3V5CybacTpPsk6pKDAo7Lzfa6YsyeTuJQvw7Xw';

console.log('--- 🚀 RESTAURANDO BAN PROTOCOL ---');
console.log(`Treasury Wallet: ${ADMIN_WALLET}`);

let totalVol = 0;
let tableRows = '';

for(let i = 1; i <= 10; i++) {
    const fakeWallet = `0x${Math.random().toString(16).slice(2, 10)}`;
    const sales = (Math.random() * 50).toFixed(2);
    const code = Math.random().toString(36).substring(2, 8);
    totalVol += parseFloat(sales);
    
    tableRows += `<tr><td>${fakeWallet}</td><td>${code}</td><td>${sales} SOL</td></tr>`;
}

console.log(`✅ Simulación completada. Volumen: ${totalVol.toFixed(2)} SOL`);
