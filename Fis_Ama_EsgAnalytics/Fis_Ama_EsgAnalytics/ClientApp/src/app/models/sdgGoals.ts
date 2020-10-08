import { esgCategory } from "./esgcategory";

export class sdgGoal {
  sdgGoalId: number;
  sdgGoalName: string;
  esg_Category: esgCategory;
}

export class sdgGoalDescription {
  sdgGoalDescriptionId: number;
  sdgGoalDescriptionName: string;
  sdg_Goal: sdgGoal;
}
