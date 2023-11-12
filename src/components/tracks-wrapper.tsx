import { Range } from "@/types/spotifyTypes";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getFavTracks } from "@/data/spotifystats";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import ButtonPlaylist from "@/components/button-playlist";

type TracksWrapperProps = {
    session: Session;
    range: Range;
};

export default async function TracksWrapper({ session, range }: TracksWrapperProps) {
    const tracks = await getFavTracks({ token: session.accessToken, range });

    return (
        <>
            <ButtonPlaylist token={session.accessToken} range={range} user_id={session.id} tracks={tracks} />
            <Table>
                <TableCaption>A list of your recent listened tracks</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Ranking</TableHead>
                        <TableHead>Track&apos;s name</TableHead>
                        <TableHead>Artist(s)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tracks?.items.map((track, index) => (
                        <TableRow key={track.id}>
                            <TableCell className="font-medium flex items-center gap-3">
                                #{index + 1}
                                <Link target="_blank" href={track.external_urls.spotify} className="w-[50px]">
                                    <Image
                                        className="rounded-lg shadow-lg"
                                        width={50}
                                        height={50}
                                        src={track.album.images ? track.album.images[2].url : ""}
                                        alt={track.name}
                                    />
                                </Link>
                            </TableCell>
                            <TableCell>{track.name}</TableCell>
                            <TableCell>
                                {track.artists.map((artist) => (
                                    <Badge key={artist.id} variant="secondary" className="m-1">
                                        <Link target="_blank" href={artist.external_urls.spotify}>
                                            {artist.name}
                                        </Link>
                                    </Badge>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
