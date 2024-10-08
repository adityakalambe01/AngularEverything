import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TsToHtmlComponent } from './components/ts-to-html/ts-to-html.component';
import { HtmlToTsComponent } from './components/html-to-ts/html-to-ts.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { SignalComponent } from './components/signal/signal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    TsToHtmlComponent,
    HtmlToTsComponent,
    TwoWayComponent,
    SignalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '04data_binding';
}
