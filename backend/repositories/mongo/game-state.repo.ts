import { UserGameState } from "@/backend/Mongo_Schema/user_game_state";

export class GameStateRepository {
  constructor(private db) {}

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
