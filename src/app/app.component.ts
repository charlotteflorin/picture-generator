import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UnsplashImage } from './unsplash.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'dashboard';
  imageUrl: string='';
  topic: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRandomImage();
  }

  private getRandomImage() {
    const url = `https://api.unsplash.com/photos/random`;
    const headers = {
      Authorization: `Client-ID K6CxcX-6R2iafT7WPlIqufmH5D_CzlKVGa7hYQMXDMw`
    };

    const params = new HttpParams().set('query', this.topic);

    this.http.get<UnsplashImage>(url, { headers, params })
      .subscribe(response => {
        this.imageUrl = response.urls.regular;
      });
}

public OnGetRandomImage(){
  this.getRandomImage();
}

}
