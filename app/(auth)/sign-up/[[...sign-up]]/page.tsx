import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
            <div className="h-full flex-col items-center justify-center px-4 lg:flex">
                <div className="space-y-4 pt-16 text-center">
                    <h1 className="text-3xl font-bold text-[#2e2a47]">
                        Welcome Back!
                    </h1>
                    <p className="text-base text-[#7e8ca0]">
                        Log in or Create account to get back to your dashboard!
                    </p>
                </div>
                <div className="mt-8 flex items-center justify-center">
                    <ClerkLoaded>
                        <SignUp path="/sign-up" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                </div>
            </div>
            <div className="hidden h-full items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600 lg:flex">
                <Image src="/logo.svg" alt="Logo" width={100} height={100} />
            </div>
        </div>
    )
}
