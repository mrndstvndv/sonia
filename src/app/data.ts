export type Song = {
  songName: string;
  artist: string;
  imageUrl: string;
  lyrics: string[];
}

export const songs = [
  {
    songName: "Reflect",
    artist: "Gawr Gura",
    imageUrl: "/assets/songs/reflect.jpg",
    lyrics: [
      'Εκ λόγου άλλος εκβαίνει λόγος',
      '水面に映る自分が言った',
      '「ああ わたしは悪いサメです」',
      'ずっと恐れていた 赤く光るその目',
      '海の底 暗闇に消えていく',
      'どうして (Your tired eyes)',
      '落ちてゆく (Begin to fall)'
    ]
  },
  {
    songName: "With A Smile",
    artist: "Eraserheads",
    imageUrl: "/assets/songs/eraser.jpg",
    lyrics: [
      'Εκ λόγου άλλος εκβαίνει λόγος',
      '水面に映る自分が言った',
      '「ああ わたしは悪いサメです」',
      'ずっと恐れていた 赤く光るその目',
      '海の底 暗闇に消えていく',
      'どうして (Your tired eyes)',
      '落ちてゆく (Begin to fall)'
    ]
  },
  {
    songName: "Blue",
    artist: "yung kai",
    imageUrl: "/assets/songs/blue.jpg",
    lyrics: [
      'Εκ λόγου άλλος εκβαίνει λόγος',
      '水面に映る自分が言った',
      '「ああ わたしは悪いサメです」',
      'ずっと恐れていた 赤く光るその目',
      '海の底 暗闇に消えていく',
      'どうして (Your tired eyes)',
      '落ちてゆく (Begin to fall)'
    ]

  },
  {
    songName: "Twinkling Ash",
    artist: "Regallily",
    imageUrl: "/assets/songs/twinklingash.jpg",
    lyrics: [
      'Εκ λόγου άλλος εκβαίνει λόγος',
      '水面に映る自分が言った',
      '「ああ わたしは悪いサメです」',
      'ずっと恐れていた 赤く光るその目',
      '海の底 暗闇に消えていく',
      'どうして (Your tired eyes)',
      '落ちてゆく (Begin to fall)'
    ]

  }
]

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
