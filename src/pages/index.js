import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Json API</title>
        <meta name="description" content="My Json API For Fetching My Watchlist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='head'>API</h1>
      <p className='subhead'>All Json Api For API Call </p>
      <div className='apis'>API: <span className='hello'><Link href={'/api/watchlist'}>Anime Watchlist</Link></span></div>
    </>
  )
}
