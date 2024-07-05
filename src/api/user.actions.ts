"use server"

import prisma from "lib/prisma"

export const createUser = ({ email, password }: { email: string; password: string }) => {
  return prisma.user.create({
    data: {
      email: email,
      password: password,
      account: {
        create: {
          budgets: {
            create: {
              amount: 0,
            },
          },
          currentBalance: {
            create: {
              amount: 0,
            },
          },
          spents: {
            create: {
              amount: 0,
            },
          },
        },
      },
    },
  })
}

export const getUser = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      account: true,
      expenses: true,
    },
  })
}

export const updateUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (!user) return
      return prisma.user.update({
        where: {
          email: email,
        },
        data: {
          password: password,
        },
      })
    })
}
