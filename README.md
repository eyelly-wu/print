# Print

Print is a simple function for partial printing on the browser

## Installation

**NPM**

```
npm i -S @eyelly/print
```

**CDN**
```html
<script src='https://unpkg.com/@eyelly/print/dist'></script>
```

## Usage & Example

**In Module**
```javascript
import print from '@eyelly/print'

const fooDom = document.getElementById('xxx')
print({
  content:fooDom
})
```
**In HTML**
```HTML
<!DOCTYPE html>
<html lang="en">

  <head>
    <script src='https://unpkg.com/@eyelly/print/dist'></script>
  </head>

  <body>
    <div id='content'> this is content to print </div>
    <div> this is normal content </div>
    <button id='button1'>normal print</button>
    <button id='button2'>new window print</button>
    <script>
      const content = document.getElementById('content')
      const button1 = document.getElementById('button1')
      const button2 = document.getElementById('button2')

      button1.addEventListener('click', () => {
        print({
          content
        })
      })

      button2.addEventListener('click', () => {
        print({
          content,
          newWindow: true,
          title: 'print example'
        })
      })
    </script>
  </body>

</html>
```
## API

| Property  | Description                          | Type        | Default |
| :-------- | :----------------------------------- | :---------- | :------ |
| content   | content to be printed                | HTMLElement | -       |
| newWindow | open a new window to print           | boolean     | false   |
| title     | the title of the newly opened window | boolean     | -       |

## License

[MIT](https://github.com/eyelly-wu/print/blob/master/README.md)
