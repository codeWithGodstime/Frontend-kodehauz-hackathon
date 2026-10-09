import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined';
import { OpenEnquiry } from '../data/data';

interface InsightOpenEnquiriesProps {
  enquiries: OpenEnquiry[];
}

export default function InsightOpenEnquiries({
  enquiries,
}: InsightOpenEnquiriesProps) {
  return (
    <ul className="flex flex-col gap-2">
      {enquiries.map((enquiry) => (
        <li
          key={enquiry.question_summary}
          className="flex items-center justify-between gap-3 rounded-btn-radius border border-stroke bg-background px-3.5 py-2.5"
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              className="eyebrow shrink-0 rounded-chip-radius bg-label-enquiry-bg px-2 py-0.5 text-label-enquiry"
              aria-hidden
            >
              Enquiry
            </span>
            <span className="b2-r truncate text-text">
              {enquiry.question_summary}
            </span>
          </div>
          <span className="f1-m tabular flex shrink-0 items-center gap-1 text-tertiary">
            <ScheduleOutlined sx={{ fontSize: 14 }} />
            {enquiry.waiting_for}
          </span>
        </li>
      ))}
    </ul>
  );
}
