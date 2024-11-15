import Image from "next/image";
import styles from "../app/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/assests/dalle.jpg"
          alt="A beautiful landscape"
          width={600}
          height={400}
          className={styles.image}
        />
      </div>

      <h1 className={styles.title}>Welcome to the Homepage</h1>

      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, magni!
      </p>
      <p className={styles.text}>
        Discover the wonderful world of ninjas with detailed information and
        insights into their skills, history, and more!
      </p>

      <Link className={styles.btn} href="/users">
        See Ninja Listing
      </Link>
    </div>
  );
}
