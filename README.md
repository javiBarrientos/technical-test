# Technical-test

Technical-test is a Vue/JavaScript spa to show products and filter then.

## Technology stack

- Vue
- JavaScript
- Vuex (State managment, Redux pattern)
- Vuetify

## Why these technologies

I chose **Vue** because in addition to having experience with it, I know that it is a good framework to create a spa. I've decided not to use any **TS**, just **EMC6** with some const. For the state manager I have used **Vuex** which is based on the **Redux** pattern. And **Vuetify** for the simplicity in **css** code and classes.

## How this works

First the **ProductService** file communicates with the **API** making a promise, then the **Store** makes use of that service and sets what it receives as the state, inside the **MainProducts** file it calls the getters and displays the array. And the last step inside **SidebarContent** file it calls the actions to filter the array of **MainProducts**.

## Improvements

The improvements that I consider would be that the **API** has an endpoint to be able to receive the products already filtered, in this way it could avoid introducing bugs.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install technical-test.

```bash
npm install
```

```bash
npm run serve
```

## Author

[@JaviBarrientos](https://github.com/javiBarrientos)
