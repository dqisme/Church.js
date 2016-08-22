# Church.js
An attempt to implement Lambda Calculus in JavaScript(ECMA-262 5th.)

## Installation
First of all, you need to install all dependencies for `Church.js`.
```
npm install
```

## Testing

You can run tests using `mocha` by command below:
```
npm test
```

## Start

Currently, you can use `Church.js` as example in `main.js`, I wrote a S combinator inspection for instance.
You can run the command below to check it.
```
npm start
```

Then you will get the full content of the S combinator:

```javascript
{
  content: '(&x.(&y.(&z.(x z (y z)))))',
  valid: true,
  body: {
    content: '&x.(&y.(&z.(x z (y z))))',
    valid: true,
    boundVariable: { content: 'x', valid: true },
    body: {
      content: '(&y.(&z.(x z (y z))))',
      valid: true,
      body: {
        content: '&y.(&z.(x z (y z)))',
        valid: true,
        boundVariable: { content: 'y', valid: true },
        body: {
          content: '(&z.(x z (y z)))',
          valid: true,
          body: {
            content: '&z.(x z (y z))',
            valid: true,
            boundVariable: { content: 'z', valid: true },
            body: {
              content: '(x z (y z))',
              valid: true,
              body: {
                content: 'x z (y z)',
                valid: true,
                function: { content: 'x', valid: true },
                argument: {
                  content: 'z (y z)',
                  valid: true,
                  function: { content: 'z', valid: true },
                  argument: {
                    content: '(y z)',
                    valid: true,
                    body: {
                      content: 'y z',
                      valid: true,
                      function: { content: 'y', valid: true },
                      argument: { content: 'z', valid: true }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```



Enjoy Lambda Calculus Theory.
And Salute [Alonzo Church](https://www.wikiwand.com/en/Alonzo_Church)
