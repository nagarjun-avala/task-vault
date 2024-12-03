'use client'

import { tradeTypes } from '@/lib/testdb'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<tradeTypes>[] =
  [
    {
      accessorKey: 'id',
      header: '#',
    },
    {
      accessorKey: 'identifier',
      header: 'ID',
    },
    {
      accessorKey: 'transaction_type',
      header: 'Type',
    },
    {
      accessorKey: 'gross_amount',
      header: 'gross_amount',
      cell: ({ row }) => {
        const gross_amount = row.getValue('gross_amount') as string
        return (
          <div className="flex items-center gap-4">
             {gross_amount} $
          </div>
        )
      },
    },
    {
      accessorKey: 'net_result',
      header: 'net_result',
      cell: ({ row }) => {
        const net_result = row.getValue('net_result') as string
        return (
          <div className="flex items-center gap-4">
             {net_result} $
          </div>
        )
      },
    },
    { accessorKey: 'entry_id', header: 'Entry Id' },
    {
      accessorKey: 'operation_type',
      header: 'Operation type',
    },
    {
      accessorKey: 'value',
      header: 'value',
    },
    {
      accessorKey: 'profit_or_loss',
      header: 'Profit/Loss',
    },
    {
      accessorKey: 'outcome',
      header: 'outcome',
    },
    {
      accessorKey: 'trade_company',
      header: 'Company',
    },
  ]
