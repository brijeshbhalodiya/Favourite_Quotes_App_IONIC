import { Quote } from "../data/quotes.interface";

export class QuotesService{
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorite(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorite(quote: Quote){
        const position = this.favoriteQuotes.findIndex((q: Quote)=> {
            return q.id == quote.id;
        });

        this.favoriteQuotes.splice(position, 1);
    }

    getFavoritesQuotes(){
        return this.favoriteQuotes.slice();
    }
}