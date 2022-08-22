export interface StoryDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: StoryDataContainer;
    etag: string;
  }
  export interface StoryDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<Story>;
  }
  export interface Story {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    type: string;
    modified: Date;
    thumbnail: Image;
    comics: ComicList;
    series: SeriesList;
    events: EventList;
    characters: CharacterList;
    creators: CreatorList;
    originalissue: ComicSummary;
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
  export interface CharacterList {
    available: number;
    returned: number;
    collectionURI: string;
    item: Array<CharacterSummary>;
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
  