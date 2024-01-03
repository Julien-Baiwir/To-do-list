import {Creationlist} from './Creationlist.js';

export let addTask = () => {
    let task = [];
    let taskJsonB = localStorage.getItem('Tableau');

    if (taskJsonB){
        task = JSON.parse(taskJsonB);
    }

    let inputTask = document.getElementById('taskInput');
    let inputTaskValue = inputTask.value;

    let maxId = 0;
    for (let i = 0; i < task.length; i++) {
        if (task[i].id > maxId) {
            maxId = task[i].id;
        }
    }

    let object = {};

    object.id = (parseInt(maxId) + 1);
    object.task = inputTaskValue;
    object.state = false;

    task.push(object);

    let taskJson = JSON.stringify(task);
    localStorage.setItem('Tableau', taskJson);

    inputTask.value = "";
    Creationlist();
};