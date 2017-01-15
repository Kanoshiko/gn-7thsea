import {PipeTransform, Pipe} from '@angular/core';
//import 'showdown/dist/showdown';

@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  transform(value, args) {
    const showdown = require('showdown');

    let converter = new showdown.Converter();
    return converter.makeHtml(value);
  }
}
