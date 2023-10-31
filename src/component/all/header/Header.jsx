import React, {
  useState
} from 'react'
import clsx from 'clsx'
import Logo from 'component/svg/logo'
import Arrow from 'component/svg/arrow'
import styles from './header.module.sass'

function Header() {
  const [runCount] = useState(3)

  return (
    <div className={styles.header}>
      <a href="">
        <Logo />
      </a>
      <a href="" className={styles.button}>
        <div className={styles.textList}>
          {[...Array(runCount).keys()].map((cur, index) => (
            <div key={cur} className={clsx(styles.runText, styles[`run${index + 1}`])}>
              <span>オンラインショップ</span>
              <span>
                <Arrow
                  strokeColor={'#002C83'}
                  className={styles.arr}
                />
              </span>
            </div>
          ))}
        </div>
        <div className={clsx(styles.textList, styles.bottomText)}>
          {[...Array(runCount).keys()].map((cur, index) => (
            <div key={cur} className={clsx(styles.runText, styles[`bottomRun${index + 1}`])}>
              <span>オンラインショップ</span>
              <span>
                <Arrow
                  strokeColor={'#002C83'}
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
