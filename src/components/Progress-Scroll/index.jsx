import { useEffect } from 'react'
import scrollToTop from '../../common/scrollToTop';

const ProgressScroll = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="progress-wrap cursor-pointer">
      <svg className="progress-circle svg-content" width="0%" height="0%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  )
}

export default ProgressScroll