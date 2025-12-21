const axios = require('axios');

// Configuración de BAN Protocol
const PROTOCOL_FEE = 0.01; // 1% para el protocolo
const AFFILIATE_REWARD = 0.10; // 10% para el afiliado (ejemplo)

async function checkBagsUser(username) {
    console.log('🔍 Validando usuario en Bags: ' + username);
    try {
        // En un escenario real, aquí usamos la URL oficial de Bags API
        // Por ahora, simulamos la respuesta para el MVP
        const mockResponse = {
            exists: true,
            wallet: '0x' + Math.random().toString(16).slice(2, 42),
            followers: 150
        };
        
        return mockResponse;
    } catch (error) {
        console.error('❌ Error conectando con Bags API');
        return null;
    }
}

async function calculateSplit(amount) {
    const fee = amount * PROTOCOL_FEE;
    const netAmount = amount - fee;
    console.log('--- Cálculo de BAN Protocol ---');
    console.log('Monto Total: ' + amount + ' SOL');
    console.log('BAN Fee (1%): ' + fee + ' SOL');
    console.log('Monto a Distribuir: ' + netAmount + ' SOL');
}

// Prueba del sistema
checkBagsUser('Check20').then(user => {
    if(user.exists) {
        console.log('✅ Usuario verificado. Wallet: ' + user.wallet);
        calculateSplit(10); // Ejemplo con 10 SOL
    }
});