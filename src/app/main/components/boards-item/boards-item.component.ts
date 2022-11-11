import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards-item',
  templateUrl: './boards-item.component.html',
  styleUrls: ['./boards-item.component.scss'],
})
export class BoardsItemComponent implements OnInit {
  @Input() board: any;

  @Output() deleteBoard = new EventEmitter();

  @Output() editBoard = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toBoard() {
    this.router.navigate(['board', this.board.id]);
  }

  deleteCard(event: Event): void {
    event.stopPropagation();
    this.deleteBoard.emit(this.board.id);
  }

  editCard(event: Event): void {
    event.stopPropagation();
    this.editBoard.emit(this.board.id);
  }
}
