import Footer from "@/app/components/Footer";
import styles from "@/app/styles/home.module.scss";

const Home = () => {
    return (
        <div className="App">
            <div className={styles.wrapper}>
                <div className={styles.heroSection}>
                    <h3>roasted.</h3>
                    <div className={styles.indicatorWrapper}>
                        <span>
                            <i>o</i> Get your website roasted
                        </span>
                    </div>

                    <div className={styles.titleWrapper}>
                        <div>
                            <h1>
                                Is your hero section holding back your website
                                conversions?
                            </h1>
                            <p>
                                We'll analyze, reimagine, and redesign your hero
                                section, providing actionable design
                                enhancements to drive higher conversions.
                            </p>
                        </div>
                    </div>

                    <div className={styles.ctaButtonWrapper}>
                        <button>
                            Roast me for Free{" "}
                            <span>Depends on Availability</span>
                        </button>
                        <button>
                            Guaranteed Roast at $22 <span>+Get Figma file</span>
                        </button>
                    </div>

                    <div></div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
