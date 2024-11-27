'use server'

import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { db } from './db'

// import { v4 } from 'uuid'
import { } from './types'
// import { z } from 'zod'
import { User } from '@prisma/client'

export const getAuthUserDetails = async () => {
    const user = await currentUser()
    if (!user) {
        return
    }

    const userData = await db.user.findUnique({
        where: {
            email: user.emailAddresses[0].emailAddress,
        },
    })

    return userData
}

export const initUser = async (newUser: Partial<User>) => {
    const user = await currentUser()
    if (!user) return

    const userData = await db.user.upsert({
        where: {
            email: user.emailAddresses[0].emailAddress,
        },
        update: newUser,
        create: {
            id: user.id,
            avatarUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
            name: `${user.firstName} ${user.lastName}`,
        },
    })

    await clerkClient.users.updateUserMetadata(user.id)

    return userData
}

export const updateUser = async (user: Partial<User>) => {
    const response = await db.user.update({
        where: { email: user.email },
        data: { ...user },
    })

    await clerkClient.users.updateUserMetadata(response.id,)

    return response
}

export const deleteUser = async (userId: string) => {
    await clerkClient.users.updateUserMetadata(userId)
    const deletedUser = await db.user.delete({ where: { id: userId } })

    return deletedUser
}

export const getUser = async (id: string) => {
    const user = await db.user.findUnique({
        where: {
            id,
        },
    })

    return user
}