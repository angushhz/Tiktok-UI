import Home from '@/pages/Home'
import Following from '@/pages/Following'
import Profile from '@/pages/Profile'
import Search from '@/pages/Search'
import Upload from '@/pages/Upload'
import { HeaderOnly } from '@/components/Layout'
import { HeaderOnlyProps } from '@/components/Layout/HeaderOnly'

interface route {
    path: string
    component: React.FC
    layout?: React.FC<HeaderOnlyProps> | null
}

const publicRoutes: route[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: 'following',
        component: Following,
    },
    {
        path: 'profile',
        component: Profile,
    },
    {
        path: 'search',
        component: Search,
        layout: null,
    },
    {
        path: 'upload',
        component: Upload,
        layout: HeaderOnly,
    },
]

const privateRoutes: route[] = []

export { publicRoutes, privateRoutes }
