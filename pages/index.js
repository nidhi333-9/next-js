import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis ut, non quam consectetur quos provident alias iste distinctio quaerat ducimus, dignissimos tenetur vero atque.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus, voluptates error eos corporis illo quos! Neque repellat eum voluptates adipisci numquam possimus id vero tempora? Iure veniam perferendis soluta.</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>

    </div>
  )
}
