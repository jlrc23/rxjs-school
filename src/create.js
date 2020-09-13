import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    const hello = Observable.create(function(observer){
        observer.next("Hello");
        setTimeout(()=>{
            observer.next("world");
        }, 1000);
        
    });

    const subscribe = hello.subscribe(evt=> displayLog(evt))
}