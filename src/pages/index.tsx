import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Code from '@/components/Code';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patterns 101</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Patterns!</h1>

        <p className={styles.description}>
          An open-source guide to cracking interview questions
        </p>
        <div className={styles.grid}>
          <Link href="/general/introduction">
            <a className={styles.card}>
              <h2>Introduction &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/patterns/">
            <a className={styles.card}>
              <h2>Patterns &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>
          <Link href="/advanced-patterns/">
            <a className={styles.card}>
              <h2>Advanced Patterns &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
