import React, {
  useCallback, useRef, useState, useEffect
} from 'react'
import clsx from 'clsx'
import {
  Tween, Timeline, SplitLetters 
} from 'react-gsap'
import {
  Controller, Scene 
} from 'react-scrollmagic'
import AboutMoveText from 'component/svg/aboutMoveText'
import AboutMessage from 'component/all/aboutMessage'
import styles from './about.module.sass'

import aboutBg from 'assets/image/mainView/about/about_gallery_item_1.png'
import aboutMask from 'assets/image/mainView/about/about_mask.png'
import hand from 'assets/image/mainView/about/hand.png'

function About() {
  const triggerRef = useRef(null)
  const [trigger, setTrigger] = useState(triggerRef.current)

  useEffect(() => {
    setTrigger(triggerRef.current)
  }, [])

  const onComplete = useCallback(() => {
    console.log('Complete')
  }, [])

  return (
    <div className={styles.about}>
      <Controller>
        <Scene
          duration={1000}
          triggerElement={trigger}
        >
          {progress => (
            <Timeline totalProgress={progress} paused>
              <Tween
                to={{
                  webkitMaskPositionY: 0,
                  webkitMaskSize: '250vw',
                  backgroundSize: '100%',
                }}
                onComplete={onComplete}
                onUpdate={
                  console.log('progress',progress)
                }
              >
                <div className={clsx(styles.aboutBg, styles.mask)} style={{
                  backgroundImage: `url(${aboutBg})`,
                  WebkitMaskImage: `url(${aboutMask})`,
                }}>
                  <Timeline
                    target={
                      <div className={clsx(styles.aboutMoveText)}>
                        <AboutMoveText />
                      </div>
                    }
                    totalProgress={progress} 
                    paused
                  >
                    <Tween
                      from={{ marginTop: '250px' }}
                      to={{ marginTop: '250px' }}
                    />
                    <Tween
                      from={{ marginTop: '250px' }}
                      to={{ marginTop: '-30%' }}
                    />
                  </Timeline>
                </div>
              </Tween>  
            </Timeline>  
          )}
        </Scene>
      </Controller>
      <Controller>
        <Scene
          duration={1000}
          triggerElement={trigger}
        >
          {progress => (
            <Tween
              to={{
                top: '210vh',
                transform: 'rotate(50deg)',
              }}
              totalProgress={progress}
              paused

            >
              <img className={styles.hand} src={hand} alt="" />
            </Tween>    
          )}
        </Scene>
      </Controller>
      <div className={styles.aboutMessage}>
        <AboutMessage />
      </div>
      
    </div>
  )
}

export default About
