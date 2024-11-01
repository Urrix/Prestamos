import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  selectedFile: File | null = null;

  constructor(private authService: AuthService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Guarda la imagen en el AuthService para usarla en el navbar
        this.authService.updateUserAvatar(e.target.result);
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
