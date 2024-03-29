import { ImagesSrc, IconsSrc } from "../utilities/Helpers";

const Data = {
  Brand: "Sahragty",
  Facebook: "https://www.facebook.com/Omar.Elsahragty",
  LinkedIn: "https://www.linkedin.com/in/omar-elsahragty",
  Github: "https://github.com/OmarElsahragty",

  ProjectRepo: "https://github.com/OmarElsahragty/portfolio",

  Email: "omar_elsahragty@hotmail.com",

  Birthday: "13-02-1997",

  Resume:
    "https://www.dropbox.com/s/1n6aqt362eshk4u/Omar%20Elsahragty%27s%20Resume.pdf?dl=0",

  Colleges: [IconsSrc.PUA, IconsSrc.KTH],

  Certificates: [
    {
      name: "Hardware-Security", //? Translated Value in translation.json
      link: "https://www.coursera.org/account/accomplishments/verify/5XULVBGBWMFZ",
    },
    {
      name: "Cryptography", //? Translated Value in translation.json
      link: "https://www.coursera.org/account/accomplishments/verify/G3P2LD7TJTDF",
    },
    {
      name: "Software-Security", //? Translated Value in translation.json
      link: "https://www.coursera.org/account/accomplishments/verify/6FGWLWFT6UWZ",
    },
    {
      name: "Usable-Security", //? Translated Value in translation.json
      link: "https://www.coursera.org/account/accomplishments/verify/T959PWTGY9UK",
    },
  ],

  Languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Excellent" },
  ],

  Projects: [
    {
      Name: "OnPoll", //? Translated Value in translation.json
      Description: "OnPoll-Description", //? Translated Value in translation.json
      Images: ImagesSrc.onPoll,
      Technologies: [
        IconsSrc.ReactJS,
        IconsSrc.SocketIO,
        IconsSrc.Nodejs,
        IconsSrc.Redis,
        IconsSrc.PostgreSql,
      ],
      Clients: [IconsSrc.SwisoDev],
    },
    {
      Name: "Trendo", //? Translated Value in translation.json
      Description: "Trendo-Description", //? Translated Value in translation.json
      Images: ImagesSrc.Trendo,
      Technologies: [IconsSrc.ReactJS, IconsSrc.Firebase],
      Clients: [IconsSrc.INOVA],
      URL: "http://web.trendo.site/",
    },
    {
      Name: "Dokkan-El-Osra", //? Translated Value in translation.json
      Description: "Dokkan-El-Osra-Description", //? Translated Value in translation.json
      Images: ImagesSrc.DokkanElOsra,
      Technologies: [IconsSrc.ReactJS],
      Clients: [IconsSrc.DokkanElOsra],
    },
    {
      Name: "Restaurants-ERP-System", //? Translated Value in translation.json
      Description: "Restaurants-ERP-System-Description", //? Translated Value in translation.json
      Images: ImagesSrc.RestaurantsSystem,
      Technologies: [IconsSrc.ReactjsRedux, IconsSrc.MongoDB, IconsSrc.Nodejs],
      Clients: [IconsSrc.Picasso],
    },
    {
      Name: "Public-Transportation-System", //? Translated Value in translation.json
      Description: "Public-Transportation-System-Description", //? Translated Value in translation.json
      Images: ImagesSrc.publicTransportationSystem,
      Technologies: [
        IconsSrc.ReactJS,
        IconsSrc.Firebase,
        IconsSrc.GoogleMaps,
        IconsSrc.Nodejs,
        IconsSrc.GoogleCloud,
      ],
      Presentation:
        "https://www.dropbox.com/s/jwzjkw7x1btfx2d/Public%20Transportation%20System.pptx?dl=0",
      Clients: [IconsSrc.PUA, IconsSrc.KTH],
    },
  ],
};

export default Data;
