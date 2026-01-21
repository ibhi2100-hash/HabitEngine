import { GameEvent } from "../Interface/GameEvent";
import { RuleRepo, GameStateRepo, RewardRepo } from "../repositories/gamificationRepo/gameRepo";

export class GameEngine {
    constructor(
        private RuleRepo,
        private GameStateRepo,
        private RewardRepo
    ) {}

    async process(event: GameEvent) {
        const rules = await this.RuleRepo.getActiveRules(event.type);

        const gameState = await this.GameStateRepo.get(event.userId);

        for (const rule in rules) {
            const passed = await this.evaluateRule(rule, event, gameState);
            if(!passed) continue;
            
            await this.applyRewards(rule,event,gameState)
        }

        await this.GameStateRepo.save(gameState)
    }
    
}