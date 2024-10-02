document.getElementById('quitButton').addEventListener('click', function() {
    let confirmation = confirm("Do you really want to quit?");
    if (confirmation) {
        alert("Goodbye!");
        window.close(); // May not work in all browsers due to security restrictions.
    } else {
        alert("Great! Stay here.");
    }
});
