export interface Rule {
    ruleId: string;
    event: string;
    conditions: {
        minAmount?: number;
        oncePerDay?: boolean;
    };
    rewards: {
        xp?: number;
        incrementStreak?: boolean;
    };
    active: boolean;
}