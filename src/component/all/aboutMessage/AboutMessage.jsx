import React, {
  useCallback, useMemo
} from 'react'
import {
  Tween, Timeline, SplitLetters, SplitWords 
} from 'react-gsap'
import {
  Controller, Scene 
} from 'react-scrollmagic'
import styles from './aboutMessage.module.sass'

import title01 from 'assets/image/mainView/about/about_gallery_title.png'

function AboutMessage() {
  const preTextList = useMemo(() => [{
    text: 'ひとくち、',
    marginLeft: '10rem',
  }, {
    text: 'ふたくち、',
    marginLeft: '13.5rem',
  }, {
    text: '夢うつつ',
    marginLeft: '20rem',
  }, {
    text: 'ここは',
    marginLeft: '20rem',
  }], [])

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
    console.log('Complete')
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
              {preTextList.map((cur) => {
                return (
                  <div key={cur} style={{marginLeft: cur.marginLeft}}>
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
                        {cur.text}
                      </SplitLetters>
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
            scrub={2}
          >
            <Timeline paused>
              {sentenceList.map((cur) => {
                return (
                  <div key={cur} style={{marginBottom: cur.marginBottom}}>
                    <Tween
                      from={{
                        opacity: 0,
                        transform: 'rotate(7deg)',
                        scale: 0.7,
                        scrub: 0.5,
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
        <div id={'triggerMovie'}  style={{ marginTop: '50rem' }} />
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
