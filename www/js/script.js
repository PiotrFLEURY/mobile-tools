
showSection = (id) => {

    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('hidden');
    });

    // Show selected section
    document.getElementById(id).classList.remove('hidden');

    document.querySelectorAll('.navitem').forEach((link) => {
        // remove selected class from all links
        link.classList.remove('selected');
    }
    );

    document.getElementById("nav" + id).classList.add('selected');

}