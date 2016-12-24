# HTML - Best Practices

## General

- Do not use [protocol-relative URLs](https://www.paulirish.com/2010/the-protocol-relative-url/), e.g. `//example.com`.
- Add `rel="noopener"` when using `target="_blank"` to [improve performance](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/) and [prevent security vulnerabilities](https://mathiasbynens.github.io/rel-noopener/).
- Prefer `defer` over `async` when [loading scripts](http://calendar.perfplanet.com/2016/prefer-defer-over-async/).

## Formatting

- Avoid trailing slashes in [self-closing elements](http://w3c.github.io/html/single-page.html#void-elements), such as `<br>`, `<hr>`, `<img>`, `<input>` or `<link>`.
- Do not set values for [boolean attributes](https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes), such as `disabled`, `selected` or `checked`.
- Do not specify a `type` when including CSS and JavaScript files.
- Do not write closing tag comments, e.g. `<!-- end .content -->`.
- Place paragraphs in a `<p>` tag. Do not use multiple `<br>` tags.
- Always put double quotes around attributes.
- Use &lt;h1&gt; for [top-level heading](https://www.w3.org/QA/Tips/Use_h1_for_Title).

## Document compatibility

- Define a [doctype](https://www.w3.org/QA/Tips/Doctype) at the beginning of a HTML page:

```html
<!DOCTYPE html>
```

- Specify the [document's language](https://www.w3.org/International/questions/qa-html-language-declarations):

```html
<html lang="en">
```

- Declare an explicit [character encoding](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset):

```html
<meta charset="utf-8">
```

- Add [mobile support](https://developer.mozilla.org/en/docs/Mozilla/Mobile/Viewport_meta_tag):

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```