import React from "react";
import { Link } from "react-router-dom";
import Container from "@/components/Page/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="border rounded mb-8 p-4">
        <h3 className="mb-3">Navegação</h3>
        <Link to="/admin/alunos" className="block hover:underline">
          admin/alunos
        </Link>
        <Link to="/admin/turmas" className="block hover:underline">
          admin/turmas
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
