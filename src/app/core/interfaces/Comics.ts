export interface ComicDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTM: string;
    data: ComicDataContainer;
    etag: string;
  }
  export interface ComicDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<Partial<Comic>>;
  }
  export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: Array<TextObject>;
    resourceURI: string;
    urls: Array<Url>;
    series: SeriesSummary;
    variants: Array<ComicSummary>;
    collections: Array<ComicSummary>;
    collectedIssues: Array<ComicSummary>;
    dates: Array<ComicDate>;
    prices: Array<ComicPrice>;
    thumbnail: Image;
    images: Array<Image>;
    creators: CreatorList;
    characters: CharacterList;
    stories: StoryList;
    events: EventList;
  }
  export interface TextObject {
    type: string;
    language: string;
    text: string;
  }
  export interface Url {
    type: string;
    url: string;
  }
  export interface SeriesSummary {
    resourceURI: string;
    name: string;
  }
  export interface ComicSummary {
    resourceURI: string;
    name: string;
  }
  export interface ComicDate {
    type: string;
    date: Date;
  }
  export interface ComicPrice {
    type: string;
    price: number;
  }
  export interface Image {
    path: string;
    extension: string;
  }
  export interface CreatorList {
    available: number;
    returned: number;
    collectionURI: string;
    items: Array<CharacterSummary>;
  }
  export interface CreatorSummary {
    resourceURI: string;
    name: string;
    role: string;
  }
  export interface CharacterList {
    available: number;
    returned: number;
    collectionURI: string;
    items: string;
  }
  export interface CharacterSummary {
    resourceURI: string;
    name: string;
    role: string;
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
    items: string;
  }
  export interface EventSummary {
    resourceURI: string;
    name: string;
  }
  