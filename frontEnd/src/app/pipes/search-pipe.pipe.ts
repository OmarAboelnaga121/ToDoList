import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, searchValue : any): any {
    return value.filter((item : any) => {
      return(
        item.listName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      );}
    );
  }

}
