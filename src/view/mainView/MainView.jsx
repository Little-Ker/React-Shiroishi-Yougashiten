import React, {
  useState, useMemo, useCallback, useEffect
} from 'react'
import PropTypes from 'prop-types'
import Header from 'component/all/header'



function MainView(props) {

  return (
    <div>
      <Header />
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
