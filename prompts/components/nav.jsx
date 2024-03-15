"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image' //optimizes images;
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false)
  //const {data: session} = useSession]

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setProviders();//call the function
  }, [])
  
  return (
    <nav className='flex flex-between w-full  mb-16 pt-4'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assests/images/logo.svg"
                alt='logo'
                width={30}
                height={30}
                className='object-contain'
        />
         <p className='logo_text'>Promptshare</p>
        
      </Link>
      
     {/*Desktop devices navigation: below is hidden on small devices*/}

     <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:5'>
            <Link href="/create-prompt" className='black_btn'> Create Post</Link>

            <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>

            <Link href='/profile'>
              <Image
                src="/assests/images/logo.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
          ):
          /* when not logged in -show sign in button*/ 
          (
          <>
            {providers && object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button 
                  type='button' 
                  key={provider.name}
                 onClick={() => signIn(provider.id)} 
                 className='black_btn'>Sign in </button>
              </div>
            ))}
          </>
        )}
     </div>

    {/* mobile device navigation*/ }
    <div className='sm:hidden flex relative'>
       {isUserLoggedIn ? (
        <div className="flex">
          <Image
                src="/assests/images/logo.svg"
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
                onClick={() => setToggleDropdown((prev) => !prev)} //parsing previous state to current state
              />
              {toggleDropdown && (
                <div className='dropdown'>
                  <Link
                   href="/profile"
                   className="dropdown_link"
                   onClick= {() => setToggleDropdown(false)}
                  >
                    my profile
                  </Link>
                  <Link
                   href="/create-prompt"
                   className="dropdown\-link"
                   onClick= {() => setToggleDropdown(false)}
                  >
                    create prompt
                  </Link>
                  <button 
                  type='button'
                   onClick={() =>{
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className=' black_btn w-full mt-5 '
                  >sign Out</button>
                </div>
              )}
        </div>
       ):(
        <>
        {providers && object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button 
              type='button' 
              key={provider.name}
             onClick={() => signIn(provider.id)} 
             className='black_btn'>Sign in </button>
          </div>
        ))}
      </>
       )}
    </div>
    </nav>
  )
}

export default nav
