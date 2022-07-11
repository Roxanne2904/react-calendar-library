# RoxV-react-calendar

![](https://github.com/Roxanne2904/roxv-react-calendar/blob/main/assets/introduce.png)

> This component have been created by Viette Roxanne, with [React.js](https://fr.reactjs.org/).

## All Depedencies

## DevDepedencies

- @babel/core: "^7.18.6",
- @babel/preset-react: "^7.18.6",
- @rollup/plugin-node-resolve: "^13.3.0",
- @storybook/addon-actions: "^6.5.9",
- @storybook/addon-essentials: "^6.5.9",
- @storybook/addon-interactions: "^6.5.9",
- @storybook/addon-links: "^6.5.9",
- @storybook/builder-webpack4: "^6.5.9",
- @storybook/manager-webpack4: "^6.5.9",
- @storybook/react: "^6.5.9",
- @storybook/testing-library: "^0.0.13",
- babel-loader: "^8.2.5",
- prop-types: "^15.8.1",
- react: "^18.2.0",
- react-dom: "^18.2.0",
- rollup: "^2.75.7",
- rollup-plugin-babel: "^4.4.0",
- rollup-plugin-peer-deps-external: "^2.2.4",
- rollup-plugin-postcss: "^4.0.2",
- rollup-plugin-terser: "^7.0.2"

## Use

> If you want to ...

### ...Clone his repository...

> ...you have to go [there](https://github.com/Roxanne2904/roxv-react-calendar)
>
> > then...
>
> > `git clone https://github.com/Roxanne2904/roxv-react-calendar.git nameOfYourFolder`
>
> > `cd nameOfYourFolder`
>
> > To install all dependencies you have to do (on your command line):
>
> > `npm install` or `yarn` (if you're using yarn)
>
> If that is necessary, to install all DevDepedencies ...:
>
> > `npm install --only=dev`

### ...Install the component on your own App/project...

> you have to enter command line bellow on your terminal:
>
> `npm i roxv-react-calendar`

## Introduction

### The Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/647503f6-b218-474c-9ba3-3b03ea46a975/deploy-status)](https://app.netlify.com/sites/roxv-react-calendar/deploys)

> Have a look to the documentation using Storybook, [here](https://roxv-react-calendar.netlify.app/?path=/docs/ui-datepicker--default)
>
> You can also see the behavior of the component in simulation with an input type text, [here](https://roxv-react-calendar.netlify.app/?path=/docs/ui-datepicker--date-picker-usage-simulation)

### All possibilities

> Currently the component `roxv-react-calendar` can only be used as a date picker but...
>
> ...soon we are considering the possibility of adding the period picker functionality to it.
>
> With `roxv-react-calendar` you will be able to...:

- change the type of the input value:
  > > ex: `20/06/2022` or `2022/06/20`
- change your mode:
  > > ex: `blue mode`or `red mode`
  > >
  > > [have a look here](https://roxv-react-calendar.netlify.app/?path=/docs/ui-calendar--default#stories)
- change language:
  > > These are availables:
  > >
  > > `french`, `english`, `spanish`, `deutch`, `portuguese`
- customize your arrows backgrounds buttons in order to add or remove a year,
- customize your arrows,
- customize numbers,
- customize your invalid numbers (these out of month),
- customize year and month color,
- customize your selected day,
- customize your current day,
- customize Sundays if you valid sunday highlighted.
- choose if you want or not let days out of month allowed,
- choose if you want or not let Sundays allowed,
- choose if you want or not Sundays highlighted allowed.

### Implement the component in my App...

> How to implement my component in my App/project ?
>
> > 1. First of all you have to install it into your own project.
>
> > - Do on your terminal:
>
> > `npm i roxv-react-calendar`
> >
> > 2. Then I will show you a typical example, for a react app, to implement it:
>
> > ```jsx
> > import React, { useEffect, useState, useRef } from "react";
> > import { DatePicker } from "roxv-react-calendar"; //this is our component!:)
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
> >           <DatePicker
> >             onChangeInputValue={validValue} // !important, in order to link on change event to your component!
> >             myInputRef={inputRef} //!important, in order to link your input to your component!
> >             mode={"red"} //... if you want the red mode.By default is neutral mode.
> >             language={"fr"} //... you have chosen "french" language,  by default is "en" i.e "english".
> >             valueCustom={"1"} //... the value, on click event, will be return as "01/02/2020"
> >             areDaysOutOfMonthAllowed={false}
> >             areSundaysAllowed={true}
> >             areSundaysHighlighted={true}
> >           />
> >         </div>
> >       </div>
> >     </form>
> >   );
> > }
> > ```
> >
> > let see the result: [Here](https://roxv-react-calendar.netlify.app/iframe.html?args=valueCustom:1;mode:red;language:fr;areDaysOutOfMonthAllowed:false;areSundaysAllowed:true;areSundaysHighlighted:true&id=ui-datepicker--date-picker-usage-simulation&viewMode=story)
>
> You have also the possibility to choose more quiclky your year!...:
>
> ![year Input](https://github.com/Roxanne2904/roxv-react-calendar/blob/main/assets/chooseAYear.png)
>
> ...But you can also allow days outside the month in addition to Sundays...:
>
> ![days out of month allowed](https://github.com/Roxanne2904/roxv-react-calendar/blob/main/assets/outOfMonthOnHover.png)
>
> ...Or not allow sundays...:
>
> ![only sundays are not allowed](https://github.com/Roxanne2904/roxv-react-calendar/blob/main/assets/only_sundays_not_allowed.png)
>
> > To see more example and testing this component, let's go [there](https://roxv-react-calendar.netlify.app/?path=/story/ui-datepicker--date-picker-usage-simulation)
>
> > For more visuals of the component in action go to the asset folder, [Here](https://github.com/Roxanne2904/roxv-react-calendar/tree/main/assets)

---

### ...and now customize some elements!

> you can customize some elements from your css!
>
> Let's take a closer look at the classes you will have to apply and what they are supposed to modify:
>
> > Note: If you see `${mode}` this refers to the "mode" prop which is used to select a color mode for your component.
> >
> > If you have not entered it by default, the mode is "neutral". You will therefore have to replace "mode" with your
> > mode if you have selected one, otherwise replace it with "neutral"
> >
> > - `.day_in--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .day_in--neutral--custom {
> >   color: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> > }
> > ```
> >
> > This class will allow you to modify the css of the calendar numbers, only those included in the current month.
> >
> > - `.day_out--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .day_out--neutral--custom {
> >   color: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> > }
> > ```
> >
> > This class will allow you to modify the css of the calendar numbers, only those out of month.
> >
> > - `.currentDay--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .currentDay--neutral--custom {
> >   color: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> > }
> > ```
> >
> > This class will allow you to modify the current day.
> >
> > - `.day_selected--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .day_selected--neutral--custom {
> >   color: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> >   border: green solid 2px !important;
> > }
> > ```
> >
> > This class will allow you to modify the day selected.
> >
> > - `.sund_highli--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .sund_highli--neutral--custom {
> >   color: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> >   background: white !important;
> > }
> > ```
> >
> > This class will allow you to modify sundays if you have pass the props `areSundaysHighlighted` to `true`.
> >
> > - `.buttons_container--${mode}_year--custom`
> >
> > ex:
> >
> > ```css
> > .buttons_container--neutral_year--custom {
> >   background: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> > }
> > ```
> >
> > This class will allow you to modify background buttons of double arrows.
> >
> > - `.arrows--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .arrows--neutral--custom {
> >   stroke: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> > }
> > ```
> >
> > This class will allow you to modify all arrows, simple and double.
> >
> > - `.year-month_container--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .year-month_container--neutral--custom {
> >   color: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> > }
> > ```
> >
> > This class will allow you to modify year and month color.
> >
> > - `.year-input--${mode}--custom`
> >
> > ex:
> >
> > ```css
> > .year-input--neutral--custom {
> >   color: red !important; /* this "!important" is MANDATORY; You have to add this to override ALL previous styling rules */
> > }
> > ```
> >
> > This class will allow you to modify year input value.

---

### Possibilities of areas of improvement

| #   | Description                                                                          |
| --- | ------------------------------------------------------------------------------------ |
| 01  | Add a period picker                                                                  |
| 02  | A feature that will allow you to switch from either a date picker or a period picker |
| 03  | Add a select to choose a month faster                                                |
| 04  | Add more language choices                                                            |
| 03  | Add a times picker in addition to the date picker                                    |

> Thanks for choosing my roxv-react-calendar! :)
