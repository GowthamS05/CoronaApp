import { OnDestroy } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';

export class RootComponent implements OnDestroy {
    subscriptions: Subscription[] = [];
    subscribe(inputs: any, onSuccess: any, onError?: any): Subscription {
        let subscription;
        subscription = combineLatest(inputs).subscribe(state => {
            try {
                onSuccess(state);
            } catch (err) {
                this.error(err);
                onError && onError(err)
            }
        }, onError);
        this.subscriptions.push(subscription);
        return subscription;
    }

    ngOnDestroy() {
        this.subscriptions.map((a, i) => {
            this.subscriptions[i].unsubscribe();
        })
        this.subscriptions = [];
    }
    error(err) {
        console.log(err);
    }
}