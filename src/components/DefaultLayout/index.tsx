import classNames from 'classnames/bind'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

type DefaultLayoutProps = {
  children:JSX.Element;
}
const DefaultLayout:React.FC<DefaultLayoutProps>=({children})=>{
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout;