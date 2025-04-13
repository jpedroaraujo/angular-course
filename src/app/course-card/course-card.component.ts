import { Component, Input, input, signal } from '@angular/core';
import { Course } from '../model/course';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  course = input<Course>();
  isBold = signal(false)

  toggleBold() {
    this.isBold.update(isBold => !isBold);
  }
}
