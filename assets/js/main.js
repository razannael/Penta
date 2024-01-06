//to navigate into mainPage
function redirectToMain(){
    window.location.href= '/components/mainPage.html';
    }



function navigateToEmployees(){
    window.location.href= '/components/employees.html';
}
    
// control sideBar

function toggleSidebar() {
    const sidebar = document.querySelector('.side-bar');
    const sidebarItems = document.querySelectorAll('.sideBar-item');
    const sidebarControl = document.querySelector('.side-bar-control img');
    const dropdownToggle = document.querySelector('.sideBarContent .dropdown-toggle::after');
    const employeeSubMenuImages = document.querySelectorAll('.employees-item img');

    // Toggle the 'minimized' class for the side-bar
    sidebar.classList.toggle('minimized');

    // Check if the sidebar is minimized
    const isMinimized = sidebar.classList.contains('minimized');

    // Set the new width based on whether the sidebar is minimized or not
    const newWidth = isMinimized ? '6%' : '15%';
    sidebar.style.width = newWidth;

    // Toggle the 'minimized' class for each sidebar item
    sidebarItems.forEach(function (item) {
        item.classList.toggle('minimized');

        // Hide or show elements inside the sidebar item except the icon image
        const elementsToHide = item.querySelectorAll(':not(.icon)');
        elementsToHide.forEach(function (element) {
            element.classList.toggle('hidden', isMinimized);
        });

        // Maximize the width of the icon image when the sidebar is minimized
        const iconImage = item.querySelector('.icon');
        if (iconImage) {
            iconImage.style.width = isMinimized ? '40%' : '14%';
            iconImage.style.margin = isMinimized ? '4%' : '1%';
        }
    });

    // Maximize the width of the sidebar-control image when the sidebar is minimized
    if (sidebarControl) {
        sidebarControl.style.width = isMinimized ? '40%' : '15%'; // Adjust the value as needed
    }

    // Hide or show the dropdown-toggle::after when the sidebar is minimized
    if (dropdownToggle) {
        dropdownToggle.style.display = isMinimized ? 'none' : 'inline-block';
    }

    // Maximize the width of images inside #employeeSubMenu ul when the sidebar is minimized
    employeeSubMenuImages.forEach(function (image) {
        image.style.width = isMinimized ? '30%' : '14%'; // Adjust the value as needed
    });
}





//pop-up a form 
function openEditForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("editForm").style.display = "block";
}

function closeEditForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("editForm").style.display = "none";
}

function openAddForm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("addForm").style.display = "block";
}
function closeAddForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("addForm").style.display = "none";
}

function openAddEmpForm() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('add-employee-form').style.display = 'block';
}

function closeAddEmpForm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('add-employee-form').style.display = 'none';
}

function openInfoTab() {
    document.getElementById('overlay2').style.display = 'block';
    document.getElementById('main-info').style.display = 'block';
}

function closeInfoTab() {
    document.getElementById('overlay2').style.display = 'none';
    document.getElementById('main-info').style.display = 'none';
}

function openAddMachineForm() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('add-machine-form').style.display = 'block';
}

function closeAddMachineForm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('add-machine-form').style.display = 'none';
}

function openChargesDetails() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('charge-details').style.display = 'block';
}

function closeChargesDetails() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('charge-details').style.display = 'none';
}

function openAddSaleForm() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('add-sale-form').style.display = 'block';
}

function closeAddSaleForm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('add-sale-form').style.display = 'none';
}

function openSaleDetails() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('sale-details').style.display = 'block';
}

function closeSaleDetails() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('sale-details').style.display = 'none';
}