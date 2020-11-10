import { Component, OnInit } from '@angular/core';
import { CribsService } from 'src/app/services/cribs.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public cribs;

  constructor(private cribService: CribsService) { }

  ngOnInit(): void {
    this.getCribs();
  }

  getCribs() {
    this.cribService.getCribs().subscribe(
      data => { this.cribs = data },
      err => console.error(err),
      () => console.log('cribs loaded')
    );
  }

}
