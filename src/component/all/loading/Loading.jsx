import React, {
  useEffect,
  useState
} from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import styles from './loading.module.sass'

import logo from 'assets/image/mainView/loading_logo.svg'

function Loading() {
  const [isShowLoading, setIsShowLoading] = useState(true)

  useEffect(() => {
    let tl = gsap.timeline()
    tl.to('#loading',{
      delay: 1,
      duration: 0.6,
      opacity: 0,
      onComplete: () => {
        tl.kill()
        tl = null
        setIsShowLoading(false)
      },
    })
  }, [])

  return (
    <div id={'loading'} className={clsx(styles.loading, !isShowLoading && styles.hide)}>
      <img className={styles.logo} src={logo} alt="" />
    </div>
  )
}

export default Loading
