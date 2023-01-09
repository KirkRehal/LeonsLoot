// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import * as _ from 'lodash';
// import { GET_OAUTH_TOKEN_FROM_CONST } from 'src/app/constants/local-storage.const';
// import { OAuthService } from 'src/app/services/oauth.service';

// @Component({
//   selector: 'app-oauth',
//   templateUrl: './oauth.component.html',
//   styleUrls: ['./oauth.component.css']
// })
// export class OAuthComponent implements OnInit {
//   private fakeurl: string = 'http://localhost:4200/oauth#access_token=ya29.a0Aa4xrXMgXyk0Z1rjGxyQLQve7hE1cuYrJmF3vD9mOM3vT7j5Tj5FdJ_VpUl1F1iZ_eZOflVqtoyFFuO1eeEXYg2v10U8xbB27HoDub489O9mnjfMXCGRle7iTKjpUkNRvNCOvpVt2jAQsFn5tS-In08aM7tuqwaCgYKAWsSARASFQEjDvL9HNBMWdFlte8pwho2VOaBtQ0165&token_type=Bearer&expires_in=3599&scope=https://www.googleapis.com/auth/spreadsheets';

//   constructor(private oauthService: OAuthService, private router: Router) { }

//   ngOnInit(): void {
//     let x = 5;
//     const url = window.location.href;
//     const allParams = _.split(url, '#')[1];
//     const params = _.split(allParams, '&');

//     const tokenString = params[0];
//     const token = _.split(tokenString, '=')[1];
//     const date = new Date();


//     this.oauthService.setToken(token, date);
    
//     const location = localStorage.getItem(GET_OAUTH_TOKEN_FROM_CONST);
//     localStorage.removeItem(GET_OAUTH_TOKEN_FROM_CONST);
//     this.router.navigate([location ?? '']);
//   }

// }
