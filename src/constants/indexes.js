import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'searchjob',
		label: 'Search Job',
		path: '/search',
		icon: <HiOutlineCube />
	},
	{
		key: 'applications',
		label: 'Applications',
		path: '/applications',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'message',
		label: 'Message',
		path: '/message',
		icon: <HiOutlineUsers />
	},
	{
		key: 'statistics',
		label: 'Statistics',
		path: '/statistics',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'news',
		label: 'News',
		path: '/news',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]