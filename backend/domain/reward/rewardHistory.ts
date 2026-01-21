export interface RewardHistory {
  userId: string;
  eventId: string;
  rewardType: string;
  value: number;
  probability: number;
  timestamp: Date;
}
