import { Client } from "./Client.model";

export class Batiment {
    constructor(public Client: Client,
        public Id?: Number,

        public Adresse?: string,
        public Ville?: string,
        public CodePostal?: number) { }
}