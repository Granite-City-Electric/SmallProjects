// http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/5 --- ESPN API Endpoint for Teams (adjust ID)

const teams = [
  {
    id: 1,
    abbrv: "ATL",
    displayName: "Atlanta Falcons",
    shortDisplayName: "Falcons"
  },
  {
    id: 2,
    abbrv: "BUF",
    displayName: "Buffalo Bills",
    shortDisplayName: "Bills"
  },
  {
    id: 3,
    abbrv: "CHI",
    displayName: "Chicago Bears",
    shortDisplayName: "Bears"
  },
  {
    id: 4,
    abbrv: "CIN",
    displayName: "Cincinnati Bengals",
    shortDisplayName: "Bengals"
  },
  {
    id: 5,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 6,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 7,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 8,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 9,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 10,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 11,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 12,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 13,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 14,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 15,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 16,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 17,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 18,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 19,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 20,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 21,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 22,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 23,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 24,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 25,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 26,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 27,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 28,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 29,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 30,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 31,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  },
  {
    id: 32,
    abbrv: "",
    displayName: "",
    shortDisplayName: ""
  }
]
  

const data = `{
    "time": {
      "updated": "Jul 25, 2024 20:10:05 UTC",
      "updatedISO": "2024-07-25T20:10:05+00:00",
      "updateduk": "Jul 25, 2024 at 21:10 BST"
    },
    "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    "chartName": "Bitcoin",
    "bpi": {
      "USD": {
        "code": "USD",
        "symbol": "&#36;",
        "rate": "64,686.584",
        "description": "United States Dollar",
        "rate_float": 64686.5837
      },
      "GBP": {
        "code": "GBP",
        "symbol": "&pound;",
        "rate": "50,304.363",
        "description": "British Pound Sterling",
        "rate_float": 50304.3627
      },
      "EUR": {
        "code": "EUR",
        "symbol": "&euro;",
        "rate": "59,629.969",
        "description": "Euro",
        "rate_float": 59629.9688
      }
    }
  }`

  parsedData = JSON.parse(data);

  console.log(parsedData.bpi.USD.rate);



  // fetch("http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/5")
  // .then((res) => {
  //   console.log("RESOLVED!", res);
  //   return res.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((e) => {
  //   console.log("ERROR!", e)
  // });

  for (let i=1; i <= 32; i++) {
    const loadTeams = async () => {
      try {
        const res = await fetch(`http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/${i}`);
        const data = await res.json();
        console.log(data);
      } catch (e) {
        console.log("ERROR", e);
      }
    };
  
    loadTeams();
  }
