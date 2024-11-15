import getAllUsers from "@/libs/getAllUsers";
import Link from "next/link";
import styles from "../styles/Ninjas.module.css";

const Page = async () => {
  const userData = await getAllUsers();

  return (
    <section className={styles.container}>
      <Link href="/" className={styles.back__link}>
        ⬅️ Back to home
      </Link>
      <h2 className={styles.title}>Ninja Directory</h2>

      <ul className={styles.user__list}>
        {userData.map((user) => (
          <li key={user.id} className={styles.user__item}>
            <Link href={`/users/${user.id}`} className={styles.user__link}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Page;
