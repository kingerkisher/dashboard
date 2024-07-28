var navlink = document.querySelectorAll('.navlink');

navlink.forEach(link => {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('addstock').style.display = 'none';
    document.getElementById('editstock').style.display = 'none';
    link.addEventListener('click', () => {
        var page = link.dataset.page;
        // console.log(page);
        switch (page) {
            case 'dashboard': {
                var dashboard = document.getElementById('dashboard').style.display = 'block';
                var addnew = document.getElementById('addstock').style.display = 'none';
                var editstock = document.getElementById('editstock').style.display = 'none';
                break;
            }
            case 'addnew': {
                var dashboard = document.getElementById('dashboard').style.display = 'none';
                var addnew = document.getElementById('addstock').style.display = 'block';
                var editstock = document.getElementById('editstock').style.display = 'none';
                break;
            }
            case 'editstock': {
                var dashboard = document.getElementById('dashboard').style.display = 'none';
                var addnew = document.getElementById('addstock').style.display = 'none';
                var edit = document.getElementById('editstock').style.display = 'block';
                break;
            }
        }

    });
});
