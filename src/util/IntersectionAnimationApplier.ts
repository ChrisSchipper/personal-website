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

    constructor(
        element: HTMLElement,
    ) {
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

    private handleIntersect(entries: Array<IntersectionObserverEntry>, observer: IntersectionObserver): void {
        entries.forEach((entry) => {
            // In the case that the element has been destroyed without the disconnect method being called, we should
            // disconnect the observer so as not to have any memory leaks or errors thrown.
            if(entry.target === null || entry.target === undefined)
            {
                observer.disconnect();
                return;
            }

            // We only lazy-load the ad in the case that the entire div is within view.
            // This threshold can be adjusted depending on requirements.
            if (entry.intersectionRatio >= 0.6) {
                entry.target.classList.remove("fadeaway-element-popout");
                entry.target.classList.add("reveal-element-popup")
            } else
            if (entry.intersectionRatio < 0.5) {
                entry.target.classList.remove("reveal-element-popup")
                entry.target.classList.add("fadeaway-element-popout");
            }
        });
    }
}

export {IntersectionAnimationApplier, IntersectionAnimationApplierBase}
