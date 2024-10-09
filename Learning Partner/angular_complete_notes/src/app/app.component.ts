import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AttributeDirectiveComponent } from './components/02directives/attribute-directive/attribute-directive.component';
import { TemplateFormComponent } from "./components/05Forms/template-form/template-form.component";
import { ReactiveFormComponent } from './components/05Forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/06Apis/get-api/get-api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, AttributeDirectiveComponent],

  //using routing
  // imports: [RouterOutlet, RouterLink],

  imports: [RouterOutlet, RouterLink,TemplateFormComponent, ReactiveFormComponent, GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_complete_notes';
}
