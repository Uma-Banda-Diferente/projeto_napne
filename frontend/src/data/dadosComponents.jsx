export const tipoDePerfil = [
    {
        nome: 'Professor',
        valor: 'professor'
    },
    {
        nome: 'Administrador',
        valor: 'administrador'
    }
];

export const inputLogin = [
    { 
        nome: 'Matrícula', 
        tipo: 'text',
        id: 'matricula_login' 
    },
    { 
        nome: 'Senha', 
        tipo: 'password',
        id: 'senha_login' 
    }
];

export const cadastroAluno = [
    { 
        nome: 'Nome', 
        tipo: 'text',
        id: 'nome_aluno' 
    },
    { 
        nome: 'Matrícula', 
        tipo: 'text',
        id: 'matricula_aluno' 
    },
    { 
        nome: 'Diagnóstico', 
        tipo: 'text',
        id: 'diagnostico_aluno' 
    },
    { 
        nome: 'Acompanhamento/Medicação', 
        tipo: 'text',
        id: 'acompanhamento_aluno' 
    },
    { 
        nome: 'Especificidades', 
        tipo: 'text',
        id: 'especificidades_aluno' 
    },
    { 
        nome: 'Recomendações', 
        tipo: 'text',
        id: 'recomendacoes_aluno' 
    },
    { 
        nome: 'Curso', 
        tipo: 'text',
        id: 'curso_aluno' 
    }
];

export const cadastroAlunoContinuacao = [
    { 
        nome: 'Nome do Responsável', 
        tipo: 'text',
        id: 'responsavel_aluno' 
    },
    {
        nome: 'Termo de Autorização',
        legenda: '+ Adicionar termo', 
        tipo: 'file',
        id: 'termo_aluno' 
    }
];

export const cadastroAlunoMaterial = [
    {
        nome: '',
        legenda: '+ Adicionar material', 
        tipo: 'file',
        id: 'material_aluno' 
    }
];

export const cadastroAlunoUltimoInput = [
    {
        nome: 'N° Processo',
        tipo: 'text',
        id: 'numero_processo_aluno'
    }
];

export const Campi = [
    {
        nome: 'Campus Cajazeiras',
        valor: 'campus_cajazeiras'
    },
    {
        nome: 'Campus Areias',
        valor: 'campus_areias'
    }
];

export const Ensino = [
    {
        nome: 'Ensino Fundamental Incompleto',
        valor: 'ensino_fundamental_inc',
    },
    {
        nome: 'Ensino Fundamental Completo',
        valor: 'ensino_fundamental_comp',
    },
    {
        nome: 'Ensino Médio Incompleto',
        valor: 'ensino_medio_inc',
    },
    {
        nome: 'Ensino Médio Completo',
        valor: 'ensino_medio_comp',
    },
    {
        nome: 'Ensino Superior Incompleto',
        valor: 'ensino_superior_inc',
    },
    {
        nome: 'Ensino Superior Completo',
        valor: 'ensino_superior_comp',
    }
];

export const cadastroInputProfessor = [
    {
        nome: 'Nome',
        tipo: 'text',
        id: 'nome_professor'
    }
];

export const cadastroInputProfessorContinuacao = [
    {
        nome: 'Matrícula',
        tipo: 'text',
        id: 'matricula_professor'
    },
    {
        nome: 'Senha',
        tipo: 'password',
        id: 'senha_professor'
    },
    {
        nome: 'Confirme Senha',
        tipo: 'password',
        id: 'senha_confirme_professor'
    }
];