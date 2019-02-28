import { Component } from "@angular/core";
import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";
import { SettingsService } from "../../services/settings";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage{
    favPage = FavoritesPage;
    libPage = LibraryPage;

    constructor(
        private settingsService: SettingsService
    ){}

    getselectedPageIndex(){
        return this.settingsService.getSelectedPageIndex();
    }
}