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
