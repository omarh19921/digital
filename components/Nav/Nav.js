import styles from './nav.module.css';

const Nav = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav_container}>
          <div className={styles.nav_item}>
            <h1 className={styles.logo}>
            <a href="http://thinkbigtechnology.com" aria-label="Think Big Technology">
            <img src="https://thinkbigtechnology.com/wp-content/uploads/2023/02/Think_Big_Logo-removebg-preview.png" alt="Your Logo" />

</a>
            </h1>
            <div className={styles.line_container}></div>
            <div className={styles.logo_description}>
              <span className={styles.description_title}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
