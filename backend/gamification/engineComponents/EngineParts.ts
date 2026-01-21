import { Rule } from "@/backend/Interface/RuleModel";
import { GameEvent } from "@/backend/Interface/GameEvent";
import { UserState } from "@/backend/Interface/UserState";
import { RewardRepo,  } from "@/backend/repositories/gamificationRepo/gameRepo";




const RewardsOdds = {
    NORMAL_XP   : 0.75,
    BONUS_XP    : 0.18,
    SUPRISE_XP  : 0.07     
}
//Probability Roller
function roll(probability: number) :
    boolean {
        return Math.random() < probability
    }
// Streak Update machine
function updateStreak(state: UserState) {
    const today = new Date().toISOString().slice(0, 10);
    console.log(today)
    
    if(state.streak.lastSaveDate === today) return;

    state.streak.current += 1;
    state.streak.longest = Math.max(state.streak.longest, state.streak.current)

    state.streak.lastSaveDate = today
}

// Level Calculator
function calculateLevel(xp: number): number {
    return Math.floor(Math.sqrt(xp/100))
}
//Rule Evaluation
export async function evaluateRule(rule: Rule, event: GameEvent, state: UserState) {
    const { conditions } = rule;

    if(conditions.minAmount) {
        if(event.payload.amount < conditions.minAmount) {
            return false;
        }
    }
    if(conditions.oncePerDay) {
        const last = state.streak.lastSaveDate;
        if(last && isSameDay(new Date(last), new Date())) {
            return false;
        }

        return true
    }


}

//Applying Rewards
export async function applyRewards(rule: Rule, event: GameEvent, state: UserState) {
    //xp 
    if(rule.rewards.xp){
        let xp = rule.rewards.xp

        if(roll(RewardsOdds.BONUS_XP)) {
            xp *= 2
            await  RewardRepo.log(event, "BONUS_XP", xp, RewardsOdds.BONUS_XP)
        }
        
        state.xp += xp;
    }

    //streak
    if(rule.rewards.incrementStreak){
        updateStreak(state)
    }

    //Level Up Check
    const newLevel = calculateLevel(state.xp)
    if(newLevel > state.level){
        state.level = newLevel

        // Emit LEVEL_UP event
    }
}