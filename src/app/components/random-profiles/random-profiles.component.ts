import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ToastController } from '@ionic/angular';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import Swiper from 'swiper';

@Component({
    selector: 'app-random-profiles',
    templateUrl: './random-profiles.component.html',
    styleUrls: ['./random-profiles.component.scss']
})
export class RandomProfilesComponent implements OnInit {
    currentIndex = 0;
    @ViewChild('slides', {static: true}) slides: any;

    // slideOpts = {
    //     initialSlide: 0,
    //     speed: 400,
    //     spaceBetween: 20,
    //     slidesPerView: 1.5,
    //     centeredSlides: true,
    //     centeredSlidesBounds: true,
    //     slidesOffsetBefore: 30,
    //     slidesOffsetAfter: 30
    //     };
    // @ViewChild('slides' , {  static: true })  slides: IonSlides;
    // slideOpts: any;
    // slideOpts = {
    //     initialSlide: 0,
    //     speed: 400
    //   };
    //Flip
    //   slideOptions = {
    //     on: {
    //       beforeInit() {
    //         const swiper = this;
    //         swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
    //         swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    //         const overwriteParams = {
    //           slidesPerView: 1,
    //           slidesPerColumn: 1,
    //           slidesPerGroup: 1,
    //           watchSlidesProgress: true,
    //           spaceBetween: 0,
    //           virtualTranslate: true,
    //         };
    //         swiper.params = Object.assign(swiper.params, overwriteParams);
    //         swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
    //       },
    //       setTranslate() {
    //         const swiper = this;
    //         const { $, slides, rtlTranslate: rtl } = swiper;
    //         for (let i = 0; i < slides.length; i += 1) {
    //           const $slideEl = slides.eq(i);
    //           let progress = $slideEl[0].progress;
    //           if (swiper.params.flipEffect.limitRotation) {
    //             progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
    //           }
    //           const offset$$1 = $slideEl[0].swiperSlideOffset;
    //           const rotate = -180 * progress;
    //           let rotateY = rotate;
    //           let rotateX = 0;
    //           let tx = -offset$$1;
    //           let ty = 0;
    //           if (!swiper.isHorizontal()) {
    //             ty = tx;
    //             tx = 0;
    //             rotateX = -rotateY;
    //             rotateY = 0;
    //           } else if (rtl) {
    //             rotateY = -rotateY;
    //           }

    //           $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

    //           if (swiper.params.flipEffect.slideShadows) {
    //             // Set shadows
    //             let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    //             let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
    //             if (shadowBefore.length === 0) {
    //               shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
    //               $slideEl.append(shadowBefore);
    //             }
    //             if (shadowAfter.length === 0) {
    //               shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
    //               $slideEl.append(shadowAfter);
    //             }
    //             if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    //             if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    //           }
    //           $slideEl
    //             .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    //         }
    //       },
    //       setTransition(duration) {
    //         const swiper = this;
    //         const { slides, activeIndex, $wrapperEl } = swiper;
    //         slides
    //           .transition(duration)
    //           .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
    //           .transition(duration);
    //         if (swiper.params.virtualTranslate && duration !== 0) {
    //           let eventTriggered = false;
    //           // eslint-disable-next-line
    //           slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
    //             if (eventTriggered) return;
    //             if (!swiper || swiper.destroyed) return;

    //             eventTriggered = true;
    //             swiper.animating = false;
    //             const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
    //             for (let i = 0; i < triggerEvents.length; i += 1) {
    //               $wrapperEl.trigger(triggerEvents[i]);
    //             }
    //           });
    //         }
    //       }
    //     }
    //   };
    constructor(private router: Router,
        private toastController: ToastController
    ) {
    }

    profileData = [{ name: 'Ramana', age: 24, gender: 'male', height: '5 ft 10 in', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-11.jpg' },
    { name: 'Santhosh', age: 24, height: '5 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-11.jpg' },
    { name: 'Hari', age: 24, height: '5 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-11.jpg' },
    { name: 'Sathish', age: 24, gender: 'male', height: '5 ft 10 in', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-11.jpg' },
    { name: 'Sandy', age: 24, height: '5 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-11.jpg' },
    { name: 'Vasanth', age: 24, height: '5 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-11.jpg' }]

    ngOnInit(): void {
        // this.getSlideOpts();
    }

    back() {
        this.router.navigate(['dashboard']);
    }

    nextSlide( index: number, profile: any, msg?: String): any {
        this.presentToast(msg, profile);
        if (index === (this.profileData.length - 1)) {
            this.back();
            this.profileData.splice(index, 1);
        } else {
            this.profileData.splice(index, 1);
            // slides.slideNext();
        }
    }

    onSlideChange(value: any, data?: any) {
        this.slides.getActiveIndex().then((index:number) => {
            this.currentIndex = index;
            console.log('active', this.currentIndex);
        })
        this.slides.getPreviousIndex().then((index: number) => {
            console.log(index);
            const i = index || 0;
            const msg = this.currentIndex === i ? 'Intrested' : '';
            this.presentToast(msg, this.profileData[this.currentIndex]);
            this.profileData.splice(index ,1);
            console.log('indexindex', index);
            // this.slides.slideTo(1, 500);
            if (this.profileData && !this.profileData.length) {
                this.router.navigate(['/dashboard'])
            }
        });
        this.slides.update();
    }

    // async onSlideChange(event: any) {
    //     const index: number = await event.target.getActiveIndex();
    //     this.slides.getActiveIndex().then((index: number) => {
    //         console.log('hhhhh',index);
    //     });
    //     // this.slides.lockSwipeToNext(true);
    //     this.profileData.splice(index - 1, 1);
    //     this.profileData = this.profileData;
    //     console.log('tap', index);
    //     console.log(this.profileData);
    //     console.log(this.slides);
    // }

    async presentToast(msg?: String, data?: any) {
        const message = msg && (msg === 'Intrested') ? `Intrest sent to ${data.name}` : `Not Intreseted`
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: "top",
        });
        toast.present();
    }

}
