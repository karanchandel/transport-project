import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentComponent: any;
  constructor(private router: Router
    // public lazyRouter: ActivatedRoute,
    // private loginService: LoginService,
    // public dialog: MatDialog,
    // private restServ: RestService,
    // private sessServ: SessionstorageService,
    // private notiService: NotificationService
  ) { }
  ngOnInit(): void {

    //this.userType = this.loginService.getUser().role;
    let currentUrl = this.router.url.split('/')
    let lengthOfUrl = this.router.url.split('/').length

    this.currentComponent = currentUrl[lengthOfUrl - 1]
    //this.getName();
  }
  navigation(path?: any) {
    this.router.navigate([`/dashboard/${path}`])
  }
}
