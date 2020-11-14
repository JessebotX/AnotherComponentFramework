# Another Component Framework <!-- omit in toc -->
A low level javascript framework for creating reusable web components

Super Lightweight (< 1kb compressed)
# Contents <!-- omit in toc -->
- [Usage](#usage)
  - [CDN](#cdn)
  - [NPM](#npm)
  - [Documentation](#documentation)
  - [Example](#example)
      - [Without creating a class](#without-creating-a-class)
      - [Creating a class](#creating-a-class)
      - [Your HTML file(s)](#your-html-files)
- [Changelog](#changelog)
      - [v1.0.2](#v102)
- [License](#license)
- [See Also](#see-also)

# Usage
## CDN 
You can use [unpkg](https://unpkg.com/)

## NPM
```bash
npm install another-component-framework
```

## Documentation
See documentation at [jessebotx.github.io/AnotherComponentFramework](https://jessebotx.github.io/AnotherComponentFramework)

## Example
#### Without creating a class
`ExampleComponent.js`
```js
import Component from "another-component-framework";

new Component(
    "#example",
    `
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
);
```

#### Creating a class
`ExampleComponent.js`
```js
import Component from "another-component-framework";

class ExampleComponent extends Component {
    constructor() {
        super(
            "#example", // inject html below into element with id = "example" ( this gets passed into document.querySelectorAll() )
            `
            <h1>Hello World</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            `
        );
    }
}

new ElementComponent(); // create component here
// additionally, you can export ElementComponent and then call new ElementComponent() in a different file
```

#### Your HTML file(s)
`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="example"></div>
    <script src="ExampleComponent.js"></script>
</body>
</html>
```

# Changelog
#### v1.0.3
- Fixed bug in code

#### v1.0.2
- TypeScript support

# License
0BSD License

# See Also
- [Source Code](https://github.com/JessebotX/AnotherComponentFramework)
- [My Github Profile](https://github.com/JessebotX)
