$(document).ready(function() {
    var data = {
        images: [{
            src: "img/1.JPG",
            description: "Rixos Sharm El Sheikh"
        }, {
            src: "img/2.JPG",
            description: "Rixos Hall"
        }, {
            src: "img/3.JPG",
            description: "Центральный бассейн"
        }, {
            src: "img/4.JPG",
            description: "Пальмовая роща"
        }, {
            src: "img/5.JPG",
            description: "Тихий уголок"
        }, {
            src: "img/6.JPG",
            description: "Пляж"
        }, {
            src: "img/7.JPG",
            description: "Пляжная вечеринка"
        }, {
            src: "img/8.JPG",
            description: "Кактусы"
        }, {
            src: "img/9.JPG",
            description: "Водяные горки"
        }, {
            src: "img/10.JPG",
            description: "Тоннель"
        }, {
            src: "img/11.JPG",
            description: "Цветущая акация"
        }, {
            src: "img/12.JPG",
            description: "Закат на Красном море"
        }, ]
    };
    $('body').append(tmpl('carousel_template', data));
    $('.carousel').carousel();
});
