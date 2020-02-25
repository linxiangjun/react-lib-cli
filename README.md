# react-lib-cli

A react popular ecosystem libraries manager.

## Introduce

开发这个 CLI 的初衷是为了在开发新的 React 项目时能够快速的安装需要的主流工具、样式、组件库，这些库都是在开发实践中经常使用的，而且在整个 React 生态中也非常的流行和受欢迎。

目前收录了以下库：

**utility**

| name        | repo                                               | description                                                                                    |
| ----------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| lodash      | [🔗](https://github.com/lodash/lodash)             | A modern JavaScript utility library delivering modularity, performance, & extras.              |
| memoize-one | [🔗](https://github.com/alexreardon/memoize-one)   | A memoization library which only remembers the latest invocation.                              |
| moment      | [🔗](https://github.com/moment/moment)             | Parse, validate, manipulate, and display dates in javascript.                                  |
| rxjs        | [🔗](https://github.com/ReactiveX/rxjs)            | A reactive programming library for JavaScript.                                                 |
| reselect    | [🔗](https://github.com/reduxjs/reselect)          | Selector library for Redux.                                                                    |
| umi-request | [🔗](https://github.com/umijs/umi-request)         | A request tool based on fetch.                                                                 |
| immutable   | [🔗](https://github.com/immutable-js/immutable-js) | Immutable persistent data collections for Javascript which increase efficiency and simplicity. |
| classnames  | [🔗](https://github.com/JedWatson/classnames)      | A simple javascript utility for conditionally joining classNames together.                     |

**router**

| name                   | repo                                                     | description                          |
| ---------------------- | -------------------------------------------------------- | ------------------------------------ |
| react-router           | [🔗](https://github.com/ReactTraining/react-router)      | Declarative routing for React.       |
| connected-react-router | [🔗](https://github.com/supasate/connected-react-router) | A Redux binding for React Router v4. |

**state management**

| name        | repo                                           | description                                                 |
| ----------- | ---------------------------------------------- | ----------------------------------------------------------- |
| redux       | [🔗](https://github.com/reduxjs/redux)         | Predictable state container for JavaScript apps.            |
| react-redux | [🔗](https://github.com/reduxjs/react-redux)   | Official React bindings for Redux.                          |
| redux-saga  | [🔗](https://github.com/redux-saga/redux-saga) | An alternative side effect model for Redux apps.            |
| dva         | [🔗](https://github.com/dvajs/dva)             | React and redux based, lightweight and elm-style framework. |
| mobx        | [🔗](https://github.com/mobxjs/mobx)           | Simple, scalable state management.                          |

**style**

| name          | repo                                           | description                                                       |
| ------------- | ---------------------------------------------- | ----------------------------------------------------------------- |
| normalize.css | [🔗](https://github.com/necolas/normalize.css) | A modern alternative to CSS resets.                               |
| @emotion/core | [🔗](https://github.com/emotion-js/emotion)    | CSS-in-JS library designed for high performance style composition |

## Install

```bash
$ npm install -g react-library-cli
```

## Example

```bash
$ rl ls

? 请选择库类型索引
1. utility
2. style
```

```bash
$ 1

? 请选择库索引，多个以空格分隔(例如：1 2)

1. lodash
2. memoize-one
3. moment
4. rxjs
5. reselect
6. umi-request
```

## Usage

```bash
Usage: cli [options] [command]

Options:
  -V, --version  output the version number
  -h, --help     output usage information

Commands:
  ls             List all the popular react libraries
```

## TODO

1. 加入更多的库
2. 优化交互
3. 支持命令行展示更多的信息

## LICENSE

MIT
