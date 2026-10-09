'use client';

import MemberAccess from '../../components/MemberAccess';
import MemberForm from './MemberForm';

export default function ManageMember() {
  return (
    <MemberAccess>
      <section className="flex max-w-3xl flex-col gap-6">
        <div>
          <h1 className="h4-b text-text">Add member</h1>
          <p className="b2-r text-text-light">
            Create an account and add them to this workspace. They can sign in
            with the password you set.
          </p>
        </div>
        <MemberForm />
      </section>
    </MemberAccess>
  );
}
