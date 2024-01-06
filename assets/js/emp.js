function previewPhoto(event) {
    let input = event.target;
    let preview = document.getElementById('preview-personal-photo');

    // Check if a file was selected
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            preview.innerHTML = '<img src="' + e.target.result + '" alt="Preview" class="w-100 rounded-circle"/>';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        preview.innerHTML = '<img src="/assets/img/Ellipse 36.png" class="w-100"/>'; // Clear preview if no file selected
    }
}




function updateButtonText(text) {
    // Update the button text with the selected choice
    $('#dropdownButton').text(text);
  }