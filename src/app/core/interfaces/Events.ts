export interface EventDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: EventDataContainer;
    etag: string;
  }
  export interface EventDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<Event>;
  }
  export interface Event {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: Array<Url>;
    modified: Date;
    start: Date;
    end: Date;
    thumbnail: Image;
    comics: ComicList;
    stories: StoryList;
    series: SeriesList;
    characters: CharacterList;
    creators: CreatorList;
    next: EventSummary;
    previous: EventSummary;
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
  export interface CharacterList {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<CharacterSummary>;
  }
  export interface CharacterSummary {
    resourceURI: string;
    name: string;
    role: string;
  }
  export interface CreatorList {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<CreatorSummary>;
  }
  export interface CreatorSummary {
    resourceURI: string;
    name: string;
    role: string;
  }
  export interface EventSummary {
    resourceURI: string;
    name: string;
  }
  