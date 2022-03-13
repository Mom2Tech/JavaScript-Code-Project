  document.addEventListener("DOMContentLoaded", () => { 

    let InputValue = ""
    const newQuote = document.querySelector('#new-description')
    newQuote.addEventListener("input", (e) => {
        e.preventDefault();
    InputValue = e.target.value
   })

  const post =document.querySelector('#form')
 
  post.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(InputValue)
    addQuote() 
  })
  
   const ulist=document.querySelector('#quotes')

   function addQuote(){
      const li=document.createElement('li')
      li.textContent=InputValue
      console.log(li)

      const button = document.createElement('button')
      button.textContent = "x"

      const like = document.createElement("i")
      //create icon
      

      like.classList.add("fa")
      like.classList.add("fa-battery-full")

      like.addEventListener('click', (e)=> {
        e.target.style.color="green"

      })

      button.addEventListener('click', (e) =>{
        e.target.parentNode.remove();
    })
    newQuote.value=""
    li.append(button,like); 
    ulist.append(li);   
   } 
})
