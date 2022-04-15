import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { UserService } from 'app/user.service';

@Component({
  selector: 'app-office365',
  templateUrl: './office365.component.html',
  styleUrls: ['./office365.component.scss']
})
export class Office365Component implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  listRow: any = {};
  constructor() { }

  ngOnInit(): void {
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
