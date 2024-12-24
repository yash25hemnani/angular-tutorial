import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../service/video.service';
import { VideoModel } from '../../model/Video';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-online-learning',
  imports: [FormsModule],
  templateUrl: './online-learning.component.html',
  styleUrl: './online-learning.component.css'
})
export class OnlineLearningComponent implements OnInit {

  videoList: VideoModel [] = [] // Instead of using any, we will be defining the complete data structure.
  videoSer = inject(VideoService);

  videoSaveObject: VideoModel = new VideoModel;

  // ngOnInit - It is a life cycle event.
  // A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.
  ngOnInit(): void { // We are using this as we have to call this function on initialization.
      this.getVideos();
  }

  getVideos() {
    this.videoSer.getVideos().subscribe((result: any) => {
      this.videoList = result.data;
    })
  }

  // Posting Data
  saveForm() {
    console.log(this.videoSaveObject)
    this.videoSer.saveNewVideo(this.videoSaveObject).subscribe((result:any) => {
      if(result.result){
        alert("Video Saved Successfully!");
        this.getVideos()
      } else {
        alert(result)
        console.log(result)
      }
    })
  }

  onEditClick(data: any) {
    this.videoSaveObject = data;
  }

  updateForm(videoId: any){
    console.log(this.videoSaveObject);
    this.videoSer.updateVideo(this.videoSaveObject).subscribe((result:any) => {
      console.log(result)
      if (result.result){
        alert("Updated Succcessfull!")
      } else {
        alert("Some error occured.")
      }
    })
  }

  onDeleteClick(id: number){
    let isDelete = confirm("Are you sure you want to delete?")
    if (isDelete){
      this.videoSer.deleteVideo(id).subscribe((result:any) => {
        if (result.result){
          alert("Deleted Successfully!")
          this.getVideos();
        } else {
          console.log(result)
          alert("Some error Occured");
        }
      })
    } 
  }
}


