export interface TimeEntry_POST {
  description: string
  tags: string[]
  duration: number
  start: string
  pid: number
  created_with: string
}

export interface TimeEntry_POST_RES {
	id: number;
	pid: number;
	wid: number;
	billable: boolean;
	start: string;
	duration: number;
	description: string;
	tags: string[];
}