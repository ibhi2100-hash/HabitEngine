export interface GameEvent{
    eventId: string;
    type: "SAVE_MADE"|"STREAK_BROKEN"|"LEVEL_UP"|"CHALLENGE_COMPLETED";
    userId: string;
    payload: any;
    timestamp: Date
}