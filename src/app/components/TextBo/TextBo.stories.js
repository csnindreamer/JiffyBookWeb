import { TextBo } from ".";

export default {
  title: "Components/TextBo",
  component: TextBo,
};

export const Default = {
  args: {
    className: {},
    text: "Text 12BO",
    onClick: () => {
        console.log("Clicked!"); // Add your onClick functionality here
      },
  },
};