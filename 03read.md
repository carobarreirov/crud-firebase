## How to develop this App [Guide]

0.  Home [here](/README.md)
1.  Start UI project [here](/00starterfiles.md)
2.  Start Firebase project [here](/01firebase.md)
3.  [C]rud Operation [here](/02create.md)
4.  c[R]ud Operation [here](/03read.md)
5.  cr[U]d Operation [here](/04update.md)
6.  cru[D] Operation [here](/05delete.md)

## c[Read]ud Operation

You can find the `Read code` in this [branch](https://github.com/carobarreirov/crud-firebase/tree/read) in the `main.js` [file](https://github.com/carobarreirov/crud-firebase/blob/read/main.js)

The `getDocs`and `onSnapshot`modules were added to our project.
Find more information about those modules on the [Firestore]() official Docs site.

The Read functions:

````javascript
const getTasks = () => getDocs(collection(db, "tasks"));
const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback);
    });
    ```

> Previous Step [here](/02create.md)
> Next Step [here](/04update.md)
````
