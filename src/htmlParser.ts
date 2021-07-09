import { newTextNode, newElementNode } from './dom';


class BrowsyHTMLParser {
  //Initializes a browsy node, can be an element or plain text
  constructor(public input: string) {
    this.input = input;
  }

  parse() {
    let current_data = '';
    let tag_name = '';
    let current_state = 'data';
    for ( let chr of this.input ) {
      if ( chr == '<' ) {
        current_state = 'tagOpen';
      } else if ( chr == '>' ) {
        tag_name = current_data;
        newTextNode(tag_name);
        current_data  = '';
        current_state = 'data';
      } else {
        current_data += chr;
      }
    }
  }
}

let parser = new BrowsyHTMLParser("<html></html>");

parser.parse();