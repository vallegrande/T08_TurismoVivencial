import { Component, Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() color = 'primary'; // por ejemplo: 'primary', 'accent', 'warn', o cualquier clase CSS
  @Input() route: string | null = null;
  @Input() disabled = false;

  constructor(private router: Router) {}

  onClick() {
    if (this.route && !this.disabled) {
      this.router.navigate([this.route]);
    }
  }
}
