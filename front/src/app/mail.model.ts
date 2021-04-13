export class Mail{
    constructor(
        public subject?: string,
        public content?: string,
        public email_address?: string,
        public name?: string,
        public company?: string,
    ){}
}
