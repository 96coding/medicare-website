function toggleSection(id, btn) {
    // hide all sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    // remove active from all buttons
    document.querySelectorAll('.btn').forEach(b => {
        b.classList.remove('active');
    });

    // show selected section
    document.getElementById(id).classList.add('active');

    // highlight clicked button
    btn.classList.add('active');
}