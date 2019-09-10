# print

print is a simple function for partial printing on the browser

## Installation

```
npm i -S @eyelly/print
```

## Usage

```javascript
import print from '@eyelly/print'

const fooDom = document.getElementById('xxx')
print({
  content:fooDom
})
```

## API

| Property  | Description                          | Type        | Default |
| :-------- | :----------------------------------- | :---------- | :------ |
| content   | content to be printed                | HTMLElement | -       |
| newWindow | open a new window to print           | boolean     | false   |
| title     | the title of the newly opened window | boolean     | -       |

## License

[MIT]()
