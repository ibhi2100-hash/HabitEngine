import { UserGameState } from "@/backend/domain/user/user.type";
export class GameStateRepo{
 constructor(private db : any) {}

  async get(userId: string) {
    return this.db.collection("user_game_state").findOne({ userId });
  }

  async save(state: UserGameState) {
    await this.db.collection("user_game_state").updateOne(
      { userId: state.userId },
      { $set: state },
      { upsert: true }
    );
  }

}

export class RuleRepo {
    async getActiveRules(eventType: any){

    }
}

export class RewardRepo {
    async log(event: any, type: any, value: any, probability: any ) {

    }
}
