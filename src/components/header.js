import axios from "axios"

const Header = (title, date, temp) => {

const wrapper = document.createElement('div')
const span = document.createElement('span')
const H1 = document.createElement('h1')
const span1 = document.createElement('span')


wrapper.classList.add("header")
span.classList.add("date")
span1.classList.add("temp")


wrapper.appendChild(span)
wrapper.appendChild(H1)
wrapper.appendChild(span1)

span.textContent = date;
H1.textContent = title;
span1.textContent = temp;



  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  return wrapper
}







const headerAppender = (selector) => {
  const parentElement = document.querySelector(selector)
  const headerContent = Header('Lamba Times', 'January 6th 2021','26')
   parentElement.appendChild(headerContent)
  


  console.log(parentElement)
  
}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

export { Header, headerAppender }
