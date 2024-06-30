'use client'

import { Loader2, Plus } from 'lucide-react'

import { useBulkDelete } from '@/features/accounts/api/useBulkDelete'
import { useNewAccount } from '@/features/accounts/hooks/useNewAccount'
import { useGetAccounts } from '@/features/accounts/api/useGetAccounts'

import { columns } from './columns'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/DataTable'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
    const newAccount = useNewAccount()
    const accountsQuery = useGetAccounts()
    const deleteAccounts = useBulkDelete()

    const accounts = accountsQuery.data || []

    const isDisabled = accountsQuery.isLoading || deleteAccounts.isPending

    if (accountsQuery.isLoading) {
        return (
            <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
                <Card className="border-none drop-shadow-sm">
                    <CardHeader>
                        <Skeleton className="h-8 w-48" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex h-[500px] w-full items-center justify-center">
                            <Loader2 className="size-6 animate-spin text-slate-300" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

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
                        filterKey="name"
                        columns={columns}
                        data={accounts}
                        onDelete={row => {
                            const ids = row.map(r => r.original.id)
                            deleteAccounts.mutate({ ids })
                        }}
                        disabled={isDisabled}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
