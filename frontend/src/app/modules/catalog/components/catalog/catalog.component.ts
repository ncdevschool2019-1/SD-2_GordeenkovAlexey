import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../../../../services/catalog.service";
import {Service} from "../../models/service";
import {HeaderService} from "../../../../services/header.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  private catalog: Service[];
  private subscription: Subscription;

  constructor(private catalogService: CatalogService, private headerService: HeaderService) {
  }

  ngOnInit() {
    this.getCatalog();
  }

  getCatalog() {
    if (this.subscription) this.subscription.unsubscribe();
    this.catalogService.getCatalog(this.headerService.getSelectedLink().name)
      .subscribe(catalog => this.catalog = catalog);
  }
}
