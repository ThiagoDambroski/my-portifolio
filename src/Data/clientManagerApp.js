//Icon Image
import electronIcon from "../assets/images/icon/programs icon/electron.png";

///Images
import fristImage from "../assets/images/client-manager/front-end/clientPage.png";
import secondImage from "../assets/images/client-manager/front-end/CalanderPage.png";
import thirdImage from "../assets/images/client-manager/front-end/addCalender.png";
import fourthImage from "../assets/images/client-manager/front-end/clientMenu.png";
import fithImage from "../assets/images/client-manager/front-end/menu.png";
import sixthImage from "../assets/images/client-manager/front-end/pagamentClientMenu.png";
import sevenImage from "../assets/images/client-manager/front-end/pagamentPage.png";
import eightImage from "../assets/images/client-manager/front-end/postClient.png";
import nithImage from "../assets/images/client-manager/front-end/postClient2.png";
import tenImage from "../assets/images/client-manager/front-end/putClient.png";
import elevenImage from "../assets/images/client-manager/front-end/sessionManager.png";

//client
import clientClass from "../assets/images/client-manager/Client/ClientClasse.png";
import clientController from "../assets/images/client-manager/Client/clientController.png";
import clientServiceImpl from "../assets/images/client-manager/Client/clientServiceImpl.png";
import clientRepository from "../assets/images//client-manager/Client/clientRepository.png";
//Client Session
import clientSessionClass from "../assets/images/client-manager/Client Session/ClientSessionClasse.png";
import clientSessionController from "../assets/images/client-manager/Client Session/clientSessionController.png";
import clientSessionServiceImpl from "../assets/images/client-manager/Client Session/clientSessionServiceImpl.png";
import clientSessionRepository from "../assets/images/client-manager/Client Session/clientSession Repository.png";
//client session days
import clientSessionDaysClass from "../assets/images/client-manager/Client Session Days/clientSessionDaysClasse.png";
import clientSessionDaysController from "../assets/images/client-manager/Client Session Days/clientSessionDaysController.png";
import clientSessionDaysServiceImpl from "../assets/images/client-manager/Client Session Days/clientSessionDyasServiceImpl.png";
import clientSessionDaysRepository from "../assets/images/client-manager/Client Session Days/clientSessionDaysRepository.png";
//pagament
import pagamentClass from "../assets/images/client-manager/Pagament/pagamentClass.png";
import pagamentController from "../assets/images/client-manager/Pagament/pagamentController.png";
import pagamentServiceImpl from "../assets/images/client-manager/Pagament/pagamentServiceImpl.png";
import pagamentRepository from "../assets/images/client-manager/Pagament/PagamentRepository.png";
//user
import userClass from "../assets/images/client-manager/User/userClass.png";
import userController from "../assets/images/client-manager/User/userController.png";
import userServiceImpl from "../assets/images/client-manager/User/userServiceImpl.png";
import userRepository from "../assets/images/client-manager/User/userRepository.png";

const clientManagerApp = {
  id: 6,
  title: "Client Manager App | React and Spring boot",
  gitLink: "https://github.com/ThiagoDambroski/physchology-manager-app-front-end",
  youtubeID: "b4mTCSvJr7Q",
  videoTitle: "Demonstração: Aplicativo Full Stack para Gerenciamento de Clientes na Psicologia (portuguese)",
  description:
    "This project involved the development of a Windows application tailored for psychologists, seamlessly integrating React, Spring Boot, and Electron.  I was responsible for both the design and code,it serves as a comprehensive platform for managing clients, registering sessions, and handling payments, ensuring efficient workflow and accessibility for the users."
    + " The application enables psychologists to register detailed session descriptions, add searchable tags, and maintain a weekly calendar view to prevent scheduling conflicts. It also tracks attendance and manages client payments, with features for tagging, noting delays, and filtering payment statuses. The platform supports different client types, including weekly, biweekly, and ad-hoc sessions, providing a versatile tool for diverse client management needs",
  images: [
    fristImage,
    secondImage,
    thirdImage,
    fourthImage,
    fithImage,
    sixthImage,
    sevenImage,
    eightImage,
    nithImage,
    tenImage,
    elevenImage
  ],
  type: 3, // TYPE 3 : FULL STACK ,
  navLink: "/fullStackProjectClientManagerApp",
  iconImage: electronIcon,
  informationPage: {
   properties: [
    [
      // Client
  
      {
        type: "Long",
        propertieName: "clientId",
        description: "Unique identifier for the client.",
      },
      {
        type: "String",
        propertieName: "name",
        description: "Name of the client.",
      },
      {
        type: "String",
        propertieName: "email",
        description: "Email address of the client.",
      },
      {
        type: "String",
        propertieName: "telephone",
        description: "Client's phone number.",
      },
      {
        type: "Date",
        propertieName: "birthDate",
        description: "Birthdate of the client.",
      },
      {
        type: "int",
        propertieName: "payday",
        description: "Day of the month the client chooses to pay.",
      },
      {
        type: "List<ClientSession>",
        propertieName: "sessions",
        description: "List of sessions attended by the client.",
      },
      {
        type: "List<ClientSessionDays>",
        propertieName: "daysOfSession",
        description: "List of days the client has scheduled sessions.",
      },
      {
        type: "List<Pagament>",
        propertieName: "paymentHistory",
        description: "History of payments made by the client.",
      },
      {
        type: "Date",
        propertieName: "entranceDate",
        description: "Date the client was registered.",
      },
      {
        type: "boolean",
        propertieName: "clientPayOnDay",
        description: "Indicates if the client pays only on the day of the session.",
      },
      {
        type: "boolean",
        propertieName: "active",
        description: "Indicates if the client is currently active.",
      },
      ],
      [
        // ClientSession
        {
          type: "Long",
          propertieName: "clientSessionId",
          description: "Unique identifier for the client session.",
        },
        {
          type: "Client",
          propertieName: "client",
          description: "The client associated with this session.",
        },
        {
          type: "Date",
          propertieName: "date",
          description: "The date when the session occurred.",
        },
        {
          type: "boolean",
          propertieName: "attend",
          description: "Indicates if the client attended the session.",
        },
        {
          type: "String",
          propertieName: "sessionDescription",
          description: "Description of what happened during the session.",
        },
        {
          type: "String",
          propertieName: "tagsDescription",
          description: "Tags related to the session.",
        },
      ],[//ClientSessionDays
        {
          type: "Long",
          propertieName: "clientSessionDaysId",
          description: "A unique identifier for the client session day."
        },
        {
          type: "Client",
          propertieName: "client",
          description: "The client associated with the session day."
        },
        {
          type: "SessionsDays(Enum)",
          propertieName: "dayOfSession",
          description: "The day the session is scheduled to occur."
        },
        {
          type: "String",
          propertieName: "timeOfSession",
          description: "The start time of the session, in 24-hour time format."
        },
        {
          type: "String",
          propertieName: "durationOfSession",
          description: "The duration of the session, in hours and minutes."
        },
        {
          type: "boolean",
          propertieName: "everyWeek",
          description: "Indicates if the session occurs on a weekly basis."
        }
        
        
        
      ],
      [//Pagament
        {
          type: "Long",
          propertieName: "pagamentId",
          description: "Unique identifier for the pagament."
        },
        {
          type: "Client",
          propertieName: "client",
          description: "Client associated with the pagament."
        },
        {
          type: "int",
          propertieName: "delay",
          description: "The amount of days this pagament has been delayed, can be 0."
        },
        {
          type: "Date",
          propertieName: "payDate",
          description: "The date the pagament occurred."
        },
        {
          type: "String",
          propertieName: "pagamentTags",
          description: "The tags to easily find the pagament."
        },
        {
          type: "float",
          propertieName: "value",
          description: "The value of the pagament."
        }
        
      ],
      [//User
        {
          type: "Long",
          propertieName: "userId",
          description: "Unique identifier for the user."
        },
        {
          type: "String",
          propertieName: "name",
          description: "Name of the user."
        },
        {
          type: "String",
          propertieName: "password",
          description: "The password for the user."
        },
        {
          type: "String",
          propertieName: "limitTimeOfSession",
          description: "The time limit for the session in 24-hour format."
        },
        {
          type: "String",
          propertieName: "limitDurationOfSession",
          description: "The duration limit for a session in 24-hour format."
        },
        {
          type: "int",
          propertieName: "numberOfClientsPerPage",
          description: "The number of clients that can be on one page."
        },
        {
          type: "int",
          propertieName: "numberOfSessionsPerPage",
          description: "The number of sessions that can be on one page."
        },
        {
          type: "int",
          propertieName: "numberOfPagamentsPerPage",
          description: "The number of pagaments per client that can be on one page."
        },
        {
          type: "int",
          propertieName: "numberOfPagamentsPerMonthPage",
          description: "The number of pagaments for the month that can be on one page."
        }
        
        
      ]
      
  ],classes: ["Client", "Client Session","Client Session Day","Pagament","User"],
    images: [
      [
        //client
        clientClass,
        clientController,
        clientServiceImpl,
        clientRepository,
      ],
      [
        //clientSession
        clientSessionClass,
        clientSessionController,
        clientSessionServiceImpl,
        clientSessionRepository,
      ],
      [//client session day
        clientSessionDaysClass,
        clientSessionDaysController,
        clientSessionDaysServiceImpl,
        clientSessionDaysRepository

      ],
      [//pagament
        pagamentClass,
        pagamentController,
        pagamentServiceImpl,
        pagamentRepository

      ],
      [//user
        userClass,
        userController,
        userServiceImpl,
        userRepository
      ]
    ],
    methods: [
      [
        // Client
        {
          method: "Get All Clients",
          URL: "/getAll",
          description: "Fetches a list of all clients.",
        },
        {
          method: "Post Client ",
          URL: "/post",
          description: "Creates a new client.",
        },
        {
          method: "Put client",
          URL: "/put/:clientId",
          description: "Updates a client's details using their ID.",
        },
        {
          method: "Change active status",
          URL: "/activeChange/:clientId",
          description: "Change whether the client is active using their ID."
        },
        {
          method: "Delete a client",
          URL: "/delete/:clientId",
          description: "Delete the client using their ID."
        }
        
      ],
      [
        //Sessions
        {
          method: "Get All Sessions",
          URL: "/getAll",
          description: "Fetches a list of all sessions.",
        },
        {
          method: "Get Sessions By Client ID",
          URL: "/getByClientId/:clientId",
          description: "Fetches all sessions for a specified client using their ID.",
        },
        {
          method: "Post Session",
          URL: "/post",
          description: "Creates a new session.",
        },
        {
          method: "Put Session",
          URL: "/put/:sessionId",
          description: "Updates a session's details using its ID.",
        },
        
      ],
      [
        // Client session days
        {
          method: "Get All Clients Session day",
          URL: "/getAll",
          description: "Fetches a list of all clients session day.",
        },
        {
          method: "Post client session day",
          URL: "/post/:clientId",
          description: "Creates a new client session day for a specified client using their ID.",
        },
        {
          method: "Put client session days",
          URL: "/put/:sessionDaysId",
          description: "Updates a client's session days details using their ID.",
        },
        {
          method: "Delete client session day Client By ID",
          URL: "/delete/:sessionDaysId",
          description: "Removes a client session day using their ID.",
        },
      ],
      [
        // Pagament
        {
          method: "Get All Pagaments",
          URL: "/getAll",
          description: "Fetches a list of all pagaments."
        },
        {
          method: "Get All Pagaments by the client",
          URL: "/getById/:clientId",
          description: "Fetches a list of all pagaments for a specified client using their ID."
        },
        {
          method: "Post pagament",
          URL: "/post/:clientId",
          description: "Creates a new pagament for a specified client using their ID."
        },
        {
          method: "Put pagament",
          URL: "/put/:pagamentId",
          description: "Updates pagament details using its ID."
        }
        
        
      ],
      [
        // user
        {
          method: "Get All users",
          URL: "/getAll",
          description: "Fetches a list of all users."
        },
        {
          method: "Post user",
          URL: "/post",
          description: "Creates a new user."
        },
        {
          method: "Put user",
          URL: "/put/:userId",
          description: "Updates user details using their ID."
        }
        
        
      ]
      
    ]

  },
};

export default clientManagerApp;
