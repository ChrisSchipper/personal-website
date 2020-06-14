abstract class IntersectionAnimationApplierBase {
    public abstract Observe(): void;
    public abstract Disconnect(): void;
}

// An IntersectionAnimationApplier is an implementation of JavaScript's IntersectionObserver
// with business logic specific to my personal website. It is used to add/remove css classes
// from elements across different thresholds with the intent being to allow the website to
// appear more dynamic
class IntersectionAnimationApplier extends IntersectionAnimationApplierBase {
    private _element: HTMLElement;
    private _observer: IntersectionObserver;

    constructor(element: HTMLElement) {
        super();
        this._element = element;
        const options: object = {
            root: null,
            rootMargin: "0px",
            threshold: [0.5, 0.6, 0.7] // Since we only care about the 0.6 threshold, we check for 0.6(+-0.1)
        };
        this._observer = new IntersectionObserver(this.handleIntersect, options);
    }

    public Observe(): void {
        this._observer.observe(this._element);
    }

    public Disconnect(): void {
        this._observer.disconnect();
    }

    // Ideally in the future this would be able to take any amount of css classes as a parameter and add/remove them
    // from the element(s) as necessary; however, with minimal research I couldn't find a way to give the callback method
    // any extra parameters and it cannot access class-level variables due to scope.
    // For now this method greatly limits the value of the IntersectionAnimationApplier
    // If I have time in the future, I may come back and buff this so that the class has more use.
    // For the time being, it does what I need it to do, so there is no obvious benefit in further engineering the solution.
    private handleIntersect(entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver): void {
        entries.forEach((entry) => {
            // In the case that the element has been destroyed without the disconnect method being called, we should
            // disconnect the observer so as not to have any memory leaks or errors thrown.
            if(entry.target === null || entry.target === undefined)
            {
                observer.disconnect();
                return;
            }

            // We only modify the class list in the case that the element is within view
            if (entry.intersectionRatio >= 0.6) {
                entry.target.classList.add("reveal-element-popup");
                observer.disconnect();
            }
        });
    }
}

export {IntersectionAnimationApplier, IntersectionAnimationApplierBase}
