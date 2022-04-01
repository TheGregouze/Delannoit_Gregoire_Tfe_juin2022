import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  listRow: any = {};

  constructor(private _user:UserService) {}

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
    this._user.getModelAP().subscribe(data => {
      var testAP = Object.values(data);
      var nameModelAP = (document.getElementById("nameModelAP")) as (HTMLInputElement);
      nameModelAP.innerHTML = testAP[event].model;
      var priceFormValueAP = (document.getElementById("submitted-price-AP")) as (HTMLInputElement);
      priceFormValueAP.value= (testAP[event].price);
  
      var formOrder = document.getElementById("formOrder1") as HTMLBodyElement
      formOrder.style.display = "contents"
    });  }

  duplicateOrder1(duplicateToken: Boolean){
    var nameModelAP = (document.getElementById("nameModelAP")) as (HTMLLabelElement)
    for(var x in this.listRow){
      if(this.listRow[x][0] == nameModelAP.innerText){
        duplicateToken = true
      }
    }
    return duplicateToken
  }

  order1(){
    var duplicateToken=false

    var tableOrder = document.getElementById('tableOrder') as HTMLTableElement
    var nameModelAP = (document.getElementById("nameModelAP")) as (HTMLInputElement);
    
    var priceFormValueAP = (document.getElementById("submitted-price-AP")) as (HTMLInputElement);
    var qteFormAP = (document.getElementById('submitted-qte-AP')) as (HTMLInputElement);
    
    if(priceFormValueAP.value.length == 0 ||qteFormAP.value.length == 0 ){
      console.log('Invalid')
    }
    else{
      if(! this.duplicateOrder1(duplicateToken)){
        var row =tableOrder.insertRow();
        row.id = 'row-' + (Object.keys(this.listRow).length)
        var cell1 = row.insertCell(0);
        cell1.id = 'cellName-'+ (Object.keys(this.listRow).length)
        var cell2 = row.insertCell(1);
        cell2.id = 'cellDescri-'+ (Object.keys(this.listRow).length)
        var cell3 = row.insertCell(2);
        cell3.id = 'cellQte-'+ (Object.keys(this.listRow).length)  
        var cell4 = row.insertCell(3);
        cell4.id = 'cellPrice-'+ (Object.keys(this.listRow).length) 
        var cell5 = row.insertCell(4);
        cell5.id = "check-" + Object.keys(this.listRow).length

        cell1.innerHTML = nameModelAP.innerHTML
        cell2.innerHTML = "A venir"
        cell3.innerHTML = qteFormAP.value
        cell4.innerHTML = String((Number(qteFormAP.value)*Number(priceFormValueAP.value)).toFixed(2))
        cell5.innerHTML ='<input type="checkbox" id="checkup">'


        var index = Object.keys(this.listRow).length
        var push = [nameModelAP.innerHTML, "A venir", qteFormAP.value, String(Number(qteFormAP.value)*Number(priceFormValueAP.value))]
        this.listRow[ index ]= push

        

        var formOrder = document.getElementById("formOrder1") as HTMLBodyElement
        formOrder.style.display = "none"
        qteFormAP.value = ""
      }else{
        for(var x in this.listRow){
          if(this.listRow[x][0]==nameModelAP.innerText){
          var cellQte = document.getElementById('cellQte-' + x) as HTMLElement
          cellQte.innerHTML = String(Number(cellQte.innerHTML)+Number(qteFormAP.value))
          var cellPrice = document.getElementById('cellPrice-' + x) as HTMLElement
          cellPrice.innerHTML = String((Number(cellQte.innerHTML)*Number(priceFormValueAP.value)).toFixed(2))
          }
        }

        var formOrder = document.getElementById("formOrder1") as HTMLBodyElement
        formOrder.style.display = "none"
        qteFormAP.value = ""
      
      }
    }
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
    this._user.getModelSwitch().subscribe(data => {
      var testSwitch = Object.values(data);
      var nameModel = (document.getElementById("nameModelSwitch")) as (HTMLInputElement);
      nameModel.innerHTML =  testSwitch[event].model ;
      var priceFormValue = (document.getElementById("submitted-price-Switch")) as (HTMLInputElement);
      priceFormValue.value= testSwitch[event].price;
  
      var formOrder = document.getElementById("formOrder2") as HTMLBodyElement
      formOrder.style.display = "contents"
    });
  }

  duplicateOrder2(duplicateToken: Boolean){
    var nameModelSwitch = (document.getElementById("nameModelSwitch")) as (HTMLLabelElement)
    for(var x in this.listRow){
      if(this.listRow[x][0] == nameModelSwitch.innerText){
        duplicateToken = true
      }
    }
    return duplicateToken
  }

  order2(){
    var duplicateToken=false

    var tableOrder = document.getElementById('tableOrder') as HTMLTableElement
    var nameModelSwitch = (document.getElementById("nameModelSwitch")) as (HTMLInputElement);
    
    var priceFormValueSwitch = (document.getElementById("submitted-price-Switch")) as (HTMLInputElement);
    var qteFormSwitch = (document.getElementById('submitted-qte-Switch')) as (HTMLInputElement);
    
    if(priceFormValueSwitch.value.length == 0 ||qteFormSwitch.value.length == 0 ){
      console.log('Invalid')
    }
    else{
      if(! this.duplicateOrder2(duplicateToken)){
        var row =tableOrder.insertRow();
          row.id = 'row-' + (Object.keys(this.listRow).length)
          var cell1 = row.insertCell(0);
          cell1.id = 'cellName-'+ (Object.keys(this.listRow).length)
          var cell2 = row.insertCell(1);
          cell2.id = 'cellDescri-'+ (Object.keys(this.listRow).length)
          var cell3 = row.insertCell(2);
          cell3.id = 'cellQte-'+ (Object.keys(this.listRow).length)  
          var cell4 = row.insertCell(3);
          cell4.id = 'cellPrice-'+ (Object.keys(this.listRow).length) 
          var cell5 = row.insertCell(4);
          cell5.id = "check-" + Object.keys(this.listRow).length
  
        var index = Object.keys(this.listRow).length
        var push = [nameModelSwitch.innerHTML, "A venir", qteFormSwitch.value, String(Number(qteFormSwitch.value)*Number(priceFormValueSwitch.value))]
        this.listRow[ index ]= push
  
        cell1.innerHTML = nameModelSwitch.innerHTML
        cell2.innerHTML = "A venir"
        cell3.innerHTML = qteFormSwitch.value
        cell4.innerHTML = String((Number(qteFormSwitch.value)*Number(priceFormValueSwitch.value)).toFixed(2))
        cell5.innerHTML ='<input type="checkbox" class="checkup">'
  
        var formOrder = document.getElementById("formOrder2") as HTMLBodyElement
        formOrder.style.display = "none"
        qteFormSwitch.value = ""
      }else{
        for(var x in this.listRow){
          if(this.listRow[x][0]==nameModelSwitch.innerText){
          var cellQte = document.getElementById('cellQte-' + x) as HTMLElement
          cellQte.innerHTML = String(Number(cellQte.innerHTML)+Number(qteFormSwitch.value))
          var cellPrice = document.getElementById('cellPrice-' + x) as HTMLElement
          cellPrice.innerHTML = String((Number(cellQte.innerHTML)*Number(priceFormValueSwitch.value)).toFixed(2))
          }
        }
  
        var formOrder = document.getElementById("formOrder2") as HTMLBodyElement
        formOrder.style.display = "none"
        qteFormSwitch.value = ""
      
      }
    }
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
    this._user.getModelRouter().subscribe(data => {
      var testRouter = Object.values(data);
      var nameModel = (document.getElementById("nameModelRouter")) as (HTMLInputElement);
      nameModel.innerHTML = testRouter[event].model ;
      var priceFormValue = (document.getElementById("submitted-price-Router")) as (HTMLInputElement);
      priceFormValue.value= testRouter[event].price;
  
      var formOrder = document.getElementById("formOrder3") as HTMLBodyElement
      formOrder.style.display = "contents"
    });
  }

  duplicateOrder3(duplicateToken: Boolean){
    var nameModelRouter = (document.getElementById("nameModelRouter")) as (HTMLLabelElement)
    for(var x in this.listRow){
      if(this.listRow[x][0] == nameModelRouter.innerText){
        duplicateToken = true
      }
    }
    return duplicateToken
  }

  order3(){
    var duplicateToken=false

    var tableOrder = document.getElementById('tableOrder') as HTMLTableElement
    var nameModelRouter = (document.getElementById("nameModelRouter")) as (HTMLInputElement);
    
    var priceFormValueRouter = (document.getElementById("submitted-price-Router")) as (HTMLInputElement);
    var qteFormRouter = (document.getElementById('submitted-qte-Router')) as (HTMLInputElement);
    
    if(priceFormValueRouter.value.length == 0 ||qteFormRouter.value.length == 0 ){
      console.log('Invalid')
    }
    else{
      if(! this.duplicateOrder3(duplicateToken)){
        var row =tableOrder.insertRow();
          row.id = 'row-' + (Object.keys(this.listRow).length)
          var cell1 = row.insertCell(0);
          cell1.id = 'cellName-'+ (Object.keys(this.listRow).length)
          var cell2 = row.insertCell(1);
          cell2.id = 'cellDescri-'+ (Object.keys(this.listRow).length)
          var cell3 = row.insertCell(2);
          cell3.id = 'cellQte-'+ (Object.keys(this.listRow).length)  
          var cell4 = row.insertCell(3);
          cell4.id = 'cellPrice-'+ (Object.keys(this.listRow).length) 
          var cell5 = row.insertCell(4);
          cell5.id = "check-" + Object.keys(this.listRow).length
  
        cell1.innerHTML = nameModelRouter.innerHTML
        cell2.innerHTML = "A venir"
        cell3.innerHTML = qteFormRouter.value
        cell4.innerHTML = String((Number(qteFormRouter.value)*Number(priceFormValueRouter.value)).toFixed(2))
        cell5.innerHTML ='<input type="checkbox" class="checkup">'
  
        var index = Object.keys(this.listRow).length
        var push = [nameModelRouter.innerHTML, "A venir", qteFormRouter.value, String(Number(qteFormRouter.value)*Number(priceFormValueRouter.value))]
        this.listRow[ index ]= push
  
        var formOrder = document.getElementById("formOrder3") as HTMLBodyElement
        formOrder.style.display = "none"
        qteFormRouter.value = ""
      }else{
        for(var x in this.listRow){
          if(this.listRow[x][0]==nameModelRouter.innerText){
          var cellQte = document.getElementById('cellQte-' + x) as HTMLElement
          cellQte.innerHTML = String(Number(cellQte.innerHTML)+Number(qteFormRouter.value))
          var cellPrice = document.getElementById('cellPrice-' + x) as HTMLElement
          cellPrice.innerHTML = String((Number(cellQte.innerHTML)*Number(priceFormValueRouter.value)).toFixed(2))
          }
        }
  
        var formOrder = document.getElementById("formOrder3") as HTMLBodyElement
        formOrder.style.display = "none"
        qteFormRouter.value = ""
      
      }
    }
  }


  // Creation du pdf
  test(){
    console.log('A venir')
  }  

  validateCreatePDF(){
    var name = document.getElementById('submitted-name') as HTMLInputElement
    var tva = document.getElementById('submitted-tva') as HTMLInputElement
    var ville = document.getElementById('submitted-ville') as HTMLInputElement
    var address = document.getElementById('submitted-address') as HTMLInputElement
    var service = document.getElementById('submitted-service') as HTMLInputElement
  
    if(name.value.length != 0 || tva.value.length != 0 || ville.value.length != 0 || address.value.length != 0 || service.value.length != 0){
      this.createPdf()
    }
    else{
      console.log('Remplissez les donnees')
    }  
  }

  sommeHT(){
    var sommeHT = 0
    for(var x in this.listRow){
      sommeHT += Number(this.listRow[x][3])
    }
    return sommeHT
  }

  createPdf(){

    const doc = new jsPDF();
  
    var nameValue = (document.getElementById("submitted-name")) as (HTMLInputElement);
    var tvaValue = (document.getElementById("submitted-tva")) as (HTMLInputElement);
    var addressValue = (document.getElementById("submitted-address")) as (HTMLInputElement);
    var serviceValue = (document.getElementById("submitted-service")) as (HTMLInputElement);
  
    var CurrntMonth: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];  
    var date = new Date();  
    var month = CurrntMonth[date.getMonth()];
    var resultmonth = ""
    for(var x in CurrntMonth){
      if(month == CurrntMonth[x]){
        resultmonth += (Number(x) + 1)
        if(resultmonth.length == 1){
          resultmonth = "0" + resultmonth
        }
      }
    }
  
    var refOffre ='PR'+(Date().split(' ')[3]).substr(2,2)+ resultmonth ;
    var sommeHT = this.sommeHT()
  
  
    autoTable(doc, {
      body: [
        [
          {
            content: 'Computer Telecom',
            styles: {
              halign: 'left',
              fontSize: 20,
              textColor: '#ffffff'
            }
          },
          {
            content: 'Proposition commerciale',
            styles: {
              halign: 'right',
              fontSize: 16,
              textColor: '#ffffff'
            }
          },
        ],
      ],
      theme: 'plain',
      styles: {
        fillColor: '#3366ff'
      }
    });
  
    autoTable(doc, {
      body: [
        [
          {
            content: 'Ref: '+refOffre
                    +'\nDate fin de validité: A coder'
                    +'\nCode client: a venir',
            styles: {
              halign: 'right'
            }
          }
        ],
      ],
      theme: 'plain'
    });
  
    autoTable(doc, {
      body: [
        [
          {
            content: 'Emetteur:'
            +'\n'
            +'\nComputer Telecom'
            +'\nRue de la croix du Maïeur 15'
            +'\n'
            +'\nTél.: +32 64/31/28/90 - Fax: TVA: BE087878551'
            +'\nemail: comptabilite@computertelecom.be'
            +'\nWeb: http://www.computertelecom.be',
            styles: {
              halign: 'left',
              fillColor: '#A9A9A9',
            }
          },
          {
            content: '',
            styles: {
              halign: 'center',
          },
          },
          {
            content: 'Adressé à:'
            +'\n'
            +'\n'+ nameValue.value
            +'\n'+ addressValue.value
            +'\nNuméro de TVA:'+ tvaValue.value,
            styles: {
              halign: 'right',
              fillColor: '#DCDCDC',
  
            }
          }
        ],
      ],
      theme: 'plain'
    });
    
    autoTable(doc, {
      body: [
        [
          {
            content: '',
            styles: {}
          }
        ],
      ],
      theme: 'plain'
    });
  
    autoTable(doc, {
      body: [
        [
          {
            content: serviceValue.value,
            styles: {
              halign:'left',
              fontSize: 14
            }
          }
        ]
      ],
      theme: 'plain'
    });
  
    autoTable(doc, {
      html:"#tableOrder",
      theme: 'striped',
      headStyles:{
        fillColor: '#343a40'
      }
    });
  
    autoTable(doc, {
      body: [
        [
          {
            content: 'Total HT',
            styles:{
              halign:'right'
            }
          },
          {
            content: sommeHT.toFixed(2),
            styles:{
              halign:'right'
            }
          },
        ],
        [
          {
            content: 'Total TVA 21%',
            styles:{
              halign:'right'
            }
          },
          {
            content: (sommeHT*0.21).toFixed(2),
            styles:{
              halign:'right'
            }
          },
        ],
        [
          {
            content: 'Total TTC',
            styles:{
              halign:'right'
            }
          },
          {
            content: (sommeHT*0.79).toFixed(2),
            styles:{
              halign:'right'
            }
          },
        ],
      ],
      theme: 'plain'
    });
  
    autoTable(doc, {
      body: [
        [
          {
            content: 'Conditions de règlement:   A réception',
            styles: {
              halign: 'left',
              fontSize: 12
            }
          }
        ],
        [
          {
            content: 'Règlement par virement sur le compte bancaire suivant'
            +'\nBanque Belfius Banque'
            +'\n|Code  banque|Numéro de compte|'
            +'\n|     BE12     | 0688 9758 6392 |'
            +'\nNom du propriétaire du compte: H.C.T SPRL'
            +'\nCode IBAN:BE12 0688 9758 6392'
            +'\nCode BIC/SWIFT: GKCCBEBB',
            styles: {
              halign: 'left'
            }
          }
        ],
        [
          {
            content: 'Cachet, Date, Signature et mention "Bon pour accord',
            styles: {
              halign: 'right',
              fontSize: 8
            }
          }
        ],
  
      ],
      theme: "plain"
    });
  
    autoTable(doc, {
      body: [
        [
          {
            content:'SPRL - Société à responsabilité limitée'
                    +'\n Numéro TVA: BE0878785851',
            styles: {
              halign: 'center',
              fontSize: 8
            }
          }
        ]
      ],
      theme: "plain"
    });
  
    return doc.save(refOffre);
    
  }

}