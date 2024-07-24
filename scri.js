document.addEventListener('DOMContentLoaded', function() {
    const exchangeRatesTable = document.getElementById('exchange-rates').getElementsByTagName('tbody')[0];
    const conversionForm = document.getElementById('currency-converter');
    const conversionResult = document.getElementById('conversion-result');

    const exchangeRates = {
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.0
        // Ajouter d'autres taux de change si nécessaire
    };

    function populateExchangeRates() {
        for (const [currency, rate] of Object.entries(exchangeRates)) {
            const row = exchangeRatesTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = currency;
            cell2.textContent = rate;
        }
    }

    conversionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = parseFloat(document.getElementById('amount').value);
        const currency = document.getElementById('currency').value;
        const rate = exchangeRates[currency];

        if (amount && rate) {
            const convertedAmount = (amount * rate).toFixed(2);
            conversionResult.textContent = ${amount} USD = ${convertedAmount} ${currency};
        } else {
            conversionResult.textContent = 'Veuillez entrer un montant valide et sélectionner une devise.';
        }
    });

    populateExchangeRates();
});