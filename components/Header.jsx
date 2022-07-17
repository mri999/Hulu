import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
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
