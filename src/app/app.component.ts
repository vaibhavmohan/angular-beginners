import { Component } from '@angular/core';
import {favouriteEventArgs} from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reusable';
  post = {
    title:"title",
    isFavourite:true
  }
  courses: any;

  loadCourses(){
    this. courses= [{
      id:1,
      name:"Literature"
    },{
      id:2,
      name:"History"
    },{
      id:3,
      name:"Hindi"
    }];
  }

  onFavouriteChange(eventArgs: favouriteEventArgs){
    console.log("Favourite changed: ",eventArgs.newValue)
  }

    removeCourse(course:{}){
      let index = this.courses.indexOf(course);
      this.courses.splice(index,1);
    }

    trackCourse(index:number,course:{id:number,name:string}){
      return course ? course.id : undefined;
    }
}
