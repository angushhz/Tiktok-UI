import { Icon } from '@iconify/react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
interface accountProps {
    avatar: string
    username: string
    fullname: string
}
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('account-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4cf0dd9ecdb19a7048daf57ead3ca5c0~c5_300x300.webp?x-expires=1661918400&x-signature=%2BNSbugHfFqQBvKWcQkk3NxB6HDQ%3D"
                alt="Huyen"
            />
            <div className={cx('account-info')}>
                <p className={cx('username')}>
                    h_chaukiuu
                    <Icon
                        className={cx('icon-checked')}
                        icon="bi:check-circle-fill"
                    />
                </p>
                <p className={cx('fullname')}>Tran Huyen Chau</p>
            </div>
        </div>
    )
}

export default AccountItem
