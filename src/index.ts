import * as pluralize from 'pluralize'
import legacy from './legacy';

export function getPlural(str: any): string {
  let oldObj = new legacy();
  oldObj.runSuperOldLogic('anything');

  return pluralize.plural(str)
}