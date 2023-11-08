import React from 'react'
import PropTypes from 'prop-types'
import Header from 'component/all/header'
import Loading from 'component/all/loading/Loading'
import Banner from 'component/all/banner'
import About from 'component/all/about'
import Shop from 'component/all/shop'

function MainView(props) {

  return (
    <div>
      <Loading />
      <Header />
      <Banner />
      <About />
      <Shop />
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
