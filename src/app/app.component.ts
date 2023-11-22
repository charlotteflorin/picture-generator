import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiStatsResponse, ID, UnsplashImage } from './unsplash.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'dashboard';
  imageUrl: string='';
  topic: string = '';
  test: string = '';
  showStats: boolean =false;
  imageID: string='';
  totalDownloads: number=0;
  totalViews:number=0;
  totalLikes:number=0;
  formatDownloads: string='';
  formatViews: string='';
  formatLikes: string='';
  loadingData: boolean = false;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRandomImage();
    
  }

  private getRandomImage() {
    this.showStats=false;
    const url = `https://api.unsplash.com/photos/random`;
    const headers = {
      Authorization: `Client-ID K6CxcX-6R2iafT7WPlIqufmH5D_CzlKVGa7hYQMXDMw`
    };

    const params = new HttpParams().set('query', this.topic);

    this.http.get<UnsplashImage>(url, { headers, params })
      .subscribe(response => {
        this.imageUrl = response.urls.regular;
        this.imageID= response.id;
        
      });
      this.formatDownloads= '0';
    this.formatViews= '0';
    this.formatLikes='0';
    
            
}


private getPhotoStatistics(){
 

  const url = `https://api.unsplash.com/photos/${this.imageID}/statistics`;
    const headers = {
      Authorization: `Client-ID K6CxcX-6R2iafT7WPlIqufmH5D_CzlKVGa7hYQMXDMw`
    };

    this.http.get<ApiStatsResponse>(url, {headers})
    .subscribe(res=>{
      this.totalDownloads=res.downloads.total;
      this.totalViews=res.views.total;
      this.totalLikes= res.likes.total;
      this.formatDownloads= this.formatNumbers(this.totalDownloads);
     this.formatViews= this.formatNumbers(this.totalViews);
    this.formatLikes=this.formatNumbers(this.totalLikes);

    })

    
    
    
    
  
  
}

private formatNumbers(number:number):string {
  return number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

public OnGetRandomImage(){
  this.getRandomImage();
  
}

public showStatistics(){
  this.showStats= !this.showStats;

}

public handleStatsBtn(){
  this.showStatistics();
  this.getPhotoStatistics();

}



}
