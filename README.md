# Use HTML CSS Javascrpt instead of MS Word

## `ms_word.css`

This file contains some style snippets to style the html in MS Word style

## `paper.css`

This file is used to create sheets of paper on screen for preview and print.

Get it from [cognitom/paper-css](https://github.com/cognitom/paper-css)

## install and use tailwindcss for fast styling

```
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./tailwindInput.css -o ./src/style.css --watch
```

Turn on auto save in your edit to live compile.

## use `plotly.js` and `chat.js` to plot

write your ploting code in `src/plot.js`.

## `highlight.js`

Import the right language file to hight your code.

## `katex.js`

Write math formula with katex.

## `math.js`

Do some basic math calculate.

## Themes

Theme templates from [plotly chart studio](https://chart-studio.plotly.com/create/#/)

## Separate `src` and other files

just copy `separate use` diractory. And run command to use `browser-sync` to server the file.

```
npx tailwindcss -i ./tailwindInput.css -o ./src/style.css --watch
browser-sync start --config bs-config.js
```
