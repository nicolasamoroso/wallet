"use server"

import prisma from "lib/prisma"

export const getAccount = (id: string) => {
  return prisma.account.findUnique({
    where: {
      id: id,
    },
    include: {
      budgets: true,
      currentBalance: true,
      spents: true,
    },
  })
}

export const setBudget = async ({
  accountId,
  budgetAmount,
}: {
  accountId: string
  budgetAmount: number
}) => {
  return await prisma.budget.create({
    data: {
      amount: budgetAmount,
      accountId: accountId,
    },
  })
}

export const setSpent = async ({
  accountId,
  spentAmount,
}: {
  accountId: string
  spentAmount: number
}) => {
  return await prisma.spent.create({
    data: {
      amount: spentAmount,
      accountId: accountId,
    },
  })
}

export const setCurrentBalance = async ({
  accountId,
  currentBalanceAmount,
}: {
  accountId: string
  currentBalanceAmount: number
}) => {
  return await prisma.currentBalance.create({
    data: {
      amount: currentBalanceAmount,
      accountId: accountId,
    },
  })
}

export const setAccount = async ({
  accountId,
  budgetAmount,
  spentAmount,
  currentBalanceAmount,
}: {
  accountId: string
  budgetAmount: number
  spentAmount: number
  currentBalanceAmount: number
}) => {
  const newBudget = await setBudget({
    accountId,
    budgetAmount,
  })

  const newSpent = await setSpent({
    accountId,
    spentAmount,
  })

  const newCurrentBalance = await setCurrentBalance({
    accountId,
    currentBalanceAmount,
  })

  return {
    newBudget,
    newSpent,
    newCurrentBalance,
  }
}
