import React, {
  useState, useEffect
} from 'react'
import clsx from 'clsx'
import {
  Tween
} from 'react-gsap'
import {
  useSelector 
} from 'react-redux'
import styles from './shop.module.sass'

import shopBg from 'assets/image/mainView/about/about_gallery_item_1.png'
import aboutGalleryTitle from 'assets/image/mainView/about/about_gallery_title2.png'
import aboutGalleryTitle2 from 'assets/image/mainView/about/about_gallery_title.svg'

function Shop() {
  const isShow = useSelector(state => state.showBanner.isShow)
  const [isShowBanner, setIsShowBanner] = useState(true)

  useEffect(() => {
    setIsShowBanner(isShow)
  }, [isShow])

  let wh = window.innerHeight
  let ww = window.innerWidth

  return (
    <div className={clsx(styles.shop,(!isShowBanner && styles.showShop) )}>
      <Tween
        duration={1}
        to={{
          backgroundSize: `${(ww > 500) ? 25 : 60}%`,
          scrollTrigger: {
            trigger: '#triggerMovie2',
            start: '-200px center',
            end: '200px center',
            scrub: 0.5,
          },
        }}
      >
        <div className={styles.shopBg} style={{
          backgroundImage: `url(${shopBg})`,
          backgroundSize: `${160000000 / (wh * ww)}%`,
        }}>
          <Tween
            duration={0.6}
            to={{
              opacity: 0,
              scrollTrigger: {
                trigger: '#triggerMovie2',
                start: '-200px center',
                end: '200px center',
                scrub: 0.5,
              },
            }}
          >
            <div className={styles.overlay} />
          </Tween>
          <div className={styles.welcomeText}>
            <Tween
              duration={0.6}
              from={{
                y: '50',
                opacity: 0,
                scrollTrigger: {
                  trigger: '#triggerMovie2',
                  start: '50px center',
                  end: '350px center',
                  scrub: 0.5,
                },
              }}
            >
              <img src={aboutGalleryTitle} alt="" />
            </Tween>
            <Tween
              from={{
                y: '50',
                opacity: 0,
                transform: 'translate3d(0px, 40rem, -300rem) rotateX(-90deg)',
                scrollTrigger: {
                  trigger: '#triggerMovie2',
                  start: '200px center',
                  end: '300px center',
                  scrub: 0.5,
                },
              }}
            >
              <p className={styles.title}>{'WELCOME TO'}</p>
            </Tween>
            <Tween
              from={{
                y: '50',
                opacity: 0,
                transform: 'translate3d(0px, 40rem, -300rem) rotateX(-90deg)',
                scrollTrigger: {
                  trigger: '#triggerMovie2',
                  start: '350px center',
                  end: '450px center',
                  scrub: 0.5,
                },
              }}
            >
              <p className={styles.subTitle}>{'IMMERSICE PATISSERIE'}</p>
            </Tween>
            <Tween
              from={{
                y: '50',
                opacity: 0,
                transform: 'translate3d(0px, 40rem, -300rem) rotateX(-90deg)',
                scrollTrigger: {
                  trigger: '#triggerMovie2',
                  start: '500px center',
                  end: '600px center',
                  scrub: 0.5,
                },
              }}
            >
              <img src={aboutGalleryTitle2} alt="" />
            </Tween>
          </div>
        </div>
      </Tween>
    </div>
  )
}

export default Shop
