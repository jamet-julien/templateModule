# {PACKAGE}

[![CircleCI Status](https://circleci.com/gh/jamet-julien/{PACKAGE}.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/jamet-julien/{PACKAGE})
![Codecov](https://img.shields.io/codecov/c/github/jamet-julien/{PACKAGE})
[![npm](https://img.shields.io/bundlephobia/min/{PACKAGE})](https://www.npmjs.com/package/{PACKAGE})
[![npm](https://img.shields.io/npm/dt/{PACKAGE}.svg?style=flat-square)](https://www.npmjs.com/package/{PACKAGE})
[![npm](https://img.shields.io/npm/v/{PACKAGE}.svg?style=flat-square)](https://www.npmjs.com/package/{PACKAGE})
[![npm](https://img.shields.io/npm/l/{PACKAGE}.svg?style=flat-square)](https://github.com/jamet-julien/{PACKAGE}/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

lorem ipsum sit amet

-   [Install](#install)
-   [Importing](#importing)
-   [Quick start](#quick)
-   [Methods](#methods)
    -   [.method(`num`)](#method)
-   [Template](#template)
    -   [Semantic-release](#semantic)
    -   [Benchmark](#benchmark)
    -   [Test](#test)
    -   [Server developpement](#server)

## Install <a id="install"></a>

`npm i {PACKAGE}`  
or  
`yarn add {PACKAGE}`

---

## Importing <a id="importing"></a>

```js
import package from "{PACKAGE}";
```

---

## Quick start<a id="quick"></a>

usage {PACKAGE} plugin

```js
```

---

## Methods <a id="methods"></a>

### .method() <a id="method"></a>

lorem ipsum sit amet

| argument | type     | Description |
| :------- | :------- | :---------- |
| `num`    | `number` | lorem ipsum |

```js
```

---

## Template<a id="template"></a>

### Semantic-release<a id="semantic"></a>

install :

```
npm i -g semantic-release-cli
```

Create token here [token circleCI](https://app.circleci.com/settings/user/tokens) and run setup :

```
semantic-release-cli setup
```

To run **Semantic-release** and create formated commit after `git add` :
`npm run commit`

### Benchmark<a id="benchmark"></a>

Create file on folder `benchmark/benck/`.
Export your Suite.

to run benchmark :
`npm run bench`

### Test<a id="test"></a>

Create file on folder `test/`.
All test run before commit.

to run test :
`npm t`

### Server developpement<a id="server"></a>

Create files on folder `demo/` with file entry `index.html`.

To run server (script use **Parcel** library) :
`npm run dev`
