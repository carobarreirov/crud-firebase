## How to develop this App [Guide] :keyboard:	

0.  :house: Home [here](/README.md)

1.  :checkered_flag: Start UI project [here](/00starterfiles.md)
2.  :fire: Start Firebase project [here](/01firebase.md)
3.  :pencil2:	[C]rud Operation [here](/02create.md)
4.  :notebook:	c[R]ud Operation [here](/03read.md)
5.  :memo: cr[U]d Operation [here](/04update.md)
6.  :wastebasket:	cru[D] Operation [here](/05delete.md)

## cru[Delete] Operation

You can find the `Delete code` in this [branch](https://github.com/carobarreirov/crud-firebase/tree/delete) in the `main.js` [file](https://github.com/carobarreirov/crud-firebase/blob/delete/main.js)

The `deleteDoc`module was added to our project.
Find more information about this module on the [Firestore](https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents) official Docs site.

The Read functions:

```javascript
const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
    });
```

> Previous Step [here](/04update.md)

> Home [here](/README.md)
