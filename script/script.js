import { addTask } from './addTask.js';
import { Creationlist } from './Creationlist.js';
import { SupressTask } from './SupressTask.js';

document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('suppress').addEventListener('click', SupressTask);

Creationlist();