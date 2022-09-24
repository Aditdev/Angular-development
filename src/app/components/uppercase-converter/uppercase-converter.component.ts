import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from '../../services/uppercase-converter.service';
import { HttpErrorResponse } from '@angular/common/http';
// import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css'],
})
export class UppercaseConverterComponent implements OnInit {
  public result: any;

  constructor(private _service: UppercaseConverterService) {}

  ngOnInit(): void {}

  public convert(obj:any): any {
    this._service.convertToUppercase(obj).subscribe(
      (res:any) => (this.result = res),
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }
}
