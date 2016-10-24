# sonos

## Linting

**[standardjs rules reference](http://standardjs.com/rules.html)**

There's a pre-commit hook installed that makes sure the code passes the linter before you commit it. It's great.

You'll have a better experience if you install a linter plugin for your editor. The plugin will do spell-check-style indications when your code doesn't pass.

You can also turn on "automatically format code when I save" which sometimes doesn't work.

[standardjs editor plugins](http://standardjs.com/index.html#text-editor-plugins)

#### breaking the rules

sometimes you need to break the rules. For example, some important-but-poorly-designed libraries perform side effects when you `require` them. Sometimes that's all you need from the library, which breaks the `no-unused-vars` rule. If you need to do it anyway, do it like this:

```js
require('badlibrary') // eslint-disable-line
```

#### globals

some other libraries (like gsap) define a bunch of globals. When you use those globals, you'll get a `no-undeclared-vars` error.

Add a comment to the beginning of the document like this:

```js
/* global TimelineMax */
```

## DEPLOYMENT

- run `npm run deploy:production` to deploy to production
- commits to master are deployed to staging automatically

## GETTING STARTED

- run `npm run dev:server` for a hot-reloading dev server on port 8080.
- run `npm run dev:client` to launch the api server on port 3000.
- run `npm run dev` to launch both

## ARCHITECTURE

Unlike other systems, this project has _two targets_.

The client website is built into static files, which can be served cheaply and quickly from s3 or a cdn.

The api server is built into a bundle which can be deployed to heroku or elsewhere.

The api server _does not_ serve the client pages, only json.

## SRC/MODULES

this folder is special.

it's for utility code that can be required on the client and server

`./server` is a module-path on the server, and `./client` is a module-path on the client. `./shared` is a module-path in both targets.

so, if both folders have a file called `inspect.js`, you can require 'inspect' and get a working function on both platforms _or in shared code_.

of course, both host implementations of modules defined here _need_ to have the same api.

- require('util/log') logging utilities
- require('util/url') urls -> objects
- require('util/inspect') values -> pretty strings

## ENVIRONMENTS

Unlike other systems, environments here are _cumulative_.

You can do a build with `local development` or `local production` or `production heroku spanish use_auth`.

You specify environments at compile time by passing them into snackpack (see the `scripts` in package.json). They're merged in the order declared: if you run `snackpack serve local development`, `development` facts will take precedence over `local` facts.

Environments determine:

- which files in /config are read
- which build steps are applied

## CONFIG

**tldr** config data (think `.env`) is in `/config`.

config code (validation, sourcing) is in the `config/*` modules.

you can define some configuration options in `config/whatever.js`

if you then require `config/whatever` in app code, the app will validate that config at launch.

### where data comes from

/config is where configuration data comes from. Anything set there _can_
be pulled into the client or server code. I'll talk about how to do that
in a minute. If a config value should be loaded from ENV, you must
explicitly declare that.

For example, if the DATABASE_URL should be hardcoded on localhost but
loaded from ENV in production:

```js
// /config/db/local.js
module.exports = {
  database_url: 'postgresql://localhost/'
}
```

```js
// /config/db/production.js
module.exports = {
  database_url: 'ENV:DATABASE_URL'
}
```

### where data goes

There's a module called `config/resolve`.

Calling it looks like this:

```js
// /src/shared/js/config/hosts.js
import resolve from './resolve'

export default resolve({
  server_protocol: {
    description: 'server protocol',
    from: CONFIG.hosts.server_protocol,
    default: 'http'
  },
  server_host: {
    description: 'server hostname',
    from: CONFIG.hosts.server_host
  },
  ...
```

Resolve takes a map of config descriptions, pulls them from the right
place (webpack injection, or process.env if declared as discussed
above), and returns a map with the same keys and properly resolved
values.

Config descriptions can have the following keys:

- `description` is an error-message-friendly description of what the
  config var is for

- `from` is where the actual webpack injection happens. from values
  should always look like this:
    `CONFIG.${config_subdir}.${config_key}`

- `default` is a default value. If a config description has a 'default',
  that means it's _not required_.

- `parser` is a function that the (string) value goes through before
  making it into the resolved value. A parser function is a good place
  to perform validation (is this string a url?) or to convert types
  (parser: parseInt)
