# pnpm workspace poc

- pnpm monorepo to use as a base to test turborepo and nx in separate branches

## Includes

- common `css-variables` + theme variants shared across packages
  - eslint, tsconfig, prettier etc, can also be shared in similar way
- custom components package on top of mui + emotion
  - emotion (comes as default with mui) can be replaced with styled-components
  - An article worth considering - from emotion maintainer, about CSS in JS: [Why We're Breaking Up with CSS-in-JS](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b)
  - SCSS with css-modules can be used for scoped styles. CSS nesting is now native, browser support coming soon - [status](https://caniuse.com/css-nesting)
- `Storybook` for mui-lib
- Reusable SvgIcons using mui's `SvgIcon` along with `stroke`, `strokeWidth` and other props to avoid overriding with css
  - Can also take css variables as props
- `ReduxToolkit` + `Redux Saga` for state management + async calls
- `Preact Signals` state management POC
- Click in browser to open code in IDE (`client`) - `Hold Alt + Right Click` on any ui element, then `Click` on the file name to open corresponding code in the IDE - [vite-plugin-react-click-to-component](https://github.com/ArnaudBarre/vite-plugin-react-click-to-component)
- common `css-utils` classes like `sn-flex`, `sn-items-center`, `sn-justify-center` shared as a package
  - can be replaced with tailwindcss with custom (ex: `sn-`) prefix
    - PROS
      - tailwind uses `postcss` to automatically add browser prefixes
      - faster development + ide autocomplete
      - extensive configuration (can also use `css-variables` from shared package)
      - automatic class sorting with official `prettier-plugin-tailwindcss`
    - CONS
      - classnames in template (tailwind can be used for utils, and normal css for layouts)
    - tailwind has crossed bootstrap in npm downloads recently - [npm trends](https://npmtrends.com/bootstrap-vs-tailwindcss). Not an easy feat considering jquery (not even considering non npm usage with cdn) still beats angular and vue - [npm trends](https://npmtrends.com/@angular/core-vs-jquery)

---

## Todo

- [x] configure tsconfig and vite to allow imports as `@/store`, `@/pages` etc.
- [ ] share tsconfig base + extend specific to package
- [ ] add prettier, prettierignore
- [ ] add eslint, eslintignore - [ ] base + package specific
- [ ] add precommit hook
- [ ] configure env variables setup
- [ ] Library
  - [ ] Use `tsup` to enable treeshaking (or configure existing vite)
- [ ] Storybook
  - [ ] theme switching with plugins

---

## Installation

- Requirements `node v18.15.0`, `npm v9.5.0` - `nvm use` to automatically set the versions with npm
- Install `pmpm` with `npm i -g pnpm`
- Install dependencies with `pnpm i`
- Optional: use `ni` to simplify running scripts
  - `pnpm i -g @antfu/ni`
  - `nr` to view and run available scripts in `package.json`
- `pnpm mui-lib dev` or `pnpm mui-lib:dev` to run the ui library
- `pnpm mui-storybook` to run story book
- `pnpm client dev` or `pnpm client:dev` to run react client app
