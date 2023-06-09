import { AllOptions } from '../enum/enum';
import { MenuOptions } from '../interface/interface';

export function changeTrueValue(obj: MenuOptions[], myVar: AllOptions): MenuOptions[] {
    obj = obj.map((o) => {
      if (o.value === true) {
        return { ...o, value: false };
      }
      return o;
    });
    const index = obj.findIndex((o) => o.name === myVar);
    obj[index] = { ...obj[index], value: true };
  
    return obj;
  }