import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];
  errorMsg = '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: data => this.clientes = data,
      error: err => this.errorMsg = 'Erro ao carregar clientes'
    });
  }

  deletarCliente(id: number | undefined): void {
    if (!id) return;
    this.clienteService.deletarCliente(id).subscribe({
      next: () => this.clientes = this.clientes.filter(c => c.id !== id),
      error: () => this.errorMsg = 'Erro ao deletar cliente'
    });
  }
}
