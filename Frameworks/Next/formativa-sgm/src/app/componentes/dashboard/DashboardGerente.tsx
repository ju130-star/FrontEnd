"use client";
import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

const DashboardGerente: React.FC = () => {
  return (
    <Grid container spacing={3} style={{ marginTop: "16px" }}>
      <Grid item xs={12}>
        <h2 style={{ marginBottom: "16px" }}>Dashboard do Gerente</h2>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <h3>Ordens de Serviço</h3>
            <div style={{ fontSize: "2rem", color: "#1976d2", fontWeight: "bold" }}>
              {/* Valor dinâmico */}
              120
            </div>
            <span>Total de ordens registradas</span>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <h3>Equipamentos</h3>
            <div style={{ fontSize: "2rem", color: "#1976d2", fontWeight: "bold" }}>
              {/* Valor dinâmico */}
              45
            </div>
            <span>Total de equipamentos</span>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <h3>Funcionários Ativos</h3>
            <div style={{ fontSize: "2rem", color: "#1976d2", fontWeight: "bold" }}>
              {/* Valor dinâmico */}
              8
            </div>
            <span>Total de funcionários</span>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <h3>Atividades Recentes</h3>
            {/* Lista de atividades recentes */}
            <span>Nenhuma atividade recente.</span>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardGerente;