## Food Ordering

-Destructuring the app

- Headder
  - logo image
  - nav items
    - Home
    - About us
    - Contact us
    - Sign Up
    - Cart
- Body
  - search bar
  - RestoentContainer
    - RestorentCard
      - Image
      - Name of res, Rating, cuasin name
- Footer
  - Coustamer care
  - Facabook link
  - Instagram link
  - Copywrite
  - Address

# Types of exports/Import

## Default export/import

- export default component;
- import component from path;

## Named export/import

- export const component;
- import {component} from path;

# React hooks

-> react hooks are just an normal utility function which is given by the react the only thing it comes with some super powers, it has some logic behind the scenes inside the react.

# Redux toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- Dispatch(action)
- Subscribe to the headder using Selector

# Types of testing

- Unit testing
- Integration testing
- End to End testing or e2e testing

# Setting up our app for testing

## Steps

- Install react testing library [npm i -D @testing-library/react]
- Install jest [npm i -D jest]
- Install babel dependinces from jest website
- Create babel.config.js file and paste the coppied code from the jest website.
- Create .parcelrc file to disabel the parcel's own babel configuration. THIS WILL OVERRIDE THE DEFAULT PARCEL CONFIG. To disable Babel transpilation in Parcel.
- Jest - npx jest --init
- Instsll jsdom library in case if you are using jest version > 28 from react testing library > setup > jest 28.
- Install @babel/preset-react
- Modify the bable.config.js file by add new preset to it ["@babel/preset-react", {runtime: "automatic}].
- npm i -D @testing-library/jest-dom.
- import "@testing-library/jest-dom".
