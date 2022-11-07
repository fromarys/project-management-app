import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {}
}
