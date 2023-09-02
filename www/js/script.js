
showSection = (id) => {

    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.hidden = true;
    });

    // Show selected section
    document.getElementById(id).hidden = false;

    document.querySelectorAll('.navitem').forEach((link) => {
        // remove selected class from all links
        link.classList.remove('selected');
    }
    );

    document.getElementById("nav" + id).classList.add('selected');

}