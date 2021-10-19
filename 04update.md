## How to develop this App [Guide]

0.  Home [here](/README.md)
1.  Start UI project [here](/00starterfiles.md)
2.  Start Firebase project [here](/01firebase.md)
3.  [C]rud Operation [here](/02create.md)
4.  c[R]ud Operation [here](/03read.md)
5.  cr[U]d Operation [here](/04update.md)
6.  cru[D] Operation [here](/05delete.md)

## cr[Update]d Operation

You can find the `Update code` in this [branch](https://github.com/carobarreirov/crud-firebase/tree/update) in the `main.js` [file](https://github.com/carobarreirov/crud-firebase/blob/update/main.js)

The `getDoc`, `doc`and `updateDoc`modules were added to our project.
Find more information about those modules on the [Firestore](https://firebase.google.com/docs/firestore/manage-data/add-data#update-data) official Docs site.

The Read functions:

```javascript
const getTask = (id) => getDoc(doc(db, "tasks", id));
const updateTask = (id, updateTask) => updateDoc(doc(db, "tasks", id), updateTask);
    });
```

> Previous Step [here](/03read.md)

> Next Step [here](/05delete.md)
