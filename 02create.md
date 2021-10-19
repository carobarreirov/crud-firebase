## How to develop this App [Guide] :keyboard:	

0.  :house: Home [here](/README.md)

1.  :checkered_flag: Start UI project [here](/00starterfiles.md)
2.  :fire: Start Firebase project [here](/01firebase.md)
3.  :pencil2:	[C]rud Operation [here](/02create.md)
4.  :notebook:	c[R]ud Operation [here](/03add.md)
5.  :memo: cr[U]d Operation [here](/04update.md)
6.  :wastebasket:	cru[D] Operation [here](/05delete.md)

## [Create]rud Operation

You can find the `Create code` in this [branch](https://github.com/carobarreirov/crud-firebase/tree/create) in the `main.js` [file](https://github.com/carobarreirov/crud-firebase/blob/create/main.js)

The `collection`and `addDoc`modules were added to our project.
Find more information about those modules on the [Firestore](https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document) official Docs site.

The function to Add Tasks:

```javascript
const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), {
    title,
    description,
  });
```

> Previous Step [here](/01firebase.md)

> Next Step [here](/03read.md)
