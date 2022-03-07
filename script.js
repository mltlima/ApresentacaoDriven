x = 0
y = 0
z = 0

// Exemplo Mouse EventListener
const mouseButton = document.querySelector(".mouseButton");

mouseButton.addEventListener("click",() =>{
    const mouseDiv = document.querySelector(".mouse-exemplo");
    mouseDiv.classList.toggle("esconder");

})

function myMoveFunction() {
    document.getElementById("demo").innerHTML = z += 1;
}

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = x += 1;
}

function myOverFunction() {
    document.getElementById("demo3").innerHTML = y += 1;
}


//Exemplo teclado EventListener
const tecladoButton = document.querySelector(".tecladoButton");
const tecladoDiv = document.querySelector(".teclado-exemplo");

tecladoButton.addEventListener("click",() =>{
    tecladoDiv.classList.toggle("esconder");
})

document.addEventListener("keydown", (event) => {
    tecladoDiv.innerHTML += `
    <div class="teclas-pressionadas">
        <p>KEYDOWN<br> <span id="demo2">${event.key}</span></p>
    </div>
    `
});

document.addEventListener("keypress", (event) => {
    tecladoDiv.innerHTML += `
    <div class="teclas-pressionadas">
        <p>KEYPRESS<br> <span id="demo2">${event.key}</span></p>
    </div>
    `
});

document.addEventListener("keyup", (event) => {
    tecladoDiv.innerHTML += `
    <div class="teclas-pressionadas">
        <p>KEYUP<br> <span id="demo2">${event.key}</span></p>
    </div>
    `
});



//Exemplo função Callback
const callbackButton = document.querySelector(".callbackButton");
const callbackDiv = document.querySelector(".callback-exemplo");

callbackButton.addEventListener("click",() =>{
    callbackDiv.classList.toggle("esconder");
    setTimeout(tarefa1,2000);
    tarefa2();
})

function tarefa1() {
    callbackDiv.innerHTML += `
    <div class="teclas-pressionadas">
        <p><br> <span id="demo2">Tarefa 1</span></p>
    </div>
    `
}

function tarefa2() {
    callbackDiv.innerHTML += `
    <div class="teclas-pressionadas">
        <p><br> <span id="demo2">Tarefa 2</span></p>
    </div>
    `
}


//Funçao Callback consertada
const callbackButtonConsertada = document.querySelector(".callbackButtonConsertada");
callbackButtonConsertada.addEventListener("click",() =>{
    callbackDiv.classList.toggle("esconder");
    callbackDiv.innerHTML = "";

    tarefa1Consertada(tarefa2)
})

function tarefa1Consertada(callback) {
    setTimeout(() => {
        tarefa1();
        callback();
    }, 2000);
}





// EventListener Geral
const EventListenerButton = document.querySelector(".EventListenerButton");
const EventListenerDiv = document.querySelector(".EventListener-exemplo");
const output = document.querySelector(".eventListenerOutput");

EventListenerButton.addEventListener("click",() =>{
    EventListenerDiv.classList.toggle("esconder");
    
})


const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", event =>{
    console.log(event);
    output.innerHTML += "<br>grandparent"
})

/*
grandparent.addEventListener("click", event =>{
    output.innerHTML += "<br>grandparent 2"
})
*/

parent.addEventListener("click", event =>{
    console.log(event);
    output.innerHTML += "<br>parent"
})

child.addEventListener("click", event =>{
    console.log(event);
    output.innerHTML += "<br>child";
})
 
/*
document.addEventListener("click", event => {
    output.innerHTML += "<br>document";
})
*/


//Capture
/*
grandparent.addEventListener("click", event =>{
    console.log(event);
    output.innerHTML += "<br>grandparent"
}, {capture: true})

*/

// Stop Propagation
/*
child.addEventListener("click", event =>{
    event.stopPropagation();
    console.log(event);
    output.innerHTML += "<br>grandparent"
})
*/


// Rodar codigo somente uma vez
/*
grandparent.addEventListener("click", event =>{
    console.log(event);
    output.innerHTML += "<br>grandparent"
}, {once: true})
*/


// Remover EventListener

grandparent.addEventListener("click", printHello);

setTimeout(() => {
    grandparent.removeEventListener("click", printHello);
}, 6000)




function printHello() {
    output.innerHTML += "<br>Hello";
}


function resetOutput() {
    output.innerHTML = " ";
}

