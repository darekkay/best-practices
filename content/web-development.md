# Web Development - Best Practices

## General

 - Use [HTTPS everywhere](https://https.cio.gov/).
   - Test SSL rating on [SSL Labs](https://www.ssllabs.com/ssltest/).
 - Consider using [inline SVG instead of icon fonts](https://css-tricks.com/icon-fonts-vs-svg/).
   - Summary of GitHub [switching to inline SVGs](https://github.com/blog/2112-delivering-octicons-with-svg)

## User Experience

 - Avoid [low-contrast font colors](http://contrastrebellion.com/).
 - Consider adding [accesskeys](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey).
   - [Examples](http://www.hanselman.com/blog/TheWebIsTheNewTerminalAreYouUsingTheWebsKeyboardShortcutsAndHotkeys.aspx)

### Tools

 - [UX Check](http://www.uxcheck.co/)
 - [FormLinter](https://formlinter.com/) - find usability issues in forms.

## Performance

 - Enable [gzip compression](https://developers.google.com/speed/docs/insights/EnableCompression).
   - [Test gzip compression](http://www.whatsmyip.org/http-compression-test/).
 - Consider avoiding [web fonts](https://meowni.ca/posts/web-fonts/).

### Tools

 - [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
 - [YSlow](http://yslow.org/)
 - [Sitespeed.io](https://www.sitespeed.io/)
 - [Lighthouse](https://github.com/GoogleChrome/lighthouse)
 - [WebPageTest](http://www.webpagetest.org/)
 - [REDbot](https://redbot.org/)
 - [Pingdom](https://tools.pingdom.com/)
 - [SpeedTracker](https://speedtracker.org/)

## Accessibility

 - Don't use `tabindex` value [greater than 0](http://webaim.org/techniques/keyboard/tabindex).
 - Be aware of [screen reader conflicts](http://john.foliot.ca/using-accesskeys-is-it-worth-it/) with [accesskeys](http://webaim.org/techniques/keyboard/accesskey), making accesskeys mostly [useless](https://www.thesitewizard.com/webdesign/access-keys-are-useless.shtml) for blind users.
 - The contrast between the background and the foreground should be as high as possible.
 - When using colors to communicate an information (such as states or graphs), use different styles or add a text/icon to distinguish different states. This is important for both colorblind people and printing a page in grayscale.
 - Make sure zooming in/out doesn't break the page.

 ### Tools

 - [Tota11y](http://khan.github.io/tota11y/) (Bookmarklet)
 - [a11y.css](http://ffoodd.github.io/a11y.css/index.html) (Bookmarklet)
 - [revenge.css](http://heydonworks.com/revenge_css_bookmarklet/) (Bookmarklet)
 - [Functional Accessibility Evaluator 2.0](https://fae.disability.illinois.edu) (Web and [Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/ainspector-sidebar/))
 - [WAVE Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) (Chrome Addon)

## SEO

 - Use [canonical URLs](https://support.google.com/webmasters/answer/139066?hl=en) to prevent search engines from indexing duplicate content.

### Tools

 - [Siteliner](http://www.siteliner.com/)