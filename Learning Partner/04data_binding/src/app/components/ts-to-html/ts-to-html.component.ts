import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-to-html',
  standalone: true,
  imports: [],
  templateUrl: './ts-to-html.component.html',
  styleUrl: './ts-to-html.component.css'
})
export class TsToHtmlComponent {
    angularversion: string = "18.2.2";

    name: string = "Aditya Kalambe";
}
