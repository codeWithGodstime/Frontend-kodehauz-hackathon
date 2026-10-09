'use client';

import AppButton from '@/components/AppButton';
import TableWidget from '@/dynamics/TableWidget';
import { orderColumns } from '@/columns/order.column';
import IngestedMessageAccess from '../../components/IngestedMessageAccess';
import { useIngestedMessages } from '@/hooks/ingested-message.hooks';

export default function OrderList() {
  const {
    data: rows = [],
    isLoading,
    isError,
    refetch,
  } = useIngestedMessages('order', true);

  return (
    <IngestedMessageAccess title="Orders">
      <section className="flex flex-col gap-6">
        <div>
          <h1 className="h4-b text-text">Orders</h1>
          <p className="b2-r text-text-light">
            Order requests ingested from connected platforms in this workspace.
          </p>
        </div>

        {isError ? (
          <div className="flex flex-col items-start gap-3">
            <p className="b2-r text-error">Could not load orders.</p>
            <AppButton variant="outlined" onClick={() => refetch()}>
              Retry
            </AppButton>
          </div>
        ) : !isLoading && rows.length === 0 ? (
          <p className="b2-r text-text-light">
            No orders yet. New WhatsApp messages classified as orders will
            appear here.
          </p>
        ) : (
          <TableWidget
            rows={rows}
            columns={orderColumns}
            loading={isLoading}
            enableSearch
            autoHeight
          />
        )}
      </section>
    </IngestedMessageAccess>
  );
}
