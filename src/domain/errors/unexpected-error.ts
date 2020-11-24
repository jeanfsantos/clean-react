export class UnexpectedError extends Error {
  constructor () {
    super('Unexpected')
    this.name = 'UnexpectedError'
  }
}
