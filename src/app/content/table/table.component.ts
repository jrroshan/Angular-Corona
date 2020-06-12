import { Component, OnInit } from '@angular/core';
import { countries } from "../../models/all";
import { Router } from "@angular/router";
import { ServiceService } from "src/app/services/service.service"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  countryData : countries[];
  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.service.getCountryData("countries").subscribe((data)=>{
      this.countryData=data;
    })
  }

}
