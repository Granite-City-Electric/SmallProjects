// // http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/5 --- ESPN API Endpoint for Teams (adjust ID)

  // CALCULATIONS NEEDED
  // 1. COMPARE CURRENT RECORD TO O/U - ARE PLAYERS PICKS RIGHT, WRONG OR TBD - DONE
  // 2. CALCULATE HOW MANY CORRECT PICKS PERSON ALREADY HAS - DONE
  // 3. COMPARE PROJ. WINS TO O/U - ARE PLAYERS PICKS RIGHT OR WRONG - DONE
  // 4. CALCULATE PLAYER FINAL PROJ RECORD - DONE

  const contestants = [{'name': 'Max Carty', 'picks': [{'team': 'Packers', 'pick': 'over'}, {'team': 'Raiders', 'pick': 'over'}, {'team': 'Titans', 'pick': 'over'}, {'team': 'Commanders', 'pick': 'over'}, {'team': 'Eagles', 'pick': 'under'}, {'team': 'Bengals', 'pick': 'under'}, {'team': 'Broncos', 'pick': 'under'}], 'tiebreaker': [{'team': 'Jets', 'pick': 'under'}, {'team': 'Lions', 'pick': 'under'}, {'team': 'Steelers', 'pick': 'over'}]}, {'name': 'Willy Reich', 'picks': [{'team': 'Cowboys', 'pick': 'over'}, {'team': 'Bills', 'pick': 'over'}, {'team': 'Jaguars', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'over'}, {'team': 'Cardinals', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'under'}, {'team': 'Texans', 'pick': 'under'}], 'tiebreaker': [{'team': '49ers', 'pick': 'over'}, {'team': 'Colts', 'pick': 'under'}, {'team': 'Raiders', 'pick': 'under'}]}, {'name': 'Kris Chin', 'picks': [{'team': '49ers', 'pick': 'over'}, {'team': 'Saints', 'pick': 'over'}, {'team': 'Jaguars', 'pick': 'over'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Giants', 'pick': 'over'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Browns', 'pick': 'under'}], 'tiebreaker': [{'team': 'Panthers', 'pick': 'under'}, {'team': 'Commanders', 'pick': 'under'}, {'team': 'Patriots', 'pick': 'over'}]}, {'name': 'Benny Bees', 'picks': [{'team': 'Broncos', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'over'}, {'team': 'Jaguars', 'pick': 'over'}, {'team': 'Panthers', 'pick': 'under'}, {'team': 'Jets', 'pick': 'under'}, {'team': 'Chargers', 'pick': 'under'}, {'team': 'Rams', 'pick': 'under'}], 'tiebreaker': [{'team': 'Browns', 'pick': 'over'}, {'team': '49ers', 'pick': 'over'}, {'team': 'Eagles', 'pick': 'over'}]}, {'name': 'Mike Bisig', 'picks': [{'team': 'Giants', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'over'}, {'team': 'Commanders', 'pick': 'over'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Bears', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'under'}, {'team': 'Broncos', 'pick': 'under'}], 'tiebreaker': [{'team': 'Jaguars', 'pick': 'over'}, {'team': 'Dolphins', 'pick': 'over'}, {'team': 'Saints', 'pick': 'under'}]}];

  const contestantsThisYear = [{'name': 'Zach Rosenblum', 'picks': [{'team': '49ers', 'pick': 'over'}, {'team': 'Chiefs', 'pick': 'over'}, {'team': 'Ravens', 'pick': 'over'}, {'team': 'Lions', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'under'}, {'team': 'Dolphins', 'pick': 'over'}, {'team': 'Jets', 'pick': 'under'}, {'team': 'Falcons', 'pick': 'under'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Patriots', 'pick': 'under'}], 'tiebreaker': [{'team': 'Broncos', 'pick': 'under'}, {'team': 'Eagles', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'under'}]}, {'name': 'Benny Bridger', 'picks': [{'team': 'Ravens', 'pick': 'over'}, {'team': 'Lions', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'over'}, {'team': 'Cowboys', 'pick': 'under'}, {'team': 'Jets', 'pick': 'under'}, {'team': 'Chargers', 'pick': 'over'}, {'team': 'Cardinals', 'pick': 'over'}, {'team': 'Saints', 'pick': 'over'}, {'team': 'Commanders', 'pick': 'over'}, {'team': 'Broncos', 'pick': 'over'}], 'tiebreaker': [{'team': 'Patriots', 'pick': 'under'}, {'team': 'Browns', 'pick': 'under'}, {'team': 'Eagles', 'pick': 'under'}]},{'name': 'Jarrett Chan', 'picks': [{'team': '49ers', 'pick': 'under'}, {'team': 'Chiefs', 'pick': 'over'}, {'team': 'Ravens', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'under'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Bears', 'pick': 'over'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'under'}, {'team': 'Raiders', 'pick': 'under'}], 'tiebreaker': [{'team': 'Jaguars', 'pick': 'over'}, {'team': 'Commanders', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'over'}]},{'name': 'Matt Lally', 'picks': [{'team': 'Lions', 'pick': 'over'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Bears', 'pick': 'under'}, {'team': 'Colts', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'over'}, {'team': 'Buccaneers', 'pick': 'over'}, {'team': 'Seahawks', 'pick': 'over'}, {'team': 'Raiders', 'pick': 'over'}, {'team': 'Broncos', 'pick': 'over'}], 'tiebreaker': [{'team': 'Bengals', 'pick': 'over'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Browns', 'pick': 'under'}]},{'name': 'Michael Nelson', 'picks': [{'team': '49ers', 'pick': 'under'}, {'team': 'Ravens', 'pick': 'under'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Packers', 'pick': 'over'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'over'}, {'team': 'Raiders', 'pick': 'under'}, {'team': 'Titans', 'pick': 'over'}, {'team': 'Broncos', 'pick': 'over'}], 'tiebreaker': [{'team': 'Vikings', 'pick': 'under'}, {'team': 'Cardinals', 'pick': 'under'}, {'team': 'Bears', 'pick': 'under'}]},{'name': 'Ian Solomon', 'picks': [{'team': 'Chiefs', 'pick': 'over'}, {'team': 'Eagles', 'pick': 'over'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Colts', 'pick': 'under'}, {'team': 'Chargers', 'pick': 'under'}, {'team': 'Saints', 'pick': 'under'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Raiders', 'pick': 'under'}, {'team': 'Broncos', 'pick': 'under'}], 'tiebreaker': [{'team': '49ers', 'pick': 'under'}, {'team': 'Patriots', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'over'}]},{'name': 'Jake Borden', 'picks': [{'team': 'Ravens', 'pick': 'over'}, {'team': 'Lions', 'pick': 'over'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Browns', 'pick': 'under'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'over'}, {'team': 'Seahawks', 'pick': 'over'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'under'}], 'tiebreaker': [{'team': 'Broncos', 'pick': 'under'}, {'team': 'Cardinals', 'pick': 'over'}, {'team': 'Jaguars', 'pick': 'under'}]},{'name': 'George Marshalek', 'picks': [{'team': '49ers', 'pick': 'under'}, {'team': 'Eagles', 'pick': 'over'}, {'team': 'Bills', 'pick': 'under'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Bears', 'pick': 'over'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Giants', 'pick': 'under'}], 'tiebreaker': [{'team': 'Seahawks', 'pick': 'over'}, {'team': 'Cardinals', 'pick': 'under'}, {'team': 'Falcons', 'pick': 'over'}]},  {'name': 'Nicholas Centanni', 'picks': [{'team': 'Chiefs', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'over'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Packers', 'pick': 'over'}, {'team': 'Colts', 'pick': 'under'}, {'team': 'Steelers', 'pick': 'under'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Titans', 'pick': 'under'}, {'team': 'Patriots', 'pick': 'under'}], 'tiebreaker': [{'team': 'Commanders', 'pick': 'over'}, {'team': 'Eagles', 'pick': 'over'}, {'team': 'Cowboys', 'pick': 'under'}]},  {'name': 'Eric Mandell', 'picks': [{'team': 'Ravens', 'pick': 'over'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Chargers', 'pick': 'over'}, {'team': 'Cardinals', 'pick': 'under'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Titans', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'under'}], 'tiebreaker': [{'team': 'Steelers', 'pick': 'under'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Lions', 'pick': 'over'}]},{'name': 'William Reich', 'picks': [{'team': 'Eagles', 'pick': 'over'}, {'team': 'Lions', 'pick': 'over'}, {'team': 'Dolphins', 'pick': 'over'}, {'team': 'Colts', 'pick': 'under'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'under'}, {'team': 'Seahawks', 'pick': 'over'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Broncos', 'pick': 'over'}], 'tiebreaker': [{'team': 'Bears', 'pick': 'over'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'over'}]},  {'name': 'Brad Sowsy', 'picks': [{'team': '49ers', 'pick': 'under'}, {'team': 'Eagles', 'pick': 'over'}, {'team': 'Bills', 'pick': 'under'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Texans', 'pick': 'under'}, {'team': 'Packers', 'pick': 'over'}, {'team': 'Browns', 'pick': 'over'}, {'team': 'Cardinals', 'pick': 'over'}, {'team': 'Panthers', 'pick': 'over'}, {'team': 'Broncos', 'pick': 'over'}], 'tiebreaker': [{'team': 'Giants', 'pick': 'under'}, {'team': 'Chargers', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'over'}]},{'name': 'Tim Lui', 'picks': [{'team': 'Lions', 'pick': 'over'}, {'team': 'Bills', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'under'}, {'team': 'Dolphins', 'pick': 'over'}, {'team': 'Chargers', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'under'}, {'team': 'Saints', 'pick': 'under'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'under'}, {'team': 'Patriots', 'pick': 'under'}], 'tiebreaker': [{'team': 'Broncos', 'pick': 'under'}, {'team': 'Jaguars', 'pick': 'over'}, {'team': 'Giants', 'pick': 'under'}]},{'name': 'Mark Colvin', 'picks': [{'team': '49ers', 'pick': 'over'}, {'team': 'Chiefs', 'pick': 'over'}, {'team': 'Ravens', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'under'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Jets', 'pick': 'under'}, {'team': 'Browns', 'pick': 'over'}, {'team': 'Buccaneers', 'pick': 'over'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Commanders', 'pick': 'under'}], 'tiebreaker': [{'team': 'Chargers', 'pick': 'under'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Jaguars', 'pick': 'over'}]}, {'name': 'Kris Chin', 'picks': [{'team': 'Chiefs', 'pick': 'over'}, {'team': 'Eagles', 'pick': 'over'}, {'team': 'Bills', 'pick': 'under'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Dolphins', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Chargers', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'under'}, {'team': 'Broncos', 'pick': 'over'}, {'team': 'Patriots', 'pick': 'over'}], 'tiebreaker': [{'team': '49ers', 'pick': 'over'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Steelers', 'pick': 'under'}]},  {'name': 'Mike Bisig', 'picks': [{'team': '49ers', 'pick': 'over'}, {'team': 'Chiefs', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'under'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Dolphins', 'pick': 'under'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'under'}, {'team': 'Cardinals', 'pick': 'over'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Commanders', 'pick': 'over'}], 'tiebreaker': [{'team': 'Falcons', 'pick': 'over'}, {'team': 'Broncos', 'pick': 'over'}, {'team': 'Saints', 'pick': 'under'}]},  {'name': 'Killa Cam', 'picks': [{'team': '49ers', 'pick': 'over'}, {'team': 'Chiefs', 'pick': 'under'}, {'team': 'Eagles', 'pick': 'under'}, {'team': 'Ravens', 'pick': 'over'}, {'team': 'Lions', 'pick': 'over'}, {'team': 'Bills', 'pick': 'over'}, {'team': 'Bengals', 'pick': 'over'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Raiders', 'pick': 'under'}], 'tiebreaker': [{'team': 'Dolphins', 'pick': 'over'}, {'team': 'Patriots', 'pick': 'under'}, {'team': 'Giants', 'pick': 'under'}]},  {'name': 'Callahan Carty', 'picks': [{'team': 'Eagles', 'pick': 'over'}, {'team': 'Lions', 'pick': 'over'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Packers', 'pick': 'over'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Cardinals', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'over'}, {'team': 'Raiders', 'pick': 'under'}, {'team': 'Titans', 'pick': 'under'}, {'team': 'Panthers', 'pick': 'under'}], 'tiebreaker': [{'team': 'Giants', 'pick': 'under'}, {'team': 'Chargers', 'pick': 'over'}, {'team': 'Browns', 'pick': 'over'}]},  {'name': 'Danny Tay', 'picks': [{'team': 'Chiefs', 'pick': 'over'}, {'team': 'Eagles', 'pick': 'over'}, {'team': 'Ravens', 'pick': 'over'}, {'team': 'Lions', 'pick': 'under'}, {'team': 'Bengals', 'pick': 'under'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Browns', 'pick': 'over'}, {'team': 'Giants', 'pick': 'over'}, {'team': 'Commanders', 'pick': 'under'}], 'tiebreaker': [{'team': 'Bills', 'pick': 'over'}, {'team': 'Cowboys', 'pick': 'under'}, {'team': 'Bears', 'pick': 'under'}]},   {'name': 'Max Carty', 'picks': [{'team': 'Ravens', 'pick': 'over'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Bears', 'pick': 'over'}, {'team': 'Rams', 'pick': 'over'}, {'team': 'Steelers', 'pick': 'under'}, {'team': 'Cardinals', 'pick': 'under'}, {'team': 'Buccaneers', 'pick': 'over'}, {'team': 'Saints', 'pick': 'over'}, {'team': 'Vikings', 'pick': 'under'}, {'team': 'Broncos', 'pick': 'over'}], 'tiebreaker': [{'team': 'Raiders', 'pick': 'over'}, {'team': 'Packers', 'pick': 'over'}, {'team': 'Jaguars', 'pick': 'under'}]},  {'name': 'Eugene Montague', 'picks': [{'team': 'Chiefs', 'pick': 'under'}, {'team': 'Bills', 'pick': 'under'}, {'team': 'Cowboys', 'pick': 'under'}, {'team': 'Jets', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Texans', 'pick': 'over'}, {'team': 'Buccaneers', 'pick': 'over'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Raiders', 'pick': 'over'}, {'team': 'Commanders', 'pick': 'under'}], 'tiebreaker': [{'team': 'Lions', 'pick': 'under'}, {'team': 'Saints', 'pick': 'under'}, {'team': 'Packers', 'pick': 'under'}]},{'name': 'Chris Waisnor', 'picks': [{'team': '49ers', 'pick': 'under'}, {'team': 'Lions', 'pick': 'over'}, {'team': 'Cowboys', 'pick': 'over'}, {'team': 'Falcons', 'pick': 'over'}, {'team': 'Saints', 'pick': 'under'}, {'team': 'Giants', 'pick': 'under'}, {'team': 'Commanders', 'pick': 'over'}, {'team': 'Panthers', 'pick': 'over'}, {'team': 'Broncos', 'pick': 'over'}, {'team': 'Patriots', 'pick': 'under'}], 'tiebreaker': [{'team': 'Dolphins', 'pick': 'under'}, {'team': 'Colts', 'pick': 'under'}, {'team': 'Chargers', 'pick': 'over'}]}]

  

  const mockTeamList = [{id: 1, name: 'Falcons', record: '0-0', projectedWins: 9.55, overUnder: 9.5}, {id: 2, name: 'Bills', record: '0-0', projectedWins: 10.038, overUnder: 10.5}, {id:  3, name:  'Bears', record: '0-0', projectedWins: 8.55, overUnder: 8.5}, {id: 4, name:  'Bengals', record: '0-0', projectedWins: 10.327, overUnder: 10.5}, {id: 5, name:  'Browns', record: '0-0', projectedWins: 8.233, overUnder: 8.5}, {id: 6, name:  'Cowboys', record: '0-0', projectedWins: 10.322, overUnder: 10.5}, {id: 7, name:  'Broncos', record: '0-0', projectedWins: 5.766, overUnder: 5.5}, {id: 8, name:  'Lions', record: '0-0', projectedWins: 10.571, overUnder: 10.5}, {id: 9, name:  'Packers', record: '0-0', projectedWins: 9.696, overUnder: 9.5}, {id: 10, name:  'Titans', record: '0-0', projectedWins: 6.392, overUnder: 6.5}, {id: 11, name:  'Colts', record: '0-0', projectedWins: 8.24, overUnder: 8.5}, {id: 12, name:  'Chiefs', record: '0-0', projectedWins: 11.06, overUnder: 11.5}, {id: 13, name:  'Raiders', record: '0-0', projectedWins: 7.086, overUnder: 6.5}, {id: 14, name:  'Rams', record: '0-0', projectedWins: 8.786, overUnder: 8.5}, {id: 15, name:  'Dolphins', record: '0-0', projectedWins: 9.532, overUnder: 9.5}, {id: 16, name:  'Vikings', record: '0-0', projectedWins: 6.775, overUnder: 6.5}, {id: 17, name:  'Patriots', record: '0-0', projectedWins: 4.868, overUnder: 5.5}, {id: 18, name:  'Saints', record: '0-0', projectedWins: 7.662, overUnder: 7.5}, {id: 19, name:  'Giants', record: '0-0', projectedWins: 6.682, overUnder: 6.5}, {id: 20 , name:  'Jets', record: '0-0', projectedWins: 9.218, overUnder: 9.5}, {id: 21, name:  'Eagles', record: '0-0', projectedWins: 10.49, overUnder: 10.5}, {id: 22, name:  'Cardinals', record: '0-0', projectedWins: 7.177, overUnder: 6.5}, {id: 23, name:  'Steelers', record: '0-0', projectedWins: 7.937, overUnder: 7.5}, {id: 24, name:  'Chargers', record: '0-0', projectedWins: 8.838, overUnder: 8.5}, {id: 25, name:  '49ers', record: '0-0', projectedWins: 11.003, overUnder: 11.5}, {id: 26, name:  'Seahawks', record: '0-0', projectedWins: 7.868, overUnder: 7.5}, {id: 27, name:  'Buccaneers', record: '0-0', projectedWins: 7.862, overUnder: 7.5}, {id: 28, name:  'Commanders', record: '0-0', projectedWins: 6.697, overUnder: 6.5}, {id: 29, name:  'Panthers', record: '0-0', projectedWins: 5.363, overUnder: 4.5}, {id: 30, name:  'Jaguars', record: '0-0', projectedWins: 8.272, overUnder: 8.5}, {id: 33, name:  'Ravens', record: '0-0', projectedWins: 10.643, overUnder: 11.5}, {id: 34, name:  'Texans', record: '0-0', projectedWins: 9.588, overUnder: 8.5}];

// const teamList = [{'id':  1 , 'name':  'Falcons'}, {'id':  2 , 'name':  'Bills'}, {'id':  3 , 'name':  'Bears'}, {'id':  4 , 'name':  'Bengals'}, {'id':  5 , 'name':  'Browns'}, {'id':  6 , 'name':  'Cowboys'}, {'id':  7 , 'name':  'Broncos'}, {'id':  8 , 'name':  'Lions'}, {'id':  9 , 'name':  'Packers'}, {'id':  10 , 'name':  'Titans'}, {'id':  11 , 'name':  'Colts'}, {'id':  12 , 'name':  'Chiefs'}, {'id':  13 , 'name':  'Raiders'}, {'id':  14 , 'name':  'Rams'}, {'id':  15 , 'name':  'Dolphins'}, {'id':  16 , 'name':  'Vikings'}, {'id':  17 , 'name':  'Patriots'}, {'id':  18 , 'name':  'Saints'}, {'id':  19 , 'name':  'Giants'}, {'id':  20 , 'name':  'Jets'}, {'id':  21 , 'name':  'Eagles'}, {'id':  22 , 'name':  'Cardinals'}, {'id':  23 , 'name':  'Steelers'}, {'id':  24 , 'name':  'Chargers'}, {'id':  25 , 'name':  '49ers'}, {'id':  26 , 'name':  'Seahawks'}, {'id':  27 , 'name':  'Buccaneers'}, {'id':  28 , 'name':  'Commanders'}, {'id':  29 , 'name':  'Panthers'}, {'id':  30 , 'name':  'Jaguars'}, {'id':  33 , 'name':  'Ravens'}, {'id':  34 , 'name':  'Texans'}]

// const getTeamData = async (id) => {
//     const res1 = await fetch(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/types/2/teams/${id}/record`);
//     const record = await res1.json();
//     const res2 = await fetch(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/${id}/projection`);
//     const projection = await res2.json();
//     addTeamRecord(id, record.items[0].summary, projection.projectedWins);
// }

// function addTeamRecord(id, rec, proj) {
//   const idx = id <= 32 ? id - 1 : id - 3;
//   teamList[idx].record = rec;
//   teamList[idx].projectedWins = proj;
//   console.log(teamList[idx]);
// }

// teamList.forEach(team => {
//   getTeamData(team.id);
// })

function returnTeamData(team) {
  const teamInf = mockTeamList.find(team);
  console.log(teamInf);
}

const userStandings = [];

function calcRecord(user) {
  const userPicks = user.picks;
  let wins = 0;
  let losses = 0;
  let locks = 0;

  userPicks.forEach(obj => {
    const teamName = obj.team;
    const ou = obj.pick;
    const teamInfo = mockTeamList.find(team => team.name === teamName);
    const res1 = findLocks(teamInfo, ou);
    if(res1){locks++};
    const res2 = comparePicks(teamInfo, ou);
    res2 ? wins++ : losses++;
  })

  const userTieBreaks = user.tiebreaker;
  let tiebreakWins = 0;
  let tiebreakLosses = 0;

  userTieBreaks.forEach(obj => {
    const teamName = obj.team;
    const ou = obj.pick;
    const teamInfo = mockTeamList.find(team => team.name === teamName);
    const result = comparePicks(teamInfo, ou);
    result ? tiebreakWins++ : tiebreakLosses++;
  })

  const userRecord = {entryName: user.name, locks: locks, wins: wins, losses: losses, tbreakWins: tiebreakWins, tbreakLosses: tiebreakLosses};
  userStandings.push(userRecord);
}

function comparePicks(teamObj, ouPick) {
  if(ouPick === 'over' && teamObj.projectedWins > teamObj.overUnder || ouPick === 'under' && teamObj.projectedWins < teamObj.overUnder) {
    return true
  } else {
    return false
  }
};

function findLocks(teamObj, ouPick) {
  const recordArray = teamObj.record.split('-');
  const currentWins = parseInt(recordArray[0]);
  const currentLosses = parseInt(recordArray[1]);
  const gamesLeft = 17 - currentWins - currentLosses;
  if(ouPick === 'over' && currentWins > teamObj.overUnder || ouPick === 'under' && gamesLeft + currentWins < teamObj.overUnder) {
    return true;
  } else {
    return false;
  }
}

function buildTable(data) {
  data.sort((a,b) => {
    //sort by proj wins first
    if(a.wins !== b.wins) {
      return b.wins - a.wins;
    }
    // if wins are eqaul do this
      return b.tbreakWins - a.tbreakWins;
  })
  const tableContainer = document.getElementById('data-table-container');
  const tableHeaders = ['Entry Name', 'Locks', 'Proj. W/L', 'Proj. Tiebreak W/L'];
  let table = document.createElement('table');
  let tHeaderContainer = document.createElement('thead');
  let tHeaderRow = document.createElement('tr');
  tHeaderContainer.append(tHeaderRow);
  table.append(tHeaderContainer);
  tableHeaders.forEach(header => {
    let th = document.createElement('th');
    th.innerText= header;
    tHeaderRow.append(th);
  });
  let tBodyContainer = document.createElement('tbody');
  table.append(tBodyContainer);
  data.forEach(entry => {
    let entryRow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    td1.classList.add('text-left')
    td1.innerText = entry.entryName;
    td2.innerText = entry.locks;
    td3.innerText = `${entry.wins}-${entry.losses}`;
    td4.innerText = `${entry.tbreakWins}-${entry.tbreakLosses}`;
    entryRow.append(td1, td2, td3, td4);
    tBodyContainer.append(entryRow);
  })
  tableContainer.append(table);
}


// QA Contestant Data
function buildQA(contestants) {
  contestants.forEach(entry => {
    console.log(entry)
  })
}



contestants.forEach(contestant => calcRecord(contestant));
buildTable(userStandings);

buildQA(contestantsThisYear);


