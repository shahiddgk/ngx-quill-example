import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { QuillModule } from 'ngx-quill'
import { AppComponent } from './app.component'
import { DefaultComponent } from './default/default.component'


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule { }
