import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    if(!searchText) {return value;}
    let solution = value.filter(v=>{
      if(!v){return;}
      return v.toString().toLowerCase().indexOf(searchText.toLowerCase())!==-1;      
    })
    return solution;
    // if (searchText) {
    //   searchText = searchText.toLowerCase();
    //     return value.filter(function (el: any) {
    //         return el.toString().toLowerCase().indexOf(searchText) > -1;
    //     })
    // }
    // return value; 
  }

}
