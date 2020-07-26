import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NgxDatePipe } from "./pipes/ngx-date.pipe";
import { registerLocaleData } from '@angular/common';
import localeDe from "@angular/common/locales/de"
import localeEn from "@angular/common/locales/en"

registerLocaleData(localeDe);
registerLocaleData(localeEn);

@NgModule({
  declarations: [AppComponent, NgxDatePipe],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    NgxDatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}
