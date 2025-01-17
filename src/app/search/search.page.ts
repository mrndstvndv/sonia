import { Component } from "@angular/core";
import { IonButton, IonIcon, IonInput } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { arrowBack } from "ionicons/icons";
import { SearchComponent } from "../home/components/search.component";

@Component({
  selector: 'search-page',
  templateUrl: 'search.page.html',
  standalone: true,
  imports: [IonButton, IonIcon, IonInput, SearchComponent],
})
export class SearchPage {
  constructor() {
    addIcons({
      arrowBack
    })
  }

  backClicked() {
    window.history.back();
  }
}
