// import Link from 'next/link';

import Container from '@/components/container';

export default function Writing() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Writing
        </h1>
        [list of posts]
      </div>
    </Container>
  );
}