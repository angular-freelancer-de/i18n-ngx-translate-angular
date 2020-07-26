import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-component",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private languageCodes: string[] = ["de", "en"];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.addLangs(this.languageCodes);
    this.translateService.setDefaultLang("de");
    this.selectLanguageByCode(this.translateService.getBrowserLang());
  }

  private selectLanguageByCode(languageCode: string): void {
    this.translateService.use(
      this.isLanguageCodeSupported(languageCode)
        ? languageCode
        : this.translateService.getDefaultLang()
    );
  }

  public get currentLanguageCode(): string {
    return this.translateService.currentLang;
  }

  public get supportedLanguageCodes(): string[] {
    return this.languageCodes;
  }

  public onSelectLanguage(e: any): void {
    this.selectLanguageByCode(e.target.value);
  }

  public get todaysDate(): Date {
    return new Date();
  }
  
  private isLanguageCodeSupported(languageCode: string): boolean {
    return this.supportedLanguageCodes.indexOf(languageCode) > -1;
  }
}
