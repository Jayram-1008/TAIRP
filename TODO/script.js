
const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn-add')[0];
console.log(addTaskBtn)

addTaskBtn.addEventListener("click", ()=>{
    if(inputVal.value.trim()!= 0){
        let localItems = JSON.parse(localStorage.getItem('localItem'));
        if(localItems === null){
            taskList = []
        }else{
            taskList = localItems;
        } 
        taskList.push(inputVal.value)
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }
    
    showList()
    document.getElementsByClassName('inputVal')[0].value = ''
})

function showList(){
    let  output = ''
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    let taskListShow = document.querySelector('.todoListItem')
    if(localItems === null){
        taskList = []
    }else{
        taskList = localItems;
    }
    taskList.forEach((data, index) => {
        output += `
        <div class = "todoList">
                        <p class = "pText">${data}</p>
                        <button class = "deleteTask" onClick = "deleteItem(${index})">X</button>
        </div>
        
        `
    });

    taskListShow.innerHTML = output 
}
showList()

function deleteItem(index){
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index,1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showList()
}

function deleteAllTask(){
    localStorage.clear();
    showList() 
} 

