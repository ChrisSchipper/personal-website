import { IntersectionAnimationApplier, IntersectionAnimationApplierBase } from "./IntersectionAnimationApplier";

abstract class IntersectionAnimationApplierFactoryBase {
    public abstract Create(element: HTMLElement): IntersectionAnimationApplierBase;
}

// Simple factory used to create an IntersectionAnimationApplier
class IntersectionAnimationApplierFactory extends IntersectionAnimationApplierFactoryBase {
    public Create(element: HTMLElement): IntersectionAnimationApplier {
        return new IntersectionAnimationApplier(element)
    }
}

export {IntersectionAnimationApplier, IntersectionAnimationApplierFactory };