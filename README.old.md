# `react-scripts-ts` [![npm version](https://badge.fury.io/js/react-scripts-ts.svg)](https://badge.fury.io/js/react-scripts-ts) [![Build Status](https://travis-ci.org/wmonk/create-react-app-typescript.svg?branch=master)](https://travis-ci.org/wmonk/create-react-app-typescript)

Create React apps (with Typescript) with no build configuration.

 * [Getting Started](#tldr) – How to create a new app.
 * [User Guide](https://github.com/wmonk/create-react-app-typescript/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with react scripts ts.

_Do you know react and want to try out typescript? Or do you know typescript and want to try out react?_ Get all the benefits from `create-react-app` but you use typescript! 🚀

## tl;dr

```sh
npm install -g create-react-app

create-react-app my-app --scripts-version=react-scripts-ts
cd my-app/
npm start
```

## Migration

In general, most upgrades won't require any migration steps to work, but if you experience problems after an upgrade, please file an issue, and we'll add it to the list of migration steps below.

### From `<2.16.0` to `>=2.16.0`

Since `2.16.0`, the template uses different `tsconfig` files for both development and production mode. For the latter, unfortunately, the path resolver is not smart enough to fall back to the basic `tsconfig.json` in case the expected `tsconfig.prod.json` is not present, so you have to create this file manually like shown [here](https://github.com/wmonk/create-react-app-typescript/blob/master/packages/react-scripts/template/tsconfig.prod.json).

### From `<2.13.0` to `>=2.13.0`

Since `2.13.0`, `typescript` is listed as a peer dependency of `react-scripts-ts`. For projects generated with at least this version, the init script takes care of properly installing it as dev dependency to the generated projects. Older projects require manual installation, in case you have not already done that.

Using `npm`:
```
npm i -D typescript
```

Using `yarn`:
```
yarn add -D typescript
```

### From `<2.5.0` to `>=2.5.0`

Version `2.5.0` introduces a new config file for jest, that is necessary for the tests to run. If you were previously running a version older than `v2.5.0` and upgraded to `v2.5.0` or newer, you need to manually add the new file, or else you'll get an error similar to this when trying to run your tests:

```javascript
Test suite failed to run

{
    "messageText": "Cannot read file 'C:\\[project]\\tsconfig.test.json': ENOENT: no such file or directory, open 'C:\\[project]\\tsconfig.test.json'.",
    "category": 1,
    "code": 5012
}
```

To fix this, create a new file *in the root of the project* called `tsconfig.test.json`, and paste [the content of this file into it](https://raw.githubusercontent.com/wmonk/create-react-app-typescript/master/packages/react-scripts/template/tsconfig.test.json). Everything should work now. For more info, please see [this issue](https://github.com/wmonk/create-react-app-typescript/issues/141).

## Changelog

### 2.16.0
* Allow `moduleNameMapper` config override - @sebald
* Fix travis build - @DorianGrey
* Allow using different tsconfig file for dev and build - @DorianGrey

### 2.15.1
* Fix duplicated mjs entry in Jest config - @StevenLangbroek
* Allow `--watchAll` to be set - @DorianGrey

### 2.15.0
* Replace TSLint rules with presets - @nielsdB97
* Update file-loader exclusion rules - @winstonewert
* Fix Uglifyjs settings - @meandmax
* Merge react-script 1.1.x - @wmonk

### 2.14.0
* README fixes - @kaminskypavel
* README fixes - @adambowles
* Remove unused JS files - @DorianGrey
* README fixes - @stephtr
* Added the abillity to import js and jsx files with ts-loader - @GeeWee
* Uglifyjs update for es6 support - @thetric

### 2.13.0
* Remove tslint-loader from prod builds - @DorianGrey
* Include typescript as devDependency in boilerplate - @ianschmitz
* Document custom module formats - @joshtynjala
* Fix tsconfig.json - @diabelb

### 2.12.0
* Update typescript to 2.6.2

### 2.11.0
* Upgrade to [`react-scripts@1.0.17`](https://github.com/facebookincubator/create-react-app/releases/tag/v1.0.17)

### 2.10.0
* README updates - StefanSchoof
* README updates - DorianGrey
* Add support for fork-ts-checker-webpack-plugin - johnnyreilly

### 2.9.0 - UNPUBLISHED
This included changes that were not published by the facebook upstream, so was unpublished.

### 2.8.0
* Update typescript to 2.5.3 - @nicolaserny

### 2.7.0
* Merge react-scripts@1.0.13 - @JohnNilsson
* Fix git tempalte - @hktonylee
* Provide migration docs - @JReinhold
* Updated dependencies - @swengorschewski
* Fix tslint config - @comerc

### 2.6.0
* Merge react-scripts@1.0.10 - @wmonk
* Update component template - @pelotom

### 2.5.0
* Support dynamic imports - thanks @nicolaserny, @DorianGrey
* Fix up tsconfig - thanks @js-n
* Fix readme typo - thanks @adambowles
* Move to ts-jest - thanks @DorianGrey

### 2.4.0
* Upgrade typescript to 2.4 and ts-loader to 2.2.1 - thanks @frederickfogerty
* Fix readme typo - thanks @wrongway4you

### 2.3.2
* Fix `typescript` version to 2.3.x until 2.4 @types are fixed

### 2.3.1

* All tsc to parse config (for `extend`) - Thanks to @DorianGrey
* Fix various jest issues - thanks to @zinserjan
* Fix code coverage - thanks to @zinserjan

### 2.2.0
* Upgrade to [`react-scripts@1.0.6`](https://github.com/facebookincubator/create-react-app/)

### 2.1.0
* Update to `tslint@5.2.0` - thanks to @mindjuice
* Fix test setup issue - thanks to @jonmpqts
* Add `source-map-loader` - thanks to @Place1
* Update to `typescript@2.3.3` - thanks to @sjdweb

### 2.0.1
* Fix issue with jest finding test files

### 2.0.0
* Upgrade to [`react-scripts@1.x.x`](https://github.com/facebookincubator/create-react-app/blob/0d1521aabf5a0201ea1bcccc33e286afe048f820/CHANGELOG.md)

### 1.4.0
* Upgrade to typescript@2.3.2 - thanks to @patrick91
* Add tests around react-scripts-ts - thanks to @migerh

### 1.3.0
* Upgrade to typescript@2.2.2 - thanks to @jeremistadler

### 1.1.8
* Fix regression where no `@types` were being installed on init

### 1.1.7
* Merge facebookincubator/create-react-app@0.9.5 into react-scripts-ts
* Merge facebookincubator/create-react-app@0.9.4 into react-scripts-ts
* Merge facebookincubator/create-react-app@0.9.3 into react-scripts-ts
* Merge facebookincubator/create-react-app@0.9.2 into react-scripts-ts
* Merge facebookincubator/create-react-app@0.9.1 into react-scripts-ts

### 1.1.6
* Merge facebookincubator/create-react-app@0.9.0 into react-scripts-ts

### 1.0.6
* Add missing `cli-highlight` dependency

### 1.0.5
* Print file names when running `npm run build`
* Add support for `setupTest.ts`
* Highlight source code when erroring in `npm run build`

### 1.0.4
* Change mentions of `eslint` to `tslint`

### 1.0.3
* Remove hidden character from `tsconfig.json`

### 1.0.2
* Copy `typescriptTransform.js` when running `npm run eject`
