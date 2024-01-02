export class Food {
    id: string;
    name: string;
    description: string;
    img: string;

    constructor(id:string, name: string, description: string, img: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img = img;
    }
}