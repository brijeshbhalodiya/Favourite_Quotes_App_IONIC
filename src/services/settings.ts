export class SettingsService{
     private altBackground = false;
     private currentIndex = 0;

     setBackground(isAlt: boolean){
         this.altBackground = isAlt;
     }

     isAltBackground(){
         return this.altBackground;
     }

     changeOfSelectedPageIndex(){
         this.currentIndex = 1;
     }

     getSelectedPageIndex(){
         return this.currentIndex;
     }
}