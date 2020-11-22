import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CribsService } from 'src/app/services/cribs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  types: string[] = [
    'Condo',
    'House',
    'Duplex'
  ];
  cribform: FormGroup;
  validMessage: string = '';

  constructor(private cribService: CribsService) { }

  ngOnInit(): void {
    this.cribform = new FormGroup({
      type: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      bedroom: new FormControl('', Validators.required),
      bathroom: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
  }

}
