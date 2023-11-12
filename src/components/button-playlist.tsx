"use client";

import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { createPlaylist } from "@/actions/playlist";
import { FavTracksType, Range } from "@/types/spotifyTypes";

type ButtonPlaylistProps = {
    token: string;
    range: Range;
    user_id: string;
    tracks: FavTracksType;
};

export default function ButtonPlaylist({ token, range, user_id, tracks }: ButtonPlaylistProps) {
    const [isLoading, setIsLoading] = useState(false);

    const { toast } = useToast();

    const handlePlaylist = async () => {
        setIsLoading(true);
        const today = new Date();

        const text = range === "short_term" ? "last 4 weeks" : range === "medium_term" ? "last 6 months" : "all time";

        const uris = tracks.items?.map((track) => track.uri);

        try {
            await createPlaylist({
                name: `Top tracks ${today.toLocaleDateString()} (${text})`,
                description: `Your favorite tracks ${text} as of ${today.toLocaleDateString()}`,
                token,
                user_id,
                uris,
            });
            toast({
                description: "✅ Votre playlist a été créée avec succès",
            });
        } catch {
            toast({
                variant: "destructive",
                description: "❌ Une erreur est survenue",
            });
        }
        setIsLoading(false);
    };

    return (
        <Button
            disabled={isLoading}
            className="translate-x-[-50%] left-1/2 relative md:static md:translate-x-0"
            onClick={handlePlaylist}
        >
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Create playlist
        </Button>
    );
}
