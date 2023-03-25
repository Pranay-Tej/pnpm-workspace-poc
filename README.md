# pnpm workspace poc

- pnpm monorepo to use as a base to test turborepo and nx in separate branches

## Includes

- common `css-variables` + theme variants shared across packages
  - eslint, tsconfig, prettier etc, can also be shared in similar way
- custom components package on top of mui + emotion
  - emotion (comes as default with mui) can be replaced with styled-components
  - An article worth considering - from emotion maintainer, about CSS in JS: [Why We're Breaking Up with CSS-in-JS](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b)
  - SCSS with css-modules can be used for scoped styles. CSS nesting is now native, browser support coming soon - [status](https://caniuse.com/css-nesting)
  - TODO: libraries like `tsup` to enable treeshaking (or configure existing vite)
- Storybook for mui-lib
  - TODO: theme switching with plugins
- Reusable SvgIcons using mui's `SvgIcon` along with `stroke`, `strokeWidth` and other props to avoid overriding with css
- common `css-utils` classes like `sn-flex`, `sn-items-center`, `sn-justify-center` shared as a package
  - can be replaced with tailwindcss with custom (ex: `sn-`) prefix
    - PROS
      - tailwind uses `postcss` to automatically add browser prefixes
      - faster development
      - extensive configuration (can also use `css-variables` from shared package)
      - automatic class sorting with official `prettier-plugin-tailwindcss`
    - CONS
      - classnames in template (tailwind can be used for utils, and normal css for layouts)
    - tailwind has crossed bootstrap in npm downloads recently - [npm trends](https://npmtrends.com/bootstrap-vs-tailwindcss). Not an easy feat considering jquery (not even considering non npm usage with cdn) still beats angular and vue - [npm trends](https://npmtrends.com/@angular/core-vs-jquery)

---

## Installation

- Install `pmpm` with `npm i -g pnpm`
- Install dependencies with `pnpm i`
- Optional: use `ni` to simplify running scripts
  - `pnpm i -g @antfu/ni`
  - `nr` to view and run available scripts in `package.json`
- `pnpm mui-lib build` or `pnpm mui-lib:build` to build the ui library
- `pnpm mui-storybook` to run story book
- `pnpm client dev` or `pnpm client:dev` to run react client app