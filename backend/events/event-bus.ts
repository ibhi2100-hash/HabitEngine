import { GameEngine } from "../gamification/game-engine";
import { GameEvent } from "../Interface/GameEvent";
export class EventBus {
  async emit(event: GameEvent ) {
    await mongo
      .collection("game_events")
      .insertOne(event);

    await GameEngine.process(event);
  }
}
