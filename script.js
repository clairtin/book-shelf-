document.addEventListener("DOMContentLoaded", function() {
    const dropdownLinks = document.querySelectorAll(".has-dropdown a");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const submenu = link.nextElementSibling;

            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
});

