/**
 * @overview configs of ccm component sophist
 * @author Manfred Kaul <manfred.kaul@h-brs.de> 2019 & Hakimjon Turaboev
 * @license The MIT License (MIT) mkaul2m on 13.06.2019.
 */

  ccm.files[ 'configs.js' ] = {
    //Demo oder FunktionsSch ohne Bedingung
    "demo": {
      key: "demo",
      "html.main.inner.0.inner": "Funktionsschablone ohne Bedingung",
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "demo"
      }
    },
    //FunktionsSch ohne Bedingung
    "FunktionsSch_oB": {
      key: "FunktionsSch_oB",
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "demo"
      }
    },

    //FunktionsSch mit Bedingung
    "FunktionsSch_mB": {
      "html.main.inner.0.inner":"Funktionsschablone mit Bedingung",
      key: "FunktionsSch_mB",
      headers: ["Bedingung","Verbindlichkeit","Systemname","Funktionalität","Objekt","Prozesswort", "Buttons"],
      columns: ["bedingung","modal","system","func","object","process"],
      initial_values: {
        bedingung: "Bedingung",
        system: "das System",
        object: " das Objekt",
        process: " das Prozesswort"
      },

      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "FunktionsSch_mB"
      }
    },
      // Detaillierter FunktionsSch ohne Bedingung
    "D_FunktionsSch_oB": {
      "html.main.inner.0.inner":"Detaillierte Funktionsschablone ohne Bedingung",
      key: "D_FunktionsSch_oB",
      headers: ["Systemname","Verbindlichkeit","Funktionalität","Präzisierung1","Objekt","Präzisierung2","Konkretisierung","Prozesswort", "Buttons"],
      columns: ["system","modal","func","präzisiere1","object","präzisiere2", "konkretisiere","process"],
      initial_values: {
        system: "das System",
        object: " das Objekt",
        process: " das Prozesswort",
        system: "Das System",
        präzisiere1:"Detail fürs Objekt",
        präzisiere2:"Detail fürs Objekt",
        konkretisiere:"Detail fürs Prozesswort",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "D_FunktionsSch_oB"
      }
    },
    // Detaillierter FunktionsSch mit Bedingung
    "D_FunktionsSch_mB": {
      "html.main.inner.0.inner":"Detaillierte Funktionsschablone mit Bedingung",
      key: "D_FunktionsSch_mB",
      headers: ["Bedingung","Verbindlichkeit","Systemname","Funktionalität","Präzisierung1","Objekt","Präzisierung2","Konkretisierung","Prozesswort", "Buttons"],
      columns: ["bedingung","modal","system","func","präzisiere1","object","präzisiere2", "konkretisiere","process"],
      initial_values: {
        bedingung:"Bedingung",
        system: "das System",
        object: "das Objekt",
        process: "das Prozesswort",
        präzisiere1:"Detail fürs Objekt",
        präzisiere2:"Detail fürs Objekt",
        konkretisiere:"Detail fürs Prozesswort",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "D_FunktionsSch_mB"
      }
    },
    // EigenschaftsSch
    "EigenschaftsSch": {
      "html.main.inner.0.inner":"Eigenschaftsschablone",
      key: "EigenschaftsSch",
      headers: ["Eigenschaft","Betrachtendes","Verbindlichkeit","Vergleich","Wert","SEIN","Buttons"],
      columns: ["eigenschaft","betrachtendes","modal","vergleich", "wert", "sein"],
      initial_values: {
        betrachtendes:"Betrachtungsgegenstand",
        eigenschaft:"Eigenschaft",
        vergleich:"Vergleichsoperator",
        wert:"Wert",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "EigenschaftsSch"
      }
    },
    // UmgebungsSch
    "UmgebungsSch":{
      "html.main.inner.0.inner":"Umgebungsschablone",
      key: "UmgebungsSch",
      headers: ["(Komponente des)+Betrachtendes","Verbindlichkeit","so gestaltet sein, dass","(Bedingung)+ Betrachtendes","Eigenschaft","(Vergleich)+Wert","betrieben werden kann", "Buttons"],
      columns: ["komponente",                  "modal",          "gestaltet",             "betrachtendes","eigenschaft", "vergleich",        "betrieben"],
      initial_values: {
        komponente:"(Komponente des) Betrachtendes",
        eigenschaft:"Eigenschaft",
        vergleich:"(Vergleich)+Wert",
        wert:"Wert",
        betrachtendes: "Bedingung"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "UmgebungsSch"
      }
    },
    // ProzessSch
    "ProzessSch":{
      "html.main.inner.0.inner":"Prozessschablone",
      key: "ProzessSch",
      headers: [ "Buttons"],
      headers: ["Akteurname","Verbindlichkeit","(Präzisierung des   Objekts)","Objekt","(Präzisierung des Objekts)","(Konkretisierung des Prozessworts)","Prozesswort","Buttons"],
      columns: ["system","modal","präzisiere1","object", "präzisiere2", "konkretisiere", "process"],
      initial_values: {
        system:"Name des Akteurs",
        modal:"Verbindlichkeit",
        präzisiere1:"Detail fürs Objekt",
        object:"Objekt",
        präzisiere2: "Detail fürs Objekt",
        process: "Prozesswort",
        konkretisiere: "Detail fürs Prozesswort"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "ProzessSch"
      }
    },
    // BedingungsSch für logische Aussage
    "BedingungsSch_logik":{
      "html.main.inner.0.inner":"Bedingungsschablone für logische Aussage",
      key: "BedingungsSch_logik",
      headers: ["Kojunktion", "logische Aussage","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt2","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"logische Ausssage",
        präzisiere2: "Anforderungshauptsatz",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "BedingungsSch_logik"
      }
    },

    // BedingungsSch für Ereignis
    "BedingungsSch_ereignis":{
      "html.main.inner.0.inner":"Bedingungsschablone für Ereignis",
      key: "BedingungsSch_ereignis",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt1","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"Ereignis",
        präzisiere2: "Anforderungshauptsatz",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "BedingungsSch_ereignis"
      }
    },

    // BedingungsSch für Zeitraum
    "BedingungsSch_zeitraum":{
      "html.main.inner.0.inner":"Bedingungsschablone für Zeitraum",
      key: "BedingungsSch_zeitraum",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt3","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"Zeitraum",
        präzisiere2: "Anforderungshauptsatz",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "BedingungsSch_zeitraum"
      }
    },

    // FunctionalSch without condition
    "FunctionalM":{
      "html.main.inner.0.inner":"Functional schablone without condition",
      key: "FunctionalM",
      headers: ["System name", "Commitment", "Functionality",  "Process verb","Object", "Buttons"],
      columns: ["system","modal_e","func_e","process","object",],
      initial_values: {
        system: "The system",
        object: "a object",
        process: "a process verb",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "FunctionalM"
      }
    },
    //FunctionalSch with condition
    "FunctionalM_wC":{
      "html.main.inner.0.inner":"Functional schablone with condition",
      key: "FunctionalM_wC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Object", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","object",],
      initial_values: {
        system: "the system",
        object: "a object",
        process: "a process verb",
        bedingung:"condition,"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "FunctionalM_wC"
      }
    },

    //Detailed functionalSch
    "D_FunctionalM":{
      "html.main.inner.0.inner":"Detailed functional schablone",
      key: "D_FunctionalM",
      headers: ["System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        system: "The system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "D_FunctionalM"
      }
    },

    //Detailed functionalSch with condition
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"Detailed functional schablone with condition",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },
    //properity Sch
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"properity schablone",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },
    //Environment Sch
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"Environment schablone",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },
    //Process Sch
    "D_FunctionalMwC":{
      "html.main.inner.0.inner":"Process schablone",
      key: "D_FunctionalMwC",
      headers: ["Condition","System name", "Commitment", "Functionality",  "Process verb","Direct objects","Indirect objects", "Buttons"],
      columns: ["bedingung","system","modal_e","func_e","process","präzisiere1","konkretisiere"],
      initial_values: {
        bedingung:"Condition",
        system: "the system",
        process: "a process verb",
        präzisiere1:"direct objects",
        konkretisiere:"indirect objects"
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "D_FunctionalMwC"
      }
    },

    //Condition logical expression
    "condition_logical":{
      "html.main.inner.0.inner":"Condition logical expression",
      key: "condition_logical",
      headers: ["Kojunktion", "logische Aussage","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt2_e","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"logical expression",
        präzisiere2: "requirements-main clause",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "condition_logical"
      }
    },

    // Condition event
    "condition_event":{
      "html.main.inner.0.inner":"Condition event",
      key: "condition_event",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt1_e","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"event",
        präzisiere2: "requirements-main clause",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "condition_event"
      }
    },

    // Condition time
    "condition_time":{
      "html.main.inner.0.inner":"Condition time",
      key: "condition_time",
      headers: ["Kojunktion", "Ereignis","Anforderungshauptsatz","Buttons"],
      columns: ["konjunkt3_e","präzisiere1","präzisiere2",],
      initial_values: {
        präzisiere1:"time",
        präzisiere2: "requirements-main clause",
      },
      data: {
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "condition_time"
      }
    },
    // Usbekische FunktionsSch ohne Bedingung
    "FunktionsSch_uz":{
      "html.main.inner.0.inner":"Usbekische Funktionsschablone ohne Bedingung",
      key: "FunktionsSch_uz",
      headers: ["Tizim nomi", "(Aktyor)+Obyekt","Jarayon","Funktsionallik","Majburiyat","Tugmalar"],
      columns: ["system",        "object",      "process",  "func_uz",     "modal_uz"],
      initial_values: {
        system: "Tizim",
        modal_uz: "KERAK",
        func_uz: "IMKONINI BERISHI",
        object: "obyekt",
        process: "jarayon",
      },
      data: {
        //"store": [ "ccm.store", '/resources/datasets.js' ],
        "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
        "key": "FunktionsSch_uz"
      }
    },
      // Usbekische FunktionsSch mit Bedingung
      "FunktionsSch_mB_uz":{
          "html.main.inner.0.inner":"Usbekische Funktionsschablone mit Bedingung",
          key: "FunktionsSch_mB_uz",
          headers: ["Yordamchi gap","Tizim nomi", "(Aktyor)+Obyekt","Jarayon","Funktsionallik","Majburiyat","Tugmalar"],
          columns: ["bedingung",    "system",     "object",         "process", "func_uz",       "modal_uz"],
          initial_values: {
              bedingung:"Yordamchi gap",
              system: "Tizim",
              modal_uz: "KERAK",
              func_uz: "IMKONINI BERISHI",
              object: "obyekt",
              process: "jarayon",
          },
          data: {
              //"store": [ "ccm.store", '/resources/datasets.js' ],
              "store": [ "ccm.store", 'https://turaboev.github.io/sophiste/resources/datasets.js' ],
              "key": "FunktionsSch_mB_uz"
          }
      },

// Schablonen für verschiedene Speichern.

    "local_demo": {
      "key": "local_demo",
      "html.main.inner.0.inner": "Demoschablone im Browserstore",
      "data": {
        "store": [ "ccm.store", { "name": "sophist_db" } ],
        "key": "sophist_demo"
      }
    },

    "remote_demo": {
      "key": "remote_demo",
      "html.main.inner.0.inner": "Demoschablone in Server Datenbank (einseitig)",
      "data": {
        "store": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "name": "sophist_db", "dataset": "sophist_demo" } ],
        "key": "sophist_demo"
      }
    },

    "websocket_demo": {
      "key": "websockets",
      "html.main.inner.0.inner": "Kollaborative Demoschablone durch WebSocket (Echtzeit)",
      "data": {
        "store": [ "ccm.store", { "url": "wss://ccm2.inf.h-brs.de", "name": "sophist_db", "dataset": "sophist_demo" } ],
        "key": "sophist_demo"
      }
    },

    "websocket_UmgebungsSch": {
      "key": "UmgebungsSch",
      "html.main.inner.0.inner": "Kollaborative Demoschablone durch WebSocket (Echtzeit)",
      "data": {
        "store": [ "ccm.store", { "url": "wss://ccm2.inf.h-brs.de", "name": "sophist_db2", "dataset": "sophist_demo2" } ],
        "key": "sophist_demo2"
      }
    },
};