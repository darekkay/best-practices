# CSS - Best Practices

## General

- Include [normalize.css](http://necolas.github.io/normalize.css/) before own stylesheets.
- Don't use [@import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/).
- Avoid [shorthand properties](http://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/).
- Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.
- Use `border-box` [box-sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) by default:

```
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

## Formatting

- Place [media queries](http://codeguide.co/#css-media-queries) close to their relevant rule sets. Do not bundle them in a separate stylesheet or at the end of the document.
- Provide a print layout
  - [Gutenberg framework](https://github.com/BafS/Gutenberg)
  - Emulate print media in [Chrome](http://stackoverflow.com/a/29962072/1116549)
