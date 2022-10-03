import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h3>Net Ninja</h3>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>The Ninjas List</a></Link>

        </nav>
    )
}