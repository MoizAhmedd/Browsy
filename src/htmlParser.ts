class BrowsyHTMLParser {
  //Initializes a browsy node, can be an element or plain text
  constructor(public input: String) {
    this.input = input;
  }

  parse() {
    return this.input;
  }
}

let parser = new BrowsyHTMLParser("<html></html>");
console.log(parser.parse());
