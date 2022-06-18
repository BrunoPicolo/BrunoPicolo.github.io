import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'Truncate'
})
export class TruncatePipe implements PipeTransform {
  /* Responsibility: truncate text */

  transform(
    value: string | undefined,
    limit: number = 50,
    completeWords: boolean = false,
    ellipsis: string = '...'
  ): string {
    value = value ? value : ''
    return value.length > limit ? value.substr(0, limit) + ellipsis : value
  }

}
