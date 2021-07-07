//Used to construct a DOM tree after parsing HTML
type AttrMap = { [key: string]: string; }

class BrowsyNode {
	//Initializes a browsy node, can be an element or plain text
	constructor(public children: [BrowsyNode?], public nodeType: BrowsyElement | BrowsyText) {}
}

class BrowsyElement {
	//Initializes a browsy element, with a tagname and it's attributes(class,id,text);
	constructor(public tagName: string, public attributes: AttrMap) {}
}

class BrowsyText {
	//Initalizes a text element, with it's data
	constructor(public data:string) {}
}

function newTextNode(data: string):BrowsyNode {
	//Creates a new text node, with <data>
	console.log(data);
	return new BrowsyNode([],new BrowsyText(data))
}

function newElementNode(name: string,attrs:AttrMap,children:[BrowsyNode]):BrowsyNode {
	//Creates a new element node, with a tagname attributes and children
	return new BrowsyNode(children,new BrowsyElement(name,attrs));
}

const firstTextNode = newTextNode("This is some sample text");
const firstElementNode = newElementNode("p",{"id":"firstPara"},[firstTextNode]);