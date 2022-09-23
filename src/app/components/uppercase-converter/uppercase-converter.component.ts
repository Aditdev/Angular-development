import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from 'src/app/services/uppercase-converter.service';
import {HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent implements OnInit {

  private 
  constructor() { }

  ngOnInit(): void {
  }

}
