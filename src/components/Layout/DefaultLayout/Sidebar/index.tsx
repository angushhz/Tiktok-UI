import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
            <Link to="/">Danh cho ban</Link>
            <Link to="/following">Following</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/upload">Upload</Link>
        </aside>
    )
}

export default Sidebar
