

# KaTeX Expression

A web component/custom element (`<katex-expression>`) to render [KaTeX](https://katex.org/) expressions. 

[![npm](https://img.shields.io/npm/v/@navsnpm/katex-expression.svg)](https://www.npmjs.com/package/@navsnpm/katex-expression)
[![stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com/)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@navsnpm/katex-expression)

## Table of Contents

- [Installation](#installation)
	- [HTML](#html)
	- [React/Angular/Vue](#reactangularvue)
- [Usage](#usage)
	- [Basic](#basic)
	- [Katex Options](#katex-options)
	- [Error Handling](#error-handling)
- [Properties](#properties)
- [Events](#events)

## Installation

### HTML

Insert the following script tags in the `<head>` section of your html

```html
<script type="module" src="https://unpkg.com/@navsnpm/katex-expression/dist/katex-expression/katex-expression.esm.js"></script>
<script nomodule="" src="https://unpkg.com/@navsnpm/katex-expression/dist/katex-expression/katex-expression.js"></script>
```

### React/Angular/Vue

Install `<katex-expression>` using npm
	
```
npm i --save @navsnpm/katex-expression
```

> Note: Katex css, js, & fonts are bundled in this package. You can skip including them in your application. Please refer [package.json](./package.json) for KaTeX version.

## Usage

### Basic 

Use the `<katex-expression>` tag anywhere in your html. Set the `expression` attribute to the katex expression.

```html
<katex-expression expression='\int \dfrac{(log\ x)^3}{x}\ dx'>
</katex-expression>
```

<!--
```
<custom-element-demo>
<template>
<script type="module" src="https://unpkg.com/@navsnpm/katex-expression/dist/katex-expression/katex-expression.esm.js"></script>
<script nomodule="" src="https://unpkg.com/@navsnpm/katex-expression/dist/katex-expression/katex-expression.js"></script>
<h4>Editable Demo</h4>
<katex-expression expression='\int \dfrac{(log\ x)^3}{x}\ dx'>
</katex-expression>
</template>
</custom-element-demo>
```
-->


### KaTeX Options

`katex-options` accepts a json str for KaTeX rendering options. Refer [KaTeX API Options](https://katex.org/docs/options.html) for more information. Example usage for `katex-options`:

```html
<katex-expression 
	expression='\int \dfrac{(log\ x)^3}{x}\ dx' 
	katex-options='{ "displayMode": true , "throwOnError": true }'>
</katex-expression>
```

### Error Handling

`Error` objects are emitted via the `onError` event. Handle this event to re-throw, pipe exceptions to Sentry or elsewhere. Example non-JSX usage below:

```html
<katex-expression 
	id="expression"
	expression='\gte' 
	katex-options='{ "displayMode": true , "throwOnError": true }'>
</katex-expression>

<script>
  const element = document.querySelector('#expression');
  element.addEventListener('onError', error => { 
    console.error('<katex-expression> error:', error)
  })
</script>
```

> Note: Katex errors are emitted if `katex-options.throwOnError` is true. Other exceptions are emitted by default.

## Properties

| Property       | Attribute       | Description                | Type     | Default     |
| -------------- | --------------- | -------------------------- | -------- | ----------- |
| `expression`   | `expression`    | katex expression to render | `string` | `undefined` |
| `katexOptions` | `katex-options` | Katex options json         | `string` | `undefined` |


## Events

| Event     | Description                     | Type               |
| --------- | ------------------------------- | ------------------ |
| `onError` | Emits `Error` object on exception | `CustomEvent<any>` |

## License

`<katex-expression>`is licensed under the [MIT License](http://opensource.org/licenses/MIT).
