import { LinksJson } from 'src/app/types/link.type';
import { LinksService } from './../../services/links.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  links: LinksJson = [];

  constructor(private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService.getJsonData().subscribe(data => {
      this.links = data.links;
    });
  }
}
