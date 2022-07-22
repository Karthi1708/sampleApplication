import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
    private profileService: ProfileService) { }

profileData:any;

  ngOnInit(): void {
    this.profileService.clearProfileData();
    this.profileData = this.profileService.getProfileData();
  }

  randomProfile(){
    this.router.navigate(['/randomprofiles'])
  }

  openProfile(profile:any){
    this.profileService.updateProfileDetail(profile);
    this.router.navigate(['/profile'])
  }

}
