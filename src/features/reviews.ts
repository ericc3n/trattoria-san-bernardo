interface ReviewType {
  username: string
  starRating: 3 | 4 | 5;
  app: 'facebook' | 'google'
  description: string;
}

interface SocialStatisticsType {
  numReviews: number;
  avgRating: number;
}

interface StatisticsType {
  google: SocialStatisticsType;
  facebook: SocialStatisticsType;
}

const reviews: ReviewType[] = [
  {
    username: "Michele Lippolis",
    starRating: 5,
    app: "google",
    description: "Ambiente tranquillo, antipasti ottimi, tiramisù cremoso. Servizio un po’ distratto ma cordiale. Esperienza positiva."
  },
  {
    username: "Daniele",
    starRating: 4,
    app: "google",
    description: "Locale carino, cibo buono, servizio presente. Prenotazione facile con The Fork e promozioni disponibili."
  },
  {
    username: "Federico De Santi",
    starRating: 4,
    app: "google",
    description: "Vista incantevole, servizio professionale, risotto squisito e tortelli eccellenti. Porzioni non abbondanti. Esperienza consigliata."
  },
  {
    username: "Aurora Valli",
    starRating: 5,
    app: "google",
    description: "Accoglienza calorosa, piatti superlativi. Atmosfera davanti all’abbazia di Morimondo. Ristorante preferito fuori Milano."
  },
  {
    username: "Vincenzo Zavaglia",
    starRating: 5,
    app: "google",
    description: "Locale accogliente, piatti di qualità, personale gentile. Gestione ottima. Consigliata la paella (da prenotare)."
  },
  {
    username: "Christian D'agata",
    starRating: 4,
    app: "google",
    description: "Vicino all’abbazia, piatti curati e carne alla brace ottima. Spazio esterno ideale per l’estate."
  },
  {
    username: "GreenOutdoor",
    starRating: 5,
    app: "facebook",
    description: "Location incantevole, cibo curato, carni di qualità cotte alla brace. Consigliatissimo."
  },
  {
    username: "Cinzia Angelucci",
    starRating: 5,
    app: "facebook",
    description: "Ottima qualità del cibo, personale cordiale, risotto con ossobuco eccellente. Torneremo sicuramente."
  },
  {
    username: "Monica Lova",
    starRating: 3,
    app: "google",
    description: "Ambiente raffinato e personale attento. Guancia ottima, risotto deludente. Tiramisu e vino molto buoni."
  },
  {
    username: "amore mangiofuori",
    starRating: 4,
    app: "google",
    description: "Carne alla brace saporita e contesto delizioso. Manca una piccola entrée. Vino buono. Tornerò per la tartare."
  },
  {
    username: "Alessandro",
    starRating: 5,
    app: "google",
    description: "Locale carino, piatti di qualità, servizio ottimo e prezzo proporzionato. Esperienza eccellente."
  }
];

const reviewsStatistics: StatisticsType = {
  google: {
    numReviews: 658,
    avgRating: 4.4
  },
  facebook: {
    numReviews: 294,
    avgRating: 4.0
  }
}

export { reviews, reviewsStatistics }
export type { ReviewType }