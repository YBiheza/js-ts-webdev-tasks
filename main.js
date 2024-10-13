const cards = [
    {
        title: "Startup Framework",                    
        paragraph: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", // Строка
        background: "#EBEAED",
        titleColor: "#1E0E62",
        parColor: "#1E0E62",
        label: "Explore",                      
        labelColor: "#1E0E62",                  
        backgroundColor: "#ffffff"              
    }, 
    {
        title: "Web Generator",                    
        paragraph: "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.", // Строка
        background: "#ffffff",
        titleColor: "#1E0E62",
        parColor: "#15143966",
        label: "Explore",                      
        labelColor: "#ffffff",                  
        backgroundColor: "#25DAC5",
    },
    {
        title: "Slides 4",                    
        paragraph: "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.", // Строка
        background: "#482BE7",
        titleColor: "#ffffff",
        parColor: "#ffffff",
        label: "Explore",                      
        labelColor: "#1E0E62",                  
        backgroundColor: "#ffffff",
    },
    {
        title: "Postcards",                   
        paragraph: "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.", // Строка
        background: "url('./assets/Placeholder.png')",
        //background: "#564340",
        titleColor: "#ffffff",
        parColor: "#ffffff",
        label: "Explore",                      
        labelColor: "#1E0E62",                  
        backgroundColor: "#ffffff",
    }
];



const header = document.createElement("header");
header.classList.add("header");

const main = document.createElement("main");
main.classList.add("main");

const footer = document.createElement("footer");
footer.classList.add("footer");

const body = document.querySelector('.body');

const wrap = document.createElement("wrapper");
wrap.classList.add("wrapper");

function Header(name) {
    this.element = document.createElement('h1');
    this.element.classList.add("header");
    this.element.textContent = name;
}

function CreateButton(label, labelColor, backgroundColor) {
    this.element = document.createElement('div');
    this.element.classList.add("button");
    this.element.style["background-color"] = backgroundColor;
    let lab = document.createElement('p');
    lab.classList.add("text-button");
    lab.textContent = label;
    lab.style["color"] = labelColor;
    this.element.appendChild(lab);
}

function CreateText (title, paragraph, titleColor, parColor) {
    this.element = document.createElement('div');
    this.element.classList.add('text-block');

    let tit = document.createElement('h5');
    tit.style["color"] = titleColor;
    tit.textContent = title;
    tit.classList.add("card-title");
    this.element.appendChild(tit);

    let par = document.createElement('p');
    par.textContent = paragraph;
    par.classList.add("card-text");
    par.style["color"] = parColor;
    if (paragraph.includes('Startup')) {
        par.style["width"] = '465px';
    } else {
        par.style["width"] = '408px';
    }

    if (title.includes('Startup') || title.includes('Slides')) {
        par.style["margin-left"] = '9px';
    } else {
        par.style["margin-left"] = '0px';
    }

    this.element.appendChild(par);
}

function CreateCard({title, paragraph, background, titleColor, parColor, label, labelColor, backgroundColor}) {
    this.element = document.createElement('div');
    this.element.classList.add('card');

    if (background.includes('url')) {
        this.element.style["background-image"] = background;
    } else {
        this.element.style["background-color"] = background;
    }

    if (background = '#ffffff') {
        this.element.style["border"] = '2px solid #EBEAED';
    } else {
        this.element.style["border-style"] = 'none';
    }

    let button = new CreateButton(label, labelColor, backgroundColor);
    button.element.classList.add("card-button");
    let textCard = new CreateText(title, paragraph, titleColor, parColor);
    this.element.appendChild(textCard.element);
    this.element.appendChild(button.element);
}
  
let myHeader = new Header("Last works");
header.appendChild(myHeader.element)
body.appendChild(header);

let headerButton = new CreateButton('Explore Showcase', '#1E0E62', '#ffffff')
headerButton.element.classList.add("header-button");
header.appendChild(headerButton.element)
body.appendChild(header);

//let firstCard = new CreateCard('Web Generator', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam quia dolore dolorum harum tempore, fugit corporis atque vel, iste commodi ullam eligendi iusto omnis animi voluptatem ipsam numquam perferendis!', 'pink', 'green', 'green', '22', '45', 'label', '#000000', '#cc00ff');
/*let firstCard = new CreateCard(cards[0]);
wrap.appendChild(firstCard.element);
main.appendChild(wrap);
body.appendChild(main);

let secondCard = new CreateCard(cards[1]);
wrap.appendChild(secondCard.element);
main.appendChild(wrap);
body.appendChild(main);

let thirdCard = new CreateCard(cards[2]);
wrap.appendChild(thirdCard.element);
main.appendChild(wrap);
body.appendChild(main);

let fourthCard = new CreateCard(cards[3]);
wrap.appendChild(fourthCard.element);
main.appendChild(wrap);
body.appendChild(main);*/
for (let card in cards) {
    let c = new CreateCard(cards[card]);
    wrap.appendChild(c.element);
    main.appendChild(wrap);
    body.appendChild(main);
}