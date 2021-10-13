import app from "./index.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js"

const db = getFirestore(app);

//Form Element
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDes = document.getElementById("task-description");
// Card Element
const taskCard = document.getElementById("task-card");

//CREATE Section
const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"),{
        title, 
        description,
    });

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskTitle.value;
    const description = taskDes.value;
    console.log(title, description);

    await saveTask(title, description);

        getTasks();

    taskForm.reset();
    taskTitle.focus();
});

//READ Section
const getTasks = () => getDocs(collection(db, "tasks"));
const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);

window.addEventListener('DOMContentLoaded', async (e) => {
    onGetTasks((querySnapshot) => {
        taskCard.innerHTML = ' '
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
    
            const task = doc.data();
    
            taskCard.innerHTML += `<div class="card card-body mt-2 
            border-primary">
            <h3 class="h5"> ${task.title}</h3>
            <p> ${task.description}</p>
            <div>
                <button class="btn btn-primary"> Delete </buttton>
                <button class="btn btn-secondary"> Edit </buttton>
            </div>
            </div>`
        });
    })  
})