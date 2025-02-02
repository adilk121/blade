import type { ComponentStory, Meta } from '@storybook/react';
import AccessibilityInteropDemo from './AccessibilityInteropDemo';

export default {
  title: 'Recipes/AccessibilityInterop',
  component: AccessibilityInteropDemo,
} as Meta;

export const AccessibilityInteropDemoTemplate: ComponentStory<
  typeof AccessibilityInteropDemo
> = () => {
  return <AccessibilityInteropDemo />;
};
