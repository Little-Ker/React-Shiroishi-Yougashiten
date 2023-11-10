import React, {
  useEffect, useState, useRef, useCallback
} from 'react'
import {
  MouseParallax 
} from 'react-just-parallax'
import gsap from 'gsap'
import {
  TweenMax 
} from 'gsap/all'
import {
  useSelector 
} from 'react-redux'
import clsx from 'clsx'
import styles from './banner.module.sass'

import bg from 'assets/image/mainView/banner/noise.jpg'
import firstTitle from 'assets/image/mainView/banner/first_title.svg'
import cloud1 from 'assets/image/mainView/banner/first_cloud_1.png'
import cloud2 from 'assets/image/mainView/banner/first_cloud_2.png'
import cloud3 from 'assets/image/mainView/banner/first_cloud_3.png'
import cloud4 from 'assets/image/mainView/banner/first_cloud_4.png'
import store from 'assets/image/mainView/banner/first_store.png'
import leftTree from 'assets/image/mainView/banner/first_tree_back_left.png'
import rightTree from 'assets/image/mainView/banner/first_tree_back_right.png'
import ground from 'assets/image/mainView/banner/first_ground.png'
import car from 'assets/image/mainView/banner/first_car.png'
import leftFrontTree from 'assets/image/mainView/banner/first_tree_front_left.png'
import rightFrontTree from 'assets/image/mainView/banner/first_tree_front_right.png'

function Banner() {
  const isMounted = useRef(false)
  const [isShowBanner, setIsShowBanner] = useState(true)
  const isShow = useSelector(state => state.showBanner.isShow)
  
  const handleNavigation = useCallback(
    (e) => {
      const scrollWindow = document.documentElement
      const scrollTop = scrollWindow.scrollTop

      if (!isMounted.current && (scrollTop < 400))  {
        document.querySelector('body').style.overflow = 'hidden'
      }
      isMounted.current = true
    }, []
  )

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)
    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  useEffect(() => {
    setIsShowBanner(isShow)
  }, [isShow])

  const clouds = [{
    img: cloud1,
    style: {
      backgroundImage: `url(${bg})`,
    },
    strength: 0.08,
  }, {
    img: cloud2,
    style: {
      backgroundImage: `url(${bg})`,
    },
    strength: 0.08,
  }, {
    img: cloud3,
    style: {
      backgroundImage: `url(${bg})`,
    },
    strength: 0.12,
  }, {
    img: cloud4,
    style: {
      backgroundImage: `url(${bg})`,
    },
    strength: 0.12,
  }]

  useEffect(() => {
    TweenMax.staggerTo(['#leftTree', '#rightTree', '#bannerTitle', '#store'], 0,
      {
        duration: 0,
        opacity: 0,
      })
  
    let tl = gsap.timeline()
    tl.to('#leftTree',{
      delay: 1.6,
      duration: 1,
      opacity: 1,
    }).to('#rightTree',{
      duration: 1,
      opacity: 1,
    }).to('#store',{
      duration: 1,
      opacity: 1,
    }).to('#bannerTitle',{
      duration: 2,
      opacity: 1,
      onComplete: () => {
        document.querySelector('body').style.overflow = 'auto'
        isMounted.current = true
      },
    })
  }, [])

  return (
    <div className={clsx(styles.banner, !isShowBanner && styles.showNone)} style={{backgroundImage: `url(${bg})`} }>
      <div className={styles.clouds}>
        {clouds.map((cur, index) => (
          <MouseParallax key={cur.img} enableOnTouchDevice isAbsolutelyPositioned lerpEase={0.01} strength={cur.strength}>
            <div className={clsx(styles.cloudBg, styles[`cloud${index+1}`])} style={cur.style}>
              <img className={styles.cloud} src={cur.img} alt="" />
            </div>
          </MouseParallax >
        ))}
      </div>
      <h1 id={'bannerTitle'} className={styles.title}><img src={firstTitle} alt="" /></h1>
      <img className={styles.ground} src={ground} alt="" />
      <div className={styles.building}>
        <img id={'leftTree'} className={styles.leftTree} src={leftTree} alt="" />
        <img id={'store'} className={styles.store} src={store} alt="" />
        <img id={'rightTree'} className={styles.rightTree} src={rightTree} alt="" />
      </div>
      <div className={styles.carMove}>
        <img className={styles.car} src={car} alt="" />
      </div>
      <img className={styles.leftFrontTree} src={leftFrontTree} alt="" />
      <img className={styles.rightFrontTree} src={rightFrontTree} alt="" />
    </div>
  )
}

export default Banner
