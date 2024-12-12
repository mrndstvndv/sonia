export type Song = {
  songName: string;
  songUrl: string;
  artist: string;
  imageUrl: string;
  lyrics: string[];
}

export type Playlist = {
  title: string;
  songs: Song[];
}

export const songs: Song[] = [
  {
    songName: "Reflect",
    artist: "Gawr Gura",
    imageUrl: "/assets/songs/reflect.jpg",
    songUrl: "/assets/songs/reflect.opus",
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
    songUrl: "/assets/songs/eraser.opus",
    lyrics: [
      "Lift your head, baby, don't be scared",
      "Of the things that could go wrong along the way",
      "You'll get by with a smile",
      "You can't win at everything but you can try",
      "",
      "Baby, you don't have to worry",
      "'Cause there ain't no need to hurry",
      "No one ever said that there's an easy way",
      "When they're closing all their doors",
      "And they don't want you anymore",
      "This sounds funny but I'll say it anyway",
      "",
      "Girl, I'll stay through the bad times",
      "Even if I have to fetch you everyday",
      "You'll get by if you smile",
      "You can never be too happy in this life",
      "",
      "In a world where everybody hates a happy ending story",
      "It's a wonder love can make the world go 'round",
      "But don't let it bring you down and turn your face into a frown",
      "You'll get along with a little prayer and a song",
      "",
      "(To-do-do-do)",
      "(To-do-do-do)",
      "(To-do-do-do, do-do)",
      "(Do-do, do-do)",
      "Let me hear you sing it",
      "(To-do-do-do)",
      "(To-do-do-do)",
      "(To-do-do-do, do-do)",
      "(Do-do, do-do)",
      "",
      "'Cause in a world where everybody hates a happy ending story",
      "It's a wonder love can make the world go 'round",
      "But don't let it bring you down and turn your face into a frown",
      "You'll get along with a little prayer and a song",
      "",
      "Lift your head, baby, don't be scared",
      "Of the things that could go wrong along the way",
      "You'll get by with a smile",
      "Now it's time to kiss away those tears goodbye",
      "",
      "(To-do-do-do)",
      "(To-do-do-do)",
      "(To-do-do-do, do-do)",
      "(Do-do, do-do)",
      "Let me hear you sing it",
      "(To-do-do-do)",
      "(To-do-do-do)",
      "(To-do-do-do, do-do)",
      "(Do-do, do-do)",
      "",
      "(To-do-do-do)",
      "(To-do-do-do)",
      "(To-do-do-do, do-do)",
      "(Do-do, do-do)",
      "(To-do-do-do)",
      "(To-do-do-do)",
      "(To-do-do-do, do-do)",
      "(Do-do, do-do)",
      "",
      "(To-do-do-do)",
      "(To-do-do-do)",
      "(To-do-do-do, do-do)",
      "(Do-do, do-do)",
      "",
      "With a smile"
    ]
  },
  {
    songName: "Blue",
    artist: "yung kai",
    imageUrl: "/assets/songs/blue.jpg",
    songUrl: "/assets/songs/blue.opus",
    lyrics: [
      "Your morning eyes, I could stare like watching stars",
      "I could walk you by, and I'll tell without a thought",
      "You'd be mine",
      "Would you mind if I took your hand tonight",
      "Know you're all that I want - this life",
      "",
      "I'll imagine we fell in love",
      "I'll nap under moonlight skies with you",
      "I think I'll picture us, you with the waves",
      "The ocean's colors on your face",
      "I'll leave my heart with your air",
      "So let me fly with you",
      "Will you be forever with me?",
      "",
      "My love will always stay by you",
      "I'll keep it safe, so don't you worry a thing",
      "I'll tell you I love you more",
      "It's stuck with you forever, so promise you won't let it go",
      "I'll trust the universe will always bring me to you",
      "",
      "I'll imagine we fell in love",
      "I'll nap under moonlight skies with you",
      "I think I'll picture us, you with the waves",
      "The ocean's colors on your face",
      "I'll leave my heart with your air",
      "So let me fly with you",
      "Will you be forever with me?"
    ]
  },
  {
    songName: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    imageUrl: "/assets/songs/diewithasmile.jpg",
    songUrl: "/assets/songs/diewithasmile.opus",
    lyrics: [
      "Ooh",
      "",
      "I, I just woke up from a dream",
      "Where you and I had to say goodbye",
      "And I don't know what it all means",
      "But since I survived, I realized",
      "",
      "Wherever you go, that's where I'll follow",
      "Nobody's promised tomorrow",
      "So I'ma love you every night like it's the last night",
      "Like it's the last night",
      "",
      "If the world was ending, I'd wanna be next to you",
      "If the party was over and our time on Earth was through",
      "I'd wanna hold you just for a while and die with a smile",
      "If the world was ending, I'd wanna be next to you",
      "",
      "Ooh",
      "",
      "Oh, lost, lost in the words that we scream",
      "I don't even wanna do this anymore",
      "'Cause you already know what you mean to me",
      "And our love's the only war worth fighting for",
      "",
      "Wherever you go, that's where I'll follow",
      "Nobody's promised tomorrow",
      "So I'ma love you every night like it's the last night",
      "Like it's the last night",
      "",
      "If the world was ending, I'd wanna be next to you",
      "If the party was over and our time on Earth was through",
      "I'd wanna hold you just for a while and die with a smile",
      "If the world was ending, I'd wanna be next to you",
      "",
      "Right next to you",
      "Next to you",
      "Right next to you",
      "Oh-oh, oh",
      "",
      "If the world was ending, I'd wanna be next to you",
      "If the party was over and our time on Earth was through",
      "I'd wanna hold you just for a while and die with a smile",
    ]
  },
  {
    songName: "Twinkling Ash",
    artist: "Regallily",
    imageUrl: "/assets/songs/twinklingash.jpg",
    songUrl: "/assets/songs/reflect.opus",
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

export const playlists = [
  {
    title: "J-Pop",
    songs: songs
  },
  {
    title: "Medieval Like",
    songs: songs
  }
]
