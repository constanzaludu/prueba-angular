export interface SeriesDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: SeriesDataContainer;
  etag: string;
}

export interface SeriesDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Partial<Series>>;
}

export interface Series {
  id: number;
  title:string;
  comicsAmount: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

export interface Url {
  type: string;
  url: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<ComicSummary>;
}

export interface ComicSummary {
  resourceURI: string;
  name: string;
}

export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<StorySummary>;
}

export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}
export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<EventSummary>;
}

export interface EventSummary {
  resourceURI: string;
  name: string;
}

export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<SeriesSummary>;
}

export interface SeriesSummary {
  resourceURI: string;
  name: string;
}