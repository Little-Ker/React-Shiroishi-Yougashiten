import React, {
  useCallback, useRef, useState, useEffect, useMemo
} from 'react'
import clsx from 'clsx'
import {
  Tween, Timeline, SplitLetters, SplitWords
} from 'react-gsap'
import {
  Controller, Scene 
} from 'react-scrollmagic'
import AboutMoveText from 'component/svg/aboutMoveText'
import styles from './aboutMessage.module.sass'

import title01 from 'assets/image/mainView/about/about_gallery_title.png'
import aboutMask from 'assets/image/mainView/about/about_mask.png'
import hand from 'assets/image/mainView/about/hand.png'

function AboutMessage() {
  const triggerRef = useRef(null)
  const [trigger, setTrigger] = useState(triggerRef.current)

  const preTextList = useMemo(() => [{
    text: 'ひとくち、',
    marginLeft: '6rem',
  }, {
    text: 'ふたくち、',
    marginLeft: '9.5rem',
  }, {
    text: '夢うつつ',
    marginLeft: '16rem',
  }, {
    text: 'ここは',
    marginLeft: '16rem',
  }], [])

  const sentenceList = useMemo(() => [{
    text: '「架空のパティスリー しろいし洋菓子店」は、',
    marginBottom: '2rem',
  }, {
    text: '作り手であるわたしたちが、',
    marginBottom: '2rem',
  }, {
    text: 'お菓子/ブランド作りを夢中で楽しむ姿勢はもちろん、',
    marginBottom: '9rem',
  }, {
    text: '商品を手にとった人々が、',
    marginBottom: '2rem',
  }, {
    text: 'ぐっとこちらの世界に引き込まれるような、',
    marginBottom: '2rem',
  }, {
    text: '没入感覚を提供するブランドを目指します。',
    marginBottom: '2rem',
  }], [])

  useEffect(() => {
    setTrigger(triggerRef.current)
  }, [])

  const onComplete = useCallback(() => {
    console.log('Complete')
  }, [])

  const showTextAnim = useCallback((text) => {
    return (
      <Tween
        from={{
          opacity: 0,
          scale: 0.1,
          bottom: -1,
        }}
        stagger={0.15}
      >
        <SplitLetters
          wrapper={<div className={styles.splitLetters} />}
        >
          {text}
        </SplitLetters>
      </Tween>
    )}
  , [])

  return (
    <div className={styles.aboutMessage}>
      <div className={styles.left}>
        <Controller>
          <Scene
            pin={false}
            duration={700}
            offset={-400}        
          >
            <Timeline paused>
              {preTextList.map((cur) => {
                return (
                  <div key={cur} style={{marginLeft: cur.marginLeft}}>
                    {showTextAnim(cur.text)}
                  </div>)
              })}
            </Timeline>
          </Scene>
          <div style={{ marginTop: '8rem' }} /> 
          <Scene
            pin={false}
            duration={600}
            offset={-400}        
          >
            <Timeline paused>
              <Tween
                from={{
                  opacity: 0,
                  scale: 0.7,
                }}
              >
                <img src={title01} className={styles.title01} alt="" />
              </Tween>
            </Timeline>
          </Scene>
          <div style={{ marginTop: '16rem' }} />
          <Scene
            pin={false}
            duration={600}
            offset={-400}        
          >
            <Timeline paused>
              <Tween
                from={{
                  opacity: 0,
                  scale: 0.7,
                }}
              >
                <img src={title01} className={styles.title01} alt="" />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </div>
      <div className={styles.right}>
        <div className={styles.movie}>
          <iframe className="about__message__movie-iframe" src="https://player.vimeo.com/video/879369833?background=1&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="brand_for_BG">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default AboutMessage
