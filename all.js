const txt=document.querySelector('.txt');
const save=document.querySelector('.save');
const list=document.querySelector('.list');
let data=[]
function rederData(){
    let str="";
    data.forEach(function(item,index){
        str+=`<li>${item.content} <input class="delete" type="button" data-num="${index}" value="刪除待辦"></li>`
    
    })
    const list=document.querySelector('.list');
    list.innerHTML=str; 
}
//新增功能
save.addEventListener('click',function(e){
    if(txt.value==""){
        alert('請輸入內容')
        return;
    }
    let obj={};
    obj.content=txt.value
data.push(obj);
rederData();
})
//刪除待辦
list.addEventListener('click',function(e){
    if(e.target.getAttribute('class')!=='delete'){
        alert('你目前不是底件到案紐');
        return;
    }
let num=e.target.getAttribute('data-num');
console.log(num);
data.splice(num,1);
rederData();
})