import ArtistCard from "./artist-card";
import { Range } from "@/types/spotifyTypes";
import { getFavArtists } from "@/data/spotifystats";
import { Session } from "next-auth";

type ArtistsWrapperProps = {
    session: Session;
    range: Range;
};

export default async function ArtistsWrapper({ session, range }: ArtistsWrapperProps) {
    const artists = await getFavArtists({ token: session.accessToken, range });
    return (
        <>
            <section className="flex flex-wrap gap-3 justify-center">
                {artists?.items.map((artist, index) => <ArtistCard key={artist.id} artist={artist} ranking={index} />)}
            </section>
        </>
    );
}
