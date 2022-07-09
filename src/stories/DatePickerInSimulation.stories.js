import React from "react";
import { useState, useEffect, useRef } from "react";
import { ReactDOM } from "react-dom";
import { DatePickerInSimulation } from "../components/DatePickerInSimulation/index";
import { storiesOf } from "@storybook/react";

export default {
  title: "UI/DatePicker",
  component: DatePickerInSimulation,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    valueCustom: {
      options: ["1", "2"],
      control: "radio",
    },
    areDaysOutOfMonthAllowed: { control: "boolean" },
    areSundaysAllowed: { control: "boolean" },
    areSundaysHighlighted: { control: "boolean" },
  },
};

const Template = (args) => <DatePickerInSimulation {...args} />;

export const DatePickerUsageSimulation = Template.bind({});
