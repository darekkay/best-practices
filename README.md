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
    - [Redux](#redux)
- [Images](#images)
- [Code quality](#code-quality)
- [Performance](#performance)
- [Design](#design)
- [Accessibility](#accessibility)
- [Security](#security)
- [Privacy](#privacy)
- [SEO](#seo)
- [User experience](#user-experience)
- [DevOps](#devops)
- [Git](#git)
- [Code collaboration](#code-collaboration)
- [Marketing](#marketing)
- [Business](#business)
- [Writing](#writing)
- [Work methods](#work-methods)
    - [Project Management](#project-management)
    - [Remote work](#remote-work)
- [Communication](#communication)
- [Public speaking](#public-speaking)


## General

- Provide 404 and 50x error pages.
  - Inline all external resources on error pages (e.g. CSS, images).
- Test your website with adblockers enabled.
- Monitor your website's availability, e.g. with [Uptime Robot](https://uptimerobot.com).
- Offer an RSS feed for any kind of articles. Include the full content instead of snippets.




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
  - Consider using [SVG favicons](https://caniuse.com/#feat=link-icon-svg).
  - Place a 180x180 `apple-touch-icon.png` in the root document folder for [iOS](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) devices.
  - Create a 192x192 icon for [Android](https://developer.chrome.com/multidevice/android/installtohomescreen) devices:

```html
<link rel="icon" sizes="192x192" href="/favicon-192.png">
```

- Place paragraphs in a `<p>` tag. Do not use multiple `<br>` tags.
- Do not write closing tag comments, e.g. `<!-- end .content -->`.
- Do not set values for [boolean attributes](https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes), such as `disabled`, `selected` or `checked`.
- Provide `type`, [inputmode](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) and [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) values to [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input) fields if applicable. Test possible values [here](https://inputtypes.com/).



## CSS

- Consider including [normalize.css](http://necolas.github.io/normalize.css/) or [sanitize.css](https://github.com/csstools/sanitize.css) before own stylesheets.
- Don't use [\@import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/).
- Avoid [shorthand properties](http://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/).
- Use `border-box` [box-sizing](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) by default.
- Place [media queries](http://codeguide.co/#css-media-queries) close to their relevant rule sets. Do not bundle them in a separate stylesheet or at the end of the document.
- Provide a print layout.
  - Emulate print media in [Chrome](http://stackoverflow.com/a/29962072/1116549).
- Remove [unused CSS](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage).
- Consider a [utility-first](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) approach.
- Use [CSS containment](https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/) when appropriate.


## JavaScript

- Test your website with JavaScript disabled, because [not everyone has JavaScript](https://kryogenix.org/code/browser/everyonehasjs.html).
  - Add `<noscript>` as [fallback](https://webdesign.tutsplus.com/tutorials/quick-tip-dont-forget-the-noscript-element--cms-25498).
- Organize your files [around features, not roles](https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/#rule1organizeyourfilesaroundfeaturesnotroles).
- Use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) for all external scripts.


### ReactJS

- Consider using [PureComponent over Component](https://60devs.com/pure-component-in-react.html).
  - For functional components, [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) can be used since React 16.6.0.
  - Use this method [sparingly](https://dmitripavlutin.com/use-react-memo-wisely/) for components whose rendering time could be neglected.
- Don't [overuse](https://kentcdodds.com/blog/usememo-and-usecallback) [useCallback](https://dmitripavlutin.com/dont-overuse-react-usecallback/).
- Pay attention to using `bind` or arrow functions in `render()` to avoid [creating new values]( https://blog.vixlet.com/react-at-light-speed-78cd172a6411#a45a) each render cycle.
  - For functional components, use [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) to memoize the callback.
  - For class components, define the callback outside of the `render()` method.
- As of React 16, functional components are [slightly more performant](https://github.com/reactjs/reactjs.org/issues/639) than class components.
- Use code splitting to lazy load components that are not instantly needed with [React.Lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) and `React.Suspense`.
- Use [React.StrictMode](https://kentcdodds.com/blog/react-strict-mode).
  - Be aware that StrictMode components may [render twice](https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/) in development mode.
- Never [mutate props](https://reactjs.org/docs/components-and-props.html#props-are-read-only).
- If an update to the state depends on the current state/props, use `this.setState((prevState, props) => ...)`, as `setState` is [asynchronous](https://facebook.github.io/react/docs/react-component.html#setstate).
- Don't use [array indexes as keys](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318).
- Render [lists](https://mobx.js.org/best/react-performance.html#render-lists-in-dedicated-components) in dedicated components.
- Rethink your [mental model](https://twitter.com/ryanflorence/status/1125041041063665666) regarding `useEffect`.
- Use [multiple](https://epicreact.dev/myths-about-useeffect/) `useEffect` calls for independent concerns.


### Redux

- Prefer [normalized](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) state.



## Images

- Consider using [inline SVGs](https://github.com/blog/2112-delivering-octicons-with-svg) instead of [icon fonts](https://css-tricks.com/icon-fonts-vs-svg/).
- Use WEBP images with a [fallback](https://bitsofco.de/why-and-how-to-use-webp-images-today/) for older browsers.
- Use responsive images, especially for [Retina displays](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Same_size_different_resolutions).


## Code quality

- Enforce a zero-warnings policy.
  - Avoid handling code isses as warnings. Set linter rules to either "off" or "error".
- Avoid [hasty abstractions](https://kentcdodds.com/blog/aha-programming).
  - Prefer duplication over the [wrong abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction).
- [Include units](https://explog.in/notes/units.html) in variable names.


## Performance

- Find performance issues with Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).
- Enable [gzip compression](https://developers.google.com/speed/docs/insights/EnableCompression) and [test](http://www.whatsmyip.org/http-compression-test/) it.
- Consider avoiding [web fonts](https://meowni.ca/posts/web-fonts/).
  - If you do, notice the [performance best practices](https://csswizardry.com/2020/05/the-fastest-google-fonts/).
- Prefer readable code over micro performance optimizations such as [performant CSS selectors](https://csswizardry.com/2011/09/writing-efficient-css-selectors/) or using [a for loop over forEach](https://stackoverflow.com/questions/43031988/javascript-efficiency-for-vs-foreach).
- Serve [videos instead of GIFs](https://www.dannyguo.com/blog/serve-videos-instead-of-gifs/).


## Design

- Ensure a [thumb-friendly](https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/) navigational design.
- Remove unnecessary borders from design elements.
  - Consider replacing borders with box shadows.
- Avoid [floating labels](https://adamsilver.io/articles/float-labels-are-problematic/)
- Avoid messages [under fields](https://adrianroselli.com/2017/01/avoid-messages-under-fields.html).


## Accessibility

- Use [semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics).
- Provide an [alt text](https://axesslab.com/alt-texts/) for all images. Use `alt=""` for decorative images.
- Provide a `label` for all form inputs. The `placeholder` attribute is *not* a usable alternative.
- Write [descriptive links](https://accessibility.oregonstate.edu/descriptivelinks).
- The [contrast ratio](http://leaverou.github.io/contrast-ratio/) between the background and the foreground should be as high as possible.
  - Avoid [low-contrast font colors](http://contrastrebellion.com/).
- When using colors to communicate an information (such as states or graphs), use different styles or add a text/icon to distinguish different states. This is important for both colorblind people and for printing a page in grayscale.
- The tab order should go from top to bottom, from left to right
  - Do not use a `tabindex` value [greater than 0](http://webaim.org/techniques/keyboard/tabindex).
  - Do not hide the focus ring without providing an alternative.
- Be aware of [screen reader conflicts](http://john.foliot.ca/using-accesskeys-is-it-worth-it/) with [accesskeys](http://webaim.org/techniques/keyboard/accesskey), making accesskeys mostly [useless](https://www.thesitewizard.com/webdesign/access-keys-are-useless.shtml) for blind users.
- Make sure zooming in/out doesn't break the page.
- Avoid using [icons without labels](https://axesslab.com/icons-ruining-interfaces/)
- Ensure that interactive controls have at least a 44x44px [target click size](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html).



## Security

- Use [HTTPS everywhere](https://https.cio.gov/). Yes, [your site does need HTTPS](https://doesmysiteneedhttps.com/).
  - Test your SSL rating on [SSL Labs](https://www.ssllabs.com/ssltest/).
- Define a [Certificate Authority Authorization](https://ma.ttias.be/caa-checking-becomes-mandatory-ssltls-certificates/) (CAA).
- Define a [Referrer Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy).
- Define a [Content Security Policy](https://content-security-policy.com/).
- Scan your website for security issues:
  - [Mozilla Observatory](https://observatory.mozilla.org/)
  - [securityheaders.io](https://securityheaders.io/)
- Hash user passwords using a [cryptographically strong algorithm](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet#Leverage_an_adaptive_one-way_function), like Argon2, PBKDF2, Scrypt, or Bcrypt.
- Enable [Two-Factor Authentication](https://authy.com/what-is-2fa/) (2FA).



## Privacy

- Include a privacy notice.
- Comply with the EU Cookie Law.
  - Check the cookies for a domain with [Cookie Metrix](https://www.cookiemetrix.com/).
- Collect only the bare minimum amount of data needed for its purpose.



## SEO

- Verify your site in [Google Search Console](https://www.google.com/webmasters).
- Use [canonical URLs](https://support.google.com/webmasters/answer/139066?hl=en) to prevent search engines from indexing duplicate content.
- Provide a [sitemap](https://support.google.com/webmasters/answer/183668?hl=en).
- Provide a [robots.txt](https://www.robotstxt.org/) file.
- Keep title 60 characters or less.
- Keep meta descriptions 160 characters or less.



## User experience

- Provide a way to try the app without signing up:
  - Public demo
  - Guest account, which can be then easily turned into a full account
- Show a different view when there is no data, e.g. a tutorial link or description ([examples](https://emptystat.es/)).
- Only [provide choices](https://en.wikipedia.org/wiki/Hick%27s_law) when a good default does not exist.
  - Options can be [costlier](http://neugierig.org/software/blog/2018/07/options.html) than features.
- Provide smart defaults based on frequently chosen input.
- Include something funny/goofy.
- Hide easter-eggs.
  - Send [custom HTTP headers](https://frenxi.com/http-headers-you-dont-expect/).
- Provide a search feature, e.g. using [OpenSearch](https://developer.mozilla.org/en-US/docs/Web/OpenSearch).
- Ensure a good [visual stability](https://web.dev/cls/), i.e., elements on the page should not shift in ways that users don't expect.
- Know when (not) to [split a form field into multiple inputs](https://adamsilver.io/articles/form-design-multiple-inputs-versus-one-input/).
- Don't set the language of your website [based on user location](https://dev.to/bitdweller/stop-setting-the-language-of-your-website-based-on-my-location-31h0).
- Test for [unnecessary scrollbars](https://svenkadak.com/blog/scrollbar-blindness).




## DevOps

- Avoid [2:00 and 3:00 am cron jobs](https://www.endpoint.com/blog/2013/04/08/avoid-200-and-300-am-cron-jobs)




## Git

- [Commit early](https://sethrobertson.github.io/GitBestPractices/) and often. Perfect later.
- Copy/move a file in a different commit from any changes to it to retain the correct file history.
- Do not force push public branches which other people are working on.
- Create a [tag](https://git-scm.com/docs/git-tag) for each release using [semantic versioning](https://semver.org/), e.g. `v1.4.8`.
  - Create a [release](https://help.github.com/articles/creating-releases/) for each tag on GitHub.




## Code collaboration

- Include guidelines for contributors in [CONTRIBUTING.MD](https://help.github.com/articles/setting-guidelines-for-repository-contributors/).
  - Include a [humans.txt](http://humanstxt.org/) file to acknowledge project contributors.
- Use [npm scripts](https://docs.npmjs.com/misc/scripts) so no further build tools have to be installed or used.
- Consider recording a screencast or a [console demo](https://asciinema.org/) to demonstrate the setup and usage.




## Marketing

- Summarize your core idea in a single sentence (elevator pitch).



## Business

- Consider the [purchasing power parity](https://rusingh.com/micro/notes/2020/09/02/just-five-dollars/) on product/service pricing.




## Writing

- Use plenty of headings.
- Keep paragraphs short.
- Use bulleted lists.
- Highlight key terms




## Work methods

### Project management

- Start sprints on Wednesday to reduce the absence in sprint meetings due to days off and remote working.
- Use appropriate defect severities. Do not misuse them to express a (customer) prioritization.
  - Severity 1 (Critical): System failure. No further processing is possible.
  - Severity 2 (High): Unable to proceed with selected function or dependants.
  - Severity 3 (Medium): Restricted function capability, however, processing can continue.
  - Severity 4 (Low): Minor cosmetic deviances.

### Remote work

- Go [remote-first](https://zachholman.com/posts/remote-first/), meaning you build your development team around a workflow that embraces the concepts of remote work, whether or not your employees are remote.
- Prefer [asynchronous communication](https://www.upwork.com/blog/2018/02/complete-guide-asynchronous-communication-remote-teams/).
- Always use a camera in addition to audio during remote meetings.



## Communication

- [No well-actually's](https://www.recurse.com/social-rules#no-well-actuallys): Do not correct someone about something that's not relevant to the conversation or tangential to what they're trying to say.
- [No feigning surprise](https://www.recurse.com/social-rules#no-feigning-surprise): Do not act surprised when someone doesn't know something.
- [No backseat driving](https://www.recurse.com/social-rules#no-backseat-driving): Do not lob advice from across the room (or across the online chat) without really joining or engaging in a conversation.
- Avoid [oppresive language](https://tools.ietf.org/id/draft-knodel-terminology-00.html#rfc.section.2)




## Public speaking

- Plan for the worst-case scenario, e.g. your computer dying.
- Use a bright color theme on a beamer to improve readability (slides, console, editor/IDE).
- Be prepared to zoom in your presentation
  - `Win` + `+` / `Win` + `-` on Windows
- Prepare good [verbal transitions](https://medium.com/@saronyitbarek/transitions-the-easiest-way-to-improve-your-tech-talk-ebe4d40a3257) between slides.
  - Keep the things you say and the things you show in sync.


## Related work

- [Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist/blob/master/README.md)
- [UI/UX Best Practices](https://www.nickkolenda.com/user-experience/)

## License

This work is dedicated to the [public domain](https://creativecommons.org/publicdomain/zero/1.0/).

[![Public Domain](https://licensebuttons.net/p/mark/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
