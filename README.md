# crumbles

isomorphic utilities we use across projects

anything you put in here _must_ have the same api on both node and browser.

we ougtha have repos for re-used components and server stuff, too, but this is a different thing.

check out `inspect` as an example of an api with different browser and server implementations


## development

In development, this module depends on [snackstack](https://github.com/snackstack), which provides cli scripts for building and testing and whatnot.

Check out the package.json for more details on that.

## todo

this module has some tests, some docs, and some files with flow anotations. It's enough to get a sense of the destination, but we aren't there yet.

also,

- [ ] test browser/node scripts independantly
    - this means learning more about jest's automock stuff

