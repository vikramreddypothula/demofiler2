import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data: any[]
  listboxdata : any []

  constructor() { 
     this.data = [
    {label:'Dotnet', value:{id:1, name: 'Dotnet', code: 'DT'}},
    {label:'Java', value:{id:2, name: 'Java', code: 'Jva'}},
    {label:'React', value:{id:3, name: 'React', code: 'react'}},
    {label:'Oracle', value:{id:4, name: 'Oracle', code: 'orcle'}},
    {label:'Angular', value:{id:5, name: 'Angular', code: 'Ang'}}
],

this.listboxdata=[
  {label:'>', value:{id:1, name: '>', code: 'GT'}},
  {label:'<', value:{id:2, name: '<', code: 'LT'}},
  {label:'=', value:{id:3, name: '=', code: 'EQ'}},
  {label:'!=', value:{id:4, name: '!=', code: 'NEQ'}},
  {label:'IN', value:{id:5, name: 'IN', code: 'IN'}},
  {label:'NotIN', value:{id:5, name: 'NotIN', code: 'NIN'}}
];

  }

  getCheckBoxData(){
    return this.data;
  }

  getListBoxData(){
    return this.listboxdata;
  }
}
