## How to develop this App [Guide] :keyboard:	

0.  :house: Home [here](/README.md)

1.  :checkered_flag: Start UI project [here](/00starterfiles.md)
2.  :fire: Start Firebase project [here](/01firebase.md)
3.  :pencil2:	[C]rud Operation [here](/02create.md)
4.  :notebook:	c[R]ud Operation [here](/03read.md)
5.  :memo: cr[U]d Operation [here](/04update.md)
6.  :wastebasket:	cru[D] Operation [here](/05delete.md)

## Starter files: Html and CSS, the UI

### Html Content

In an `index.html` file we will have the following html code:

```html
<div class="container p-4">
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <div class="card">
        <div class="card-body">
          <form id="task-form">
            <div class="form-group">
              <input
                type="text"
                id="task-title"
                class="form-control"
                placeholder="Task Title"
                autofocus
              />
            </div>
            <div class="form-group">
              <textarea
                id="task-description"
                rows="3"
                class="form-control"
                placeholder="Task Description"
              ></textarea>
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

In the same `index.html` file, head section, you can add a Bootstrap/Bootswatch theme:

```CSS
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/pulse/bootstrap.min.css">
```

More templates on [Bootswatch](https://bootswatch.com/) and CDN links on [BootstrapCDN](https://www.bootstrapcdn.com/bootswatch/)

> Home [here](/README.md)

> Next Step [here](/01firebase.md)
