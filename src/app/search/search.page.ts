import { Component } from "@angular/core";
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { arrowBack } from "ionicons/icons";

@Component({
  selector: 'search-page',
  templateUrl: 'search.page.html',
  standalone: true,
  imports: [IonButton, IonIcon],
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
