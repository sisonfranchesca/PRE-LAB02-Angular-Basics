import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
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
    'Junior High School - St. Scholasticas Academy -  with Honors',
    'College - Holy Angel University - Deans Lister',
    'Senior High School - Holy Angel University -  with High Honors'
  ];

  certificates = [
    'CompTIA IT Fundamentals (ITF+) Certification',
    'Introduction to Figma Course - Simplilearn',
    'Introduction to Graphic Design - Simplilearn',
    'Website UI/UX Designing using chatGPT - Simplilearn',
    'Digital Advertising Certified - HubSpot Academy',
    'Content Marketing Certified - HubSpot Academy',
    'Exploring IoT with Cisco Packet Tracer Certification - Cisco Networking Academy',
    'End Point Security Certificate - Cisco Networking Academy',
    'Legacy JavaScript Algorithms and Data Structure V7 - Free Code Camp',
    'Back-End Developemtn and APIs V8 - Free Code Camp'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Canva', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'MongoDB', level: 'Intermediate' },
    { tool: 'Vercel', level: 'Intermediate' },
    { tool: 'XAMPP', level: 'Intermediate' },
    { tool: 'WIX', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}

 // message = 'Click To View My Project!';

 // showMessage() {
 //   this.message = 'Thank you for checking my project!';
 //   window.open("https://mfc-units-sun-2026.vercel.app/", "_blank");
 // }
//}
