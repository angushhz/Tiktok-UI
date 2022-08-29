import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = classNames.bind(styles)

type wrapperProps = {
    children: React.ReactNode
}

function Wrapper({ children }: wrapperProps) {
    return <div className={cx('wrapper')}>{children}</div>
}

export default Wrapper
