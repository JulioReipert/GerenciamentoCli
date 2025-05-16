import { Component } from '@angular/core';
import { Cliente, ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    rg: '',
    cnpj: '',
    ie: ''
  };

  mensagemSucesso = '';
  mensagemErro = '';

  constructor(private clienteService: ClienteService) {}

  salvar(): void {
    this.clienteService.criarCliente(this.cliente).subscribe({
      next: () => {
        this.mensagemSucesso = 'Cliente criado com sucesso!';
        this.mensagemErro = '';
        this.cliente = { nome: '', cpf: '', rg: '', cnpj: '', ie: '' };
      },
      error: () => {
        this.mensagemErro = 'Erro ao criar cliente.';
        this.mensagemSucesso = '';
      }
    });
  }
}
