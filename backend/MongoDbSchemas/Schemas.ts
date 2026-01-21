export interface UserGameState {
  userId: string;

  xp: number;
  level: number;

  streak: {
    current: number;
    longest: number;
    lastSaveDate: string;
    state: "ACTIVE" | "GRACE" | "FROZEN" | "BROKEN";
    graceUntil?: string;
  };

  tokens: {
    streakFreeze: number;
  };

  badges: {
    badgeId: string;
    earnedAt: string;
  }[];

  createdAt: Date;
  updatedAt: Date;
}
db.user_game_state.createIndex({ userId: 1 }, { unique: true });
game_events
export interface GameEventDoc {
  eventId: string;
  userId: string;
  type: string;
  payload: any;
  timestamp: Date;
}
db.game_events.createIndex({ userId: 1, timestamp: -1 });
reward_history
export interface RewardHistory {
  userId: string;
  eventId: string;
  rewardType: string;
  value: number;
  probability: number;
  timestamp: Date;
}


db.reward_history.createIndex({ userId: 1 });
rules
export interface RuleDoc {
  ruleId: string;
  event: string;
  conditions: Record<string, any>;
  rewards: Record<string, any>;
  active: boolean;
}
