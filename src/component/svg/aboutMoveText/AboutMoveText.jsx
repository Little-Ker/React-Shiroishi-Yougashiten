import React, {
  useCallback, useEffect, useRef
} from 'react'

function AboutMoveText() {
  const posY = useRef(0)

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      // console.log('posY.current',posY.current)
      posY.current = window.scrollY
    }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)
    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  return (
    <svg viewBox="0 0 1920 452.7">
      <path d="m3.35,447.73c116-78,425-266,679-236,357.53,42.23,418,91,595,115,302.59,41.03,726-222,806-323" stroke="none" fill="none" id="stroke"></path>
      <text style={{
        fill: '#fff',
        fontSize: '64px',
      }}>
        <textPath href="#stroke" id="strokeOnPath" startOffset={ -(posY.current) }>
          ABOUT IMMERSIVE PATISSERIE	&nbsp;	&nbsp;	&nbsp;
          ABOUT IMMERSIVE PATISSERIE	&nbsp;	&nbsp;	&nbsp;
          ABOUT IMMERSIVE PATISSERIE	&nbsp;	&nbsp;	&nbsp;
          ABOUT IMMERSIVE PATISSERIE	&nbsp;	&nbsp;	&nbsp;
          ABOUT IMMERSIVE PATISSERIE	&nbsp;	&nbsp;	&nbsp;
          ABOUT IMMERSIVE PATISSERIE 	&nbsp;	&nbsp;	&nbsp;
        </textPath>
      </text>
    </svg>
  )
}

export default AboutMoveText
