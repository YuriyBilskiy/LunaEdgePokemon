import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "App/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    isDisabled: false,
  },
};

export const Hover: StoryObj<typeof Input> = {
  args: {
    isDisabled: false,
    hover: true,
  },
};

export const Focus: StoryObj<typeof Input> = {
  args: {
    autoFocus: true,
    isDisabled: false,
  },
};

export const Filled: StoryObj<typeof Input> = {
  args: {
    isDisabled: false,
    value: "Luna Edge",
  },
};

export const ValidationError: StoryObj<typeof Input> = {
  args: {
    isDisabled: false,
    value: "",
    errors: "At least 2 characters",
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};
