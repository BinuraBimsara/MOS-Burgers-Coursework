function openTab(evt, tabName) {
    // Hide all tab content
    var tabcontent = document.querySelectorAll(".tabcontent");
    tabcontent.forEach(function (content) {
        content.style.display = "none";
    });

    // Remove the active class from all tab links
    var tablinks = document.querySelectorAll(".nav-item.tablinks");
    tablinks.forEach(function (link) {
        link.className = link.className.replace(" active", "");
    });

    // Show the current tab's content and add the active class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Open the first tab by default
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.tab button').click();
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


ScrollReveal().reveal(".body", {
    ...scrollRevealOption,
    interval: 500,
})