import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' contents="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis ut, non quam consectetur quos provident alias iste distinctio quaerat ducimus, dignissimos tenetur vero atque.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus, voluptates error eos corporis illo quos! Neque repellat eum voluptates adipisci numquam possimus id vero tempora? Iure veniam perferendis soluta.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
