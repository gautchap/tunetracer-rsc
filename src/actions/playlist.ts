"use server";

import { fetcher } from "@/data/fetcher";
import { addTracksToPlaylistResponseSchema, CreatePlaylistResponseSchema } from "@/types/spotifyTypes";

type createPlaylistType = {
    token: string;
    user_id: string;
    name: string;
    description: string;
    uris: string[];
};

export async function createPlaylist({ name, description, token, user_id, uris }: createPlaylistType) {
    const playlist = await fetcher(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
            name,
            description,
        },
        zodSchema: CreatePlaylistResponseSchema,
    });

    return fetcher(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
            uris,
        },
        zodSchema: addTracksToPlaylistResponseSchema,
    });
}
