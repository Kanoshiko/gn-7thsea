import {Skill} from './skill';
import {Advantage} from './advantage';
import {Nationality} from './nationality';

export class Character {
  public _id: {$oid: string;};

  //informations joueurs
  public playerName: string;
  public playerEmail: string;

  public budget: number = 100;
  public name: string;
  public background: string;
  public nationality: Nationality;

  //caractéristiques
  public physical: number;
  public will: number;
  public panache: number;

  public skills: Array<Skill> = [];
  public advantages: Array<Advantage> = [];
  public hasCombatSchool: boolean = false;

  actionPoint(): number {
    if (this.hasCombatSchool) {
      return 2 * this.physical + this.will;
    } else {
      return this.physical + 2 * this.will;
    }
  }

  addSkill(skill: Skill) {
    if (this.skills.indexOf(skill) == -1) {
      this.skills.push(skill);
      this.budget = Number(this.budget) - Number(skill.cost);
    }
  }

  removeSkill(skill: Skill) {
    this.skills = this.skills.filter(_skill => {
        if (_skill === skill) {
          this.budget = Number(this.budget) + Number(skill.cost);
          return false;
        }
        return true;
      }
    )
  }

  hasThisSkill(skill: Skill) {
    return this.skills.indexOf(skill) != -1;
  }

/*  addAdvantage(advantage: Advantage) {
    if (this.advantages.indexOf(advantage) == -1) {
      this.advantages.push(advantage);
      this.budget = Number(this.budget) - Number(advantage.cost);
    }
  }

  removeAdvantage(advantage: Advantage) {
    this.advantages = this.advantages.filter(_advantage => {
        if (_advantage === advantage) {
          this.budget = Number(this.budget) + Number(advantage.cost);
          return false;
        }
        return true;
      }
    )
  }

  hasThisAdvantage(advantage: Advantage) {
    return this.advantages.indexOf(advantage) != -1;
  }*/
}
