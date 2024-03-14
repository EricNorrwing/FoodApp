export interface Recipe {
    _id?: string,  
    title: string,
    description: string,
    ratings?: Ratings,
    imageUrl: string,
    timeInMins?: number,
    categories: string[], 
    instructions: string[],
    ingredients: Ingredient
}


export interface Ingredient {
    name: string,
    amount: number,
    unit: string
}


export interface Ratings {
    rating: number,

}