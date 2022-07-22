import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  profile: any;
  constructor(private profileSvc: ProfileService,
    private router: Router) { }

  ngOnInit(): void {
    this.profileSvc.getProfileDetail().subscribe(
      (data: any) => {
        this.profile = data
      }
    );

  }

  back(){
    this.router.navigate(['/dashboard'])
    this.profile = this.profileSvc.clearProfileData();
  }

}
