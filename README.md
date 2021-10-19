#JS [CRUD] App with Firebase

Javascript To-Do List CRUD Application with Firebase-Firestore version 9.0.

With this project we will apply our three web development layers: html, css and js to our first simple application: A To-Do List.
Our application will have the four basic CRUD operations: create, read, update and delete.
All our tasks will be stored in a database and all operations will be reflected in that database. For that last point we will use a Firebase service: Firestore.
 
 ## Html and CSS, the UI
 ### Html Content
 ```html
<div class="container p-4">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="card">
                    <div class="card-body">
                        <form id="task-form">
                            <div class="form-group">
                                <input type="text"
                                id="task-title"
                                class="form-control"
                                placeholder="Task Title"
                                autofocus>
                            </div>
                            <div class="form-group">
                                <textarea id="task-description"
                                rows="3"
                                class="form-control"
                                placeholder="Task Description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" id="btn-task-form">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

### CSS Bootswatch CDN link

```CSS
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/pulse/bootstrap.min.css">
```

More templates on [Bootswatch](https://bootswatch.com/) and CDN links on [BootstrapCDN](https://www.bootstrapcdn.com/bootswatch/)

## Firebase and Firestore
### Start Firebase project and application

### Import Firebase access

### Import Firestore modules 

### Create (**C**RUD) or Add data with Firestore modules 


