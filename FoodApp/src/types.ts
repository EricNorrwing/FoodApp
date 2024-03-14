export interface Recipe {
    _id?: string, 

    title: string,
    description: string,

    rating?: Rating,
    imageUrl: string,
    timeInMins?: number,
    categories: string[], 
    instructions: string[],
    completed?: boolean,
    ingredients: Ingredient
}


export interface Ingredient {
    name: string,
    amount: number,
    unit: string
}


export interface Rating {
    rating: number,
}