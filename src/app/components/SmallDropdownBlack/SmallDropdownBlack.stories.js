import { SmallDropdownBlack } from ".";

export default {
  title: "Components/SmallDropdownBlack",
  component: SmallDropdownBlack,
  argTypes: {
    property1: {
      options: ["on-click", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "on-click",
    className: {},
    text: "Value",
  },
};
