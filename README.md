# Best Practices and Coding Guidelines

A guide for building better applications.

Don't follow this guide blindly. Read the references to learn more about certain rules. Some practices become outdated as the web evolves.

This repository is a continuous work in progress.

## Table of Contents

- [General](#general)
- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
    - [ReactJS](#reactjs)
- [Images](#images)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Security](#security)
- [SEO](#seo)
- [User experience](#user-experience)
- [Work methods](#work-methods)
    - [Agile/Scrum](#agile--scrum)
    - [Remote work](#remote-work)
- [Public speaking](#public-speaking)


## General

- Provide 404 and 50x error pages.
- Offer an RSS feed for any kind of articles. Include the full content instead of snippets.
- Test your website with adblockers enabled.




## HTML

- Do not use [protocol-relative URLs](https://www.paulirish.com/2010/the-protocol-relative-url/), e.g. `//example.com`.
- Add `rel="noopener"` when using `target="_blank"` to [improve performance](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/) and [prevent security vulnerabilities](https://mathiasbynens.github.io/rel-noopener/).
- Prefer `defer` over `async` when [loading scripts](http://calendar.perfplanet.com/2016/prefer-defer-over-async/).
- Provide basic document metadata:
  - Define a [doctype](https://www.w3.org/QA/Tips/Doctype) at the beginning of a HTML page.
  - Specify the [document's language](https://www.w3.org/International/questions/qa-html-language-declarations).
  - Declare an explicit [character encoding](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset).
  - Add [mobile support](https://developer.mozilla.org/en/docs/Mozilla/Mobile/Viewport_meta_tag).

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Title</title>
```

- Define [favicons](https://github.com/audreyr/favicon-cheat-sheet):
  - Place a `favicon.ico` in the root document folder, [containing](http://www.imagemagick.org/Usage/thumbnails/#favicon) at least 16x16 and 32x32 icons.
  - Place a 180x180 `apple-touch-icon.png` in the root document folder for [iOS](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) devices.
  - Create a 192x192 icon for [Android](https://developer.chrome.com/multidevice/android/installtohomescreen) devices:

```html
<link rel="icon" sizes="192x192" href="/favicon-192.png">
```

- Place paragraphs in a `<p>` tag. Do not use multiple `<br>` tags.
- Do not write closing tag comments, e.g. `<!-- end .content -->`.
- Do not set values for [boolean attributes](https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes), such as `disabled`, `selected` or `checked`.




## CSS

- Consider including [normalize.css](http://necolas.github.io/normalize.css/) before own stylesheets.
- Don't use [@import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/).
- Avoid [shorthand properties](http://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/).
- Use `border-box` [box-sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) by default:

```
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

- Place [media queries](http://codeguide.co/#css-media-queries) close to their relevant rule sets. Do not bundle them in a separate stylesheet or at the end of the document.
- Provide a print layout.
  - Emulate print media in [Chrome](http://stackoverflow.com/a/29962072/1116549).
- Remove [unused CSS](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage).




## JavaScript

- Test your website with JavaScript disabled.
  - Add `<noscript>` as [fallback](https://webdesign.tutsplus.com/tutorials/quick-tip-dont-forget-the-noscript-element--cms-25498).
- Organize your files [around features, not roles](https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/#rule1organizeyourfilesaroundfeaturesnotroles).

### ReactJS

- Don't use `bind` or arrow functions in `render()` to avoid [creating new values]( https://blog.vixlet.com/react-at-light-speed-78cd172a6411#a45a) each render cycle.
- Consider using [PureComponent over Component](https://60devs.com/pure-component-in-react.html).
- If an update to the state depends on the current state/props, use `this.setState((prevState, props) => ...)`, as `setState` is [asynchronous](https://facebook.github.io/react/docs/react-component.html#setstate).
- Don't use [array indexes as keys](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).
- Make [asynchronous calls](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/) in `componentDidMount` instead of `componentWillMount`.
- Render [lists](https://mobx.js.org/best/react-performance.html#render-lists-in-dedicated-components) in dedicated components:

Bad:
```javascript
class MyComponent extends Component {
    render() {
        const {todos, user} = this.props;
        return (<div>
            {user.name}
            {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
        </div>)
    }
}
```

Good:

```javascript
class MyComponent extends Component {
    render() {
        const {todos, user} = this.props;
        return (<div>
            {user.name}
            <Todos todos={todos} />
        </div>)
    }
}

class TodosView extends Component {
    render() {
        const {todos} = this.props;
        return <ul>
            {todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
        </ul>)
    }
}
```




## Images

- Consider using [inline SVG](https://github.com/blog/2112-delivering-octicons-with-svg) instead of [icon fonts](https://css-tricks.com/icon-fonts-vs-svg/).




## Performance

- Enable [gzip compression](https://developers.google.com/speed/docs/insights/EnableCompression) and [test](http://www.whatsmyip.org/http-compression-test/) it.
- Consider avoiding [web fonts](https://meowni.ca/posts/web-fonts/).




## Accessibility

- The [contrast ratio](http://leaverou.github.io/contrast-ratio/) between the background and the foreground should be as high as possible.
  - Avoid [low-contrast font colors](http://contrastrebellion.com/).
- When using colors to communicate an information (such as states or graphs), use different styles or add a text/icon to distinguish different states. This is important for both colorblind people and for printing a page in grayscale.
- Make sure zooming in/out doesn't break the page.
- Don't use a `tabindex` value [greater than 0](http://webaim.org/techniques/keyboard/tabindex).
- Be aware of [screen reader conflicts](http://john.foliot.ca/using-accesskeys-is-it-worth-it/) with [accesskeys](http://webaim.org/techniques/keyboard/accesskey), making accesskeys mostly [useless](https://www.thesitewizard.com/webdesign/access-keys-are-useless.shtml) for blind users.
- Provide an [alt text](https://axesslab.com/alt-texts/) for all images. Use `alt=""` for decorative images.




## Security

- Use [HTTPS everywhere](https://https.cio.gov/).
  - Test your SSL rating on [SSL Labs](https://www.ssllabs.com/ssltest/).
- Scan your website for security issues:
  - [Mozilla Observatory](https://observatory.mozilla.org/)
  - [securityheaders.io](https://securityheaders.io/)




## SEO

- Use [canonical URLs](https://support.google.com/webmasters/answer/139066?hl=en) to prevent search engines from indexing duplicate content.
- Provide a [sitemap](https://support.google.com/webmasters/answer/183668?hl=en).




## User experience


- Provide a way to try the app without signing up:
  - Public demo
  - Guest account, which can be then easily turned into a full account
- Show a different view when there is no data, e.g. a tutorial link or description.




## Work methods

### Agile / Scrum

- Start sprints on Wednesday to reduce the absence in sprint meetings due to days off and remote working.

### Remote work

- Go [remote-first](https://zachholman.com/posts/remote-first/), meaning you build your development team around a workflow that embraces the concepts of remote work, whether or not your employees are remote.
- Always use a camera in addition to audio during remote meetings.




## Public speaking

- Use a light color theme on a beamer to improve readability (slides, console, editor/IDE).




## Related work

- [Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist/blob/master/README.md)


## License

This work is dedicated to the [public domain](https://creativecommons.org/publicdomain/zero/1.0/).

[![Public Domain](https://licensebuttons.net/p/mark/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
