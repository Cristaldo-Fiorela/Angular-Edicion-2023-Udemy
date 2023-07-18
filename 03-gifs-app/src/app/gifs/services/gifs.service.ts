import { Injectable } from '@angular/core';

// al trabajar con root hace que sea disponible para toda la app sin import/export
@Injectable({providedIn: 'root'}) 
export class GifsService {

    private _tagHistory: string[] = [];

    constructor() { }
    
    get tagsHistory() {
        return [...this._tagHistory];
    }

    searchTag( tag: string ): void {
        this._tagHistory.unshift( tag );
    }
}