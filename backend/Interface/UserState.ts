export interface UserState {
    _id : string;
    xp  : number;
    level: number;
    streak: {
        current: number;
        longest: number;
        lastSaveDate: Date;
        state : string;
        graceUntil: Date;

        freezeUsedAt: null;0
    };
    tokens: {
        streakFreeze: number;

    };
    badge: [
        {
            badge: string;
            earnedAt: Date;
        }
    ];
    settings: {
        gamificationEnabled: boolean;
    }
}