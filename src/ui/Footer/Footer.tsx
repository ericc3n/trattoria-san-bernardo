'use client';

import React from "react";
import Logo from "../Logo/Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { infos, socials } from "@/features/infos";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import Circle from "@/components/Button/Circle/Circle";

export default function Footer() {
  return (
    <footer className={`${styles.footer} s-px`}>
      <div className={styles.columns}>
        <div className={styles.col}>
          <Logo />
          <p className={`${styles.desc} mt-xxs`}>Storica trattoria nel cuore di Morimondo</p>
          <div className={styles.socials}>
            <Circle
              href={socials.facebook}
              Icon={FaFacebook}
              classname={styles.circle}
            />
            <Circle
              href={socials.instagram}
              Icon={FaInstagram}
              classname={styles.circle}
            />
          </div>
        </div>
        {/* Col 2: Orario */}
        <div className={styles.col}>
          <div className={styles.label}>Orario</div>
          <p>
            <span className="font-weight-semibold">{infos.timetable.open.days}</span>
            <br />
              {infos.timetable.open.hours}
            <br />
            <span className="font-weight-semibold">{infos.timetable.close.days}</span>
            <br />
              Chiuso
          </p>
        </div>
        {/* Col 3: Link veloci */}
        <div className={styles.col}>
          <div className={styles.label}>Link veloci</div>
          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href='/menu.pdf'>Menù</Link>
            </li>
            <li>
              <Link href="/galleria">Galleria</Link>
            </li>
            <li>
              <Link href="/orari">Orari</Link>
            </li>
            <li>
              <Link href="/prenota">Contatti</Link>
            </li>
          </ul>
        </div>
        {/* Col 4: Contatti */}
        <div className={styles.col}>
          <div className={styles.label}>Contatti</div>
          <ul className={styles.links}>
            <li>
              <span className={styles.icon}><IoLocationSharp /></span>
              <a
                href={infos.site.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {infos.site.text}
              </a>
            </li>
            <li>
              <span className={styles.icon}><IoIosCall /></span>
              <a href={`tel:${infos.phone.replace(/\s/g, "")}`}>
                +39 {infos.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.bottom}>
        <p>@ 2025 - SAN BERNARDO TRATTORIA</p>
        <a href="/privacyecookie" className={styles.privacy}>
          Privacy e Cookie
        </a>
      </div>
    </footer>
  );
}