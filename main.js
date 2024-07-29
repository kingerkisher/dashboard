var navlink = document.querySelectorAll('.navlink');

navlink.forEach(link => {
    document.getElementById('dashboard').style.display = 'block';

    link.addEventListener('click', () => {
        var page = link.dataset.page;
        // console.log(page);
        switch (page) {
            case 'dashboard': 
                var dashboard = document.getElementById(page).style.display = 'block';
                var addnew = document.getElementById('addnew').style.display = 'none';
                var editstock = document.getElementById('editstock').style.display = 'none';
                break;
            case 'addnew':
                var addnew = document.getElementById(page).style.display = 'block';
                var dashboard = document.getElementById('dashboard').style.display = 'none';
                var editstock = document.getElementById('editstock').style.display = 'none';
                break;
            case 'editstock':
                var edit = document.getElementById(page).style.display = 'block';
                var dashboard = document.getElementById('dashboard').style.display = 'none';
                var addnew = document.getElementById('addnew').style.display = 'none';
                break;
        }

    });
});
