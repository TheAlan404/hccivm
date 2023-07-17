export type Logger = {
    log: (s: string) => void;
    info: (s: string) => void;
    warn: (s: string) => void;
    error: (s: string) => void;
    child: (name: string) => Logger;
};

export function createLogger({
    log,
    info,
    warn,
    error,
}: {
    log: (s: string) => void,
    info: (s: string) => void,
    warn: (s: string) => void,
    error: (s: string) => void,
}): Logger {
    log ||= ((s: string) => console.log(s));
    info ||= ((s: string) => console.info(s));
    warn ||= ((s: string) => console.warn(s));
    error ||= ((s: string) => console.error(s));

    let logger: Logger = {
        log,
        info,
        warn,
        error,
        child: (name: string) => createLogger({
            log: (s: string) => log("[" + name + "] " + s),
            info: (s: string) => info("[" + name + "] " + s),
            warn: (s: string) => warn("[" + name + "] " + s),
            error: (s: string) => error("[" + name + "] " + s),
        }),
    };

    return logger;
}