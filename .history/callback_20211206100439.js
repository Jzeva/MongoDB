// Promise
/**
 * 三种状态
 * pending resolved(fulfilled) rejected
 *
 * 状态是不可逆的
 * pending -> resolved
 * pending -> rejected
 *
 * 为了监听，为了得到resolved的结果，我们用.then来获取结果
 * .then, 接收一个callback，这个callback返回的是一个新的promise
 * 为了抓取错误，我们用.catch
 * .catch, 接收一个callback，这个callback返回的是一个新的promise
 *
 */
// response, rejected
const promise = new Promise ((res,rej)=>{
    setTimeout(()=>{
        rej({name:'John'})
    },1000)
});

promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('error',error)
    })