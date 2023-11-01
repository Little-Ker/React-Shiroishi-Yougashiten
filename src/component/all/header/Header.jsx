import React, {
  useEffect, useCallback,
  useState
} from 'react'
import clsx from 'clsx'
import Logo from 'component/svg/logo'
import Arrow from 'component/svg/arrow'
import {
  useSelector, useDispatch 
} from 'react-redux'
import {
  changeColor 
} from 'redux/navbarColorSlice'
import styles from './header.module.sass'

function Header() {
  const color = useSelector(state => state.navbarColor.color)
  const dispatch = useDispatch()

  const [runCount] = useState(3)

  const handleNavigation = useCallback(
    (e) => {
      const scrollWindow = document.documentElement
      const scrollTop = scrollWindow.scrollTop

      const isShowBlue= (scrollTop < 300)
      if (isShowBlue) {
        dispatch(changeColor('#002c83'))
      } else {
        dispatch(changeColor('#fff'))
      }
    }, []
  )

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)
    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <div className={styles.header}>
      <a href="">
        <Logo color={color} />
      </a>
      <a href="" className={styles.button} style={{borderColor: color}}>
        <div className={styles.textList}>
          {[...Array(runCount).keys()].map((cur, index) => (
            <div
              key={cur}
              style={{ color }}
              className={clsx(styles.runText, styles[`run${index + 1}`])}
            >
              <span>{'オンラインショップ'}</span>
              <span>
                <Arrow
                  strokeColor={color}
                  className={styles.arr}
                />
              </span>
            </div>
          ))}
        </div>
        <div className={clsx(styles.textList, styles.bottomText)}>
          {[...Array(runCount).keys()].map((cur, index) => (
            <div
              key={cur}
              style={{ color }}
              className={clsx(styles.runText, styles[`bottomRun${index + 1}`])}
            >
              <span>{'オンラインショップ'}</span>
              <span>
                <Arrow
                  strokeColor={color}
                  className={styles.arr}
                />
              </span>
            </div>
          ))}
        </div>
      </a>
    </div>
  )
}

export default Header
