import axios from "axios"

//const topicParent = document.querySelector(".tabs-container")

let topicsArray =[
  'javascript',
  'bootstrap',

];


const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
const wrapper = document.createElement('div')
const tab1 = document.createElement('div')
const topicsArray = document.createElement('div')
/*
const tab2 = document.createElement('div')
const tab3 = document.createElement('div')
const tab4 = document.createElement('div')
const tab5 = document.createElement('div')
*/
wrapper.appendChild(tab1)
wrapper.appendChild(topicsArray)
/*
wrapper.appendChild(tab2)
wrapper.appendChild(tab3)
wrapper.appendChild(tab4)
wrapper.appendChild(tab5)
*/

wrapper.classList.add('topics')
tab1.classList.add("tab")
topicsArray.classList.add('tab')
//tab2.classList.add("tab")
//tab3.classList.add("tab")
//tab4.classList.add('tab')
//tab5.classList.add('tab')

//const tabLinks2 = Object.values(topics)
//tabLinks.forEach((text,idx)=>
//text.textContent = tabLinks2[idx])


topics.forEach(topicText =>{
  const tabs = document.createElement('div')
  tabs.textContent = topicText;
  topicsArray.appendChild(tabs)

})

//tab2.textContent = topics
//tab3.textContent = topics
//tab4.textContent = topics
//tab5.textContent = topics

topicsArray.addEventListener("click", ()=>{
  topicsArray.classList.toogle("tab");
})
return wrapper

}






const tabsAppender = (selector) => {

  const parentElement = document.querySelector(selector)
  
  axios.get('http://localhost:5001/api/topics')
  .then((res)=>{ 
          const tabsData = res.data.topics 
         Tabs(tabsData)
   parentElement.appendChild(Tabs(tabsData))
    
  
})
}
  
  
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }
