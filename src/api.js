import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

export class api{
    static getComment(id){
        const numero=id;
        return timer(Math.random()*3000).pipe(
            mapTo({id:id, comment:`comment number ${numero}`})
        );
    }
}