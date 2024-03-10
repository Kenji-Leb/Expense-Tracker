const transacAmount = document.getElementById("transacAmount");
const transacCurrency = document.getElementById("transacCurrency");
const transacType = document.getElementById("transacType");

const updateIncomeAndExpenses = () => {
  const transactions = getTransac();
  const incomes = transactions.filter(transaction => transaction.transacType === 'income');
  const expenses = transactions.filter(transaction => transaction.transacType === 'expense');
  console.log('Incomes:', incomes);
  console.log('Expenses:', expenses);

  const totalIncome = incomes.reduce((total, income) => total + parseFloat(income.transacAmount), 0);
  const totalExpense = expenses.reduce((total, expense) => total + parseFloat(expense.transacAmount), 0);
  const balance = totalIncome - totalExpense;

  const balanceElement = document.getElementById("balance");
  balanceElement.textContent = ` ${balance.toFixed(2)} $`;
};

const AddData = () => {
  const transac = {
    transacAmount: transacAmount.value,
    transacCurrency: transacCurrency.value,
    transacType: transacType.value,
  };

  if (validateTransac(transac)) {
    addTransac(transac);
    console.log('Transaction added:', transac);
    updateIncomeAndExpenses();
    updateDataView();
    resetForm();
  }
}

const deleteData = (index) => {
  const transacs = getTransac();
  const transacId = transacs[index].id;
  deleteTransac(transacId);
  updateDataView();
}

const editData = (index) => {
  let transacs = getTransac();
  document.getElementById("transac-btn").style.display = "none";
  document.getElementById("update").style.display = "block";
  transacAmount.value = transacs[index].transacAmount;
  transacCurrency.value = transacs[index].transacCurrency;
  transacType.value = transacs[index].transacType;
  document.getElementById("update").onclick = () => {
    transacs[index].transacAmount = transacAmount.value;
    transacs[index].transacCurrency = transacCurrency.value;
    transacs[index].transacType = transacType.value;
    if (validateTransac(transacs[index])) {
      updateTransac(transacs[index]);
      updateDataView();
      updateIncomeAndExpenses();
      document.getElementById("transac-btn").style.display = "block";
      document.getElementById("update").style.display = "none";
    } else {
      updateDataView();
      document.getElementById("transac-btn").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
  };
};

const updateDataView = () => {
  const transacs = getTransac();
  const tableBody = document.querySelector("#crudTable");
  tableBody.innerHTML = generateTransacIntoHtml(transacs);
};

const resetForm = () => {
  transacAmount.value = "";
  transacCurrency.value = "";
  transacType.value = "";
};

const validateTransac = (transac) => {
  return transac.transacAmount === ""
    ? (alert("Amount is required"), false)
    : transac.transacCurrency === ""
    ? (alert("Currency is required"), false)
    : transac.transacType === ""
    ? (alert("Type is required"), false)
    : true;
};

const generateTransacIntoHtml = (transacList) => {
  let html = "";
  transacList.forEach((element, index) => {
    html += `
      <ul>
        <li>${element.transacAmount}</li>
        <li>${element.transacCurrency}</li>
        <li>${element.transacType}</li>
        <li>
          <button onclick="deleteData(${index})" class="del-edit-btn">Delete</button>
          <button onclick="editData(${index})" class="del-edit-btn">Edit</button>
        </li>
      </ul>
    `;
  });
  return html;
};

document.getElementById("transac-btn").addEventListener("click", AddData);
document.addEventListener("DOMContentLoaded", () => {
  updateDataView();
  updateIncomeAndExpenses();
});
