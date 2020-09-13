import { displayLog } from './utils';
import { interval, timer } from 'rxjs';

export default () => {
    const source = interval(500);
    const subscription = source.subscribe(data=>displayLog(data));
    timer(3000).subscribe(()=>subscription.unsubscribe());

    const source2 = timer(4000, 100);
    const subs2 = source2.subscribe(data=>displayLog(`2- ${data}`));
    timer(5000).subscribe(()=>subs2.unsubscribe());
}