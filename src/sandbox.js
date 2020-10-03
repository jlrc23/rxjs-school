import { updateDisplay, displayLog } from './utils';
import { api } from './api';
import { merge, fromEvent, concat, forkJoin, zip } from 'rxjs';
import { map, endWith, tap } from 'rxjs/operators';

export default () => {
    /** start coding */
    const button = document.getElementById('btn');
    /** get 4 consecutive comments */
    const getComments = () =>{
        //get observables from fake REST API.
        const comment1$ = api.getComment(1);
        const comment2$ = api.getComment(2);
        const comment3$ = api.getComment(3);
        const comment4$ = api.getComment(4);
        //subscribe to all the observables to get and display comments
        forkJoin(comment1$, comment2$, comment3$, comment4$).pipe(
            tap(console.log),
            map(JSON.stringify), //map(({id, comment}) => `#${id} - ${comment}`),
            endWith('--------//--------')
        ).subscribe(data =>{
            displayLog(data);
        })
    }

    /** get comments on button click */
    fromEvent(button, 'click').subscribe(getComments);

    /** end coding */
}