const btn = document.querySelector('#menu-btn');
        const menu = document.querySelector('#sidemenu');
        btn.addEventListener('click', e => {

            menu.classList.toggle("menu-expanded");
            menu.classList.toggle("menu-collapse");

            document:querySelector('body').classList.toggle('body-expanded')
        });