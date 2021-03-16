import Image from 'next/image';

// TODO: svg-logo
export default function Logo() {
  return (
    <Image src="/logo.png" alt="moshekatz.dev logo" width={320} height={42} />
  );
}
