// Your code here
const table= document.getElementsByTagName('table')[0]
let currentColor = "green"

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


if (target.tagName == "TD")   {
if (target.className == currentColor)    {
    target.className = ""  
}   else{
    target.className = currentColor
}
}
}

function paintFill(){
if (fillStatus = "Paint-fill: ON")  {

    document.getElementsByClass("").classList.add(currentColor);

}
}






// const clickd = document.getElementsById("table")
table.addEventListener("click", colorize)

let colorSelect =""

function getSelect(event){
    currentColor = event.target.value
    
  
}
const selection = document.getElementsByTagName("select")[0]
// console.log(select)
selection.addEventListener("change",getSelect)





