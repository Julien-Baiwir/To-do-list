export let Creationlist = () => {

    let taskJson = localStorage.getItem('Tableau');

    if (taskJson){
    let task = JSON.parse(taskJson);
    let taskslist = document.getElementById("taskslist");
    taskslist.innerHTML = "";

    for (let elem of task){
        let tasks = document.createElement('li');
        tasks.innerHTML = elem.task
        tasks.id = elem.id;
        taskslist.append(tasks);

        let divRadio = document.createElement('label');
        divRadio.className = "container";
        let checkRadio = document.createElement('input');
        checkRadio.type = "checkbox";
        checkRadio.className = 'radioLi';
        checkRadio.checked = elem.state;
        checkRadio.addEventListener('click', function () {
        elem.state = checkRadio.checked;
        let updatedtaskJson = JSON.stringify(task);
        localStorage.setItem('Tableau', updatedtaskJson);
        tasks.classList.toggle('barre');
        })

        if(elem.state == true){
            tasks.className='barre';
        }
        
        let divCheck = document.createElement('div');
        divCheck.className = "checkmark" ;
        divRadio.append(checkRadio);
        divRadio.append(divCheck);
        tasks.append(divRadio);
    }
}
}