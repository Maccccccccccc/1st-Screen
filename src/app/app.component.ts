import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Endorsement';

  /*Policy Record History*/
  displayedColumns: string [] = ['id', 'vpdf', 'vt', 'vgle',  'trd' , 'trn', 'td' , 'tt' , 'bn' , 'bd', 'bs','prem',
  'chrgs','gar','gc', 'nc', 'ov', 'wt', 'ra', 'cwt', 'nd', 'dscnt', 'pgl',]

  transactions: Transaction [] = [{id: 1, vpdf: '', vt: 'INVOICE', vgle: '', trd: '05/18/2021' , trn: '106903', td: '05/18/2021' ,
  tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 220891.00, chrgs: 115455.98, gar: 27544.98, gc: 5522.25,
   nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

   {id: 2, vpdf: '', vt: 'INVOICE', vgle: '',trd: '05/18/2021' , trn: '106903', td: '05/18/2021',
  tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
   nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

   {id: 3, vpdf: '', vt: 'INVOICE', vgle: '',  trd: '05/18/2021' , trn: '106903', td: '05/18/2021',
  tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
   nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

   {id: 4, vpdf: '', vt: 'INVOICE', vgle: '', trd: '05/18/2021', trn: '106903',td: '05/18/2021',
  tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
   nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

   {id: 5, vpdf: '', vt: 'INVOICE', vgle: '', trd: '05/18/2021' , trn: '106903', td: '05/18/2021',
  tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
   nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

   {id: 6, vpdf: '', vt: 'INVOICE', vgle: '', trd: '05/18/2021' , trn: '106903', td: '05/18/2021',
   tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
    nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

    {id: 7, vpdf: '', vt: 'INVOICE', vgle: '', trd: '05/18/2021' , trn: '106903', td: '05/18/2021',
   tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
    nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

  ]

   /*Policy Record Coverage*/ 
   displayedColumns2: string[] = ['Id', 'type', 'cvrg', 'cd', 'blank', 'ca', 'pa', 'cmmsn', 'premrate', 'cmmsnrate', 'rmrks']

  /*
  dataSource = ELEMENT_DATA;
  */
  dataSource2 = ELEMENT_DATA2;



  getTotalCost() {
    return this.transactions.map(t => t.prem).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostcharges() {
    return this.transactions.map(t => t.chrgs).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostgrossAR() {
    return this.transactions.map(t => t.gar).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostgrosscomission() {
    return this.transactions.map(t => t.gc).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostnetcomission() {
    return this.transactions.map(t => t.nc).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostoutputvat() {
    return this.transactions.map(t => t.ov).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostwtax() {
    return this.transactions.map(t => t.wt).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostremmitableamount() {
    return this.transactions.map(t => t.ra).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostCWT() {
    return this.transactions.map(t => t.cwt).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostnextdue() {
    return this.transactions.map(t => t.nd).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostdiscount() {
    return this.transactions.map(t => t.dscnt).reduce((acc, value) => acc + value, 0);
  }
  }


interface Transaction{
  id: number;
  vpdf: string;
  vt: string;
  vgle: string;
  td: string;
  trn: string;
  trd: string;
  tt: string;
  bn: number;
  bd: string;
  bs: string;
  prem: number;
  chrgs: number;
  gar: number;
  gc: number;
  nc: number;
  ov: number;
  wt: number;
  ra: number;
  cwt:number;
  nd: number;
  dscnt: number;
  pgl: string;
}
/*
export interface PolicyRecordHistory {
  id: number;
  vpdf: string;
  vt: string;
  vgle: string;
  td: string;
  trn: string;
  trd: string;
  tt: string;
  bn: number;
  bd: string;
  bs: string;
  prem: number;
  chrgs: number;
  gar: number;
  gc: number;
  nc: number;
  ov: number;
  wt: number;
  ra: number;
  cwt:number;
  nd: number;
  dscnt: number;
  pgl: string;

}
*/
export interface PolicyRecordCoverage {
  Id: number;
  type: string;
  cvrg: string;
  cd: string;
  blank: string;
  ca: number;
  pa: number;
  cmmsn: number;
  premrate: number;
  cmmsnrate: number;
  rmrks: string;
}
/**
const ELEMENT_DATA: PolicyRecordHistory [] = [
  {id: 1, vpdf: '', vt: 'INVOICE', vgle: '', td: '05/18/2021' , trn: '106903', trd: '05/18/2021',
   tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
    nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},

    {id: 2, vpdf: '', vt: 'AMMENDMENT', vgle: '', td: '06/25/2021' , trn: 'Scenario 21.2', trd: '06/25/2021',
   tt: 'ENDORS (Ammendment)', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 0.00, chrgs: 0.00, gar: 0.00, gc: 0.00,
    nc: 0.00, ov:0.00, wt: 0.00, ra: 0.00, cwt: 0.00, nd: 0.00, dscnt: 0.00, pgl: 'Yes',},
    
    {id: 3, vpdf: '', vt: 'AB', vgle: '', td: '06/26/2021' , trn: '89147', trd: '06/26/2021',
   tt: 'AR', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 15262.30, chrgs: 3819.19, gar: 19281.49, gc: 3092.46,
    nc: 3092.46, ov: 371.10, wt: 463.87, ra: 16281.80, cwt: 309.25, nd: 15972.55, dscnt: 0.00, pgl: 'Yes',},
    
    {id: 4, vpdf: '', vt: 'CM', vgle: '', td: '06/01/2021' , trn: '106940', trd: '05/01/2021',
    tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
     nc: 5522.25, ov:662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},
    
     {id: 5, vpdf: '', vt: 'VAT REMIT', vgle: '', td: '06/01/2021' , trn: '106903', trd: '06/01/2021',
     tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
      nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},
  
      {id: 6, vpdf: '', vt: 'VAT REMIT', vgle: '', td: '06/01/2021' , trn: '106903', trd: '06/01/2021',
      tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
       nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',},
       
       {id: 7, vpdf: '', vt: 'VAT REMIT', vgle: '', td: '06/01/2021' , trn: '106903', trd: '06/01/2021',
       tt: 'Invoice', bn: 106903, bd: '05/18/2021',bs: 'PHP', prem: 22089.00, chrgs: 5455.98, gar: 27544.98, gc: 5522.25,
        nc: 5522.25, ov: 662.67, wt: 828.34, ra: 22188.40, cwt: 0.00, nd: 22188.40, dscnt: 0.00, pgl: 'Yes',}
        
];
*/

const ELEMENT_DATA2: PolicyRecordCoverage[] = [
  {Id: 1, type: 'P', cvrg: 'M&A', cd: 'Muderer and Assault Rider', blank: 'net', ca: 100000.00, pa: 15462.30,
   cmmsn: 3092.46, premrate: 14.4623000000,  cmmsnrate: 20, rmrks: ''},

   {Id: 2, type: 'P', cvrg: 'M&A', cd: 'Muderer and Assault Rider', blank: 'net', ca: 100000.00, pa: 15462.30,
   cmmsn: 3092.46, premrate: 14.4623000000,  cmmsnrate: 20, rmrks: ''},

   {Id: 3, type: 'P', cvrg: 'M&A', cd: 'Muderer and Assault Rider', blank: 'net', ca: 100000.00, pa: 15462.30,
   cmmsn: 3092.46, premrate: 14.4623000000,  cmmsnrate: 20, rmrks: ''},
   

];
