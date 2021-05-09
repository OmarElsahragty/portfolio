import { ImagesSrc, IconsSrc } from "../Helpers";

const Data = {
  Brand: "Sahragty",
  Facebook: "https://www.facebook.com/Omar.Elsahragty",
  LinkedIn: "https://www.linkedin.com/in/omar-elsahragty",
  Github: "https://github.com/OmarElsahragty/portfolio",

  Email: "omar_elsahragty@hotmail.com",

  Birthday: "13-02-1997",

  CV:
    "https://www.dropbox.com/s/3cbu70kc3kxwkec/Omar%20Elsahragty%27s%20CV.pdf?dl=0",

  Colleges: [IconsSrc.PUA, IconsSrc.KTH],

  Certificates: [
    {
      name: "Hardware-Security", // Translated Value in translation.json
      link:
        "https://www.coursera.org/account/accomplishments/verify/5XULVBGBWMFZ",
    },
    {
      name: "Cryptography", // Translated Value in translation.json
      link:
        "https://www.coursera.org/account/accomplishments/verify/G3P2LD7TJTDF",
    },
    {
      name: "Software-Security", // Translated Value in translation.json
      link:
        "https://www.coursera.org/account/accomplishments/verify/6FGWLWFT6UWZ",
    },
    {
      name: "Usable-Security", // Translated Value in translation.json
      link:
        "https://www.coursera.org/account/accomplishments/verify/T959PWTGY9UK",
    },
  ],

  Languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Excellent" },
  ],

  Projects: [
    {
      Name: "Trendo", // Translated Value in translation.json
      Description: "Trendo-Description", // Translated Value in translation.json
      Images: ImagesSrc.Trendo,
      Technologies: [IconsSrc.Reactjs, IconsSrc.Firebase],
      Clients: [IconsSrc.INOVA],
    },
    {
      Name: "Dokkan-El-Osra", // Translated Value in translation.json
      Description: "Dokkan-El-Osra-Description", // Translated Value in translation.json
      Images: ImagesSrc.DokkanElOsra,
      Technologies: [IconsSrc.Reactjs],
      Clients: [IconsSrc.DokkanElOsra],
    },
    {
      Name: "Public-Transportation-System", // Translated Value in translation.json
      Description: "Public-Transportation-System-Description", // Translated Value in translation.json
      Images: ImagesSrc.publicTransportationSystem,
      Technologies: [
        IconsSrc.Reactjs,
        IconsSrc.Firebase,
        IconsSrc.GoogleMaps,
        IconsSrc.Nodejs,
        IconsSrc.GoogleCloud,
      ],
      Presentation:
        "https://www.dropbox.com/s/jwzjkw7x1btfx2d/Public%20Transportation%20System.pptx?dl=0",
      Clients: [IconsSrc.PUA, IconsSrc.KTH],
    },
    {
      Name: "Restaurants-ERP-System", // Translated Value in translation.json
      Description: "Restaurants-ERP-System-Description", // Translated Value in translation.json
      Images: ImagesSrc.RestaurantsSystem,
      Technologies: [IconsSrc.ReactjsRedux, IconsSrc.MongoDB, IconsSrc.Nodejs],
      Clients: [IconsSrc.Picasso],
    },
  ],
};

export default Data;
