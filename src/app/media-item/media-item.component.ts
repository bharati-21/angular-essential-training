import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem: any;
  @Output() delete = new EventEmitter();

  onDelete() {
    alert('Delete was clicked!');
    this.delete.emit(this.mediaItem);
  }
}
