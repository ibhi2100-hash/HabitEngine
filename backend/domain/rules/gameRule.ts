export interface RuleDoc {
  ruleId: string;
  event: string;
  conditions: Record<string, any>;
  rewards: Record<string, any>;
  active: boolean;
}
