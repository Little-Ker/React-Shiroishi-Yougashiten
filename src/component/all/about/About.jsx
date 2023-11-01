import React, {
  useCallback
} from 'react'
import clsx from 'clsx'
import {
  Tween
} from 'react-gsap'
import {
  Controller, Scene 
} from 'react-scrollmagic'
import styles from './about.module.sass'

import aboutBg from 'assets/image/mainView/about/about_gallery_item_1.png'
import aboutMask from 'assets/image/mainView/about/about_mask.png'
import hand from 'assets/image/mainView/about/hand.png'

function About() {
  const test = useCallback(() => {
    console.log('aaaaaaaa')
  }, [])

  return (
    <div className={styles.about}>
      <Controller>
        <Scene
          triggerHook={0.7}
          duration={1000}
        >
          {progress => (
            <Tween
              to={{
                webkitMaskPositionY: 0,
                webkitMaskSize: '250vw',
                backgroundSize: '100%',
              }}
              totalProgress={progress}
              paused
              onComplete={test}
            >
              <div className={clsx(styles.aboutBg, styles.mask)} style={{
                backgroundImage: `url(${aboutBg})`,
                webkitMaskImage: `url(${aboutMask})`,
              }}>
                <div className={styles.text}>
                  TestTestTestTestTestTestTestTestTestTest
                </div>
              </div>
            </Tween>    
          )}
        </Scene>
      </Controller>
      <Controller>
        <Scene
          triggerHook={0.7}
          duration={1000}
        >
          {progress => (
            <Tween
              to={{
                top: '175vh',
                transform: 'rotate(50deg)',
              }}
              totalProgress={progress}
              paused
              onComplete={test}
            >
              <img className={styles.hand} src={hand} alt="" />
            </Tween>    
          )}
        </Scene>
      </Controller>
    </div>
  )
}

export default About
