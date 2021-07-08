# Browsy

A browser from scratch, written in typescript

## How it works
- UI
	- tbd
- Engine
	- Implement DOM/Node Classes
	- Add an HTML parser to construct DOM tree from HTML

### HTML Parsing
- Tokenization
	- Lexical Analysis
		- Parse input into tokens
			- Tokens include: Start Tags, End Tags, Attribute Names and Values
		- Each token is given to the tree constructor
	- Algorithm
		- Initial State: Data state
		- When "<" is encountered, state is set to: Tag open state
		- When a-z character is encountered, start tag token is created, state is set to: Tag name state
		- We stay in tag name state until a ">" is encountered,  until then we add each character to the token name, then change state back to Data state 
- Tree Construction