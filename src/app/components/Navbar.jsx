"use client"

import '../page.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

  const pathname = usePathname();

  return (
    <nav>
      <div className='top'>
        <div className='App-header'>
          <h2>
            Elena&apos;s Funny Fill-In
          </h2>
        </div>
        { (pathname === "/") ? "" : (
            <div className='back'>
              <button className='backButton'>
                <Link href='/'>&#x2B05;<br />BACK</Link>
              </button>
            </div>
          )
        }
      </div>
    </nav>
  )
}
