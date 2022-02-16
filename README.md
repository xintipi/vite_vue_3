## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm run start

# build for production with minification
npm run build

# build for staging with minification
npm run build:staging

# check eslint
npm run lint:eslint

# format code
npm run lint:prettier
```

## Commitlint
- Run command <code>npx husky add .husky/commit-msg ""</code>

- Open file <code>.husky/commit-msg</code> and change into:

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

- Run example in below then wrong commit:
```
git add .
git commit -m "this is my commit"
```

- According to the Angular standard (the standard we use in this article), a commit message will follow the following structure:
<code>type: subject</code>

<code>type</code>
```
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
- chore: add something without touching production code (Eg: update npm dependencies)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- revert: Reverts a previous commit
- style: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests
```

<code>subject</code>: content of commit

Example correct:
<code>git commit -m "chore: lint commit message"
</code>

<code>git commit -m "chore: lint commit message" -m "This is message body. In this commit we added CommitLint which lints commit message"
</code>

Exception: Can't find node in PATH, trying to find a node binary on your system

Run: <code>echo "export PATH=\"$(dirname $(which node)):\$PATH\"" > ~/.huskyrc</code>
## License
Copyright (c) 2022
