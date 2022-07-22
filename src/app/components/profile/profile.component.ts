import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ProfileDetailsComponent,
      cssClass: 'my-custom-class profileDetail',
      breakpoints: [0.5, 1],
      initialBreakpoint: 0.5,
      backdropBreakpoint: 1
    });
    return await modal.present();
  }

  back() {
    this.router.navigate(['/dashboard'])
    this.modalController.dismiss();
  }

}
