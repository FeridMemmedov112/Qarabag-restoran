const bookBtn = document.querySelector('.book-btn')
const bookForm = document.querySelector('.book__form')
const bookFormClose = document.querySelector('.book__form-close')

bookBtn.addEventListener('click', () => {
    bookForm.style.display = 'flex'
})

bookFormClose.addEventListener('click', () => {
    bookForm.style.display = 'none'
})


const header = document.querySelector('.header')
const logo = document.querySelector('.logo img')
const links = document.querySelectorAll('.header__nav-link')

$(document).scroll(function () {
    if ($(document).scrollTop() >= 80) {
        header.classList.add('header-fixed')
        logo.src = 'https://quomodosoft.com/html/dawat/demo/img/main_logo_black.png'
        links.forEach((item) => {
            item.classList.remove('header__nav-link')
            item.classList.add('header__nav-link-fixed')
        })
    } else {
        header.classList.remove('header-fixed')
        logo.src = 'https://quomodosoft.com/html/dawat/demo/img/main_logo.png'
        links.forEach((item) => {
            item.classList.remove('header__nav-link-fixed')
            item.classList.add('header__nav-link')
        })
    }
});

$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayTimeoutHoverPause: true,
});

// MENU

const menu = document.querySelector('.todays__menu')

fetch('../menuDB.json')
    .then(resp => resp.json())
    .then(data => {
        data.menu.map((item, index) => {
            if (index < 6) {
                const menuItem = document.createElement('div')
                menuItem.classList.add('todays__menu-item')
                menu.appendChild(menuItem)
                menuItem.innerHTML = `<img class="todays__menu-img" src=${item.img} alt="food">
                <div class="todays__menu-variety">
                    <h3 class="todays__variety-title">${item.name}</h3>
                    <div class="todays__variety-columns">
                        <ul>
                            ${item.variety.variety1.map((item) => {
                    return (`<li>- ${item}</li>`)
                }).join('')}
                        </ul>
                        <ul>
                        ${item.variety.variety2.map((item) => {
                    return (`<li>- ${item}</li>`)
                }).join('')}
                        </ul>
                        <ul>
                        ${item.variety.variety3.map((item) => {
                    return (`<li>- ${item}</li>`)
                }).join('')}
                        </ul>
                    </div>
                </div>
                <h3 class="todays__menu-price">$${item.price.toFixed(2)}</h3>`
            }
        })
    })

const categories = document.querySelectorAll('.todays__categories button')

categories.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        document.querySelector('.active-category').classList.remove('active-category')
        e.target.classList.add('active-category')
        menu.innerHTML = ''
        if (index == 0) {
            fetch('../menuDB.json')
                .then(resp => resp.json())
                .then(data => {
                    data.menu.map((item, index) => {
                        if (index < 6) {
                            const menuItem = document.createElement('div')
                            menuItem.classList.add('todays__menu-item')
                            menu.appendChild(menuItem)
                            menuItem.innerHTML = `<img class="todays__menu-img" src=${item.img} alt="food">
                <div class="todays__menu-variety">
                    <h3 class="todays__variety-title">${item.name}</h3>
                    <div class="todays__variety-columns">
                        <ul>
                            ${item.variety.variety1.map((item) => {
                                return (`<li>- ${item}</li>`)
                            }).join('')}
                        </ul>
                        <ul>
                        ${item.variety.variety2.map((item) => {
                                return (`<li>- ${item}</li>`)
                            }).join('')}
                        </ul>
                        <ul>
                        ${item.variety.variety3.map((item) => {
                                return (`<li>- ${item}</li>`)
                            }).join('')}
                        </ul>
                    </div>
                </div>
                <h3 class="todays__menu-price">$${item.price.toFixed(2)}</h3>`
                        }
                    })
                })
        } else {
            fetch('../menuDB.json')
                .then(resp => resp.json())
                .then(data => {
                    data.menu.map((item) => {
                        if (item.category === index) {
                            const menuItem = document.createElement('div')
                            menuItem.classList.add('todays__menu-item')
                            menu.appendChild(menuItem)
                            menuItem.innerHTML = `<img class="todays__menu-img" src=${item.img} alt="food">
                <div class="todays__menu-variety">
                    <h3 class="todays__variety-title">${item.name}</h3>
                    <div class="todays__variety-columns">
                        <ul>
                            ${item.variety.variety1.map((item) => {
                                return (`<li>- ${item}</li>`)
                            }).join('')}
                        </ul>
                        <ul>
                        ${item.variety.variety2.map((item) => {
                                return (`<li>- ${item}</li>`)
                            }).join('')}
                        </ul>
                        <ul>
                        ${item.variety.variety3.map((item) => {
                                return (`<li>- ${item}</li>`)
                            }).join('')}
                        </ul>
                    </div>
                </div>
                <h3 class="todays__menu-price">$${item.price.toFixed(2)}</h3>`
                        }
                    })
                })
        }

    })
})
