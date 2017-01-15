export class Advantage {
  public _id: {$oid: string;};

  constructor(public name: string = '',
              public cost: number = 0,
              public description: string = '') {
  }
}
