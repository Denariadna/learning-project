type Modes = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Modes = {},
    additional: Array<string | undefined > = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
