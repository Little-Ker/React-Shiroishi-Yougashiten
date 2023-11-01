import React, {
  useState, useMemo, useCallback, useEffect
} from 'react'
import PropTypes from 'prop-types'
import Header from 'component/all/header'
import Banner from 'component/all/banner'



function MainView(props) {

  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}

MainView.propTypes = {
  audienceList: PropTypes.array,
}

MainView.defaultProps = {
  audienceList: [],
}

export default MainView
