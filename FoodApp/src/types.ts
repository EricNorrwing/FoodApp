export interface Recipe {
    _id?: string,
    title: string,
    description: string,
    ratings: number[],
    imageURL: string,
    timeInMins: number,
    categories: string[],
    instructions: string[],
    ingredients: Ingredient[]
}

export interface Ingredient {
    name: string,
    amount: number, 
    unit: string
}

export interface Ratings {
    ratings: number
}