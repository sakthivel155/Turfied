const routes = {
    404      : "../../pages/404.html",
    "/"      : "../../pages/home.html",
    "/play"  : "../../pages/play.html",
    "/book"  : "../../pages/book.html",
    "/learn" : "../../pages/learn.html"
};



let items = document.getElementsByClassName('bar-menu-btns');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (event) => {
        event.preventDefault();
        window.history.pushState({}, "", items[i].href);
        handleLocation();
    });
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]; 
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-contant").innerHTML = html;
};

window.onpopstate = handleLocation;

handleLocation();