import { Meta, StoryObj } from "@storybook/react";
import SelectComponent from "../components/SelectComponent";

const meta: Meta<typeof SelectComponent> = {
    title: 'App/SelectComponent',
    component: SelectComponent,
    tags: ["autodocs"],

};

export default meta;

export const Default: StoryObj<typeof SelectComponent> = {
    args: {
      isDisabled: false,
    },
  };
  
  export const Hover: StoryObj<typeof SelectComponent> = {
    args: {
      isDisabled: false,
      hoverSelect: true,
    },

  };
  
  export const Focus: StoryObj<typeof SelectComponent> = {
    args: {
      autoFocus: true,
    },

  };
  
  export const Filled: StoryObj<typeof SelectComponent> = {
    args: {
      isDisabled: false,
      value: [{ value: "pikachu", label: "Pikachu" }],
      options: [
        { value: "pikachu", label: "Pikachu" },
        { value: "bulbasaur", label: "Bulbasaur" },
        { value: "charmander", label: "Charmander" }
      ],
    },
  };
  
  export const ValidationError: StoryObj<typeof SelectComponent> = {
    args: {
      isDisabled: false,
      value: [],
      errors: "You must select 4 Pokémons",
    },
    
  };

  
  export const Disabled: StoryObj<typeof SelectComponent> = {
    args: 
      {...Default.args, isDisabled: true},

  };