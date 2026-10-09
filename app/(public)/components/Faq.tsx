'use client';

import ExpandMore from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AppContainer from '@/components/AppContainer';
import { faqs } from '../data/data';

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-16 md:py-20">
      <AppContainer>
        <div className="mx-auto max-w-3xl">
          <p className="b2-m text-primary">Questions vendors ask</p>
          <h2 className="h3-b mt-2 text-text">
            Before you connect the first inbox
          </h2>

          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <Accordion
                key={item.question}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--stroke)',
                  borderRadius: 'var(--app-radius)',
                  overflow: 'hidden',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <span className="b1-m text-text">{item.question}</span>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="b2-r text-text-light">{item.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </AppContainer>
    </section>
  );
}
