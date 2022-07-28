import React, { useState, useEffect } from 'react';
import styles from '../../styles/Services.module.scss';
import { motion } from 'framer-motion';



const Services = () => {
  return (
    <div className={styles.app__profiles}>
    
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className={styles.app__profile_item}
        
      >
        <img src='/images/about01.png' alt="" />
        <h2 className={styles.bold_text} style={{ marginTop: 20 }}>IS 1</h2>
        <p className={styles.p_text} style={{ marginTop: 10 }}>IS 1 ACIKLAMA anasinin amin kadar yazi salak sacma</p>
      </motion.div>
      
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className={styles.app__profile_item}
        
      >
        <img src='/images/about01.png' alt="" />
        <h2 className={styles.bold_text} style={{ marginTop: 20 }}>IS 1</h2>
        <p className={styles.p_text} style={{ marginTop: 10 }}>IS 1 ACIKLAMA anasinin amin kadar yazi salak sacma</p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className={styles.app__profile_item}
        
      >
        <img src='/images/about01.png' alt="" />
        <h2 className={styles.bold_text} style={{ marginTop: 20 }}>IS 1</h2>
        <p className={styles.p_text} style={{ marginTop: 10 }}>IS 1 ACIKLAMA anasinin amin kadar yazi salak sacma</p>
      </motion.div>
    
  </div>
  )
}

export default Services;