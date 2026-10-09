import type { Race, ResultsEvent, Runner } from "./results";

const r = (
  place: number,
  bib: number | undefined,
  surname: string,
  name: string,
  gender: "M" | "F",
  born: number | undefined,
  club: string | undefined,
  splits: (string | undefined)[],
  time: string
): Runner => ({ place, bib, surname, name, gender, born, club, splits, time });

export const event: ResultsEvent = {
  year: 2025,
  title: "Results of the 15th Jazerný marathon Košice",
  date: "16 August 2025",
  weather: "Very hot, 35 °C",
  referee: "Peter Buc",
  processedBy: "Anna Bucová",
};

const all = (runners: Runner[]) => [{ label: "Women + Men", runners }];

export const races: Race[] = [
  {
    title: "5 km",
    splitLabels: [],
    groups: all([
      r(1, 53, "MILY", "Juraj", "M", 1996, "Košice", [], "0:18:01"),
      r(2, 73, "PEKO", "Martin", "M", 1981, "Siplacke strelky Krásna", [], "0:24:55"),
      r(3, 74, "ZENOVITZOVÁ", "Simona", "F", 1991, "Siplacke strelky Krásna", [], "0:29:13"),
      r(4, 38, "KOVÁCS", "Konrád", "M", 1994, "Raise&Move", [], "0:32:20"),
      r(5, 42, "NARJASOVÁ", "Danka", "F", 1965, "Spartak Medzev", [], "0:32:28"),
      r(6, 75, "BENČKO", "Pavol", "M", 1989, "Siplacke strelky Krásna", [], "0:33:51"),
      r(7, 62, "ZUŠTINOVÁ", "Janka", "F", 1975, "BKO Vyšná Myšľa", [], "0:34:59"),
      r(8, 68, "PINČÁK", "Boris", "M", 2012, "Košice", [], "0:35:40"),
      r(9, 2, "VRANCOVÁ", "Radka", "F", 1984, "Šemša", [], "0:39:40"),
      r(10, 23, "SANISLOVÁ", "Judita", "F", 1979, "Cestice", [], "0:39:40"),
      r(11, 11, "PUZDER TORISKÁ", "Júlia", "F", 1985, "Šemša", [], "0:41:47"),
      r(12, 50, "KASSAY", "Vojtech", "M", 1972, "MARAS team", [], "1:12:52"),
      r(13, 51, "KASSAY", "Vojtech", "M", 1946, "MARAS team", [], "1:12:52"),
    ]),
  },
  {
    title: "10 km",
    splitLabels: ["5 km"],
    groups: all([
      r(1, 58, "BRŤKA", "Filip", "M", 1999, "Košice", ["0:19:31"], "0:41:12"),
      r(2, 54, "ČIGÁŠ", "Ján", "M", 1952, "Košice Nad Jazerom", ["0:25:41"], "0:51:44"),
      r(3, 63, "TATRAJ", "Róbert", "M", 1963, "UNLP Košice", ["0:26:14"], "0:52:30"),
      r(4, 7, "KOZÁK", "Štefan", "M", 1975, "Košice - Nad jazerom", ["0:25:25"], "0:53:30"),
      r(5, 31, "ŠTULLER", "Ján", "M", 1975, "Vyšná Myšľa", ["0:26:31"], "0:55:24"),
      r(6, 13, "ŠVEC", "Štefan", "M", 1949, "MARAS team", ["0:26:28"], "0:56:24"),
      r(7, 24, "ŠMAJDOVÁ", "Martina", "F", 1979, "Košice", ["0:29:43"], "0:56:36"),
      r(8, 33, "SOMOSHI", "Zuzana", "F", 1991, "Košice", ["0:28:05"], "0:56:49"),
      r(9, 4, "TÓTH", "Bibiana", "F", 1996, "Raise&Move Košice", ["0:27:18"], "0:58:03"),
      r(10, 65, "KIRAL", "Róbert", "M", 1983, "Kassamen Olympic Team Košice", ["0:27:18"], "0:58:03"),
      r(11, 79, "KURUCZ", "Juraj", "M", 1959, "Košice", ["0:29:31"], "0:58:04"),
      r(12, 55, "HAĽKOVA", "Jaroslava", "F", 1977, "Košice", ["0:28:23"], "0:59:30"),
      r(13, 10, "GARČÁR", "Ján", "M", 1952, "BK Steel Košice", ["0:30:58"], "1:03:14"),
      r(14, 41, "STANČÁK", "Marian", "M", 1957, "Spartak Medzev", ["0:33:33"], "1:06:02"),
      r(15, 22, "RADA", "Ľubomír", "M", 1972, "Košice", ["0:33:01"], "1:09:14"),
    ]),
  },
  {
    title: "15 km",
    splitLabels: ["5 km", "10 km"],
    groups: all([
      r(1, 77, "PÁLFI", "Štefan", "M", 1982, "Active Life Team Košice", ["0:20:32", "0:41:12"], "1:01:42"),
      r(2, 37, "VILK", "Radovan", "M", 1985, "BK Šaca", ["0:25:08", "0:46:58"], "1:08:55"),
      r(3, 14, "BUKOVIČ", "Norbert", "M", 1970, "NIKA WRC Rožňava", ["0:25:08", "0:50:59"], "1:20:37"),
      r(4, 34, "DEČO", "Richard", "M", 1988, "Sura Team Košice", ["0:27:33", "0:55:46"], "1:23:22"),
      r(5, 80, "KURUCZ", "Juraj", "M", 1984, "Košice", ["0:29:31", "0:58:05"], "1:26:24"),
      r(6, 28, "HNAT", "Martin", "M", 1982, "Syntax Košice", ["0:30:07", "1:00:05"], "1:32:02"),
      r(7, 45, "LUKÁČ", "Karol", "M", 1962, "Maratónsky klub Košice", ["0:27:39", "0:57:22"], "1:34:00"),
      r(8, 29, "MESÁROŠ", "Ján", "M", 1974, "Active Life Team Košice", ["0:31:08", "1:02:12"], "1:34:18"),
      r(9, 15, "BUKOVIČOVÁ", "Jolana", "F", 1972, "NIKA WRC Rožňava", ["0:30:45", "1:01:43"], "1:34:19"),
      r(10, 20, "MYDLÁR", "Śtefan", "M", 1950, "Beh za chudobných", ["0:31:08", "1:05:00"], "1:44:30"),
      r(11, 67, "POLÁK", "Peter", "M", 1948, "BELLE EXPORT IMPORT", ["0:38:32", "1:22:10"], "1:54:48"),
    ]),
  },
  {
    title: "20 km",
    splitLabels: ["5 km", "10 km", "15 km"],
    groups: all([
      r(1, 66, "VLČEK", "Marián", "M", 1968, "BK Spartak Medzev", ["0:26:03", "0:52:15", "1:18:32"], "1:47:19"),
      r(2, 44, "REPASKÝ", "Gabriel", "M", 1985, "Košice Krásna", ["0:27:21", "0:55:33", "1:23:55"], "1:51:29"),
      r(3, 56, "KUPEC", "Tomáš", "M", 1984, "Syntax Košice", ["0:26:28", "0:53:11", "1:21:26"], "1:52:17"),
      r(4, 57, "HAJNÍKOVÁ", "Eva", "F", 1990, "Syntax Košice", ["0:26:28", "0:53:11", "1:21:26"], "1:52:17"),
      r(5, 21, "TÓTH", "Tomáš", "M", 1991, "Raise&Move Košice", ["0:29:31", "1:01:05", "1:32:27"], "2:06:40"),
    ]),
  },
  {
    title: "Half marathon",
    splitLabels: ["5 km", "10 km", "15 km", "20 km"],
    groups: all([
      r(1, 32, "PÁLFI", "Dávid", "M", 1997, "Active Life Team Košice", ["0:20:32", "0:41:12", "1:01:42", "1:22:41"], "1:27:01"),
      r(2, 25, "MOCKOVČIAK", "Marek", "M", 1978, "MTC Vyšná Šebastová", ["0:24:33", "0:49:08", "1:13:30", "1:37:51"], "1:43:53"),
      r(3, 35, "DEMJANOVIC", "Vladimir", "M", 1974, "Košice", ["0:22:44", "0:58:03", "1:13:00", "1:40:12"], "1:46:21"),
      r(4, 39, "PARILÁK", "Martin", "M", 1980, "Klub bežcov Stropkov", ["0:28:12", "0:54:30", "1:19:16", "1:43:53"], "1:50:08"),
      r(5, 81, "HUDEC", "Vladimír", "M", 1975, "Košice", ["0:21:25", "0:42:58", "1:09:24", "1:36:40"], "1:54:36"),
      r(6, 76, "BARTKO", "Martin", "M", 1976, "Bajerov", ["0:25:25", "0:51:11", "1:19:00", "1:48:30"], "1:54:44"),
      r(7, 27, "ČEĽOVSKÝ", "Martin", "M", 1976, "MARAS team", ["0:25:25", "0:53:11", "1:23:21", "1:54:19"], "2:00:16"),
      r(8, 48, "ČURLEJOVÁ", "Eva", "F", 1981, "O5 BK Furča Košice", ["0:25:25", "0:53:04", "1:23:02", "1:53:59"], "2:00:30"),
      r(9, 17, "BOŽOVÁ", "Danica", "F", 1963, "Svit", ["0:28:38", "0:58:03", "1:30:08", "2:02:06"], "2:09:03"),
      r(10, 47, "SEMANOVÁ", "Zlatka", "F", 1958, "BKO Vyšná Myšľa", ["0:30:45", "1:01:43", "1:32:57", "2:04:28"], "2:11:39"),
      r(11, 18, "ŠOLTYS", "Milan", "M", 1972, "Batizovce", ["0:27:33", "0:55:52", "1:27:06", "2:08:53"], "2:16:48"),
      r(12, 26, "KARDOŠOVÁ", "Alexandra", "F", 1979, "BKO Vyšná Myšľa", ["0:31:08", "1:02:12", "1:35:39", "2:14:27"], "2:22:01"),
      r(13, 78, "POLÁK", "Drahumír", "M", 1972, "BELLE EXPORT IMPORT", ["0:31:08", "1:02:24", "1:37:12", "2:14:17"], "2:26:30"),
      r(14, 1, "PRIBIČKO", "Peter", "M", 1947, "ŽSR Košice", ["0:35:29", "1:13:12", "1:52:56", "2:39:59"], "2:51:17"),
      r(15, 209, "MACEJÁKOVÁ", "Soňa", "F", 1956, "Priatelia behu ležérneho", ["0:40:55", "1:31:14", "2:27:10", "3:25:52"], "3:36:29"),
    ]),
  },
  {
    title: "25 km",
    splitLabels: ["5 km", "10 km", "15 km", "20 km"],
    groups: all([
      r(1, 30, "GALDUN", "Ladislav", "M", 1990, "Košická Polianka", ["0:28:38", "0:57:13", "1:26:04", "1:54:55"], "2:25:34"),
      r(2, 9, "HRIVNAK", "Vladimir", "M", 1986, "CANPACK Slovakia", ["0:29:31", "0:58:54", "1:28:56", "1:59:35"], "2:34:42"),
      r(3, 3, "TELEPOVSKÝ", "Erik", "M", 1988, "Malá Ida", ["0:30:37", "1:00:39", "1:30:51", "2:06:19"], "2:44:47"),
      r(4, 71, "JACKOVÁ", "Marcela", "F", 1970, "AC Michalovce", ["0:32:38", "1:05:22", "1:39:10", "2:12:22"], "2:45:57"),
    ]),
  },
  {
    title: "30 km",
    splitLabels: ["5 km", "10 km", "15 km", "20 km", "25 km"],
    groups: all([
      r(1, 70, "BLICHÁR", "Mare", "M", 1978, "MTC Vyšná Šebastová", ["0:25:25", "0:51:25", "1:17:49", "1:44:07", "2:11:23"], "2:38:08"),
      r(2, 40, "MANDÚCH", "Ján", "M", 1977, "MTC Vyšná Šebastová", ["0:26:57", "0:53:11", "1:19:45", "1:45:56", "2:12:22"], "2:41:02"),
      r(3, 64, "MAKARA", "Lukáš", "M", 1984, "Kassamen Olympic Team", ["0:26:28", "0:53:11", "1:21:15", "1:49:18", "2:16:13"], "2:43:36"),
      r(4, 36, "KLEMA", "Igor", "M", 1986, "Maratónsky klub Košice", ["0:26:28", "0:53:11", "1:21:15", "1:49:18", "2:16:13"], "2:43:44"),
      r(5, 19, "KONIAR", "Jozef", "M", 1963, "Dôchodca Košice - Nad Jazerom", ["0:28:23", "0:56:36", "1:24:20", "1:51:42", "2:18:34"], "2:46:18"),
      r(6, 61, "FRICKÝ", "Vlado", "M", 1981, "BarRan Team", ["0:26:57", "0:55:04", "1:23:10", "1:51:26", "2:22:58"], "2:54:49"),
      r(7, 16, "KOPČÁKOVÁ SELIGOVÁ", "Beáta", "F", 1980, "Metropol Košice", ["0:27:33", "0:55:52", "1:24:34", "1:55:30", "2:27:58"], "3:01:58"),
      r(8, 46, "HRIC", "Miroslav", "M", 1977, "O5 BK Furča - Košice", ["0:28:05", "0:57:22", "1:27:44", "1:59:44", "2:33:14"], "3:10:33"),
      r(9, 59, "PÁSZTOR", "Roman", "M", 1972, "BK Staré kone V.Šariš", ["0:29:31", "1:01:05", "1:32:16", "2:05:23", "2:40:33"], "3:13:18"),
    ]),
  },
  {
    title: "35 km",
    splitLabels: ["5 km", "10 km", "15 km", "20 km", "25 km", "30 km"],
    groups: [
      {
        label: "Men",
        runners: [
          r(1, 12, "TREĽO", "Michal", "M", 1985, "Trebišov", ["0:23:18", "0:47:28", "1:12:40", "1:39:35", "2:08:00", "2:39:36"], "3:20:48"),
        ],
      },
    ],
  },
  {
    title: "Marathon (42 195 m)",
    splitLabels: ["5 km", "10 km", "15 km", "20 km", "25 km", "30 km", "35 km", "40 km"],
    groups: [
      {
        label: "Women",
        runners: [
          r(1, 69, "BUTORACOVÁ", "Ivana", "F", 1980, "MTC Vyšná Šebastová", ["0:24:33", "0:49:08", "1:13:30", "1:37:51", "2:02:20", "2:27:20", "2:52:40", "3:17:35"], "3:27:59"),
        ],
      },
      {
        label: "Men",
        runners: [
          // Missing from the official PDF; added afterwards.
          r(1, undefined, "BARNA", "Michal", "M", undefined, undefined, [], "3:14:00"),
          r(2, 49, "ČURLEJ", "Jozef", "M", 1981, "O5 BK Furča Košice", ["0:22:22", "0:45:07", "1:08:17", "1:31:43", "1:55:53", "2:20:55", "2:47:11", "3:14:40"], "3:26:12"),
          r(3, 52, "ALBRECHT", "Slavomír", "M", 1975, "BK Steel Košice", ["0:25:45", "0:52:15", "1:18:32", "1:44:46", "2:11:23", "2:38:26", "3:05:46", "3:34:02"], "3:46:30"),
          r(4, 72, "JACKO", "František", "M", 1964, "AC Michalovce", ["0:26:57", "0:53:11", "1:19:45", "1:45:56", "2:12:54", "2:41:12", "3:09:20", "3:37:16"], "3:49:29"),
          r(5, 43, "VAĽA", "Vladimir", "M", 1970, "Autolux Toyota Košice", ["0:28:23", "0:56:36", "1:24:20", "1:51:42", "2:18:34", "2:46:12", "3:14:52", "3:43:00"], "3:54:40"),
          r(6, 8, "JENDŽELOVSKÝ", "Peter", "M", 1977, "Canpack Slovakia", ["0:29:31", "0:58:54", "1:28:56", "1:59:35", "2:32:04", "3:05:22", "3:39:33", "4:15:52"], "4:33:05"),
          r(7, 60, "FIFIK", "Robert", "M", 1973, "Atletika Jesenice", ["0:29:31", "1:01:05", "1:32:16", "2:05:23", "2:40:33", "3:16:46", "3:55:22", "4:33:04"], "4:47:43"),
          r(8, 5, "BALOGH", "Vladimír", "M", 1963, "TJ Obal Servis Košice", ["0:27:50", "0:55:27", "1:23:15", "1:51:20", "2:22:09", "2:55:43", "3:36:03", "4:31:35"], "5:00:42"),
          r(9, 6, "TELEPOVSKÝ", "Miroslav", "M", 1962, "eMTe Trebišov", ["0:28:12", "0:58:03", "1:30:43", "2:05:23", "2:48:36", "3:31:38", "4:15:03", "4:59:24"], "5:14:40"),
        ],
      },
    ],
  },
];
