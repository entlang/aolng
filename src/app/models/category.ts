export interface Category {
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
    subCategories: SubCategory[];
}

interface SubCategory {
    name: string;
    icon: string;
    url: string;
    iconSize: string;
    tooltipSide: string;
}
