import { InputBlackBg } from ".";

export default {
  title: "Components/InputBlackBg",
  component: InputBlackBg,
  argTypes: {
    property1: {
      options: ["value", "default", "variant-5", "error", "on-click"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "value",
    className: {},
    text: "Input",
  },
};
