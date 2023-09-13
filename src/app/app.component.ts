import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-food-and-kitchens';
  loadedFeature = 'home';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
