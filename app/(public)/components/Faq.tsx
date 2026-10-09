'use client';

import ExpandMore from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AppContainer from '@/components/AppContainer';
import { faqCopy, faqs } from '../data/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-stroke py-20 md:py-28"
    >
      <AppContainer>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow={faqCopy.eyebrow}
            headline={faqCopy.headline}
          />

          <Reveal className="mt-10 space-y-3" delayMs={80}>
            {faqs.map((item) => (
              <Accordion
                key={item.question}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: 'var(--glass)',
                  border: '1px solid var(--stroke)',
                  borderRadius: 'var(--app-radius) !important',
                  overflow: 'hidden',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { borderColor: 'var(--stroke-strong)' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: 'var(--primary)' }} />}
                  sx={{ px: 3, py: 0.5 }}
                >
                  <span className="b1-m text-text">{item.question}</span>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <p className="b1-r text-text-light">{item.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </Reveal>
        </div>
      </AppContainer>
    </section>
  );
}
