import React, { useMemo, useState } from "react";
import {
  Users as UsersIcon,
  Hash,
  Plus,
  Check,
  Search as SearchIcon,
  TrendingUp,
} from "lucide-react";

/**
 * CommunityOverview
 *
 * - Replace `communities` array with data from your DB when ready.
 * - Styling uses Tailwind CSS classes (gradient: purple -> blue; blue accents).
 * - Join state is local for now (simulate join/unjoin). Replace with API calls.
 */

const communities = [
  {
    id: "c1",
    name: "Afrobeats Collective",
    handle: "afrobeats",
    description: "A place for Afrobeats lovers: new releases, threads, and collabs.",
    members: 12425,
    posts: 1284,
    trending: true,
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=60",
    avatars: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/85.jpg",
    ],
  },
  {
    id: "c2",
    name: "Indie Vibes",
    handle: "indie-vibes",
    description: "Discover indie artists, share demos, and weekly playlists.",
    members: 8423,
    posts: 732,
    trending: false,
    cover:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1200&q=60",
    avatars: [
      "https://randomuser.me/api/portraits/women/22.jpg",
      "https://randomuser.me/api/portraits/men/19.jpg",
    ],
  },
  {
    id: "c3",
    name: "Producer Hub",
    handle: "producers",
    description: "Beatmakers, sound designers, and sample-hunters unite.",
    members: 15600,
    posts: 4120,
    trending: true,
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=60",
    avatars: [
      "https://randomuser.me/api/portraits/men/70.jpg",
      "https://randomuser.me/api/portraits/women/68.jpg",
      "https://randomuser.me/api/portraits/men/85.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
    ],
  },
  {
    id: "c4",
    name: "Live Sessions",
    handle: "live-sessions",
    description: "Share live recordings and discuss setups and rigs.",
    members: 3980,
    posts: 210,
    trending: false,
    cover:
      "https://images.unsplash.com/photo-1464375117522-1311d6a2f698?w=1200&q=60",
    avatars: ["https://randomuser.me/api/portraits/men/12.jpg"],
  },
  {
    id: "c5",
    name: "Global DJs",
    handle: "global-djs",
    description: "Mixes, sets, and DJ tips from around the globe.",
    members: 7100,
    posts: 932,
    trending: true,
    cover:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=1200&q=60",
    avatars: [
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/women/55.jpg",
    ],
  },
  {
    id: "c6",
    name: "Songwriters Circle",
    handle: "songwriters",
    description: "Lyrics, workshops, and co-write opportunities.",
    members: 2900,
    posts: 110,
    trending: false,
    cover:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=60",
    avatars: ["https://randomuser.me/api/portraits/women/77.jpg"],
  },
  {
    id: "c7",
    name: "Vintage Vinyl",
    handle: "vinyl",
    description: "Collectors, crate-diggers, and analog lovers.",
    members: 5300,
    posts: 420,
    trending: false,
    cover:
      "https://images.unsplash.com/photo-1519669556878-6c8a4f0c95b3?w=1200&q=60",
    avatars: [
      "https://randomuser.me/api/portraits/men/21.jpg",
      "https://randomuser.me/api/portraits/women/31.jpg",
    ],
  },
];

export default function CommunityOverview() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all"); // all | trending | most-members
  // local join state (simulate server state). Keys: communityId -> boolean
  const [joined, setJoined] = useState({});

  // Derived, filtered list
  const filtered = useMemo(() => {
    let list = communities;

    // search by name or handle or description
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.handle.toLowerCase().includes(q) ||
          (c.description && c.description.toLowerCase().includes(q))
      );
    }

    // apply filter
    if (filter === "trending") list = list.filter((c) => c.trending);
    if (filter === "most-members")
      list = [...list].sort((a, b) => b.members - a.members);

    return list;
  }, [query, filter]);

  // Toggle join/unjoin (replace with API call)
  const toggleJoin = (id) => {
    setJoined((prev) => ({ ...prev, [id]: !prev[id] }));
    // TODO: call your API here to persist join/unjoin
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Communities</h1>
          <p className="text-sm text-gray-500 mt-1">
            Browse and join music communities—discover groups, mixes, and
            conversations you’ll love.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              aria-label="Search communities"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-blue-300 outline-none text-sm"
              placeholder="Search communities, tags, or handles..."
            />
          </div>

          {/* Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="ml-2 rounded-lg bg-white border border-gray-200 text-sm py-2 px-3 focus:ring-2 focus:ring-blue-300 outline-none"
            aria-label="Filter communities"
          >
            <option value="all">All</option>
            <option value="trending">Trending</option>
            <option value="most-members">Most members</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c) => (
          <article
            key={c.id}
            className="relative bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col"
            aria-labelledby={`community-${c.id}-title`}
          >
            {/* Cover image */}
            <div
              className="h-36 sm:h-40 bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(79,70,229,0.15), rgba(99,102,241,0.05)), url(${c.cover})`,
              }}
              role="img"
              aria-hidden="true"
            />

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2
                      id={`community-${c.id}-title`}
                      className="text-lg font-semibold"
                    >
                      {c.name}
                    </h2>
                    <p className="text-xs text-gray-400">@{c.handle}</p>
                  </div>

                  {/* Trending badge */}
                  {c.trending && (
                    <div className="flex items-center gap-1 text-xs bg-gradient-to-r from-purple-600 to-blue-500 text-white px-2 py-1 rounded-full">
                      <TrendingUp className="w-4 h-4" />
                      <span>Trending</span>
                    </div>
                  )}
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {c.description}
                </p>

                {/* avatars + stats */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2 items-center">
                    {c.avatars.map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        loading="lazy"
                      />
                    ))}
                    {/* small "and X more" */}
                    {c.members > c.avatars.length * 100 && (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600 border-2 border-white">
                        +{Math.round(c.members / 100)}
                      </div>
                    )}
                  </div>

                  <div className="text-right text-xs text-gray-500">
                    <div className="flex items-center gap-2 justify-end text-xs">
                      <UsersIcon className="w-4 h-4 text-gray-400" />
                      <span>{Intl.NumberFormat().format(c.members)}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-end text-xs mt-1">
                      <Hash className="w-4 h-4 text-gray-400" />
                      <span>{Intl.NumberFormat().format(c.posts)} posts</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => toggleJoin(c.id)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    joined[c.id]
                      ? "bg-white text-blue-600 border border-blue-600"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  aria-pressed={!!joined[c.id]}
                >
                  {joined[c.id] ? (
                    <>
                      <Check className="w-4 h-4" />
                      Joined
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Join
                    </>
                  )}
                </button>

                <a
                  href={`/community/${c.handle}`}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  View
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* footer: three dots loader (more) */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-2 text-gray-400">
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
