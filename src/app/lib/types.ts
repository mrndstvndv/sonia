interface Artist {
  name: string
}

interface Thumbnail {
  url: string
  width: number
  height: number
}

interface Content {
  type: string
  albumId: string | null
  playlistId: string | null
  name: string
  artist: Artist
  thumbnails: Thumbnail[]
}

export interface Section {
  title: string
  contents: Content[]
}
