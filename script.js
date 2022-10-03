// Your code here
const table= document.getElementsByTagName('table')[0]

function makeRow (){
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++){
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}
makeRow()
makeRow()
makeRow()

const addRow = document.getElementById("add-row")
addRow.addEventListener("click", function(){makeRow()})

// td.className = 'green'

function colorize(event){
const target = event.target
if (target.className.length)    {
    target.className = ""   
}   else{
    target.className = 'green'
}
}


// const clickd = document.getElementsById("table")
table.addEventListener("click", colorize)

let colorSelect =""

function getSelect(event){
    // colorSelect = event.target.value
  
}
const selection = document.getElementsByTagName("select")
// console.log(select)
selection.addEventListener("change",getSelect)
console.log(event.target.value)

