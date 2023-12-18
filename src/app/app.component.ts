import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {
  }

  
  

  title = 'my-food-and-kitchens';
  loadedFeature = 'home';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
