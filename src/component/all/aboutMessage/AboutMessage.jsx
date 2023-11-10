import React, {
  useCallback, useMemo
} from 'react'
import {
  Tween, Timeline, SplitChars , SplitWords 
} from 'react-gsap'
import {
  Controller, Scene 
} from 'react-scrollmagic'
import {
  useDispatch 
} from 'react-redux'
import {
  changeShowBanner
} from 'redux/showBannerSlice'
import styles from './aboutMessage.module.sass'

import title01 from 'assets/image/mainView/about/about_gallery_title.png'

function AboutMessage() {
  const dispatch = useDispatch()

  const preTextList = useMemo(() => [
    'ひとくち、',
    'ふたくち、', 
    '夢うつつ',
    'ここは',
  ], [])

  const sentenceList = useMemo(() => [{
    text: '「架空のパティスリーしろいし洋菓子店」は、',
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

  const onComplete = useCallback(() => {
    dispatch(changeShowBanner(false))
  }, [])

  const onEnterBack = useCallback(() => {
    dispatch(changeShowBanner(true))
  }, [])

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
              {preTextList.map((cur, index) => {
                return (
                  <div key={cur} className={styles[`text${index}`]}>
                    <Tween
                      from={{
                        opacity: 0,
                        scale: 0.1,
                        bottom: -1,
                      }}
                      stagger={0.15}
                    >
                      <SplitChars
                        wrapper={<div className={styles.splitLetters} />}
                      >
                        {cur}
                      </SplitChars >
                    </Tween>
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
            duration={800}
            offset={-500} 
          >
            <Timeline paused>
              {sentenceList.map((cur) => {
                return (
                  <div key={cur.text} style={{marginBottom: cur.marginBottom}}>
                    <Tween
                      from={{
                        opacity: 0,
                        transform: 'rotate(7deg)',
                        scale: 0.7,
                      }}
                      stagger={0.15}
                    >
                      <SplitWords
                        wrapper={<div className={styles.sentence} />}
                      >
                        {cur.text}
                      </SplitWords>
                    </Tween>
                  </div>)
              })}
            </Timeline>
          </Scene>
        </Controller>
        <div id={'triggerMovie'} className={styles.triggerMovie} />
        <div id={'triggerMovie2'} className={styles.triggerMovie2} />
      </div>
      <div className={styles.right}>
        <Tween
          duration={0.6}
          to={{
            y: '-50px',
            opacity: 0,
            scrollTrigger: {
              trigger: '#triggerMovie',
              start: '-200px center',
              end: '200px center',
              scrub: 0.5,
              onEnterBack: onEnterBack,
              onLeave: onComplete,
            },
          }}
        >
          <div className={styles.movie}>
            <iframe className="about__message__movie-iframe" src="https://player.vimeo.com/video/879369833?background=1&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="brand_for_BG">
            </iframe>
          </div>
        </Tween>
      </div>
    </div>
  )
}

export default AboutMessage
