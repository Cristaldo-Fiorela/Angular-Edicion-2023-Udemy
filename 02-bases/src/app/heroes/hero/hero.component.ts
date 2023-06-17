import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  // Metodo getter
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Metodo
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

}
