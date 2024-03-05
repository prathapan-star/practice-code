import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { GridCardComponent } from './grid-card/grid-card.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ButtonComponent } from './button/button.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeComponent,
    ParentChildComponent,
    ChildParentComponent,
    GridCardComponent,
    FormComponent,
    ListComponent,
    InputFieldComponent,
    ButtonComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
