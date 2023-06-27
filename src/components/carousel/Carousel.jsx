import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div>
      <div className={styles.clientCarousel}>
        <p> Our Clients Are Backed By:</p>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
                height='100'
                width='250'
                alt=''
              />
            </div>

            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png'
                height='100'
                width='250'
                alt=''
              />
            </div>

            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
            <div className={styles.slide}>
              <Image
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png'
                height='100'
                width='250'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
