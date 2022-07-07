# RV-React-plugin-calendar

![](https://github.com/Roxanne2904/rv-react-plugin-calendar/blob/main/assets/introduce.png)

> This component have been created by Viette Roxanne, with [React.js](https://fr.reactjs.org/).

## All Depedencies

## Dependencies

- @fortawesome/fontawesome-svg-core: "^6.1.1",
- @fortawesome/free-solid-svg-icons: "^6.1.1",
- @fortawesome/react-fontawesome: "^0.1.18",
- postcss: "^8.4.14",
- styled-components: "^5.3.5"

## DevDepedencies

- @babel/core: "^7.18.2",
- @babel/preset-react: "^7.17.12",
- @rollup/plugin-node-resolve: "^13.3.0",
- @storybook/addon-actions: "^6.5.8",
- @storybook/addon-essentials: "^6.5.8",
- @storybook/addon-interactions: "^6.5.8",
- @storybook/addon-links: "^6.5.8",
- @storybook/builder-webpack4: "^6.5.8",
- @storybook/manager-webpack4: "^6.5.8",
- @storybook/react: "^6.5.8",
- @storybook/testing-library: "^0.0.11",
- babel-loader: "^8.2.5",
- prop-types: "^15.8.1",
- react: "^18.1.0",
- react-dom: "^18.1.0",
- rollup: "^2.75.6",
- rollup-plugin-babel: "^4.4.0",
- rollup-plugin-peer-deps-external: "^2.2.4",
- rollup-plugin-postcss: "^4.0.2",
- rollup-plugin-terser: "^7.0.2"

## Use

> If you want to ...

### ...Clone his repository...

> ...you have to go [there](https://github.com/Roxanne2904/rv-react-plugin-calendar)
>
> > then...
>
> > `git clone https://github.com/Roxanne2904/rv-react-plugin-calendar.git nameOfYourFolder`
>
> > `cd nameOfYourFolder`
>
> > To install all dependencies you have to do (on your command line):
>
> > `npm install` or `yarn` (if you're using yarn)
>
> To install all DevDepedencies ...:
>
> > `npm install --only=dev`

### ...Install the component on your own App/project...

> you have to enter command line bellow on your terminal:
>
> `npm i rv-react-plugin-calendar`

## Introduction

### Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/52718e94-4d67-42d6-bd55-0b7a7e0ae837/deploy-status)](https://app.netlify.com/sites/rv-react-plugin-calendar/deploys)

> Have a look to the full documentation, [here](https://rv-react-plugin-calendar.netlify.app/?path=/docs/ui-calendar--default)
>
> You can also see the behavior of the component in simulation with an input type text, [here](https://rv-react-plugin-calendar.netlify.app/?path=/docs/ui-calendar--calendar-usage-simulation)

### All possibilities

> With `RV-React-plugin-calendar` you will be able to...:

- change the type of the input value:
  > > ex: `20/06/2022` or `2022/06/20`
- change your mode:
  > > ex: `blue mode`or `red mode`
  > >
  > > [have a look here](https://rv-react-plugin-calendar.netlify.app/?path=/docs/ui-calendar--default#stories)
- change language:
  > > These are availables:
  > >
  > > `french`, `english`, `spanish`, `deutch`, `portuguese`
- customize your arrows backgrounds Colors in order to add or remove a year,
- customize your numbers background color on hover,
- customize your invalid numbers color (these out of month),
- customize your numbers color,
- customize arrows and date color,
- choose if you want or not let days out of month allowed,
- choose your selected number background color,
- customize your custom numbers color on hover,
- customize your selected number color.

### Examples

> How to implement my component in my App/project ?
>
> > 1. First of all you have to install it into your own project.
>
> > - Do on your terminal:
>
> > `npm i rv-react-plugin-calendar`
> >
> > 2. Then I will show you a typical example, for a react app, to implement it:
>
> > ```jsx
> > import React, { useEffect, useState, useRef } from "react";
> > import { Calendar } from "react-plugin-calendar"; //this is our component!:)
> >
> > export default function myComponent() {
> >   let inputRef = useRef(null); //to get our input dom element to link with our calendar.
> >
> >   let pattern =
> >     /^([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))(\/)(0[1-9]|1[0-2])(\/)([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))$/g;
> >   // This pattern is for our input value, you can customize your own pattern for on change event.
> >   const [validValue, setValidValue] = useState(null);
> >   // this is for handle our input value
> >
> >   const handleOnchange = (e) => {
> >     let value = e.target.value; //let's obtain our value!
> >     let isItValidValue = pattern.test(value); //Let's test our current value with our pattern!
> >
> >     if (isItValidValue) {
> >       //if it's true ..
> >       if (validValue === null || validValue !== value) {
> >         // let's check if our state is currently null or not equal to value!...
> >         if (
> >           value.split("/")[0].length === 2 &&
> >           value.split("/")[2].length === 2
> >         ) {
> >           return;
> >         }
> >
> >         if (
> >           value.split("/")[0].length === 3 &&
> >           value.split("/")[2].length === 3
> >         ) {
> >           return;
> >         }
> >         //...else ... let set validValue!
> >         setValidValue(value);
> >       }
> >     }
> >   };
> >
> >   return (
> >     <form>
> >       <div>
> >         <label>
> >           <span>Date</span>
> >           <input
> >             onChange={handleOnchange}
> >             ref={inputRef} //we have linked our input as ref.
> >             type="text"
> >             name="date"
> >           />
> >         </label>
> >         <div>
> >           <Calendar
> >             onChangeInputValue={validValue} // !important, in order to link on change event to your component!
> >             myInputRef={inputRef} //!important, in order to link your input to your component!
> >             mode={"red"} //... if you want the red mode, by default is neutral mode.
> >             language={"fr"} //... you have chosen "french" language,  by default is "en" i.e "english".
> >             valueCustom={"1"} //... the value, on click event, will be return as "01/02/2020"
> >             areDaysOutOfMonthAllowed={false}
> >             areSundaysAllowed={false}
> >           />
> >         </div>
> >       </div>
> >     </form>
> >   );
> > }
> > ```
> >
> > let see the result: [Here](https://rv-react-plugin-calendar.netlify.app/iframe.html?args=mode:red;language:fr;valueCustom:1;areDaysOutOfMonthAllowed:false;areSundaysAllowed:false&id=ui-calendar--calendar-usage-simulation&viewMode=story)
>
> You have also the possibility to choose more quiclky your year!...:
>
> ![year Input](https://github.com/Roxanne2904/rv-react-plugin-calendar/blob/main/assets/chooseAYear.png)
>
> ...But you can also allow days outside the month in addition to Sundays:
> ![days out of month allowed](https://github.com/Roxanne2904/rv-react-plugin-calendar/blob/main/assets/outOfMonthOnHover.png)
>
> ![only sundays are not allowed](https://github.com/Roxanne2904/rv-react-plugin-calendar/blob/main/assets/only_sundays_not_allowed.png)
>
> > To see more example and testing this component, let's go [there](https://rv-react-plugin-calendar.netlify.app/?path=/story/ui-calendar--calendar-usage-simulation)
>
> > For more visuals of the component in action go to the asset folder, [Here](https://github.com/Roxanne2904/rv-react-plugin-calendar/tree/main/assets)

---

> Thanks for choosing my rv-react-plugin-calendar! :)
