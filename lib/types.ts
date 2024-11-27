import {
account,
expense,
session,
task,
user
} from '@prisma/client'
import { db } from './db'
// import { z } from 'zod'

const currencyNumberRegex = /^\d+(\.\d{1,2})?₹/

// export const TicketFormSchema = z.object({
//     name: z.string().min(1),
//     description: z.string().optional(),
//     value: z.string().refine((value) => currencyNumberRegex.test(value), {
//         message: 'Value must be a valid price.',
//     }),
// })


export type Address = {
    city: string
    country: string
    line1: string
    postal_code: string
    state: string
}

export type ShippingInfo = {
    address: Address
    name: string
}

export type StripeCustomerType = {
    email: string
    name: string
    shipping: ShippingInfo
    address: Address
}