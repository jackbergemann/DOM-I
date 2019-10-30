const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItem1 = document.getElementsByTagName('a')[0]
navItem1.textContent = "Services"
navItem1.style.color = "green"

let navItem2 = document.getElementsByTagName('a')[1]
navItem2.textContent = "Products";
navItem2.style.color = "green"

let navItem3 = document.getElementsByTagName('a')[2]
navItem3.textContent = "Vision";
navItem3.style.color = "green"

let navItem4 = document.getElementsByTagName('a')[3]
navItem4.textContent = "Features";
navItem4.style.color = "green"

let navItem5 = document.getElementsByTagName('a')[4]
navItem5.textContent = "About";
navItem5.style.color = "green"

let navItem6 = document.getElementsByTagName('a')[5]
navItem6.textContent = "Contact";
navItem6.style.color = "green"

let nav = document.querySelector('nav')

let link1 = document.createElement('a')
link1.textContent = ('link1')
link1.style.color = "green"

nav.appendChild(link1);

let link2 = document.createElement('a')
link2.textContent = ('link2')
link2.style.color = "green"

nav.prepend(link2);


let cta = document.getElementById('cta-img');
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middle = document.getElementById('middle-img');
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let button = document.querySelector('button');
button.textContent = "Get Started!"

let h1 = document.querySelector('h1');
h1.textContent = "DOM Is Awesome";
h1.style.wordSpacing = "9999rem";

let h41 = document.getElementsByTagName('h4')[0].textContent = (siteContent["main-content"]["features-h4"]);
let p1 = document.getElementsByTagName('p')[0].textContent = (siteContent["main-content"]["features-content"]);

let h42 = document.getElementsByTagName('h4')[1].textContent = (siteContent["main-content"]["about-h4"]);
let p2 = document.getElementsByTagName('p')[1].textContent = (siteContent["main-content"]["features-content"]);

let h43 = document.getElementsByTagName('h4')[2].textContent = (siteContent["main-content"]["services-h4"]);
let p3 = document.getElementsByTagName('p')[2].textContent = (siteContent["main-content"]["features-content"]);

let h44 = document.getElementsByTagName('h4')[3].textContent = (siteContent["main-content"]["product-h4"]);
let p4 = document.getElementsByTagName('p')[3].textContent = (siteContent["main-content"]["features-content"]);

let h45 = document.getElementsByTagName('h4')[4].textContent = (siteContent["main-content"]["vision-h4"]);
let p5 = document.getElementsByTagName('p')[4].textContent = (siteContent["main-content"]["features-content"]);


let h6 = document.getElementsByTagName('h4')[5].textContent = (siteContent["contact"]["contact-h4"]);
let p6 = document.getElementsByTagName('p')[5].textContent = (siteContent["contact"]["address"]);
let p7 = document.getElementsByTagName('p')[6].textContent = (siteContent["contact"]["phone"]);
let p8 = document.getElementsByTagName('p')[7].textContent = (siteContent["contact"]["email"]);

let p9 = document.getElementsByTagName('p')[8].textContent = (siteContent["footer"]["copyright"]);
