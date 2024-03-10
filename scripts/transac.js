const transacAmount = document.getElementById("transacAmount");
const transacCurrency = document.getElementById("transacCurrency");
const transacType = document.getElementById("transacType");

const AddData = () => {
  const transac = {
    transacAmount: transacAmount.value,
    transacCurrency: transacCurrency.value,
    transacType: transacType.value,
  };

  if (validateTransac(transac)) {
    addTransac(transac);
    updateDataView();
    resetForm();
  }
};

const deleteData = (index) => {
  const transacs = getTransac();
  const transacId = transacs[index].id;
  deleteTransac(transacId);
  updateDataView();
};

const editData = (index) => {
  let transacs = getTransac();
  document.getElementById("submit").style.display = "none";
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
      resetForm();
      updateDataView();
      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    } else {
      resetForm();
      updateDataView();
      document.getElementById("submit").style.display = "block";
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
    ? (alert("transacType is required"), false)
    : !transac.transacType === ""
    ? (alert("Invalid transacType address"), false)
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
          <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
          <button onclick="editData(${index})" class="btn btn-warning">Edit</button>
        </li>
      </ul>
    `;
  });
  return html;
};

document.getElementById("transac-btn").addEventListener("click", AddData);
document.addEventListener("DOMContentLoaded", () => updateDataView());
