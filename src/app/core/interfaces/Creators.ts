export interface CreatorDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: CreatorDataContainer;
    etag: string;
  }
  export interface CreatorDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<Creator>;
  }
  export interface Creator {
    id: number;
    firstName: number;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: Date;
    resourceURI: string;
    urls: Array<Url>;
    thumbnail: Image;
    series: SeriesList;
    stories: StoryList;
    comics: ComicList;
    events: EventList;
  }
  export interface Url {
    type: string;
    url: string;
  }
  export interface Image {
    path: string;
    extension: string;
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
  