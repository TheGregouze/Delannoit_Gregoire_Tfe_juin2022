import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}


//-----------------------------------------------------------------------------------------
// FONCTIONS AJOUTEES
//-----------------------------------------------------------------------------------------

// Gestion des modèles AP
  imgAP: Array<object> = [
    {
      thumbImage: '../assets/images/AP/NBE-5AC.png',
      alt: 'NBE-5AC',
      title: 'NBE-5AC'
    }, {
      thumbImage: '../assets/images/AP/U6-Lite.png',
      title: 'U6-Lite',
      alt: 'U6-Lite',
    }, {
      thumbImage: '../assets/images/AP/UAP-AC-IW.png',
      title: 'UAP-AC-IW',
      alt: 'UAP-AC-IW'
    }, {
      thumbImage: '../assets/images/AP/UAP-IW-HD.png',
      title: 'UAP-IW-HD',
      alt: 'UAP-IW-HD'
    }, {
      thumbImage: '../assets/images/AP/UAP-AC-LR.png',
      title: 'UAP-AC-LR',
      alt: 'UAP-AC-LR'
    }, {
      thumbImage: '../assets/images/AP/U6-Pro.png',
      title: 'U6-Pro',
      alt: 'U6-Pro'
    }, {
      thumbImage: '../assets/images/AP/U6-LR.png',
      title: 'U6-LR',
      alt: 'U6-LR'
    }, {
      thumbImage: '../assets/images/AP/UAP-AC-M.png',
      title: 'UAP-AC-M',
      alt: 'UAP-AC-M'
    }, {
      thumbImage: '../assets/images/AP/UAP-AC-M-PRO.png',
      title: 'UAP-AC-M-PRO',
      alt: 'UAP-AC-M-PRO'
    }, {
      thumbImage: '../assets/images/AP/UAP-AC-HD.png',
      title: 'UAP-AC-HD',
      alt: 'UAP-AC-HD'
    }
  ];

  fillFormModelAP(event: any){
    console.log('A venir')
  }

  duplicateOrder1(duplicateToken: Boolean){
    console.log('A venir')
  }

  order1(){
    console.log('A venir')
  }


  // Gestion des modèles switch
  imgSwitch: Array<object> = [
    {
      thumbImage: '../assets/images/Switch/USW-Flex-Mini.png',
      alt: 'USW-Flex-Mini',
      title: '<USW-Flex-Mini'
    },{
      thumbImage: '../assets/images/Switch/US-XG-6POE.png',
      alt: 'US-XG-6POE',
      title: 'US-XG-6POE'
    },{
      thumbImage: '../assets/images/Switch/USW-16-PoE.png',
      alt: 'USW-16-PoE',
      title: 'USW-16-PoE'
    },{
      thumbImage: '../assets/images/Switch/US-24-250W.png',
      alt: 'US-24-250W',
      title: 'US-24-250W'
    },{
      thumbImage: '../assets/images/Switch/US-48-500W.png',
      alt: 'US-48-500W',
      title: 'US-48-500W'
    },{
      thumbImage: '../assets/images/Switch/USW-Lite-8-PoE.png',
      alt: 'USW-Lite-8-PoE',
      title: 'USW-Lite-8-PoE'
    },{
      thumbImage: '../assets/images/Switch/USW-Pro-48-PoE.png',
      alt: 'USW-Pro-48-PoE',
      title: 'USW-Pro-48-PoE'
    },{
      thumbImage: '../assets/images/Switch/USW-Aggregation.png',
      alt: 'USW-Aggregation',
      title: 'USW-Aggregation'
    },{
      thumbImage: '../assets/images/Switch/USW-Lite-16-PoE.png',
      alt: 'USW-Lite-16-PoE',
      title: 'USW-Lite-16-PoE'
    },{
      thumbImage: '../assets/images/Switch/USW-Pro-24-PoE.png',
      alt: 'USW-Pro-24-PoE',
      title: 'USW-Pro-24-PoE'
    },{
      thumbImage: '../assets/images/Switch/USW-Pro-48.png',
      alt: 'USW-Pro-48',
      title: 'USW-Pro-48'
    },{
      thumbImage: '../assets/images/Switch/USW-24-PoE.png',
      alt: 'USW-24-PoE',
      title: 'USW-24-PoE'
    }
  ];

  fillFormModelSwitch(event: any){
    console.log('A venir')
  }

  duplicateOrder2(duplicateToken: Boolean){
    console.log('A venir')
  }

  order2(){
    console.log('A venir')
  }


  // Gestion des modèles router
  imgRouter: Array<object> = [
    {
      thumbImage: '../assets/images/Router/USG.png',
      alt: 'USG',
      title: 'USG'
    }, {
      thumbImage: '../assets/images/Router/USG-PRO-4.png',
      title: 'USG-PRO-4',
      alt: 'USG-PRO-4'
    }
  ];

  fillFormModelRouter(event: any){
    console.log('A venir')
  }

  duplicateOrder3(duplicateToken: Boolean){
    console.log('A venir')
  }

  order3(){
    console.log('A venir')
  }


  // Creation du pdf
  test(){
    console.log('A venir')
  }  

  validateCreatePDF(){
    console.log('A venir')
  }

}
