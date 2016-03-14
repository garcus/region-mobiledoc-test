# region-mobiledoc-test
Test of combining mobiledoc editor with CSS region polyfill

## Setup

1. Clone repo
2. Run `npm install`
3. Run `grunt`

I recommend using node's `http-server` to host this test/demo.

`npm install -g http-server`

Host on localhost:

`http-server dist/`


## Notes on windows (problems with node paths)

1. Run `npm install -g grunt-cli`
2. Type this in your Command prompt: `path=%PATH%;%APPDATA%\npm`
3. Now you will be able to run `grunt` and `http-server dist/`
