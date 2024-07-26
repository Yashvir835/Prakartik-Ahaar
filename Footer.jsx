import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={` ${styles.container}`}>
          <div className={styles.row}>
            <div className={`col-md-6 col-lg-5 col-12 ${styles.ft1}`}>
              <h3>
                <span>Prakartik</span> Aahar{" "}
              </h3>
              {/* Here I write the random text so that we can add some information about the aahar kendra if needed */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt est optio unde corrupti accusamus? Iste, corporis
                quibusdam. Laudantium nulla consequatur aperiam dolorum eum
                eligendi qui ullam dicta, libero reiciendis accusamus.
              </p>
              {/* For the Icons in the footer I used the fontawesom and import the fontawson code in html file from cdjn */}
              <div className={styles.footerIcons}>
                <i className={`fa-brands fa-facebook`}></i>
                <i className={`fa-brands fa-linkedin`}></i>
                <i className={`fa-brands fa-twitter`}></i>
                <i className={`fa-duotone fa-solid fa-envelope-open`}></i>
              </div>
            </div>
            <div className={`col-md-6 col-lg-3 col-12 ${styles.ft2}`}>
              {/* here I provided the links so that user can easily go through our website but not added the link portion */}
              <h5>Quick links</h5>
              <ul>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    About Us
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    Services
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    Team Members
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-md-6 col-lg-4 col-12 ${styles.ft3}`}>
              <h5>Contact Info</h5>
              <p>
                <i className={`fa-solid fa-phone-volume`}></i>+91 3284283389
              </p>
              <p>
                <i className={`fa-solid fa-envelope    `}></i>
                prakartikAhar@gmail.com
              </p>

              <p>
                <i className={`fa-solid fa-paper-plane`}></i>Near Soet
              </p>
            </div>
          </div>
        </div>
        <div className={styles.LastFooter}>
          <p>Eat the healty food</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
