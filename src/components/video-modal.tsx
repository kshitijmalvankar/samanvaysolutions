"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoId?: string; // YouTube video ID
    videoSrc?: string; // Direct video source
}

export function VideoModal({
    isOpen,
    onClose,
    videoId,
    videoSrc,
}: VideoModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] p-0 bg-black border-none overflow-hidden aspect-video">
                <DialogTitle className="sr-only">Video Player</DialogTitle>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
                <div className="w-full h-full">
                    {videoId ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    ) : videoSrc ? (
                        <video
                            src={videoSrc}
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                        />
                    ) : null}
                </div>
            </DialogContent>
        </Dialog>
    );
}
