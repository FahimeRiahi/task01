import {Component, OnInit} from '@angular/core';
import {SampleServiceService} from '../services/sample-service.service';

@Component({
  selector: 'app-account-number-formatting',
  templateUrl: './account-number-formatting.component.html',
  styleUrls: ['./account-number-formatting.component.scss']
})
export class AccountNumberFormattingComponent implements OnInit {
public result = '';
  constructor(private sampleServiceService: SampleServiceService) {

  }

  ngOnInit() {
    
  }
  checkAccountNumber(accountNumber)
  {
  this.result = this.sampleServiceService.checkAccountNumber(accountNumber.value);
  }

}
