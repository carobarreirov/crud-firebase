## How to develop this App [Guide]

0.  Home [here](/README.md)
1.  Start UI project [here](/00starterfiles.md)
2.  Start Firebase project [here](/01firebase.md)
3.  [C]rud Operation [here](/02create.md)
4.  c[R]ud Operation [here](/03read.md)
5.  cr[U]d Operation [here](/04update.md)
6.  cru[D] Operation [here](/05delete.md)

## Start Firebase project and application

Go to [Firestore](https://firebase.google.com/) site and create and account.
Add a new Project following the [Firestore Guide](https://firebase.google.com/docs/web/setup#create-firebase-project-and-app)
![Project](/images/project.png)

### Import Firebase access

Go to the [QuickStart Guide](https://firebase.google.com/docs/firestore/quickstart) and follow the create a Cloud Firestore database section.

Inside Firebase Console, go to Project Overview and click to Settings.
![Project Settings](/images/settings.png)
In "Your apps" section wou will find you new app name.

In the `SDK setup and configuration`select the CDN radio option and copy that code into a new `index.js`[file]() as shown in this example.
![Project Settings](/images/cdn-option.png)

### Import Firestore modules

We will be using Firestore Database service.
To include this, in a new `main.js`file we will be importing our Firestore app and adding the Firestore modules as indicated in [Initialize Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart#initialize) documentation.

Remember we are using CDN link, no npm instllation. You will find all CDN links needed [here](https://firebase.google.com/docs/web/learn-more#available-libraries).

```javascript
import app from "./index.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

const db = getFirestore(app);
```

> Previous Step [here](/00starterfiles.md)

> Next Step [here](/02create.md)
