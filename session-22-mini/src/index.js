function Card(title, description, img) {
    this.title = title;
    this.description = description;
    this.img = img;
}

const cardsInfo = [];
cardsInfo.push(new Card('html', 'HyperText Markup Language', 'res/img/image.jpg'))
cardsInfo.push(new Card('css', 'Cascading Style Sheets', 'res/img/image.jpg'))
cardsInfo.push(new Card('javascript', 'programing language', 'res/img/image.jpg'))
cardsInfo.push(new Card('react', 'javascript library', 'res/img/image.jpg'))


const cardView = (cardInfo) => {
    return `
<div  class="card col-3">
    <div>
        <img alt=${cardInfo.title} class="photo" src=${cardInfo.img}/>
    </div>
    <div>
        <h3 class="title">
            ${cardInfo.title}
        </h3>
        <h4 class="dec">
            ${cardInfo.description}
        </h4>
    </div>
</div>
`
}

const generateCards = (cardInfoList) => {
    return cardInfoList.map(cardInfo => {
        return cardView(cardInfo)
    }).join(' ');
}

const cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = generateCards(cardsInfo)


function onSearch(element) {
    const searchTerm = element.value;
    const filteredCards = cardsInfo.filter(card => {
        return card.title.includes(searchTerm) || card.description.includes(searchTerm)
    })

    cardContainer.innerHTML = generateCards(filteredCards)
}


