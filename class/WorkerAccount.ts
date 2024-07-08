import { DioAccount } from "./DioAccount";

export class WorkerAccount extends DioAccount{

    deposit = (amount: number): void => {
        this.balance += amount + 10;
    }
}