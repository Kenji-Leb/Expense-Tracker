const transactions = getTransac();

const incomes = transactions.filter(transaction => transaction.transacType === 'income');
const expenses = transactions.filter(transaction => transaction.transacType === 'expense');

console.log('Incomes:', incomes);
console.log('Expenses:', expenses);
