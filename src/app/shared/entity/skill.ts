import 'showdown/dist/showdown';

declare let showdown: any;

export class Skill {
    public _id: { $oid: string; };
    
    constructor (
        public name: string = '',
        public cost: number = 0,
        public description: string = ''
    ) { }

    get descriptionInHtml (): string {
        const converter = new showdown.Converter();
        console.log(converter.makeHtml(this.description));

        return converter.makeHtml(this.description);
    } 

}
