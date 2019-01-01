import * as pluralize from 'pluralize'
import * as legacy from 'Legacy'

export function getPlural (str: any) : string {
  let oldObj = new legacy.OldOldClass();
  oldObj.runSuperOldLogic('anything');

  return pluralize.plural(str)
}