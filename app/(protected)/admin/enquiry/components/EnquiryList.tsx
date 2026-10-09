'use client';

import AppButton from '@/components/AppButton';
import TableWidget from '@/dynamics/TableWidget';
import { enquiryColumns } from '@/columns/enquiry.column';
import IngestedMessageAccess from '../../components/IngestedMessageAccess';
import { useIngestedMessages } from '@/hooks/ingested-message.hooks';

export default function EnquiryList() {
  const {
    data: rows = [],
    isLoading,
    isError,
    refetch,
  } = useIngestedMessages('enquiry', true);

  return (
    <IngestedMessageAccess title="Enquiries">
      <section className="flex flex-col gap-6">
        <div>
          <h1 className="h4-b text-text">Enquiries</h1>
          <p className="b2-r text-text-light">
            Customer questions ingested from connected platforms in this
            workspace.
          </p>
        </div>

        {isError ? (
          <div className="flex flex-col items-start gap-3">
            <p className="b2-r text-error">Could not load enquiries.</p>
            <AppButton variant="outlined" onClick={() => refetch()}>
              Retry
            </AppButton>
          </div>
        ) : !isLoading && rows.length === 0 ? (
          <p className="b2-r text-text-light">
            No enquiries yet. New WhatsApp messages classified as enquiries will
            appear here.
          </p>
        ) : (
          <TableWidget
            rows={rows}
            columns={enquiryColumns}
            loading={isLoading}
            enableSearch
            autoHeight
          />
        )}
      </section>
    </IngestedMessageAccess>
  );
}
