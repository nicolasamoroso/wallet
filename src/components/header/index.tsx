import Link from "next/link"

import UserDropdown from "@/components/header/user-dropdown"
import WalletLogo from "@/components/shared/wallet.logo"

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/">
        <WalletLogo />
      </Link>

      <span>
        <UserDropdown image="/default-profile-pic.png" name="nico" />
      </span>
    </header>
  )
}
