import {OfficeWorker} from './worker'
export type Office = {
  name: string,
  size?: number,
  contactNumber: string,
  email: string,
  officeCapacity: number,
  address: string,
  workers: OfficeWorker[]
}