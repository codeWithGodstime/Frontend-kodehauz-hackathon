import { ElementType } from 'react';
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import HubOutlined from '@mui/icons-material/HubOutlined';
import IosShareOutlined from '@mui/icons-material/IosShareOutlined';
import QuestionAnswerOutlined from '@mui/icons-material/QuestionAnswerOutlined';
import ReceiptLongOutlined from '@mui/icons-material/ReceiptLongOutlined';
import WbTwilightOutlined from '@mui/icons-material/WbTwilightOutlined';
import { IngestedMessageCategory } from '@/types/ingested-message.types';

/*
 * Marketing demo content for the landing page.
 * Names, numbers and quotes are illustrative and are not real customers.
 * Message `category` values mirror IngestedMessageCategory from the backend.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroCopy {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primary_cta: string;
  secondary_cta: string;
  trust_line: string;
}

export interface DemoMessage {
  id: string;
  sender_name: string;
  body: string;
  category: IngestedMessageCategory;
  extracted?: string;
}

export interface PainPoint {
  title: string;
  description: string;
}

export type StageVisual = 'connect' | 'sort' | 'review';

export interface Stage {
  title: string;
  description: string;
  visual: StageVisual;
}

export interface Platform {
  name: string;
}

export interface RankedItem {
  name: string;
  count: number;
}

export interface HourBucket {
  hour: string;
  orders: number;
}

export interface RepeatCustomer {
  customer_name: string;
  orders: number;
}

export interface OpenEnquiry {
  question_summary: string;
  waiting_for: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: ElementType;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
  platforms: string;
}

export interface PlanTier {
  plan_key: string | null;
  name: string;
  tagline: string;
  features: string[];
  cta_label: string;
  highlighted: boolean;
  price_note: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Insights', href: '/#insights' },
  { label: 'Pricing', href: '/#pricing' },
];

export const hero: HeroCopy = {
  eyebrow: 'For kitchens that sell in the DMs',
  headline: 'Your DMs are full of orders. Catch every one.',
  subheadline:
    'SocialChef reads every comment and DM on your pages, keeps the orders and enquiries, drops the noise, and shows you what actually sells.',
  primary_cta: 'Start free',
  secondary_cta: 'See how it works',
  trust_line:
    'Free to start · No card needed · Instagram, Facebook, TikTok and WhatsApp',
};

export const demoMessages: DemoMessage[] = [
  {
    id: 'm1',
    sender_name: 'Amara',
    body: 'Hi do you have 2 red velvet for Saturday?',
    category: 'order',
    extracted: 'Red velvet × 2 · Saturday',
  },
  {
    id: 'm2',
    sender_name: 'Kelechi',
    body: 'How much is jollof party tray?',
    category: 'enquiry',
    extracted: 'Price · Jollof party tray',
  },
  {
    id: 'm3',
    sender_name: '@dammy_eats',
    body: '🔥🔥🔥 this looks too good',
    category: 'ignore',
  },
  {
    id: 'm4',
    sender_name: 'Mrs Bello',
    body: 'Send account details',
    category: 'order',
    extracted: 'Ready to pay',
  },
  {
    id: 'm5',
    sender_name: 'Ife',
    body: 'Do you deliver to Lekki Phase 1?',
    category: 'enquiry',
    extracted: 'Delivery · Lekki Phase 1',
  },
  {
    id: 'm6',
    sender_name: 'growthhub.ng',
    body: 'Promote your page to 10k followers 👉',
    category: 'ignore',
  },
];

export const categoryLabel: Record<IngestedMessageCategory, string> = {
  order: 'Order',
  enquiry: 'Enquiry',
  ignore: 'Ignored',
};

export const categoryClassName: Record<IngestedMessageCategory, string> = {
  order: 'bg-label-order-bg text-label-order',
  enquiry: 'bg-label-enquiry-bg text-label-enquiry',
  ignore: 'bg-label-noise-bg text-label-noise',
};

export const painPoints: PainPoint[] = [
  {
    title: 'Orders buried under "how much?"',
    description:
      'A paying customer and a curious scroller look the same in your inbox. Until you read all 200 messages.',
  },
  {
    title: 'Forgotten by Friday',
    description:
      'You said yes on Tuesday. The screenshot is somewhere. Saturday\u2019s order list is in your head.',
  },
  {
    title: 'Guessing what sells',
    description:
      'You know the jollof moves. You don\u2019t know it\u2019s 40% of weekend orders, or who buys it twice a month.',
  },
];

export const promise = {
  headline: 'Your inbox is a ledger. It just doesn\u2019t look like one yet.',
  body: 'SocialChef reads every message so you don\u2019t have to. Orders get recorded. Patterns get found. You get your evenings back.',
};

export const platforms: Platform[] = [
  { name: 'Instagram' },
  { name: 'Facebook' },
  { name: 'TikTok' },
  { name: 'WhatsApp' },
];

export const stages: Stage[] = [
  {
    title: 'Connect your page',
    description:
      'Link Instagram, Facebook, TikTok or WhatsApp in two taps. SocialChef starts listening to comments and DMs right away. It never posts or replies for you.',
    visual: 'connect',
  },
  {
    title: 'AI sorts orders from noise',
    description:
      'Every message is labelled Order, Enquiry or Ignored. Orders keep the items, quantity and delivery hint. Enquiries keep the question. Fire emojis go where fire emojis belong.',
    visual: 'sort',
  },
  {
    title: 'See your business clearly',
    description:
      'Open the dashboard. Best sellers, peak hours, repeat customers, unanswered questions, all from messages you already had.',
    visual: 'review',
  },
];

export const insightsCopy = {
  eyebrow: 'Insights',
  headline: 'Your DMs, finally speaking numbers.',
  body: 'Every recorded order and enquiry becomes a chart you can act on. No spreadsheets, no exports at midnight.',
  period_label: 'Last 30 days',
};

export const topItems: RankedItem[] = [
  { name: 'Jollof party tray', count: 48 },
  { name: 'Red velvet cake', count: 36 },
  { name: 'Small chops platter', count: 29 },
  { name: 'Puff puff (50 pc)', count: 22 },
  { name: 'Meat pie box', count: 17 },
];

export const peakHours: HourBucket[] = [
  { hour: '8am', orders: 3 },
  { hour: '10am', orders: 6 },
  { hour: '12pm', orders: 14 },
  { hour: '2pm', orders: 9 },
  { hour: '4pm', orders: 7 },
  { hour: '6pm', orders: 18 },
  { hour: '8pm', orders: 24 },
  { hour: '10pm', orders: 11 },
];

export const repeatCustomers: RepeatCustomer[] = [
  { customer_name: 'Mrs Bello', orders: 6 },
  { customer_name: 'Amara', orders: 4 },
  { customer_name: 'Kelechi', orders: 3 },
];

export const repeatRate = { value: 31, label: 'ordered twice or more' };

export const openEnquiries: OpenEnquiry[] = [
  { question_summary: 'Do you deliver to Lekki?', waiting_for: '3h' },
  { question_summary: 'Price for 100 puff puff?', waiting_for: '5h' },
  { question_summary: 'Open on Sunday?', waiting_for: '1d' },
];

export const byoaiCopy = {
  eyebrow: 'Bring your own AI',
  headline: 'Ask your business a question. Any AI can answer it.',
  body: 'Export your orders and enquiries in one click, in a format ChatGPT, Claude or Gemini understand. Your data, your model, your questions.',
  question: 'Which dishes sell best on weekends and who keeps ordering them?',
  answer:
    'Weekends are carried by the Jollof party tray (31 orders, 42% of weekend volume) and Red velvet cake (19). Three customers account for a third of those: Mrs Bello (6 trays, every other Saturday), Amara (4 cakes, all birthdays) and Kelechi (3 trays). Consider a Saturday pre-order cut-off and a thank-you for those three.',
  export_label: 'Export 30 days',
  targets: ['ChatGPT', 'Claude', 'Gemini', 'Any CSV'],
};

export const featuresCopy = {
  eyebrow: 'Features',
  headline: 'Everything your inbox was hiding.',
  body: 'Built for busy kitchens on a phone, not analysts at a desk.',
};

export const features: Feature[] = [
  {
    title: 'Auto order capture',
    description:
      'Every buy request becomes a recorded order with items, quantity and delivery hint. No screenshots, no notes app.',
    icon: ReceiptLongOutlined,
  },
  {
    title: 'Enquiry tracking',
    description:
      'Price, delivery and menu questions are saved with a topic and a summary, so you can see what people keep asking.',
    icon: QuestionAnswerOutlined,
  },
  {
    title: 'Multi-page support',
    description:
      'Instagram, Facebook, TikTok and WhatsApp in one workspace. One list, however many pages you run.',
    icon: HubOutlined,
  },
  {
    title: 'Smart tags',
    description:
      'Order, Enquiry, Ignored. Correct a label once and the list is straight. Your overrides are tracked.',
    icon: AutoAwesomeOutlined,
  },
  {
    title: 'One-click export',
    description:
      'Download your orders and enquiries as a clean file for a spreadsheet or the AI of your choice.',
    icon: IosShareOutlined,
  },
  {
    title: 'Daily summary',
    description:
      'A short rundown each morning: what came in, what sold, what is still waiting for a reply.',
    icon: WbTwilightOutlined,
  },
];

export const socialProofCopy = {
  eyebrow: 'Vendors',
  headline: 'Kitchens that stopped losing orders.',
};

export const stats: Stat[] = [
  { value: '12,400+', label: 'orders captured' },
  { value: '9 hrs', label: 'saved per vendor, every week' },
  { value: '94%', label: 'labels accepted without correction' },
  { value: '3', label: 'pages connected per vendor on average' },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'I used to scroll back three days to find who ordered what. Now Saturday\u2019s list is just there when I wake up.',
    name: 'Funmi Adeyemi',
    business: 'Funmi\u2019s Kitchen, Lagos',
    platforms: 'Instagram · WhatsApp',
  },
  {
    quote:
      'The peak hours chart changed my week. We stopped posting at noon and started posting at 7pm. Orders went up.',
    name: 'Chidi Okonkwo',
    business: 'Chidi\u2019s Smokehouse, Abuja',
    platforms: 'Facebook · TikTok',
  },
  {
    quote:
      'The same three customers order every month. I never noticed. Now they get a thank-you note in the box.',
    name: 'Zainab Musa',
    business: 'Sweet Zee Bakes, Kano',
    platforms: 'Instagram',
  },
];

export const pricingCopy = {
  eyebrow: 'Pricing',
  headline: 'Pricing that grows with your kitchen.',
  body: 'Start free. Pay when the orders are worth paying for.',
  footnote: 'Prices come from the live plan catalog. Cancel any time.',
};

export const planTiers: PlanTier[] = [
  {
    plan_key: 'free',
    name: 'Free',
    tagline: 'For the first hundred orders',
    features: [
      'One connected page',
      'Orders and enquiries sorted by AI',
      'Seven-day dashboard',
      'Original message kept beside every order',
    ],
    cta_label: 'Start free',
    highlighted: false,
    price_note: 'forever',
  },
  {
    plan_key: 'paid_monthly',
    name: 'Pro',
    tagline: 'For kitchens that sell every day',
    features: [
      'Up to five connected pages',
      'Thirty-day insights',
      'Peak hours, repeat customers, open enquiries',
      'One-click export to ChatGPT, Claude or Gemini',
      'Daily summary',
    ],
    cta_label: 'Go Pro',
    highlighted: true,
    price_note: 'per month',
  },
  {
    plan_key: null,
    name: 'Team',
    tagline: 'For multi-kitchen brands',
    features: [
      'Unlimited pages and workspaces',
      'Owner, admin, member and guest roles',
      'Priority onboarding',
      'Custom data retention',
    ],
    cta_label: 'Talk to us',
    highlighted: false,
    price_note: 'pricing',
  },
];

export const faqCopy = {
  eyebrow: 'FAQ',
  headline: 'Questions vendors ask first.',
};

export const faqs: FaqItem[] = [
  {
    question: 'Is my customers\u2019 data private?',
    answer:
      'Yes. SocialChef only reads messages sent to the pages you connect, stores them in your workspace, and never posts, replies or shares them. You can delete your workspace and its data at any time.',
  },
  {
    question: 'Which platforms can I connect?',
    answer:
      'Instagram professional accounts, Facebook pages, TikTok business accounts and WhatsApp Business numbers. Connect one or all of them. Everything lands in one workspace.',
  },
  {
    question: 'How accurate is the AI?',
    answer:
      'Clear buy requests and price questions are labelled correctly the vast majority of the time. When something is ambiguous you can fix the label in one tap, and the original message is always kept beside what was extracted, so nothing is hidden from you.',
  },
  {
    question: 'Will it reply to my customers?',
    answer:
      'No. SocialChef listens and organises. You stay the voice of your business and send every reply yourself.',
  },
  {
    question: 'Do I need to change how I take orders?',
    answer:
      'No. Keep taking orders in the DMs the way you do today. SocialChef works in the background, and you review the list whenever you like, on your phone.',
  },
  {
    question: 'What happens if I stop paying?',
    answer:
      'You drop back to the free plan. Your recorded orders stay yours, and you can export them any time.',
  },
];

export const finalCtaCopy = {
  headline: 'Stop scrolling for orders. Start seeing your business.',
  body: 'Connect your first page in two minutes. Free, no card needed.',
  primary_cta: 'Connect your page',
  secondary_cta: 'See pricing',
};

export const footerCopy = {
  tagline: 'Turn your DMs into data. Let AI find the patterns.',
  small_print: 'Built for kitchens that sell in the DMs.',
};
