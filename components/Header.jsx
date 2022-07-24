import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const headerItems = [
  { title: 'HOME', icon: HomeIcon },
  { title: 'TRENDING', icon: LightningBoltIcon },
  { title: 'VERIFIED', icon: BadgeCheckIcon },
  { title: 'COLLECTIONS', icon: CollectionIcon },
  { title: 'SEARCH', icon: SearchIcon },
  { title: 'ACCOUNT', icon: UsersIcon },
]

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between h-auto items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <HeaderItem title={item.title} Icon={item.icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hulu"
      />
    </header>
  )
}

export default Header
