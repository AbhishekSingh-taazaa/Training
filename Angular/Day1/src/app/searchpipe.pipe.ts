import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './product/IProduct';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: Iproduct[], args: string): Iproduct[]{
   
    if(!args){
      return value;
    }
    
    return value.filter(
      item => item.Title.toLowerCase().indexOf(args.toLowerCase()) > -1
    )
  }

}
