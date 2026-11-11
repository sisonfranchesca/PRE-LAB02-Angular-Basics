import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Franchesca Zyreen Sison';
  location = 'City of San Fernando, Pampanga';
  email = 'sisonfranchescazyreen@gmail.com';
  phone = '0929 315 4020';

  profile = 'I am a student studying web development and have a passion for design. I enjoy designing websites and creating meaningful content that will help reach target clients and customers. I am open for employment and freelance commissions that would widen my experience in this field and digital environment.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'Canva Design',
    'Angular',
    'Web Design',
    'Social Media Marketing',
    'Proficient in Microsoft Office Suite',
    'Time Management',
    'Active Listening',
    'Teamwork'
  ];

  education = [
    'College - Holy Angel University - Deans Lister',
    'Senior High School - Holy Angel University -  with High Honors',
    'Junior High School - St. Scholasticas Academy -  with Honors',
  ];

  certificates = [
    'compTIA',
    'Introduction to Figma Course - Simplilearn',
    'Introduction to Graphic Design - Simplilearn',
    'Website UI/UX Designing using chatGPT - Simplilearn',
    'Back-End Developemtn and APIs V8 - Free Code Camp',
    'End Point Security - Cisco',
  ];

 // message = 'Welcome to my profile!';
 // clickCount = 0;

 // showMessage() {
 //   this.clickCount++;
 //   this.message = `You clicked the button ${this.clickCount} time(s).`;

  message = 'Click To View My Project!';

  showMessage() {
    this.message = 'Thank you for checking my project!';
    window.open("https://mfc-units-sun-2026.vercel.app/", "_blank");
  }
}
