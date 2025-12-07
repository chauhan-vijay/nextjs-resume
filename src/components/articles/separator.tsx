import { ReactNode } from 'react';

export default function Separator(): ReactNode {
  return (
    <hr className="border-neutral-6 mb-2 w-full rounded-full border last-of-type:hidden" />
  );
}
