<p align="center">
    <img src=".github/logo.gif" alt="logo"
         style="width: 72px; height: 80px;"/>
</p>
<h1 align="center">Playwright Template</h1>
<h4 align="center">Template of Node.js playwright project</h4>
<p align="center">To crawl web pages, run some autonomous tasks and so on.</p>


# Folders Description
* src: for playwright libraries
* tests: for playwright tests

# Usage
### Record Scripts
~~~shell
pnpm run record
~~~

### Test
~~~shell
pnpm run test
~~~

### Install Playwright Browsers
~~~shell
pnpm run install-chromium  # install chromium only
or
# choose one or more
pnpm exec playwright install chromium/firefox/webkit 
or
# all
pnpm exec playwright install
~~~

### Uninstall All Playwright Browsers
~~~shell
pnpm run uninstall
~~~


# Demo
#### Demo of crawling some pictures from a webpage.
![demo](.github/demo.gif)