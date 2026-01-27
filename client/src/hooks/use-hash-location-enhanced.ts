import { useState, useEffect, useCallback } from "react";
import { BaseLocationHook, navigate } from "wouter/use-location";

// Updates the hash, preserving the history state logic from standard wouter behavior
const navigateHash = (to: string, { replace = false } = {}) => {
    if (replace) {
        location.replace("#" + to);
    } else {
        location.hash = to;
    }
};

export const useHashLocationEnhanced: BaseLocationHook = ({
    ssrPath = "/",
} = {}) => {
    const hashLocation = () => {
        // Check if we are in a browser environment
        if (typeof window === "undefined") {
            return ssrPath || "/";
        }
        const fullHash = window.location.hash.replace(/^#/, "") || "/";
        // Split by ? to separate path from query string, and # to separate anchor
        const [routePath] = fullHash.split("?")[0].split("#");
        const finalPath = routePath || "/";
        // console.log("[HashHook] Full:", fullHash, "Route:", finalPath);
        return finalPath;
    };

    const [path, updatePath] = useState(hashLocation);

    const listen = useCallback(() => {
        const currentPath = hashLocation();
        updatePath(currentPath);
    }, []);

    useEffect(() => {
        window.addEventListener("hashchange", listen);
        return () => window.removeEventListener("hashchange", listen);
    }, [listen]);

    return [path, navigateHash];
};
