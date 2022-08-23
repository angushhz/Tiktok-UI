import Header from '@/components/Layout/components/Header'

export type HeaderOnlyProps = {
    children: JSX.Element
}
const HeaderOnly: React.FC<HeaderOnlyProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default HeaderOnly
