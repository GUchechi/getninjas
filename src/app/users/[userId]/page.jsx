import { Suspense } from "react";
import getUser from "@/libs/getUser";
import { notFound } from "next/navigation";
import styles from "./UserPage.module.css"; 
import getAllUsers from "@/libs/getAllUsers";

// Fetch metadata based on userId parameter
export async function generateMetadata({ params }) {
  const userData = await getUser(params.userId);

  if (!userData || !userData.name) {
    return {
      title: "User not found",
      description: "The requested user does not exist.",
    };
  }

  return {
    title: userData.name,
    description: `This is the page of ${userData.name}`,
  };
}

const UserPage = async ({ params }) => {
  const user = await getUser(params.userId);

  if (!user) return notFound();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <p className={styles.subtitle}>Details and information about the user.</p>

      <div className={styles.userInfo}>
        <h2 className={styles.userName}>{user.name}</h2>

        <Suspense fallback={<p className={styles.loadingText}>Loading...</p>}>
          {/* Any additional components requiring lazy loading can be placed here */}
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.address.city}</p>
        </Suspense>
      </div>
    </div>
  );
};

export default UserPage;


export async function generateStaticParams() {
  const usersData = await getAllUsers(); 
  const users = await usersData; 

  return users.map((user) => ({
    userId: user.id.toString(), 
  }));
}