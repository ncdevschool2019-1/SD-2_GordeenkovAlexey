import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {Component} from "@angular/core";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private loadingService: Ng4LoadingSpinnerService) {
    loadingService.show();
    setTimeout(loadingService.hide(), 3000);
  }
}
