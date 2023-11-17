import React from 'react'
import styles from './Header.module.css'
import { Container } from 'react-bootstrap'
export default function Header() {
  return<>

 <div className={`${styles.headerContainer} `}>

<div className={styles.firstHead}>
    <span>العربية</span>

  </div>
   <div className={styles.logo}>
    <div>
    <img src='./images/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg' />
    </div>
    <span>Sign In or Sign Up</span>
   </div>
</div>

  </>
}
