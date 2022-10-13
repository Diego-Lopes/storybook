import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: 'Deu certo o reload',
    size: "md",
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'md'
  }
}
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Text em tag h1</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}