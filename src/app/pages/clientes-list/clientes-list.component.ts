import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-clientes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];
  private clienteService = inject(ClienteService);

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next: (res) => this.clientes = res,
      error: (err) => console.error('Erro ao buscar clientes', err)
    });
  }

  deletar(id: number): void {
    if (confirm('Deseja realmente excluir este cliente?')) {
      this.clienteService.deletarCliente(id).subscribe({
        next: () => this.clientes = this.clientes.filter(c => c.id !== id),
        error: (err) => console.error('Erro ao excluir cliente', err)
      });
    }
  }
}
