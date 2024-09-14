"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from "@/styles/home.module.css";
import Link from 'next/link';
import Image from 'next/image';
import gmail from "@/img/gmail.png";
import whatsapp from "@/img/whatsapp.png";
import instagram from "@/img/instagram.png";
import x from "@/img/logo-x-black.png";
import facebook from "@/img/facebook.png";
import In from "@/img/linkedin.png";
import { contact } from "@/docs/infos";
import { Button } from 'react-bootstrap';

const Home = () => {
  const texts = ["a Developer ", "an Engineer ", "a Designer "];
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingInterval = useRef(null);
  const pauseTimeout = useRef(null);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let index = -1;

    const typeText = () => {
      setDisplayedText("");
      typingInterval.current = setInterval(() => {
        if (index < text.length - 1) {
          index += 1
          setDisplayedText((prev) => prev + text[index]);
        } else {
          clearInterval(typingInterval.current);
          setIsTyping(false);
        }
      }, 200);
    };

    typeText();

    return () => {
      clearInterval(typingInterval.current);
      clearTimeout(pauseTimeout.current);
    };
  }, [currentTextIndex]);

  useEffect(() => {
    if (!isTyping) {
      pauseTimeout.current = setTimeout(() => {
        setIsTyping(true);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
    }

    return () => {
      clearTimeout(pauseTimeout.current);
    };
  }, [isTyping]);

  return (
    <div className={styles.background}>
      <h3 className={styles.hello}>Hello & Welcome</h3>
      <h1 className={styles.me}>I am {displayedText}</h1>
      <div className={styles.socialMedia}>
        <div className='whatsapp'>
          <Link href={`https://wa.me/${contact.phone}`} target="_blank">
            <Image src={whatsapp} alt='WhatsApp' height={20} />
          </Link>
        </div>
        <div className='instagram'>
          <Link href={`https://${contact.instagram}`} target="_blank">
            <Image src={instagram} alt='Instagram' height={20} />
          </Link>
        </div>
        <div className='gmail'>
          <Link href={`mailto:${contact.email}`} target="_blank">
            <Image src={gmail} alt='E-mail' height={20} />
          </Link>
        </div>
        <div className='x'>
          <Link href={`https://${contact.x}`} target="_blank">
            <Image src={x} alt='X' height={20} />
          </Link>
        </div>
        <div className='facebook'>
          <Link href={`https://${contact.facebook}`} target="_blank">
            <Image src={facebook} alt='Facebook' height={20} />
          </Link>
        </div>
        <div className='linkedIn'>
          <Link href={`https://${contact.In}`} target="_blank">
            <Image src={In} alt='LinkedIn' height={25} />
          </Link>
        </div>
      </div>
      <div >
        <Link className={styles.divButton} href="https://www.com" passHref>
          <Button className={styles.cvButton}>Download</Button>
        </Link>
      </div>    
    </div>

  );
}

export default Home;
