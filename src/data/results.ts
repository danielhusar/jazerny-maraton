export interface Runner {
  place: number;
  bib?: number;
  surname: string;
  name: string;
  gender?: "M" | "F";
  nationality?: string;
  born?: number;
  club?: string;
  splits: (string | undefined)[];
  time: string;
  // "Predpokladaná trať" – defaults to race code + gender, e.g. "42M".
  planned?: string;
}

export interface Group {
  label: string;
  runners: Runner[];
}

export interface Race {
  title: string;
  code: string;
  splitLabels: string[];
  // Value shown in the "polmaratón" column for races longer than a half marathon.
  halfColumn?: string;
  groups: Group[];
}

export interface ResultsEvent {
  year: number;
  header: string;
  subtitle?: string;
  layout: "page-per-race" | "single-table";
  referee: string;
  processedBy: string;
  weather: string;
}
