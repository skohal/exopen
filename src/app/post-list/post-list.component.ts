import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    @Input() Title: string;
    @Input() Content: string;
    @Input() loveIts: number;
    @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

}
