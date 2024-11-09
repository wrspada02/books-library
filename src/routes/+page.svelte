<script>
  import Template from "../components/Template.svelte";
  import { fade } from 'svelte/transition';

  const books = [
    {
      id: 1,
      name: 'O fim da infância', 
      cover_img: 'https://m.media-amazon.com/images/I/71aSbmu4MzL._AC_UF1000,1000_QL80_.jpg', 
      synopsis: "Childhood's End é um livro de ficção científica publicado em 1953 escrito pelo autor britânico Arthur C. Clarke. O enredo gira em torno de uma invasão alienígena pacífica da Terra que ocorre durante a Guerra Fria.", 
      year_pub: '1953',
      author: 'Arthur C. Clarke' 
    },
    {
      id: 2,
      name: 'Uma odisseia no espaço', 
      cover_img: 'https://m.media-amazon.com/images/I/61zLkd00iuL._AC_UF1000,1000_QL80_.jpg', 
      synopsis: 'Uma estrutura imponente preta fornece uma conexão entre o passado e o futuro nesta adaptação enigmática de um conto reverenciado de ficção científica do autor Arthur C. Clarke. Quando o Dr. Dave Bowman e outros astronautas são enviados para uma misteriosa missão, os chips de seus computadores começa…', 
      date_pub: '1968', 
      author: 'Arthur C. Clarke' 
    },
    {
      id: 3,
      name: 'O codificador limpo', 
      cover_img: 'https://m.media-amazon.com/images/I/91lBONZ4tAL._AC_UF1000,1000_QL80_.jpg', 
      synopsis: 'O Codificador Limpo contém muitos conselhos pragmáticos que visam transformar o comportamento do profissional de software. O autor transmite valiosos ensinamentos sobre ética, respeito, responsabilidade, sinceridade e comprometimento, através de sua experiência como programador.', 
      date_pub: '2011', 
      author: 'Uncle Bob' 
    },
  ];
</script>

<Template>
  <header class="flex items-center justify-between">
    <h1 class="text-4xl pb-10">Books list</h1>
    <nav>
      <a href="/book/create" class="border-1 border-blue-300 bg-blue-100 px-3 py-2">Criar livro</a>
    </nav>
  </header>
  <ul transition:fade class="flex items-start flex-wrap gap-10">
    {#each books as book}
      <li class="border-1 max-w-[200px]">
        <a href={`/book/${book.id}`}>
          <figure class="w-min">
            <img src={book.cover_img} class="mb-3 h-[200px] min-w-[130px] object-cover" alt="Cover book pic">
            <figcaption class="text-md">{book.name}</figcaption>
          </figure>
        </a>
      </li>
    {/each}
  </ul>
</Template>
