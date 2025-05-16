import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // apenas RouterModule, sem .forRoot aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CadTech';
}
