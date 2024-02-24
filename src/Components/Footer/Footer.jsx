import React from "react";
import styles from './Footer.module.css'
import logo from "../../Assets/logo.png";

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>

                <div className={styles.flex}>

                    <ul className={styles.article}>
                        <li><img src={logo} /></li>
                        <li>
                            <p>
                                Excellence decisively nay man yet impression for contrasted
                                remarkably. There spoke happy for you are out. Fertile how old
                                address did showing because sitting replied six. Had arose guest
                                visit going off child she new.
                            </p>
                        </li>
                        <li>
                            <a href="#" className={styles.btnStarted}>GET STARTED</a>
                        </li>
                    </ul>

                    <ul>
                        <h4>quick link</h4>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;home</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;about us</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;company history</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;features</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;blog page</a></li>
                    </ul>

                    <ul>
                        <h4>community</h4>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;career</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;leadership</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;strategy</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;services</a></li>
                        <li className={styles.list}><i class="fa-solid fa-chevron-right"></i><a href="#">&nbsp;history</a></li>
                    </ul>


                    <ul>
                        <h4>contact info</h4>
                        <p className={styles.contact}>Estimating stimulated how reasonably precaution diminution she simplicity</p>
                        <li className={styles.flexList}>
                            <div>
                                <span className="fa-solid fa-house-chimney"></span>
                            </div>
                            <div>
                                <h5>website:</h5><p>www.validtheme.com</p>
                            </div>
                        </li>
                        <li className={styles.flexList}>
                            <div>
                                <span className="fa-solid fa-envelope"></span>
                            </div>
                            <div>
                                <h5>email:</h5><p>support@validtheme.com</p>
                            </div>
                        </li>

                        <li className={styles.flexList}>
                            <div>
                                <span className="fa-solid fa-phone-flip"></span>
                            </div>
                            <div>
                                <h5>phone:</h5><p>+44-20-7328-4499</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.border}></div>

                <div className={styles.footerBottom}>
                    <div>
                        <p>© Copyright 2018. All Rights Reserved By <a className={styles.link} href="#">Validthemes</a></p>
                    </div>
                    <ul className={styles.footerLinks}>
                        <li><a className={styles.line} href="#">TERMS OF USER</a></li>
                        <li>|</li>
                        <li><a className={styles.line} href="#">LICENSE</a></li>
                        <li>|</li>
                        <li><a className={styles.color} href="#">SUPPORT</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
