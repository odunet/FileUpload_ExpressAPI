//Helper function to handle click
const handleImageUpload = evt => {
    const files = evt.target.files
    const formData = new FormData();
    formData.append('myFile', files[0]);

    // Later, perhaps in a form 'submit' handler or the input's 'change' handler:
    fetch('http://localhost:5000/api/saveImage', {
        method: 'POST',
        body: formData,
        // files: formData,
        }).then(response => console.log("File Sent"))
        .catch(err => console.log(err))
}

document.getElementById("myfile").addEventListener("change", function(evt){
    evt.preventDefault();
    handleImageUpload(evt);
})