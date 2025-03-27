function Toolbar({ inserText }) {
  return (
    <div className="toolbar">
      <p>Elementos markdown</p>

      <div className="buttons">
        <button onClick={() => inserText("# ", "")}>h1</button>
        <button onClick={() => inserText("## ", "")}>h2</button>
        <button onClick={() => inserText("### ", "")}>h3</button>
        <button onClick={() => inserText("#### ", "")}>h4</button>
        <button onClick={() => inserText("**", "**")}>Bold</button>
        <button onClick={() => inserText("*", "*")}>Itálico</button>
        <button onClick={() => inserText("~~", "~~")}>Riscado</button>
        <button onClick={() => inserText("> ", "")}>Citação</button>
        <button onClick={() => inserText("[", "](https://)")}>Link</button>
        <button onClick={() => inserText("`", "`")}>Inline Code</button>
        <button onClick={() => inserText("```", "```")}>Code Block</button>
        <button onClick={() => inserText("- ", "")}>List Item</button>
        <button onClick={() => inserText("1. ", "")}>Ordered List</button>
        <button onClick={() => inserText("\n---\n", "", false)}>
          Horizontal Line
        </button>
        <button onClick={() => inserText("![", "](https://)")}>Imagem</button>
        <button
          onClick={() =>
            inserText(
              "| Col1 | Col2 | Col3 |\n|------|------|------|\n| Val1 | Val2 | Val3 |\n",
              "",
              false
            )
          }
        >
          Tabela
        </button>
        <button
          onClick={() =>
            inserText(
              "<details>\n<summary>Detalhes</summary>\n\nTexto oculto\n\n</details>\n",
              "",
              false
            )
          }
        >
          Detalhes/Oculto
        </button>
        <button onClick={() => inserText("---\n> **Nota:** ", "")}>
          Nota/Destaque
        </button>
      </div>
    </div>
  );
}

export default Toolbar;