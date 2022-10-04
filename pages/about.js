import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name='keywords' contents="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>About Us</h1>
                <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quod itaque animi omnis sunt et consequatur, necessitatibus quos vero cumque ipsa atque labore explicabo maiores.</p>

                <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias cumque, laboriosam eius vel voluptate facilis accusantium atque error obcaecati, debitis ad deleniti quo? Sint iste officiis ea commodi, dolor omnis!</p>
            </div>
        </>
    )
}