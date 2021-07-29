import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <h1 key={i}>Hello World!</h1>
      ))}
    </>
  );
}
