export interface GameEventDoc {
  eventId: string;
  userId: string;
  type: string;
  payload: any;
  timestamp: Date;
}
