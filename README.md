# micro-dash &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/micro-ux/micro-dash/blob/main/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/micro-ux/micro-dash) [![npm version](https://img.shields.io/npm/v/@micro-ux/micro-dash.svg?style=flat)](https://www.npmjs.com/package/@micro-ux/micro-dash)

micro-dash offers a subset of lodash of the functionality found in [lodash](https://github.com/lodash/lodash)

**Note**: This is still work in progress

It is essentially a re-write of [lodash](https://github.com/lodash/lodash) (many things copied as is to keep the functionality intact) in an attempt to create a micro version of lodash that leverage on modern browser capabilities to make it more lightweight. This would also mean lesser/no support for legacy browsers.

## Web optimized modules for individual methods

Each of the methods below are exported as an individual npm module (optimized for web). However, if you are planning to use this library in NodeJS environment you should be using the main @micro-ui/micro-dash library (optimized for node) instead. See section below for more details.

| Category | Method      | Installation                                | Npm Module                                                                                                                                                     |
| -------- | ----------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| String   | toLowerCase | `yarn add @micro-ux/micro-dash.tolowercase` | [![npm version](https://img.shields.io/npm/v/@micro-ux/micro-dash.tolowercase.svg?style=flat)](https://www.npmjs.com/package/@micro-ux/micro-dash.tolowercase) |
| String   | toUpperCase | `yarn add @micro-ux/micro-dash.touppercase` | [![npm version](https://img.shields.io/npm/v/@micro-ux/micro-dash.touppercase.svg?style=flat)](https://www.npmjs.com/package/@micro-ux/micro-dash.touppercase) |

**Note** Implementation of other methods is still in progress

### Example usage

```
import toLowerCase from '@micro-ux/micro-dash.tolowercase';

toLowerCase('Foo Bar');
```

## Node optimized module - complete library

If you are planning to use this library in NodeJS env you can use the main @micro-ui/micro-dash library (optimized for node).

### Installation

`yarn add @micro-ux/micro-dash`

### Example usage

```
const { toLowerCase } = require('@micro-ux/micro-dash')

toLowerCase('Foo Bar');
```

## Comparision with Lodash

<table>
  <tr>
    <th>Category</th>
    <th>Method</th>
    <th>Functionality</th>
    <th>Bundle size (min + gzip)</th>
    <th>Performance</th>
  </tr>
  <tr>
    <td>String</td>
    <td>toLowerCase</td>
    <td>Same as lodash</td>
    <td>
      <b>micro-dash</b>: <a href="https://bundlephobia.com/result?p=@micro-ux/micro-dash.tolowercase" target="_blank">426B</a><br />
      <b>lodash</b>: <a href="https://bundlephobia.com/result?p=lodash.tolower" target="_blank">447B</a>
    </td>
    <td>
      <a href="https://github.com/micro-ux/micro-dash-performance" target="_blank">Performance Benchmarking</a>
    </td>
  </tr>
  <tr>
    <td>String</td>
    <td>toUpperCase</td>
    <td>Same as lodash</td>
    <td>
      <b>micro-dash</b>: <a href="https://bundlephobia.com/result?p=@micro-ux/micro-dash.touppercase" target="_blank">426B</a><br />
      <b>lodash</b>: <a href="https://bundlephobia.com/result?p=lodash.toupper" target="_blank">440B</a>
    </td>
    <td>
      <a href="https://github.com/micro-ux/micro-dash-performance" target="_blank">Performance Benchmarking</a>
    </td>
  </tr>
</table>

## Will not implement the following methods

micro-dash will not implement certain methods from lodash to keep the library simple & lightweight.

| Category | Lodash Method | Rationale |
| -------- | ------------- | --------- |
| String   | \_.lowerCase  | TBD       |
| String   | \_.upperCase  | TBD       |

## Contributing

### Local setup

- Requirements
  - Node version >= 10.13.0 [webpack 5 requires at least Node.js 10.13.0 (LTS)](https://github.com/webpack/webpack/blob/v5.0.0/package.json#L106-L108)
  - install `yarn`
- Steps
  - clone the repo
  - install node dependencies `cd micro-dash` `yarn install`

### Unit Testing

- Run test cases with the command `yarn test `
- Run specific test cases with `--testPathPattern` flag. Ex: `yarn test --testPathPattern=src/isNull`

## Special Thanks to

- [lodash](https://github.com/lodash/lodash)
- [You Dont Need Lodash Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)
- [bundlephobia.com](https://bundlephobia.com)
