import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/02directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/02directives/structural-directive/structural-directive.component';
import { IfIfelseElseifComponent } from './components/03ControlFlow/if-ifelse-elseif/if-ifelse-elseif.component';
import { ForSwithchComponent } from './components/03ControlFlow/for-swithch/for-swithch.component';
import { DefaultPipesComponent } from './components/04pipe/default-pipes/default-pipes.component';


export const routes: Routes = [
  {
    path: 'atb-dir',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'str-dir',
    component: StructuralDirectiveComponent,
  },
  {
    path: 'controlflow-ifelse',
    component: IfIfelseElseifComponent
  },
  {
    path: 'for-swithch',
    component: ForSwithchComponent
  },
  {
    path : 'default-pipe',
    component : DefaultPipesComponent
  }
];
