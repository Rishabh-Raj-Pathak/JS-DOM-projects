const clock = document.querySelector('#clock')

let update

setInterval(()=>{
    let date = new Date();
     update = date.toLocaleTimeString();
    // console.log(update)
    clock.innerHTML = `<h3>${update}</h3>`
},1000)

// console.log(update)

