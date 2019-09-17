/**
 * @overview datasets for ccm component sophist
 * @version 0.0.1
 *@author Manfred Kaul & Hakimjon Turaboev 2019
 * @copyright The MIT License (MIT)
 */

ccm.files[ 'datasets.js' ] = {
   //Demo oder FunktionsSch ohne Bedingung
  "demo": {
    "key": "demo",
    "rows": [
      {
        system: "Das System",
        modal: "MUSS",
        func: "die Möglichkeit bieten",
        object: "die Bezahlung",
        process: "zu berechnen"
      },
      {
        system: "Das Kassensystem",
        modal: "SOLLTE",
        func: "fähig sein",
        object: "die Daten",
        process: "zu speichern"
      }
    ]

  },
  //FunktionsSch mit Bedingung
  "FunktionsSch_mB": {
    "key": "FunktionsSch_mB",

    "rows": [
      {
        bedingung: "Solange der Scanner an ist",
        system: "das System",
        modal: "MUSS",
        func: "die Möglichkeit bieten",
        object: "die Bezahlung",
        process: "zu berechnen"
      },
      {
        bedingung: "Sobald Fehler auftritt",
        system: "das Kassensystem",
        modal: "SOLLTE",
        func: "fähig sein",
        object: "die Daten",
        process: "zu speichern"
      }
    ]
  },
  // Detaillierter FunktionsSch ohne Bedingung
  "D_FunktionsSch_oB": {
    "key": "D_FunktionsSch_oB",
    "rows": [
      {
        system: "Das System",
        modal: "MUSS",
        func: "fähig sein",
        präzisiere1:"die selektierten",
        object: "Bezahlungsdaten",
        präzisiere2:"eines regstrierten Kunden",
        konkretisiere:"auf dem CD",
        process: "zu speichern"
      },

    ]

  },
  // Detaillierter FunktionsSch mit Bedingung
  "D_FunktionsSch_mB": {
    "key": "D_FunktionsSch_mB",
    "rows": [
      {
        bedingung:"Sobald Systemspeicher voll ist,",
        system: "Das System",
        modal: "MUSS",
        func: "fähig sein",
        präzisiere1:"die selektierten",
        object: "Bezahlungsdaten",
        präzisiere2:"eines regstrierten Kunden",
        konkretisiere:"auf dem CD",
        process: "zu speichern"
      },
    ]
  },
  // EigenschaftsSch
  "EigenschaftsSch": {
    "key": "EigenschaftsSch",
    "rows": [
      {
        eigenschaft:"Die Länge",
        betrachtendes:"des Eingabefensters",
        modal: "MUSS",
        vergleich:"gleich",
        wert:"lang",
        sein: "sein",
      },
    ]
  },
  // UmgebungsSch
  "UmgebungsSch":{
    "key": "UmgebungsSch",
    "rows": [
      {
        komponente: "Lesegerät des Systems",
        modal: "MUSS",
        gestaltet: "so gestaltet sein, dass",
        betrachtendes:"Bedingung + das System",
        eigenschaft:"bei der Weite",
        vergleich:"von 4 cm bis 100 cm",
        betrieben:"betrieben werden kann",
      },
    ]
  },

  // ProzessSch
  "ProzessSch": {
    "key": "ProzessSch",
    "rows": [
      {
        system: "Der Auftraggeber",
        modal: "MUSS",
        präzisiere1:"die ausgelisteten",
        object: "Mitarbeiter",
        präzisiere2:"des Unternehmens",
        konkretisiere:"jährlich",
        process: "schulen"
      },
    ]
  },

  // BedingungsSch für logische Aussage
  "BedingungsSch_logik": {
    "key": "BedingungsSch_logik",
    "rows": [
      {
        konjunkt2:"Falls",
        präzisiere1:"die Karte gesperrt ist,",
        präzisiere2: "Anforderungshauptsatz"
      },
    ]
  },
  // BedingungsSch für Ereignis
  "BedingungsSch_ereignis": {
    "key": "BedingungsSch_ereignis",
    "rows": [
      {
        konjunkt1:"Sobald",
        präzisiere1:"der Kunde bezahlt hat,",
        präzisiere2: "Anforderungshauptsatz"
      },
    ]
  },
  // BedingungsSch für Zeitraum
  "BedingungsSch_zeitraum": {
    "key": "BedingungsSch_zeitraum",
    "rows": [
      {
        konjunkt3:"SOLANGE",
        präzisiere1:"das System angeschaltet ist,",
        präzisiere2: "Anforderungshauptsatz"
      },
    ],
  },
  // FunctionalSch without condition
  "FunctionalM": {
    "key": "FunctionalM",
    "rows": [
      {
        system:"The labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        object:"the pdf-file",
      },
    ],
  },

  // FunctionalSch with condition
  "FunctionalM_wC": {
    "key": "FunctionalM_wC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        object:"the pdf-file",
      },
    ],
  },
  // Detailed functionalSch
  "D_FunctionalM": {
    "key": "D_FunctionalM",
    "rows": [
      {
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:" selected colored photos ",
        konkretisiere:"at   the net-work printer",

      },
    ],
  },
  //Detailed functionalSch with condition
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Properity Sch
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Environment Sch
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Process Sch
  "D_FunctionalMwC": {
    "key": "D_FunctionalMwC",
    "rows": [
      {
        bedingung:"If the user is logged in,",
        system:"the labrary system",
        modal_e:"SHALL",
        func_e:"PROVIDE (labrarian WITH) ABILITY TO",
        process: "print",
        präzisiere1:"selected colored photos ",
        konkretisiere:"at the net-work printer",
      },
    ],
  },
  //Condition logical expression
  "condition_logical": {
    "key": "condition_logical",
    "rows": [
      {
        konjunkt2_e:"IF",
        präzisiere1:"the card is blocked,",
        präzisiere2: "requirements-main clause"
      },
    ]
  },
  // Condition event
  "condition_event": {
    "key": "condition_event",
    "rows": [
      {
        konjunkt1_e:"AS SOON AS",
        präzisiere1:"the customer has paid,",
        präzisiere2: "requirements-main clause"
      },
    ]
  },
  // Condition time
  "condition_time": {
    "key": "condition_time",
    "rows": [
      {
        konjunkt3_e:"AS LONG AS",
        präzisiere1:"the system is switched on,",
        präzisiere2: "requirements-main clause"
      },
    ],
  },
  //Usbekische FunktionsSch ohne Bedingung
  "FunktionsSch_uz": {
    "key": "FunktionsSch_uz",

    "rows": [
      {
        system: "Tizim",
        modal_uz: "KERAK",
        func_uz: "IMKONINI BERISHI",
        object: "hisobni",
        process: "hisoblash",
      },
    ]
  },
  //Usbekische FunktionsSch mit Bedingung
  "FunktionsSch_mB_uz": {
    "key": "FunktionsSch_mB_uz",

    "rows": [
      {
        bedingung: "Agar pul kam to'lansa",
        system: "Tizim",
        modal_uz: "KERAK",
        func_uz: "IMKONINI BERISHI",
        object: "hisobni",
        process: "hisoblash",
      },
    ]
  }
};