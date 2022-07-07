import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react-dom";
import { DatePicker } from "../components/DatePicker/index";
import { storiesOf } from "@storybook/react";
//*

// const stories = storiesOf("UI/Components", module);

// stories.add("Test", () => {
//   return <DatePicker />;
// });

export default {
  title: "UI/Calendar",
  component: DatePicker,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    valueCustom: {
      options: ["1", "2"],
      control: "radio",
    },
    arrowsBackgroundColor: { control: "color" },
    numberBackgroundColorHover: { control: "color" },
    numberBackgroundSelected: { control: "color" },
    numbersOutOfMonthColor: { control: "color" },
    colorNumbers: { control: "color" },
    colorNumbersOnHover: { control: "color" },
    colorNumberSelected: { control: "color" },
    color: { control: "color" },
    areDaysOutOfMonthAllowed: { control: "boolean" },
    areSundaysAllowed: { control: "boolean" },
  },
};

const Template = (args) => <DatePicker {...args} />;

export const CalendarUsageSimulation = Template.bind({});

// CalendarUsageSimulation.args = {
//   valueCustom: "1",
//   colorNumberSelected: null,
//   numberBackgroundSelected: null,
// };
