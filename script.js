const { header } = require("express/lib/request");

const baseURL = 'http://localhost:8383'
var AddBtn = document.getElementById('AddTask');
var InputFld = document.getElementById('text');
var TaskList = document.getElementById('container');


AddBtn.addEventListener('click', ()=>{
    getInfo()
    var para = document.createElement('p');
    para.innerText = InputFld.value;
    TaskList.appendChild(para);
    InputFld. value ='';

    para.addEventListener('click', ()=>{
        para.style.textDecoration = "line-through";
    })

    para.addEventListener('dblclick', ()=>{
        TaskList.removeChild(para);
    });
});

async function getInfo(e){
    if (InputFld.value ==''){return }
    const res = await fetch(baseURL, {
        method: 'POST',
        mode: "cors"
    })
    header:({"Content-Type":'application/json'})
    body: JSON.stringify({
        parcel: InputFld.value
    }) 
}
