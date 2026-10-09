import { ElementType } from 'react';
import { ROUTES } from '@/constant/routes.constant';
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import ContactPhoneOutlined from '@mui/icons-material/ContactPhoneOutlined';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import LinkOutlined from '@mui/icons-material/LinkOutlined';
import ReceiptLongOutlined from '@mui/icons-material/ReceiptLongOutlined';
import RestaurantOutlined from '@mui/icons-material/RestaurantOutlined';

export type MessageCategory = 'order' | 'enquiry' | 'ignore';

export interface PreviewMessage {
  sender_name: string;
  preview: string;
  category: MessageCategory;
  label: string;
}

export interface OrderSheetField {
  label: string;
  value: string;
}

export interface ComparisonPoint {
  text: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: ElementType;
}

export interface Feature {
  title: string;
  description: string;
  icon: ElementType;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LandingPlan {
  name: string;
  price: string;
  cadence: string;
  audience: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
}

export const previewMessages: PreviewMessage[] = [
  {
    sender_name: 'Adaeze',
    preview: '2 jollof trays to 14 Allen Avenue, Ikeja',
    category: 'order',
    label: 'Order',
  },
  {
    sender_name: 'Tunde',
    preview: 'How much is the small chops platter?',
    category: 'enquiry',
    label: 'Enquiry',
  },
  {
    sender_name: 'Unknown',
    preview: 'You won a gift card. Tap to claim.',
    category: 'ignore',
    label: 'Spam',
  },
];

export const orderSheetFields: OrderSheetField[] = [
  { label: 'Customer', value: 'Adaeze' },
  { label: 'Phone', value: '0803 000 0000' },
  { label: 'Address', value: '14 Allen Avenue, Ikeja' },
  { label: 'Items', value: 'Jollof tray × 2' },
];

export const categoryClassName: Record<MessageCategory, string> = {
  order: 'bg-primary-light text-primary',
  enquiry: 'bg-secondary-light text-secondary',
  ignore: 'bg-background text-text-light',
};

export const oldWayPoints: ComparisonPoint[] = [
  {
    text: 'Real orders sit under a pile of “how much?” and “where are you located?” messages.',
  },
  {
    text: 'You copy addresses, items, and phone numbers into notes while the food is still on the fire.',
  },
  {
    text: 'Peak hour means missed replies, wrong deliveries, and customers who buy somewhere else.',
  },
];

export const socialchefWayPoints: ComparisonPoint[] = [
  {
    text: 'WhatsApp and Instagram DMs land in one place, already labelled order, enquiry, or spam.',
  },
  {
    text: 'Names, phones, delivery addresses, items, and amounts are pulled onto an order sheet.',
  },
  {
    text: 'Managers and kitchen staff work from the same board and fulfil the next order without scrolling chats.',
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    title: 'Connect your socials',
    description:
      'Link WhatsApp or Instagram in under two minutes. New DMs start flowing into Socialchef straight away.',
    icon: LinkOutlined,
  },
  {
    title: 'AI filters and extracts',
    description:
      'Orders are separated from price questions and noise. Addresses and item lists are filled in for you.',
    icon: AutoAwesomeOutlined,
  },
  {
    title: 'Fulfil and grow',
    description:
      'Review a clean order list, hand it to the kitchen, and keep selling while the chat stays quiet.',
    icon: RestaurantOutlined,
  },
];

export const features: Feature[] = [
  {
    title: 'AI DM classification',
    description:
      'Every message is sorted into an order, an enquiry, or spam before you open the thread. You answer buyers first.',
    icon: AutoAwesomeOutlined,
  },
  {
    title: 'Automatic order extraction',
    description:
      'Customer name, phone, delivery address, items, and amounts show up on an instant order sheet.',
    icon: ReceiptLongOutlined,
  },
  {
    title: 'Team workspaces',
    description:
      'Invite managers and kitchen staff with the access they need, so fulfilment does not wait on one phone.',
    icon: GroupsOutlined,
  },
  {
    title: 'Customer contact directory',
    description:
      'Buyers are saved as orders come in, so repeat customers and their details are easy to find later.',
    icon: ContactPhoneOutlined,
  },
];

export const landingPlans: LandingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    cadence: '/mo',
    audience: 'For solo vendors starting out.',
    features: [
      '1 workspace member',
      'Core AI filtering into orders, enquiries, and spam',
      'Order details on your dashboard',
    ],
    cta: 'Start free',
    href: ROUTES.register,
    highlighted: false,
  },
  {
    name: 'Paid',
    price: 'Monthly',
    cadence: ' subscription',
    audience: 'For growing food businesses.',
    features: [
      'Unlimited team invites',
      'Advanced customer exports',
      'Priority AI processing',
    ],
    cta: 'Create an account',
    href: ROUTES.register,
    highlighted: true,
  },
];

export const faqs: FaqItem[] = [
  {
    question:
      'Will Socialchef send auto-replies to my customers without my permission?',
    answer:
      'No. Socialchef reads incoming WhatsApp and Instagram messages and organises them for you. It does not message your customers. You still send every reply yourself.',
  },
  {
    question:
      'How accurately does the AI distinguish between an enquiry and an order?',
    answer:
      'A clear buy request, with items or quantities, is treated as an order. Questions about price, menu, hours, or location stay enquiries. Casual chatter and spam are set aside. You still review the board before the kitchen starts cooking.',
  },
  {
    question: 'What social platforms are supported?',
    answer:
      'WhatsApp and Instagram DMs. Both show up in the same inbox, so you are not switching apps to find the next order.',
  },
  {
    question: 'Can my kitchen staff access the dashboard on their phones?',
    answer:
      'Yes. The dashboard works in a phone browser. Invite kitchen staff or a manager, and they can open the order list on the phone already in their pocket.',
  },
];
