import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileDetail: any = new BehaviorSubject('');

  profileData = [{ name: 'Ramana', age: 24, gender: 'male', height: '5 ft 10 in', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Muthu', age: 24, height: '4 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Hari', age: 25, height: '1 ft 10 in', gender: 'male', role: 'Software Engineer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Sathish', age: 26, gender: 'male', height: '5 ft 10 in', role: 'Developer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'madurai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Sandy', age: 27, height: '6 ft 10 in', gender: 'male', role: 'Software Engineer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Santhosh', age: 24, height: '5 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'theni,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Ramana', age: 27, gender: 'male', height: '5 ft 10 in', role: 'Software Engineer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Muthu', age: 28, height: '3 ft 10 in', gender: 'male', role: 'Developer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Hari', age: 29, height: '2 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Sathish', age: 44, gender: 'male', height: '5 ft 10 in', role: 'Software Engineer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Sandy', age: 33, height: '5 ft 10 in', gender: 'male', role: 'Developer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'vadapalani ,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Santhosh', age: 22, height: '1 ft 10 in', gender: 'male', role: 'Software Tester', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' },
  { name: 'Santhosh', age: 33, height: '8 ft 10 in', gender: 'male', role: 'Software Engineer', details: 'Mirugasirisham Hindu-Telugu chetty', location: 'chennai,Tamilnadu', image: 'assets/slide-1.jpg' }]

  constructor() { }

  getProfileDetail() {
    return this.profileDetail;
  }

  updateProfileDetail(profile:any){
    this.profileDetail.next(profile);
  }

  clearProfileData() {
    this.profileDetail.next('');
  }

  getProfileData() {
    return this.profileData;
  }
}
