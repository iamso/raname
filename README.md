# raname

Create random names for projects, containers, subdomains or whatever.


## Installation

### As package
```bash
npm install raname
```

### As command line tool
```bash
npm install -g raname
```

## Usage

### As package
```javascript
var raname = require('raname');

// get as array
console.log(raname());

// get as dash-separated string
console.log(raname.dash());

// get as camelCase string
console.log(raname.camel());
```

### As command line tool
```bash
# get as dash-separated string (default)
raname

# get as camelCase string
raname camel

# get as JSON array
raname raw
```
The output is automatically copied to your clipboard.

## License
Copyright (c) 2016 Steve Ottoz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
