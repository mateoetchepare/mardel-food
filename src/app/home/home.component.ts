import { Component, OnInit } from '@angular/core';

import { env } from 'environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit { 

  constructor(private sanitizer: DomSanitizer) {
  }

  public googleKey = env.googleApiKey;
  public safeUrl: SafeUrl = ''

  ngOnInit(): void {
    this.sanitizedUrl();
  }

  sanitizedUrl() {
    const url: string = `https://www.google.com/maps/embed/v1/place?key=${this.googleKey}&q=2F62+45&center=-37.989688,-57.549563&zoom=18`
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
