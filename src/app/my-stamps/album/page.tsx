import Stamp from "@/components/ui/stamp";
import Image from "next/image";

const itemsMock = [
  {
    id: 1,
    title: "Album 1",
    artist: "Artist 1",
    image: "https://picsum.photos/seed/1/200/200",
    has_listened: false,
  },
  {
    id: 2,
    title: "Album 2",
    artist: "Artist 2",
    image: "https://picsum.photos/seed/2/200/200",
    has_listened: false,
  },
  {
    id: 3,
    title: "Album 3",
    artist: "Artist 3",
    image: "https://picsum.photos/seed/3/200/200",
    has_listened: false,
  },
  {
    id: 4,
    title: "Album 4",
    artist: "Artist 4",
    image: "https://picsum.photos/seed/4/200/200",
    has_listened: false,
  },
  {
    id: 5,
    title: "Album 5",
    artist: "Artist 5",
    image: "https://picsum.photos/seed/5/200/200",
    has_listened: false,
  },
  {
    id: 6,
    title: "Album 6",
    artist: "Artist 6",
    image: "https://picsum.photos/seed/6/200/200",
    has_listened: false,
  },
  {
    id: 7,
    title: "Album 7",
    artist: "Artist 7",
    image: "https://picsum.photos/seed/7/200/200",
    has_listened: false,
  },
  {
    id: 8,
    title: "Album 8",
    artist: "Artist 8",
    image: "https://picsum.photos/seed/8/200/200",
    has_listened: false,
  },
  {
    id: 9,
    title: "Album 9",
    artist: "Artist 9",
    image: "https://picsum.photos/seed/9/200/200",
    has_listened: true,
  },
  {
    id: 10,
    title: "Album 10",
    artist: "Artist 10",
    image: "https://picsum.photos/seed/10/200/200",
    has_listened: false,
  },
  {
    id: 11,
    title: "Album 11",
    artist: "Artist 11",
    image: "https://picsum.photos/seed/11/200/200",
    has_listened: false,
  },
  {
    id: 12,
    title: "Album 12",
    artist: "Artist 12",
    image: "https://picsum.photos/seed/12/200/200",
    has_listened: false,
  },
  {
    id: 13,
    title: "Album 13",
    artist: "Artist 13",
    image: "https://picsum.photos/seed/13/200/200",
    has_listened: true,
  },
  {
    id: 14,
    title: "Album 14",
    artist: "Artist 14",
    image: "https://picsum.photos/seed/14/200/200",
    has_listened: false,
  },
  {
    id: 15,
    title: "Album 15",
    artist: "Artist 15",
    image: "https://picsum.photos/seed/15/200/200",
    has_listened: false,
  },
  {
    id: 16,
    title: "Album 16",
    artist: "Artist 16",
    image: "https://picsum.photos/seed/16/200/200",
    has_listened: false,
  },
  {
    id: 17,
    title: "Album 17",
    artist: "Artist 17",
    image: "https://picsum.photos/seed/17/200/200",
    has_listened: false,
  },
  {
    id: 18,
    title: "Album 18",
    artist: "Artist 18",
    image: "https://picsum.photos/seed/18/200/200",
    has_listened: false,
  },
  {
    id: 19,
    title: "Album 19",
    artist: "Artist 19",
    image: "https://picsum.photos/seed/19/200/200",
    has_listened: false,
  },
  {
    id: 20,
    title: "Album 20",
    artist: "Artist 20",
    image: "https://picsum.photos/seed/20/200/200",
    has_listened: false,
  },
  {
    id: 21,
    title: "Album 21",
    artist: "Artist 21",
    image: "https://picsum.photos/seed/21/200/200",
    has_listened: false,
  },
  {
    id: 22,
    title: "Album 22",
    artist: "Artist 22",
    image: "https://picsum.photos/seed/22/200/200",
    has_listened: false,
  },
  {
    id: 23,
    title: "Album 23",
    artist: "Artist 23",
    image: "https://picsum.photos/seed/23/200/200",
    has_listened: false,
  },
  {
    id: 24,
    title: "Album 24",
    artist: "Artist 24",
    image: "https://picsum.photos/seed/24/200/200",
    has_listened: false,
  },
  {
    id: 25,
    title: "Album 25",
    artist: "Artist 25",
    image: "https://picsum.photos/seed/25/200/200",
    has_listened: false,
  },
  {
    id: 26,
    title: "Album 26",
    artist: "Artist 26",
    image: "https://picsum.photos/seed/26/200/200",
    has_listened: true,
  },
  {
    id: 27,
    title: "Album 27",
    artist: "Artist 27",
    image: "https://picsum.photos/seed/27/200/200",
    has_listened: true,
  },
  {
    id: 28,
    title: "Album 28",
    artist: "Artist 28",
    image: "https://picsum.photos/seed/28/200/200",
    has_listened: false,
  },
  {
    id: 29,
    title: "Album 29",
    artist: "Artist 29",
    image: "https://picsum.photos/seed/29/200/200",
    has_listened: false,
  },
  {
    id: 30,
    title: "Album 30",
    artist: "Artist 30",
    image: "https://picsum.photos/seed/30/200/200",
    has_listened: true,
  },
  {
    id: 31,
    title: "Album 31",
    artist: "Artist 31",
    image: "https://picsum.photos/seed/31/200/200",
    has_listened: false,
  },
];

const AlbumStamps = () => {
  return (
    <div className="grid md:grid-cols-5 lg:grid-cols-7 grid-cols-2 gap-6 w-full">
      {itemsMock.map((item) => {
        return item.has_listened ? (
          <Stamp key={item.id}>
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={`Stamp ${item.id}`}
            />
            <div className="flex flex-col mt-2">
              <h4 className="text-xs font-bold">{item.title}</h4>
              <span className="text-xs">{item.artist}</span>
            </div>
          </Stamp>
        ) : (
          <div
            key={item.id}
            className="p-2 w-fit border border-dashed border-black"
          >
            <Image
              className="size-[118px] md:size-[200] grayscale"
              width={200}
              height={200}
              src={item.image}
              alt={`Stamp ${item.id}`}
            />
            <div className="flex flex-col mt-2">
              <h4 className="text-xs font-bold">{item.title}</h4>
              <span className="text-xs">{item.artist}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumStamps;
