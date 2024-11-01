import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

 
}
