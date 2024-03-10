const addToLocalStorage = (key, newData) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const lastId =
      existingData.length > 0 ? existingData[existingData.length - 1].id : 0;
    newData.id = lastId + 1;
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
    console.log("Auto-incremented ID:", newData.id);
  };
  
const getFromLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key)) || [];
  
const deleteFromLocalStorage = (key, id) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const updatedData = existingData.filter((item) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };
const updateDataInLocalStorage = (key, id, updatedData) => {
    const existingData = getFromLocalStorage(key);
    const updatedItems = existingData.map((item) => {
      if (item.id === id) {
        return { ...item, ...updatedData };
      }
      return item;
    });
    localStorage.setItem(key, JSON.stringify(updatedItems));
  };
  
const addTransac = (transac) => 
    addToLocalStorage("transac", transac);
  
  
const getTransac = () => getFromLocalStorage("transac");
  
const deleteTransac = (transacId) => deleteFromLocalStorage("transac", transacId);
  
const updateTransac = (updateTransac) =>
    updateDataInLocalStorage("transac", updateTransac.id, updateTransac);