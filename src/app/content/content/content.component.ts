import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/services/service.service";
import { all } from "src/app/models/all";
import { Router } from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  allData= new all();
  constructor(private service:ServiceService,public router:Router) { }

  ngOnInit(): void {
    this.service.getAllData("all").subscribe((data)=>{
      this.allData=data;
    })
  }

}
