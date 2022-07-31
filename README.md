# js-async-utils

Utilities for asynchronous tasks and functions

## promiseWrapper

To run asynchronous tasks, we use promises. And in some use cases, we use it often in our project. Hence I have implemented promiseWrapper to simplify the syntax.

Eg. Standard way

```js
const promise = (args) =>{
  return new Promise(async(resolve, reject)=>{
     try{
      //exectue task

      //To reject
      if(condition){
        reject('message')
      }

      resolve(data)
     }catch(err){
      reject(err)
     }
  }
}
```

//We can make this even simpler using promiseWrapper from async-utilities package

```js
import { promiseWrapper } from 'js-async-utils';

const promise = promiseWrapper(async args => {
  //Execute task

  //To reject
  if (condition) {
    throw new Error('message');
  }

  return data;
});
```

//To run this eg.

```js
const executePromise = async () => {
  try {
    const promiseResult = await promise(args);
  } catch (err) {
    //HandldeError
  }
};
```
