import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@ios26/ui'
import { Button } from '@ios26/ui'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'filled', 'blurred'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card variant="default" className="w-[350px]">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard card with border</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body">This is a default card.</p>
        </CardContent>
      </Card>
      <Card variant="elevated" className="w-[350px]">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>Card with elevated shadow</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body">This card has more elevation.</p>
        </CardContent>
      </Card>
      <Card variant="filled" className="w-[350px]">
        <CardHeader>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>Card with filled background</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body">This card has a filled background.</p>
        </CardContent>
      </Card>
      <Card variant="blurred" className="w-[350px]">
        <CardHeader>
          <CardTitle>Blurred Card</CardTitle>
          <CardDescription>Card with blur effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-body">This card has a blur effect.</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="p-ios-md">
        <p className="text-body">Simple card with just content.</p>
      </CardContent>
    </Card>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Actions</CardTitle>
        <CardDescription>Card with footer actions</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body">This card has action buttons in the footer.</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1">Cancel</Button>
        <Button className="flex-1">Confirm</Button>
      </CardFooter>
    </Card>
  ),
}

