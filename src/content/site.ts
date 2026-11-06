import type { Project } from '@/components/project-card';
import type { NavigationItem } from '@/components/ui/responsive-navigation';
import type { ContactChannelProps } from '@/components/contact-channel';
export const navigation: readonly NavigationItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
// Replace placeholders only with client-approved content and imagery.
export const projects: Project[] = [
  {
    title: 'Techblade',
    number: '01',
    status: 'Preview pending',
    placeholder: 'Project imagery to be added',
    tone: 'violet',
  },
  {
    title: 'Bon Marché',
    number: '02',
    status: 'Preview pending',
    placeholder: 'Project imagery to be added',
    tone: 'blue',
  },
];
export const services = [
  {
    number: '01',
    title: 'Figma / Adobe XD to Code',
    description:
      'Your design, thoughtfully translated into a working website. Careful attention to the details that make it yours.',
    code: '</>',
  },
  {
    number: '02',
    title: 'Responsive Website Development',
    description:
      'Layouts that feel considered on every screen, from a phone in your hand to a full desktop display.',
    code: '↔',
  },
  {
    number: '03',
    title: 'Frontend Implementation',
    description:
      'Interactive interfaces built with clear structure, reusable components, and care for the experience.',
    code: '{ }',
  },
  {
    number: '04',
    title: 'Website Interface Improvements',
    description:
      'Thoughtful refinements to an existing interface, with a focus on usability, consistency, and responsive behavior.',
    code: '⌘',
  },
];
// Intentionally no guessed email addresses, handles, or profile URLs.
export const contactChannels: ContactChannelProps[] = [
  { label: 'Email' },
  { label: 'Instagram' },
  { label: 'GitHub' },
];
