[![NPM version][npm-image]](https://www.npmjs.com/package/gh-card)

# \<gh-card\>

A simple themable card widget (Web component) that shows user's github stats. Can be embedded into your website with just one line!

## Demo

https://sangeetmanghnani.github.io/github-card/

`npm i gh-card`

## Usage

### Include this custom element
`<link rel="import" href="../node_modules/gh-card/github-card.html">`

### Add to your app
```html
<gh-card username="YourUserNameHere" theme="material" kind="dark"></gh-card>
```

### Cutomizing Instructions
For Material Light theme
```html
<gh-card username="YourUserNameHere" theme="material" kind="light"></gh-card>
```

For Material Dark theme
```html
<gh-card username="YourUserNameHere" theme="material" kind="dark"></gh-card>
```

For Sleek theme
```html
<gh-card username="YourUserNameHere" theme="sleek" kind="light"></gh-card>
```
[npm-image]: https://img.shields.io/npm/v/gh-card.svg?style=flat-square