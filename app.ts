import { log } from 'console'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { WorkerAccount } from './class/WorkerAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.getLoan(100)
console.log(companyAccount)

const specialAccount: WorkerAccount = new WorkerAccount('ALex', 40)
specialAccount.deposit(120)
console.log(specialAccount);