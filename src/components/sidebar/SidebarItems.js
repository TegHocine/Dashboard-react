import PersonIcon from '@mui/icons-material/Person'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

export const listsItems = [
  { link: '/users', title: 'Users', icon: <PersonIcon className='icons' /> },
  {
    link: '/products',
    title: 'Products',
    icon: <StoreIcon className='icons' />
  },
  { link: '#', title: 'Orders', icon: <CreditCardIcon className='icons' /> },
  {
    link: '#',
    title: 'Delivery',
    icon: <LocalShippingIcon className='icons' />
  }
]

export const usefulItems = [
  {
    link: '#',
    title: 'Stats',
    icon: <InsertChartIcon className='icons' />
  },
  {
    link: '#',
    title: 'Notifications',
    icon: <NotificationsIcon className='icons' />
  }
]

export const userItems = [
  {
    link: '#',
    title: 'Profile',
    icon: <AccountCircleIcon className='icons' />
  },
  {
    link: '#',
    title: 'Logout',
    icon: <LogoutIcon className='icons' />
  }
]
