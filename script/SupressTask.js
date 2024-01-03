export let SupressTask = () => {
    let taskJson = localStorage.getItem('Tableau');
    let task = JSON.parse(taskJson);
    for (let i = 0; i < task.length; i++) {
        let elem = task[i];
        if (elem.state === true) {
            let suppLi = document.getElementById(elem.id);
            if (suppLi) {
                suppLi.parentNode.removeChild(suppLi);
            }
    
            task.splice(i, 1);
            let updatedtaskJson = JSON.stringify(task);
            localStorage.setItem('Tableau', updatedtaskJson);
            i--;
        }
    }
}