import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { RestaurantService } from './restaurant.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Yelp-Api';
  searchForm: FormGroup;
  business: any;


  constructor(
    private formBuilder: FormBuilder,
    private restaurantServcie: RestaurantService) { }
    delivery: string

    ngOnInit() {
      this.searchForm = this.formBuilder.group({
        cost: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
      })
    }
    
  submit() {
      this.restaurantServcie.getBusiness(this.searchForm.value.cost, this.searchForm.value.city)
      .subscribe(info  => {
        this.business = info.businesses[Math.floor(Math.random()*info.businesses.length)]
        console.log(this.business);

        let deliver = this.business.transactions.indexOf('delivery')
        if(deliver > 0){
          this.delivery = "Pickup & Delivery!"
        } else {
          this.delivery = 'Pickup & Dine-In Only!'
        }
        return this.business
      })
    }
  }