"use client";

import Footer from "@/app/components/navigation/Footer";
import styles from "@/app/styles/home.module.scss";
import { roastedArray, roastedHeaderImages } from "./data/roastedArray";
import Image from "next/image";
import { useEffect, useState } from "react";
import { steps } from "./data/steps";
import { StepProps } from "./types";

const Home = () => {
    const [currentHeaderImageIndex, setCurrentHeaderImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeaderImageIndex((prevIndex) => {
                if (prevIndex === 5) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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
                        <div>
                            <button>
                                Roast me for Free{" "}
                                <span>Depends on Availability</span>
                            </button>
                            <button>
                                Guaranteed Roast at $22{" "}
                                <span>+Get Figma file</span>
                            </button>
                        </div>
                    </div>

                    <div className={styles.roastedCountWrapper}>
                        <div>
                            {roastedArray.map((img: any, index: number) => {
                                return (
                                    <Image
                                        src={img}
                                        alt={`${index}img`}
                                        width={31}
                                        height={31}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                        <p>Proudly Roasted 150+ designs</p>
                    </div>

                    <div className={styles.heroImagesWrapper}>
                        <div className={styles.stepsCountWrapper}>
                            {steps.map((step: StepProps, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.singleCount}
                                    >
                                        <span>{index + 1}</span>

                                        <div>
                                            <i>{step.icon}</i>
                                            <p>{step.title}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.imageSection}>
                            <div className={styles.macStyleWindow}>
                                <div className={styles.macStyleWindowHeader}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <Image
                                    src={
                                        roastedHeaderImages[
                                            currentHeaderImageIndex
                                        ]
                                    }
                                    alt={`.....`}
                                    width={600}
                                    height={290}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
