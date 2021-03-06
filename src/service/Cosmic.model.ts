export interface Metafield {
  children: any
  id: string
  key: string
  object: object
  object_type: string
  title: string
  type: string
  value: string
}

export interface CosmicObject<Props> {
  bucket: string
  content: string
  created: string
  created_at: string
  created_by: string
  metadata: Props
  metafields: Metafield[]
  modified_at: string
  modified_by: string
  order: number
  publish_at: null
  published_at: string
  slug: string
  status: string
  thumbnail: string
  title: string
  type_slug: string
  unpublish_at: any | null
  _id: string
}

export interface CosmicImage {
  imgix_url: string | null
  url: string | null
}

export interface Category {
  // eslint-disable-next-line @typescript-eslint/camelcase
  _id: string
  slug: string
  title: string
}

export interface Item {
  slug: string
  title: string
}

export interface Page {
  slug: string
  title: string
}
