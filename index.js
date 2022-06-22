var state = {
    balance: 0,
    income: 1200,
    expense: 200,
    transactions: [
        { name: 'Salary', amount: 5000, type: 'income' },
        { name: 'Buy Grocery', amount: 50, type: 'expense' },
        { name: 'Buy Guitar', amount: 500, type: 'expense' }
    ]
}

var balanceEl = document.querySelector('#balance');

function init() {
    balanceEl.innerHTML = ``;
}

init();