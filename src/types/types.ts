import { ReactNode } from "react";

//HEADER
export interface HeaderProps {
  onOpenTransactionModal: () => void;
}

//MODAL
export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

//TRANSACTIONS CONTEXT
export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export interface TransactionsProviderProps {
  children: ReactNode;
}

export interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// POST TRANSACTION INTERFACE (pode usar Pick também)
export type TransactionInput = Omit<Transaction, "id" | "createdAt">;
