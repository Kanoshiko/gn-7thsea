import { Skill } from './skill';
import { Nationality } from './nationality';

export class Character {
    public _id: { $oid: string; };
    public playerName: string;
    public name: string;
    public background: string;
    public nationality: Nationality;
    public physical: number;
    public will: number;
    public panache: number;
    public hasCombatSchool: boolean = false;
    public skills: Array<Skill> = [];

    public actionPoint(): number { 
        if (this.hasCombatSchool) {
            return 2 * this.physical + this.will;
        } else {
            return this.physical + 2 * this.will;
        }
    }

    addSkill(skill: Skill) {
        console.log(`skill add to ${skill.name}`);
        console.log(!this.skills.indexOf(skill));
        //if(!this.skills.indexOf(skill)) {
            this.skills.push(skill);
            console.log(`skill ${skill.name} added`);
        //}
        console.debug(`skills : ${this.skills}`);
    }

    removeSkill(skill: Skill) {
        const pos = this.skills.indexOf(skill);
        if(pos) {
            this.skills.slice(pos, 1);
        }
    }
}
