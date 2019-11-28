const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },
    {
        name: 'Hash Chat',
        path: 'hashchat',
        icon : 'icon-grid',
        translate: 'sidebar.nav.SINGLEVIEW'
    },
    {
        name: 'Menu',
        icon: 'icon-speedometer',
        translate: 'sidebar.nav.MENU',
        submenu: [{
            name: 'Submenu',
            translate: 'sidebar.nav.SUBMENU',
            path: 'submenu'
        }]
    }
];

export default Menu;
