import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Ninja.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <div className={styles.main}>
        <h1>Net Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link
            href={`/ninjas/${ninja.id}`}
            key={ninja.id}
          >
            <a className={styles.single}>
              <h3>{ninja.title}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ninjas;
