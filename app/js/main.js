var db = '../../db.json'

new Vue({
    el: '#app',
    data: {

        list: [{
            title: "Soy Front-end",
            menu: [{
                    href: "#link1",
                    title: "link1"
                },
                {
                    href: "#link2",
                    title: "link2"
                },
                {
                    href: "#link2",
                    title: "link2"
                }
            ],
            jumbotron: {
                title: "Lorem ipsum dolar",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            box: {
                title: "Aurora",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            },
            moment: [
                "At vero eos et accusamus et iusto odio",
                "At vero eos et accusamus et iusto odio",
                "At vero eos et accusamus et iusto odio",
                "At vero eos et accusamus et iusto odio",
                "At vero eos et accusamus et iusto odio",
                "At vero eos et accusamus et iusto odio"
            ],
            slide: [
                "../img/img.jpg",
                "../img/img.jpg",
                "../img/img.jpg",
                "../img/img.jpg",
                "../img/img.jpg",
                "../img/img.jpg",
                "../img/img.jpg",
                "../img/img.jpg",
            ]
        }]
    }
})