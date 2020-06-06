export interface TimeEntry_NEW {
  description: string
  tags: string[]
  duration: number
  start: string
  pid: number
  created_with: string
}

export interface TimeEntry_NEW_RES {
	id: number;
	pid: number;
	wid: number;
	billable: boolean;
	start: string;
	duration: number;
	description: string;
	tags: string[];
}

export interface TimeEntry_START {
	description: string;
	tags: string[];
	pid: number;
	created_with: string;
}

export interface TimeEntry_START_RES {
	id: number;
	pid: number;
	wid: number;
	billable: boolean;
	start: string;
	duration: number;
	description: string;
	tags: string[];
}