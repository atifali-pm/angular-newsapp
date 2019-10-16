import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  // tslint:disable-next-line:variable-name
  api_key = '0a29c65379d140de941dfa766daa07cb';

  constructor(private http: HttpClient) {
  }

  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }

  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
