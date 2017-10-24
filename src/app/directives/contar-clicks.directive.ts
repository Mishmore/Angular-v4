import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive ({
    // Name of the selector including elm that will include it
    selector: 'li[contar-clicks]'
})

export class ContarClicksDirective {
    clickN = 0;
    @HostBinding('style.opacity') opacity: number = .1;
    @HostListener('click', ['$event.target'])   onclick(btn){
        console.log('a', btn, "numero de clicks:", this.clickN++);
        this.opacity += .1;
    }
}
