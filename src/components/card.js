import axios from "axios"





const parentElement = document.querySelector(".cards-container")


//displays one card
const Card = (article) => {
  
  const cardWrapper = document.createElement('div')
  const cardHeadLine = document.createElement('div')
  const author = document.createElement('div')
  const imgWrapper = document.createElement('div')
  const img = document.createElement('img')
  const Name = document.createElement('span')
  
  
  cardWrapper.appendChild(cardHeadLine)
  cardWrapper.appendChild(author)
  author.appendChild(imgWrapper)
  imgWrapper.appendChild(img)
  img.appendChild(Name)
  
  cardWrapper.classList.add("card")
  cardHeadLine.classList.add("headline")
  author.classList.add('author')
  imgWrapper.classList.add("img-container")
  img.src = article.authorPhoto;
  cardHeadLine.textContent = article.headline;
  Name.textContent = "By:" + article.authorName
  
  return cardWrapper
}


 // section.appendChild(cardMaker(articleData))   
 
 // console.log( section)





// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const cardMaker=({authorPhoto,headline,authorName}) =>{  
return cardWrapper

}


const cardAppender = (selector) => {
  const parentElement = document.querySelector(selector)
console.log(parentElement)
  axios.get("http://localhost:5001/api/articles")
  .then((res) =>{
    const article = res.data.articles
           Card(article)
           parentElement.appendChild(Card(article))
    console.log(res.data.articles)
  })
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }

