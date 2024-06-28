import type { ReactNode } from 'react'

import Header from '@/components/Header'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main className="px-3 lg:px-14">{children}</main>
        </>
    )
}
