'use client';

import AddIcon from '@mui/icons-material/Add';
import AppButton from '@/components/AppButton';
import TableWidget from '@/dynamics/TableWidget';
import { memberColumns } from '@/columns/member.column';
import { ROUTES } from '@/constant/routes.constant';
import { useMembers } from '@/hooks/member.hooks';
import { isForbidden } from '@/utils/member.utils';
import MemberAccess from './MemberAccess';

function MemberTable() {
  const {
    data: members = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useMembers();

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="h4-b text-text">Members</h1>
          <p className="b2-r text-text-light">
            People in this workspace and their roles.
          </p>
        </div>
        <AppButton startIcon={<AddIcon />} href={ROUTES.admin.member.manage}>
          Add member
        </AppButton>
      </div>

      {isError ? (
        <div className="flex flex-col items-start gap-3">
          <p className="b2-r text-error">
            {isForbidden(error)
              ? 'You need an owner or admin role to manage members.'
              : 'Could not load members.'}
          </p>
          {!isForbidden(error) && (
            <AppButton variant="outlined" onClick={() => refetch()}>
              Retry
            </AppButton>
          )}
        </div>
      ) : !isLoading && members.length === 0 ? (
        <div className="flex flex-col items-start gap-3">
          <p className="b2-r text-text-light">
            No members yet. Add a member to get started.
          </p>
          <AppButton href={ROUTES.admin.member.manage}>Add member</AppButton>
        </div>
      ) : (
        <TableWidget
          rows={members}
          columns={memberColumns}
          loading={isLoading}
          enableSearch
          autoHeight
        />
      )}
    </section>
  );
}

export default function MemberList() {
  return (
    <MemberAccess>
      <MemberTable />
    </MemberAccess>
  );
}
