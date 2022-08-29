import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '@/assets/images'
import { Icon } from '@iconify/react'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import AccountItem from '@/components/AccountItem'

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState<number[]>([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 2000)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok Logo" />
                </div>
                <Tippy
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>
                                    Tài khoản
                                </h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    interactive
                    visible={searchResult.length > 0}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <Icon
                                icon="ant-design:close-circle-filled"
                                color="gray"
                                width="16px"
                                height="16px"
                            />
                        </button>
                        <Icon
                            className={cx('loading')}
                            icon="line-md:loading-loop"
                        />
                        <button className={cx('search-btn')}>
                            <Icon
                                icon="akar-icons:search"
                                width="24px"
                                height="24px"
                            />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    )
}

export default Header
