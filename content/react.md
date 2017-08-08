# ReactJS - Best Practices

- Don't use `bind` or arrow functions in `render()` to avoid [creating new values]( https://blog.vixlet.com/react-at-light-speed-78cd172a6411#a45a) each render cycle.
- Consider using [PureComponent over Component](https://60devs.com/pure-component-in-react.html).
- If an update to the state depends on the current state/props, use `this.setState((prevState, props) => ...)` as `setState` is [asynchronous](https://facebook.github.io/react/docs/react-component.html#setstate).
- Be aware of different methods for [conditional rendering](https://www.robinwieruch.de/conditional-rendering-react/#enums).
- Use `?react_perf` [URL parameter](https://facebook.github.io/react/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab) to make debugging ReactJS easier