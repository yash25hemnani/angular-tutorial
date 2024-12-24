import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VideoModel } from '../model/Video';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  // We will be create an object of this service in the online-learning .ts file

  apiUrl: string = "https://projectapi.gerasim.in/api/OnlineLearning/"

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get(this.apiUrl + "GetAllVideos")
  }

  saveNewVideo(data: VideoModel) {
    return this.http.post(this.apiUrl + 'AddNewVideo', data)
  }

  updateVideo(data: VideoModel){
    return this.http.put(this.apiUrl + "UpdateVideo", data)
  }

  deleteVideo(videoId: number){
    return this.http.delete(this.apiUrl + "DeleteVideo?videoId=" + videoId)
  }
}
