'use client'

import { Plus } from 'lucide-react'

import { useNewAccount } from '@/features/accounts/hooks/useNewAccount'

import { Payment, columns } from './columns'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/DataTable'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const data: Payment[] = [
    {
        id: '728ed52f',
        amount: 100,
        status: 'pending',
        email: 'm@example.com',
    },
    {
        id: '728ed52f',
        amount: 50,
        status: 'pending',
        email: 'pm@example.com',
    },
    {
        id: '728ed52f',
        amount: 70,
        status: 'pending',
        email: 'am@example.com',
    },
]

export default function Page() {
    const newAccount = useNewAccount()

    return (
        <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="line-clamp-1 text-xl">
                        Accounts
                    </CardTitle>
                    <Button size="sm" onClick={newAccount.onOpen}>
                        <Plus className="mr-2 size-4" />
                        Add new
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable
                        filterKey="email"
                        columns={columns}
                        data={data}
                        onDelete={() => {}}
                        disabled={false}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
