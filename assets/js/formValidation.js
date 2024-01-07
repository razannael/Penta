function validateForm() {

    let date = document.getElementById('day-date').value;
    let stationName = document.getElementById('stationName').value;
    let stationAddress = document.getElementById('stationAddress').value;
    let ownerName = document.getElementById('ownerName').value;
    let phone = document.getElementById('phone').value;
    let amount = document.getElementById('amount').value;

    if (date === "" || stationName === "" || stationAddress === "" || ownerName === "" || phone === "" || amount === "") {
      showAlert("يرجى ملء كافة الحقول.");
      return false;
    }


    return true;
  }


  function showAlert(message) {
    var customAlert = document.getElementById('customAlert');
    customAlert.innerHTML = message;
    customAlert.classList.add('show');

    setTimeout(function () {
      customAlert.classList.remove('show');
    }, 3000);
  }


  /// Edit model 
const editButtons = document.querySelectorAll('.edit');

editButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const stationId = button.dataset.stationId; 
    const stationData = await fetchStationData(stationId);
    openEditForm(stationData);
  });
});

  // Fill in the input fields with the station data
  document.getElementById("editDate").value = stationData.date;
  document.getElementById("editStationName").value = stationData.stationName;
  document.getElementById("editStationAddress").value = stationData.stationAddress;
  document.getElementById("editOwnerName").value = stationData.ownerName;
  document.getElementById("editPhone").value = stationData.phone;
  document.getElementById("editAmount").value = stationData.amount;

// Function to fetch station data asynchronously
async function fetchStationData(stationId) {
  try {
    const response = await fetch(`/api/stations/${stationId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching station data:', error);
    return null;
  }
}
