/**
 * A Transaction for a Card
 */
export class Transaction {

  public constructor(
    public id: string,
    public name: string,
    public type: string,
    public date: number,
    public amount: number,
    public cardId: string,
  ) {}
}

export class Card {

  public transactions: Transaction[];

  public constructor(
      public id: string,
      public fullName: string,
      public cardNumber: string,
      public expireDate?: number,
      transactions?: Transaction[]
  ) {
      this.transactions = transactions !== undefined ? transactions : [];
  }
  
}