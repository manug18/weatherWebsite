## Studio SleevesUp React boilerplate

Meant to be used as boilerplate for new react projects. Contains

1. Prettier config - for consistent code formatting.
2. Eslint config - for consistent code quality and dev/build time error checking.
3. Plugins to make `Eslint` and `Prettier` work together without clashing rules.

---

### Setup

1. Clone the repo. `git clone [git repo ssh/http url]`
2. `cd [repo]` and `npm install` to install dependencies.
3. `npm start` to run the dev build and open [http://localhost:3000/](http://localhost:3000/)

Dev server comes with hot reload out of the box.

---

### Local development pre-requisites

> Note: This is opinionated setting for ensuring code quality

1. Install Code Editor. Preferably [VS CODE](https://code.visualstudio.com/download).
2. Install important extensions for Linting and Formatting  
   2.1. `ESLint` from Microsoft  
   2.2. `Prettier - Code formatter` from Prettier.
3. Go to VSCode setting and enable `format on save`. Setting id = `editor.formatOnSave`
4. If formatting doesn't work. You may need to configure formatter to run on `ts` and `tsx` extensions.  
   4.1. Open file and hit `cmd/ctrl + shift + p` > `format document with` > `configure default` > Choose `prettier` from the available formatters

---

### Bundling and Distribution

run `npm run build` to create a build folder.

> Production build correctly bundles React in production mode, optimizes it for the best performance by minifying.

The artifact can be served from any server. If you want to test artifact locally, serve it using npm package `serve`. Run `npx serve -s build` from repo root.

---

### Versioning

> Make sure to bump version number before raising a PR.

#### Version History

| version number | Changes                                                  |
| -------------- | -------------------------------------------------------- |
| `0.1.0`        | Create react app default version.                        |
| `0.1.3`        | Added configs for Prettier, Eslint and plugins           |
| -------------- | -------------------------------------------------------- |