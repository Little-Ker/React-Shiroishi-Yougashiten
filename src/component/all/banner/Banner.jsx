import React, {
  useEffect,
  useState
} from 'react'
import clsx from 'clsx'
import Logo from 'component/svg/logo'
import Arrow from 'component/svg/arrow'
import {
  MouseParallax 
} from 'react-just-parallax'
import gsap from 'gsap'
import {
  TweenMax 
} from 'gsap/all'
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
  const clouds = [{
    img: cloud1,
    pos: {
      left: '30%',
      top: '-5%',
      backgroundImage: `url(${bg})`,
    },
    strength: 0.08,
  }, {
    img: cloud2,
    pos: {
      right: '12%',
      top: '-3%',
      backgroundImage: `url(${bg})`,
    },
    strength: 0.08,
  }, {
    img: cloud3,
    pos: {
      left: '20%',
      top: '20%',
      backgroundImage: `url(${bg})`,
    },
    strength: 0.12,
  }, {
    img: cloud4,
    pos: {
      right: '20%',
      top: '25%',
      backgroundImage: `url(${bg})`,
    },
    strength: 0.12,
  }]

  useEffect(() => {
    TweenMax.staggerTo(['#leftTree', '#rightTree', '#bannerTitle', '#store'], 0,
      {
        duration: 0,
        filter: 'blur(5px)',
        opacity: 0,
      }) 
  
    let tl = gsap.timeline()
    tl.to('#leftTree',{
      duration: 1,
      filter: 'blur(0px)',
      opacity: 1,
    }).to('#rightTree',{
      duration: 1,
      filter: 'blur(0px)',
      opacity: 1,
    }).to('#store',{
      duration: 1,
      filter: 'blur(0px)',
      opacity: 1,
    }).to('#bannerTitle',{
      duration: 2,
      filter: 'blur(0px)',
      opacity: 1,
      delay: 1,
    })
  }, [])

  return (
    <div className={styles.banner} style={{backgroundImage: `url(${bg})`} }>
      <div className={styles.clouds}>
        {clouds.map(cur => (
          <MouseParallax key={cur} enableOnTouchDevice isAbsolutelyPositioned lerpEase={0.01} strength={cur.strength}>
            <div className={styles.cloudBg} style={cur.pos}>
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
