export function formatPokemonName(name: string): string {
    let formattedName = name.replaceAll('-', '');
    
    if (formattedName.includes('♀')) {
        formattedName = formattedName.replace('♀', '-f');
    } else if (formattedName.includes('♂')) {
        formattedName = formattedName.replace('♂', '-m');
    } else if (formattedName.includes('. ')) {
        formattedName = formattedName.replace('. ', '-');
    } else if (formattedName.includes("farfetch'd")) {
        formattedName = formattedName.replace("farfetch'd", "farfetchd");
    }
    
    return formattedName;
}

export function waitFor(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
}

