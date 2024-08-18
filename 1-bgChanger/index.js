const val = document.querySelectorAll(".button");
// console.log(val)

const body = document.querySelector("body");

val.forEach((button) => {
  console.log(button);
  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'gray'){
        body.style.backgroundColor = e.target.id
        const heading = document.createElement('h2')
        console.log(heading)
        heading.innerHTML = `${e.target.id} button is clicked`
        body.insertBefore(heading,body.firstChild).style.textAlign='center'
    }
    else if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id 
        const heading = document.createElement('h2')
        heading.innerHTML = `${e.target.id} button is clicked`
        body.insertBefore(heading,body.firstChild).style.textAlign='center'
    }
    else if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
        const heading = document.createElement('h2')
        heading.innerHTML = `${e.target.id} button is clicked`
        body.insertBefore(heading,body.firstChild).style.textAlign='center'
    }
    else if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
        const heading = document.createElement('h2')
        heading.innerHTML = `${e.target.id} button is clicked`
        body.insertBefore(heading,body.firstChild).style.textAlign='center'
    }
  })
});
