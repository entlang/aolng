export interface Categories {
    name: string;
    nameLines: string[];
    isCatItem: boolean;
    catTitle: string;
    catIndex: number;
    color: string;
    icon: string;
    image: string;
    url: string;
    className: string;
    subCategories: SubCategories[];
}

interface SubCategories {
    name: string;
    icon: string;
    url: string;
    iconSize: string;
    tooltipSide: string;
}
