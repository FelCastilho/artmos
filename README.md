# 🌌 Artmos

> **Explorando mundos inexistentes, inspirando imaginações reais.**

Artmos é um projeto pessoal dedicado à criação de uma experiência visual sobre mundos fictícios utilizando o **SpaceEngine** como principal ferramenta de captura.

O projeto reúne planetas, sistemas estelares, wallpapers e artigos, formando um arquivo digital de exploração espacial fictícia.

---

## ✨ Objetivo

A proposta da Artmos é criar um ambiente onde cada planeta possua sua própria identidade visual, história e informações, transformando simples capturas em um catálogo de exploração.

O foco não é a precisão científica, mas sim despertar a imaginação através da astronomia fictícia.

---

# 🛠 Tecnologias

Atualmente o projeto utiliza:

- Astro
- HTML5
- CSS3
- JavaScript
- Google Fonts
- SpaceEngine

---

# 📁 Estrutura do projeto

```text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── header/
│   ├── hero/
│   ├── featured-world/
│   ├── planet-card/
│   ├── wallpapers/
│   ├── journal/
│   ├── about/
│   └── footer/
│
├── layouts/
│   └── MainLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── wallpapers/
│   ├── planets/
│   └── journal/
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── reset.css
│
└── content/
    ├── planets/
    └── posts/
```

---

# 🎨 Identidade Visual

## Cores

| Cor | Hex |
|------|------|
| Background | `#090B12` |
| Azul Principal | `#2C6DFD` |
| Verde Destaque | `#38C8B2` |
| Texto | `#F4F7FF` |
| Texto Secundário | `#969DAD` |

---

## Tipografia

### Títulos

**Oxygen Bold**

### Texto

**Inter Regular**

---

# 📚 Organização

Cada componente possui sua própria pasta contendo:

```text
component/
│
├── Component.astro
└── style.css
```

Exemplo:

```text
header/
│
├── Header.astro
└── style.css
```

Isso mantém HTML e CSS juntos, facilitando manutenção e reutilização.

---

# 🚀 Roadmap

## Versão 1.0

- [x] Estrutura inicial
- [x] Home
- [ ] Header responsivo
- [ ] Hero
- [ ] Destaque do planeta
- [ ] Catálogo
- [ ] Wallpapers
- [ ] Journal
- [ ] Footer

---

## Versão 1.5

- [ ] Página de planetas
- [ ] Sistema de categorias
- [ ] Busca
- [ ] Página Sobre

---

## Versão 2.0

- [ ] Content Collections
- [ ] Blog
- [ ] Wallpapers em download
- [ ] Modo escuro (caso exista modo claro)
- [ ] SEO completo

---

## Versão 3.0

- [ ] Internacionalização
- [ ] Favoritos
- [ ] Compartilhamento
- [ ] API própria

---

# 💡 Filosofia

A Artmos não pretende apenas mostrar imagens.

Cada mundo deve transmitir a sensação de descoberta.

A ideia é que o visitante sinta que está explorando um verdadeiro arquivo de uma agência espacial fictícia.

---

# 📖 Convenções do projeto

## Componentes

Sempre em PascalCase.

```text
Header.astro
Hero.astro
PlanetCard.astro
Footer.astro
```

---

## CSS

Cada componente possui seu próprio CSS.

```text
Header.astro
style.css
```

---

## Classes

Utilizar nomes descritivos.

Exemplo:

```css
.site-header
.header-inner
.hero-copy
.hero-actions
.featured-world
.planet-card
.footer-nav
```

Evitar abreviações.

---

# 📱 Responsividade

Breakpoints utilizados:

| Dispositivo | Largura |
|-------------|----------|
| Desktop | acima de 1000px |
| Tablet | até 1000px |
| Mobile | até 700px |
| Mobile pequeno | até 380px |

---

# 📷 Créditos

As imagens dos mundos são produzidas utilizando:

- SpaceEngine

As informações e descrições são desenvolvidas exclusivamente para o projeto Artmos.

---

# 📄 Licença

Este projeto é desenvolvido para fins pessoais e educacionais.

Todo o conteúdo visual, identidade e textos pertencem ao projeto Artmos.

---

<div align="center">

**Artmos**

*Explorando mundos inexistentes, inspirando imaginações reais.*

</div>