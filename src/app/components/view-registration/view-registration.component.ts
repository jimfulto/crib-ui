import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CribsService } from 'src/app/services/cribs.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public cribReg;

  constructor(private cribService: CribsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCribReg(this.route.snapshot.params.id);
  }

  getCribReg(id: number) {
    this.cribService.getCrib(id).subscribe(
      data => {
        this.cribReg = data;
      },
      err => console.error(err),
      () => console.log('cribs loaded')
    );
  }
}
