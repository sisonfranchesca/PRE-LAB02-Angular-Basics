import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  // @if
  showProjects = true;

  // @for
  projects = [
    { name: 'Personal CV Website', tech: 'Angular' },
    { name: 'Rental Condo Unit', tech: 'HTML and CSS' },
    { name: 'Zyreen Cafe', tech: 'HTML and CSS' },
    { name: 'Aureji Claws Admin interface', tech: 'HTML and CSS' }
  ];

  // @switch
  selectedLevel = 'All';
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

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  filteredProficiencies() {
    if (this.selectedLevel === 'All') {
      return this.proficiencies;
    }
    return this.proficiencies.filter(item => item.level === this.selectedLevel);
  }
}
