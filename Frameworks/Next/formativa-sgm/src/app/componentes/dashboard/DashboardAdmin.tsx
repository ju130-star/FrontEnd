"use client";
import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

const DashboardAdmin: React.FC = () => {
  return (
    <Grid container spacing={3} style={{ marginTop: "16px" }}>
      <Grid item xs={12}>
        <h2 style={{ marginBottom: "16px" }}>Dashboard do Administrador</h2>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <h3>Usuários</h3>
            <div style={{ fontSize: "2rem", color: "#1976d2", fontWeight: "bold" }}>
              {/* Valor dinâmico */}
              32
            </div>
            <span>Total de usuários cadastrados</span>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <h3>Permissões</h3>
            <div style={{ fontSize: "2rem", color: "#1976d2", fontWeight: "bold" }}>
              {/* Valor dinâmico */}
              5
            </div>
            <span>Tipos de permissões</span>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <h3>Logs do Sistema</h3>
            <div style={{ fontSize: "2rem", color: "#1976d2", fontWeight: "bold" }}>
              {/* Valor dinâmico */}
              210
            </div>
            <span>Eventos registrados</span>
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

export default DashboardAdmin;