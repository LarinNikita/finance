'use client'

import React, { useState } from 'react'

import { Menu } from 'lucide-react'
import { useMedia } from 'react-use'
import { usePathname, useRouter } from 'next/navigation'

import NavButton from './NavButton'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const ROUTES = [
    {
        href: '/',
        label: 'Overview',
    },
    {
        href: '/transactions',
        label: 'Transactions',
    },
    {
        href: '/accounts',
        label: 'Accounts',
    },
    {
        href: '/categories',
        label: 'Categories',
    },
    {
        href: '/settings',
        label: 'Settings',
    },
]

const Navigation = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const router = useRouter()
    const pathname = usePathname()

    const isMobile = useMedia('(max-width: 1024px)', false)

    const onClick = (href: string) => {
        router.push(href)
        setIsOpen(false)
    }

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button
                        size="sm"
                        variant="outline"
                        className="border-none bg-white/10 font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    >
                        <Menu className="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {ROUTES.map((route, index) => (
                            <Button
                                key={index}
                                variant={
                                    route.href === pathname
                                        ? 'secondary'
                                        : 'ghost'
                                }
                                onClick={() => onClick(route.href)}
                                className="w-full justify-start"
                            >
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }

    return (
        <nav className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
            {ROUTES.map((route, index) => (
                <NavButton
                    key={index}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    )
}

export default Navigation
