import React from 'react'
import styles from '../../styles/About.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>ABOUT US</h2>
        <h1 className={styles.p1}>You Can Imagine  I Can Do</h1>
        <h3 className={styles.p2}>Professional Front-End Developer</h3>
      </div>
      <div className={styles.image}>
        <img src='/images/about.png' alt="img_pic" />
      </div>
      <div className={styles.desc}>
        <h2>ABOUT ME</h2>
        <h4> &nbsp;&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the printing and <br/>
        &nbsp;&nbsp;&nbsp;typesetting industry. Lorem Ipsum has been the industry's <br/>
        &nbsp;&nbsp;&nbsp;standard dummy text ever since the 1500s, when an unknown <br/>
        &nbsp;&nbsp;&nbsp;printer took a galley of type and scrambled it to make a type
        </h4>
      </div>
      <div className={styles.images}>
        <img src='/images/group.png' alt="points" className={styles.point}/>
        <img src='/images/doublecircle.png' alt="circle" className={styles.sbcircle} />
        <img src='/images/left_waves.png' alt="wave" className={styles.leftwaves}/>
        <img src='/images/waves.png' alt="wave1" className={styles.waves}/>
        <img src='/images/tripletriangle.png' alt="wave1" className={styles.angle}/>

      </div>
    </div>
  )
}

export default About;