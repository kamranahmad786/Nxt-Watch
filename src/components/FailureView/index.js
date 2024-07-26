import {
  FailedView,
  FailedImage,
  FailedHeading,
  FailedNote,
  RetryButton,
} from './styledComponent'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailedImage src={failureImgUrl} alt="failure view" />
            <FailedHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailedHeading>
            <FailedNote noteColor={noteColor}>
              We are having some trouble to complete your request. Please try <br /> again.
            </FailedNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
