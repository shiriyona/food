export class Recipe {
    id: number;
    title: string;
    img: string;
    time: string;
    preparation: string;
    serving: string;
    recipeSteps: [{order: number, step: string}];
    ingredients: [{name: string}]

    constructor( id: number, title: string, img: string, time: string, preparation: string, serving: string,
        recipeSteps: [{order: number, step: string}], ingredients: [{name: string}]) {
            this.id = id;
        this.title = title;
        this.img = img;
        this.time = time;
        this.preparation = preparation
        this.serving = serving;
        this.recipeSteps = recipeSteps;
        this.ingredients = ingredients;
    }
}