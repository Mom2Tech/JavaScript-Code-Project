document.addEventListener("DOMContentLoaded", () => { 

    let InputValue = ""
//     const newQuote = document.querySelector('#new-description')
//     newQuote.addEventListener("input", (e) => {
//         e.preventDefault();
//     InputValue = e.target.value
//    })

  const post =document.querySelector('#post-button')
  // post or submit?
  post.addEventListener("post", function(e){
    e.preventDefault();
    console.log(InputValue)
    // addQuote() 
  })
  
//    const ulist=document.querySelector('#quotes')

//    function addQuote(){
//       const li=document.createElement('li')
//       li.textContent=InputValue
//       console.log(li)

//       const button = document.createElement('button')
//       button.textContent = "X"

//       button.addEventListener('click', (e) =>{
//         e.target.parentNode.remove();
  
//       ulist.append(li);
//       li.append(button);
//       inputElement.value=""
//   })
/