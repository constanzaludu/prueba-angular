import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../../../core/interfaces/Series';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {
  transform(thumbnail: Image): string {
    return thumbnail.path + '.' + thumbnail.extension;
  }
}
