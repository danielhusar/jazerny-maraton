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
}

export interface Group {
  label: string;
  runners: Runner[];
}

export interface Race {
  title: string;
  splitLabels: string[];
  groups: Group[];
}

export interface ResultsEvent {
  year: number;
  title: string;
  date: string;
  weather: string;
  referee: string;
  processedBy: string;
}
